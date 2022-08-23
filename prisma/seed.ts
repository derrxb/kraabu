import faker from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
import bycrypt from 'bcryptjs';
import { nanoid } from 'nanoid';

const db = new PrismaClient();

const seed = async () => {
  const password = await bycrypt.hash('password', 12)

  // Create gigged user
  let giggedUser;

  try {
    giggedUser = await db.user.create({
      data: {
        businessName: 'GIGGED_TEST',
        email: 'admin@gigged.bz',
        ekyash: undefined,
        username: "giggedbz",
        password,
        tag: 'GIGGED TEST',
        logoUrl: "https://giggedbz.arcadier.io/images/logo-giggedbz.arcadier.io.png?id=7bbb7abc-f85f-4a58-bb43-2b4b3ab479f1",
        website: "https://gigged.bz",
      },
    });
  } catch (e) {
    giggedUser = await db.user.create({
      data: {
        businessName: 'GIGGED_TEST',
        email: faker.internet.email(),
        ekyash: undefined,
        username: nanoid(),
        password,
        tag: 'GIGGED TEST',
        logoUrl: "https://giggedbz.arcadier.io/images/logo-giggedbz.arcadier.io.png?id=7bbb7abc-f85f-4a58-bb43-2b4b3ab479f1",
        website: "https://gigged.bz",
      },
    });
  }

  // Create gigged staging ekyash credentials
  await db.ekyash.create({
    data: {
      apiKey: 'APPKEY17-07A8-4BAF-AA0F-B1568C5017A3',
      phone: '5016376574',
      sid: 2324518403,
      pinEncoded: '44c80bbde592aed7e2138b67ec71e94a5a22d39bc36d66c3373c1ea33013d396',
      pinHash: '8d4fd24a970f49292076bf74df011e9f8d0e7850273666fcf4db458f1ee2d461',
      userId: giggedUser.id,
    },
  });

  // Create Products
  for (let i = 0; i < 10; i++) {
    const product = await db.product.create({
      data: {
        coverImage:
          'https://images.unsplash.com/photo-1569770218135-bea267ed7e84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
        thumbnailImage:
          'https://images.unsplash.com/photo-1569770218135-bea267ed7e84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
        currency: 'BZD', // $500 BZD,
        description: faker.commerce.productDescription(),
        name: faker.commerce.product(),
        price: Number(faker.commerce.price(10000, 100000)),
        publicUrl: 'used-macbook-pro',
        published: true,
        userId: giggedUser.id,
      }
    });

    await db.paymentLink.create({
      data: {
        url: nanoid(),
        productId: product.id,
        status: "Pending"
      }
    })
  }
};

seed();
