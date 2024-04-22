import type { MetaFunction } from '@vercel/remix';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import '~/assets/styles/app.css';

export const meta: MetaFunction = () => {
  return [{ title: 'Krabuu | Accept Payments in Belize Online' }];
};

export default function App() {
  return (
    <html lang="en" className="h-full w-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>

      <body className="h-full w-full">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
