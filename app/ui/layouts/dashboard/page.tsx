import type { ReactNode } from 'react';

export const Page = ({ children }: { children: ReactNode }) => {
  return <div className="h-full w-full bg-slate-50 px-8 md:px-16">{children}</div>;
};
