import '~/assets/styles/app.css';
import type { MetaFunction } from '@vercel/remix';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { TooltipProvider } from './ui/atoms/tooltip';

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>
      </head>

      <body className="h-full w-full font-sans flex min-h-screen flex-col bg-muted/40">
        <TooltipProvider>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
        </TooltipProvider>
      </body>
    </html>
  );
}
