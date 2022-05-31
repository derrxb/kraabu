import clsx from 'clsx';
import type { ReactNode } from 'react';

export enum HeadingVariant {
  H1,
  H2,
}

export enum HeadingAppearance {
  Primary,
  Secondary,
  UnStyled,
}

export type HeadingProps = {
  children: ReactNode | string;
  variant: HeadingVariant;
  appearance?: HeadingAppearance;
  className?: string;
};

export const Heading = ({ children, appearance = HeadingAppearance.Primary, variant, className }: HeadingProps) => {
  return (
    <h1
      className={clsx(
        ' font-extrabold ',
        {
          'text-primary-3': HeadingAppearance.Primary === appearance,
          'text-primary-2': HeadingAppearance.Secondary === appearance,
          'text-3xl md:text-4xl lg:text-5xl': HeadingVariant.H1 === variant,
          'text-2xl md:text-3xl lg:text-4xl': HeadingVariant.H2 === variant,
        },
        className,
      )}
    >
      {children}
    </h1>
  );
};