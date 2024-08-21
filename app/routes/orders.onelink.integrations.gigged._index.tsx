import type { ActionFunctionArgs, LoaderFunctionArgs, MetaFunction } from '@vercel/remix';
import { redirect, typedjson, useTypedLoaderData } from 'remix-typedjson';
import { UserRepository } from '~/domain/orders/repositories/user-repository';
import { GIGGED_USERNAME } from '~/domain/orders/services/ekaysh/integrations/gigged';
import GetOneLinkOrder from '~/domain/orders/services/ekaysh/integrations/gigged/get-one-link-order.server';
import { MakePayment } from '~/domain/orders/services/one-link/make-payment';
import { getFormattedFailureResponse } from '~/presentation/representers/http-response-failure';
import { HTTP_CODE } from '~/presentation/representers/http-response-representer';
import { PaymentMethod, PendingPayment } from '~/ui/organisms/pending-payment';

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return [
      {
        title: 'Complete your order payment online via OneLink | Powered by Krabuu',
      },
      {
        name: 'description',
        content: 'Fill out the form below to make payment with your Credit Card',
      },
    ];
  }

  return [
    {
      title: `Complete your ${data.order?.user?.businessName} Order's Payment | Powered by Krabuu`,
    },
    {
      name: 'description',
      content: 'Fill out the form below to make payment with your Credit Card',
    },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    const order = await new GetOneLinkOrder(request).call();

    return typedjson({ order: order?.json() }, HTTP_CODE.ok);
  } catch (e) {
    console.log(e);
    throw getFormattedFailureResponse(e, request);
  }
};

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const order = await new MakePayment(request, (await UserRepository.findUserByUsername(GIGGED_USERNAME))!).call();
    // We know it's a change in status. Which one? Idk, let's go here to find out
    throw redirect(`/orders/onelink/integrations/gigged/${order?.invoice}`);
  } catch (error) {
    console.log({ error });
    return getFormattedFailureResponse(error, request);
  }
};

export default function Index() {
  const data = useTypedLoaderData<typeof loader>();
  return <PendingPayment order={data?.order!} hasOrderItemsDisplayed={false} paymentMethod={PaymentMethod.OneLink} />;
}
