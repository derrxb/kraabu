import clsx from 'clsx';
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
}

const sizes = {
  small: 'font-xs px-[10px] py-[16px]',
  medium: 'font-sm px-[11px] py-[20px]',
  large: 'font-base px-[12px] py-[24px]',
};

const modes = {
  primary: 'text-white bg-blue-600',
  secondary: 'text-gray-900 bg-transparent shadow-md',
  ekyash: 'bg-[#39ae49] text-gray-100 hover:text-white hover:bg-[#2d8b3a]',
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
      </a>
    );
  }

  return (
    <button
      type="button"
      className={clsx(`inline-block cursor-pointer rounded-sm border-0 font-bold leading-4 ${sizes[size]}`, {
        [modes.primary]: color === ButtonColors.Primary,
        [modes.secondary]: color === ButtonColors.Text,
        [modes.ekyash]: color === ButtonColors.EKyash,
      })}
      {...props}
    >
      {label}
    </button>
  );
};
