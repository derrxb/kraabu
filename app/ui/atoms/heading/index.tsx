import type { ReactNode } from 'react';

export type HeadingProps = {
  children: ReactNode | string;
  variant: 'h1';
};

export const Heading = ({ children }: HeadingProps) => {
  return <h1 className="text-3xl font-extrabold text-primary-3 md:text-4xl lg:text-5xl">{children}</h1>;
};
