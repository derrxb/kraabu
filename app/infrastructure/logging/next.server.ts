import pinoConstructor from 'pino';

const token = process.env.BETTER_STACK_LOGS;
const transport = pinoConstructor.transport({
  target: process.env.NODE_ENV !== 'production' ? 'pino-pretty' : '@logtail/pino',
  options: {
    sourceToken: token,
  },
});

export const logger = pinoConstructor(transport);
