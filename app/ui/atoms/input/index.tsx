import { Label } from '@radix-ui/react-label';
import clsx from 'clsx';
import type { InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & { label: string; name: string; isFullWidth?: boolean };

export const Input = ({ label, name, isFullWidth = false, ...props }: InputProps) => {
  return (
    <div>
      <Label htmlFor={name} className="flex flex-col text-sm text-gray-500">
        {label}
      </Label>

      <input
        {...props}
        id={name}
        name={name}
        className={clsx(
          'mt-1 rounded-sm border-0 px-4 py-2 text-base text-gray-900 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500',
          {
            'w-full': isFullWidth,
            'w-fit': !isFullWidth,
          },
          props.className,
        )}
      />
    </div>
  );
};
