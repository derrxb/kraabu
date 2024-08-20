import pino from 'pino';
import pinoPretty from 'pino-pretty';
import logtail from '@logtail/pino';

const token = process.env.BETTER_STACK_LOGS;
let logTail;
if (process.env.NODE_ENV === 'production') {
  logTail = await logtail({ sourceToken: token!, options: {} });
}

export const logger = pino(
  { base: null },
  process.env.NODE_ENV === 'production' ? logTail : pinoPretty({ sync: true }),
);
