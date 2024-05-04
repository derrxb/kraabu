import { OneLink as OneLinkORM } from '@prisma/client';

export class OneLinkEntity
  implements Pick<OneLinkORM, 'id' | 'accessToken' | 'createdAt' | 'phone' | 'salt' | 'updatedAt' | 'userId'>
{
  id: OneLinkORM['id'];
  accessToken: OneLinkORM['accessToken'];
  createdAt: OneLinkORM['createdAt'];
  phone: OneLinkORM['phone'];
  salt: OneLinkORM['salt'];
  updatedAt: OneLinkORM['updatedAt'];
  userId: OneLinkORM['userId'];

  constructor(props: OneLinkORM) {
    this.id = props.id;
    this.accessToken = props.accessToken;
    this.createdAt = props.createdAt;
    this.phone = props.phone;
    this.salt = props.salt;
    this.updatedAt = props.updatedAt;
    this.userId = props.userId;
  }

  isValid() {
    return this.accessToken && this.salt;
  }

  json() {
    return {
      id: this.id,
      phone: this.phone,
    };
  }
}

export type OneLinkDTO = Pick<OneLinkEntity, 'id' | 'phone'>;
