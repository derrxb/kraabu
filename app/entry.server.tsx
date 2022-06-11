import { renderToString } from 'react-dom/server';
import type { EntryContext } from 'remix';
import { RemixServer } from 'remix';
import { mswServer } from './mocks/server';

if (process.env.NODE_ENV === 'development') {
  mswServer.listen({ onUnhandledRequest: 'error' });
}

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const markup = renderToString(<RemixServer context={remixContext} url={request.url} />);

  responseHeaders.set('Content-Type', 'text/html');

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
