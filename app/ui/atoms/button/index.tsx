import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';

export enum ButtonColors {
  Primary,
  Text,
  EKyash,
}

interface ButtonProps {
  /**
   * Where to redirect the user to
   */
  href?: string;
  /**
   * The button's variant
   */
  variant: 'button' | 'submit' | 'link';
  /**
   * Is this the principal call to action on the page?
   */
  color?: ButtonColors;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;

  /**
   * A right aligned icon to display with your button
   */
  icon?: ReactNode;
}

const sizes = {
  small: 'text-xs px-2 py-2 md:px-[10px] px-2 py-2 md:py-[16px]',
  medium: 'text-sm px-2 py-3 md:px-[11px] px-2 py-3 md:py-5',
  large: 'text-base px-6 py-4 md:px-[12px] px-4 py-4 md:py-6',
};

const modes = {
  secondary: 'text-gray-900 bg-transparent shadow-md',
  ekyash: 'bg-[#39ae49] text-gray-100 hover:text-white hover:bg-[#2d8b3a]',
  primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
};
/**
 * Primary UI component for user interaction
 */
export const Button = ({
  color = ButtonColors.Primary,
  size = 'medium',
  label,
  variant = 'button',
  ...props
}: ButtonProps) => {
  if (variant === 'link' && typeof variant === 'undefined') {
    throw new Error('Button links required `href` to be defined.');
  }

  if (variant === 'link') {
    return (
      <a
        target="_blank"
        href={props.href}
        className={clsx(
          `inline-block cursor-pointer rounded-sm border-0 text-center font-bold leading-4 ${sizes[size]}`,
          {
            [modes.primary]: color === ButtonColors.Primary,
            [modes.secondary]: color === ButtonColors.Text,
            [modes.ekyash]: color === ButtonColors.EKyash,
          },
        )}
        rel="noreferrer"
      >
        {label}

        {props.icon ? <span className="ml-2">props.icon</span> : null}
      </a>
    );
  }

  return (
    <button
      type={variant}
      className={clsx(
        `inline-flex w-fit cursor-pointer flex-row items-center rounded-sm border-0 font-bold leading-4 ${sizes[size]}`,
        {
          [modes.primary]: color === ButtonColors.Primary,
          [modes.secondary]: color === ButtonColors.Text,
          [modes.ekyash]: color === ButtonColors.EKyash,
        },
      )}
      {...props}
    >
      {label}

      {props.icon ? <span className="ml-2">{props.icon}</span> : null}
    </button>
  );
};
