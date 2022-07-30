import clsx from 'clsx';
import type { InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={clsx(
        'rounded-md px-4 py-2 text-base ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500',
        props.className,
      )}
    />
  );
};
