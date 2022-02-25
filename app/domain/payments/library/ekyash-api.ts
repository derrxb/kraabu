/**
 * Builds & returns a JWT token for calls to E-kyash's API.
 * @returns
 */
const getEKyashJWTToken = async (): Promise<string> => {
  return "";
};

type AuthorizationResponse = {
  Session: string;
  firstName?: string;
  lastName?: string;
  Settings?: any;
};

/**
 * Request a session key from E-Kyash's API in order to authorize requests.
 * @returns
 */
const getSessionId = async (): Promise<AuthorizationResponse> => {
  return {
    Session: "",
  };
};

/**
 * Creates an invoice for users with a specified amount in Belize Dollars.
 */
const createNewInvoice = async () => {};

export { getEKyashJWTToken, getSessionId };
