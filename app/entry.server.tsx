import { setupServer } from 'msw/node';
import { renderToString } from 'react-dom/server';
import type { EntryContext } from 'remix';
import { RemixServer } from 'remix';
import { handlers } from '../mocks/handlers';

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  const mswServer = setupServer(...handlers);
  mswServer.listen({ onUnhandledRequest: 'bypass' });
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
