import { installGlobals } from '@remix-run/node/globals';
import { mswServer } from '~/mocks/server';

installGlobals();

mswServer.listen({ onUnhandledRequest: 'warn' });
