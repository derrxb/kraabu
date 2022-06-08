import Rollbar from 'rollbar';

const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_ACCESS_TOKEN as string,
  // Setting the captureUncaught option to true will register Rollbar as a handler for any uncaught exceptions in your Node process.
  captureUncaught: true,
  // Similarly, setting the captureUnhandledRejections option to true will register Rollbar as a handler for any unhandled Promise rejections in your Node process.
  captureUnhandledRejections: true,
});

/**
 * Server logging that uses Rollbar in production, console.log in dev, and console.warn in tests.
 * @param args
 */
const getLogger =
  (type: 'error' | 'log') =>
  (...args: Rollbar.LogArgument[]) => {
    if (process.env.NODE_ENV === 'production') {
      rollbar?.[type](args);
    } else if (process.env.NODE_ENV === 'development') {
      console.log(args);
    } else {
      console.warn(args);
    }
  };

const logError = getLogger('error');
const logger = getLogger('log');

export { logError, logger };
