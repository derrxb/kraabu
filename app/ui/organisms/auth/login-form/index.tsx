import { Form } from '@remix-run/react';
import clsx from 'clsx';
import { Button } from '~/ui/atoms/button';
import { Input } from '~/ui/atoms/input';

export type LoginFormProps = {
  className?: string;
  isSubmitting?: boolean;
  initialValues?: {
    email?: string;
    password?: string;
  };
  errors?: {
    [key: string]: string;
  };
};

export const LoginForm = (props: LoginFormProps) => {
  return (
    <Form method="post" action="/login" className={clsx('mx-auto flex w-full flex-col  md:w-[480px]', props.className)}>
      {props.errors?.general ? <span className="text-red-500">{props.errors.general?.toString()}</span> : null}

      <fieldset disabled={props.isSubmitting} className="mb-8 space-y-4">
        <Input isFullWidth name="email" label="Email" type="text" defaultValue={props.initialValues?.email} />
        <Input
          autoComplete="current-password"
          isFullWidth
          name="password"
          label="Password"
          type="password"
          defaultValue={props.initialValues?.password}
        />
      </fieldset>

      <Button disabled={props.isSubmitting} isFullWidth variant="submit" size="medium">
        Continue
      </Button>
    </Form>
  );
};
