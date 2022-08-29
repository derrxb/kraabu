import type { ReactNode } from 'react';

export const Page = ({ children }: { children: ReactNode }) => {
  return <div className="h-full w-full bg-slate-50 px-4 py-4 md:px-8">{children}</div>;
};
