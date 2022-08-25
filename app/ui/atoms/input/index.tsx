import { Label } from '@radix-ui/react-label';
import clsx from 'clsx';
import type { InputHTMLAttributes } from 'react';
import { ValidationMessage } from '../input-validation-message';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  isFullWidth?: boolean;
  errorMessage?: string;
  wrapperClassName?: string;
  labelClassName?: string;
};

export const Input = ({
  label,
  name,
  isFullWidth = false,
  readOnly = false,
  errorMessage,
  wrapperClassName,
  labelClassName,
  ...props
}: InputProps) => {
  return (
    <fieldset
      disabled={readOnly}
      className={clsx('flex flex-col', wrapperClassName, {
        'pb-4': !errorMessage,
        'pb-2': errorMessage,
      })}
    >
      <Label htmlFor={name} className={clsx('flex flex-col pb-2 text-sm text-gray-500', labelClassName)}>
        {label}
      </Label>

      <input
        {...props}
        readOnly={readOnly}
        id={name}
        name={name}
        className={clsx(
          'mt-1 rounded-sm border-0 px-4 py-2 text-base text-gray-900 ring-2 focus:outline-none focus:ring-2',
          {
            'w-full': isFullWidth,
            'w-fit': !isFullWidth,
            'ring-gray-300 focus:ring-indigo-500': !errorMessage,
            'pb-2 ring-red-600': !!errorMessage,
          },
          props.className,
        )}
      />

      <ValidationMessage errorMessage={errorMessage} isSubmitting={!!props.disabled} />
    </fieldset>
  );
};
