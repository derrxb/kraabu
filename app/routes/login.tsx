import type { ActionArgs, LoaderArgs, MetaFunction } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { useActionData, useTransition } from '@remix-run/react';
import { ValidationError } from 'joi';
import { AuthorizationError } from 'remix-auth';
import { authenticator } from '~/auth.server';
import { getErrorMessage } from '~/lib/error-messages';
import { commitSession, getSession } from '~/session.server';
import { Heading, HeadingAppearance, HeadingVariant } from '~/ui/atoms/heading';
import { SiteNav } from '~/ui/molecules/site-nav';
import { LoginForm } from '~/ui/organisms/auth/login-form';

const getValuesFromRequest = async (request: Request) => {
  const formData = await request.formData();
  const values = Object.fromEntries(formData);

  return values;
};

export const meta: MetaFunction = () => {
  return {
    title: 'Sign in to your Krabuu Account',
    description: 'Sign in to your account to manage your products & see your completed orders.',
  };
};

export let loader = async ({ request }: LoaderArgs) => {
  return await authenticator.isAuthenticated(request, {
    successRedirect: '/',
  });
};

export const action = async ({ request }: ActionArgs) => {
  try {
    const user = await authenticator.authenticate('user-pass', request, {
      throwOnError: true,
    });

    // manually get the session
    let session = await getSession(request.headers.get('cookie'));
    // and store the user data
    session.set(authenticator.sessionKey, user);

    // commit the session
    let headers = new Headers({ 'Set-Cookie': await commitSession(session) });

    return redirect('/dashboard', { headers });
  } catch (error) {
    // Because redirects work by throwing a Response, you need to check if the
    // caught error is a response and return it or throw it again
    if (error instanceof Response) throw error;
    if (error instanceof ValidationError) {
      return json({
        values: await getValuesFromRequest(request),
        errors: error.details.reduce((acc, curr) => {
          return {
            ...acc,
            [curr.type]: curr.message,
          };
        }, {}),
      });
    }
    if (error instanceof AuthorizationError) {
      return json({
        values: await getValuesFromRequest(request),
        errors: {
          general: getErrorMessage(error),
        },
      });
    }

    return json({
      values: await getValuesFromRequest(request),
      errors: {
        general: getErrorMessage(error),
      },
    });
  }
};

const Login = () => {
  const transition = useTransition();
  const actionData = useActionData<typeof action>();

  return (
    <div className="h-full w-full px-8 md:px-32">
      <SiteNav />

      <div className="my-32 flex flex-col items-center space-y-4">
        <Heading appearance={HeadingAppearance.Primary} variant={HeadingVariant.H4}>
          Log into your Krabuu account
        </Heading>

        <LoginForm
          isSubmitting={transition.state === 'submitting'}
          errors={actionData?.errors}
          initialValues={{
            email: actionData?.values?.email?.toString() ?? '',
            password: actionData?.values?.password?.toString() ?? '',
          }}
        />
      </div>
    </div>
  );
};

export default Login;
