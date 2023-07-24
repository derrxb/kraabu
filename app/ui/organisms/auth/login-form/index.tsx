import { Form } from '@remix-run/react';
import clsx from 'clsx';
import { Button } from '~/ui/atoms/button';
import { InputField } from '~/ui/atoms/input-field';

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
    <Form method="POST" action="/login" className={clsx('mx-auto flex w-full flex-col md:w-[480px]', props.className)}>
      {props.errors?.general ? <span className="text-red-500">{props.errors.general?.toString()}</span> : null}

      <InputField
        disabled={props.isSubmitting}
        isFullWidth
        name="email"
        label="Email"
        type="text"
        defaultValue={props.initialValues?.email}
      />
      <InputField
        autoComplete="current-password"
        isFullWidth
        name="password"
        label="Password"
        type="password"
        defaultValue={props.initialValues?.password}
        disabled={props.isSubmitting}
      />

      <Button disabled={props.isSubmitting} isFullWidth variant="submit" size="medium">
        Continue
      </Button>
    </Form>
  );
};
