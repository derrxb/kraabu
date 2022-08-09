import type { UserEntity } from '../entities/user';

/**
 * Returns a product given its ID.
 */
export class GetProduct {
  private request: Request;

  constructor(request: Request, user: UserEntity) {
    this.request = request;
  }

  async verifyRequestData() {}
  async call() {}
}
