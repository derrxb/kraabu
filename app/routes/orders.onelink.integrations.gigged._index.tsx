import { useNavigate } from '@remix-run/react';
import type { ActionFunctionArgs, LoaderFunctionArgs, MetaFunction } from '@vercel/remix';
import axios from 'axios';
import { useEffect } from 'react';
import { typedjson, useTypedLoaderData } from 'remix-typedjson';
import { OrderDTO, OrderStatus } from '~/domain/orders/entities/order';
import { setIntervalAsync } from '~/domain/orders/library/async-internval';
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
    return typedjson({ order: order?.json() }, HTTP_CODE.ok);
  } catch (error) {
    console.log({ error });
    return getFormattedFailureResponse(error, request);
  }
};

export default function Index() {
  const data = useTypedLoaderData<typeof loader>();

  const navigate = useNavigate();
  useEffect(() => {
    const timer: NodeJS.Timeout | null = null;

    setIntervalAsync(
      timer,
      async () => {
        const result = await axios.get(`/orders/onelink/${data.order?.invoice}/status`);
        const resultData = result.data as OrderDTO;

        if (resultData?.status === OrderStatus.Completed || resultData?.status === OrderStatus.Failed) {
          navigate(`/orders/onelink/integrations/gigged/${resultData.invoice}`, {
            replace: true,
          });
        }
      },
      1500,
    );

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [data.order?.invoice, navigate]);

  return <PendingPayment order={data?.order!} hasOrderItemsDisplayed={false} paymentMethod={PaymentMethod.OneLink} />;
}
