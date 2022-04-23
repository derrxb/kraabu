import clsx from "clsx";
import React from "react";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
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
  small: "font-xs px-[10px] py-[16px]",
  medium: "font-sm px-[11px] py-[20px]",
  large: "font-base px-[12px] py-[24px]",
};

const modes = {
  primary: "text-white bg-blue-600",
  secondary: "text-gray-900 bg-transparent shadow-md",
};
/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        `inline-block cursor-pointer rounded-sm border-0 font-bold leading-4 ${sizes[size]}`,
        {
          [modes.primary]: primary,
          [modes.secondary]: !primary,
        }
      )}
      {...props}
    >
      {label}
    </button>
  );
};
