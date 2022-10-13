import faker from '@faker-js/faker';
import type { User } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import axios from 'axios';
import bycrypt from 'bcryptjs';
import { kebabCase } from 'lodash';
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
        logoUrl: faker.image.unsplash.avatar(),
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
        logoUrl: faker.image.unsplash.avatar(),
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
  const createProductsForUser = async (user: User) => {
    for (let i = 0; i < 25; i++) {
      const productName = faker.commerce.productName();
      const productImage = faker.image.unsplash.technology(undefined, undefined, "product");
      const productURLResponse = await axios.get(productImage, { responseType: 'arraybuffer' });
      const product = await db.product.create({
        data: {
          coverImage: productURLResponse.request.res.responseUrl,
          thumbnailImage: productURLResponse.request.res.responseUrl,
          description: faker.commerce.productDescription(),
          name: productName,
          price: Number(faker.commerce.price(10000, 100000)),
          publicUrl: `${kebabCase(productName)}-${nanoid(4)}`,
          published: true,
          userId: user.id!
        }
      });

      await db.paymentLink.create({
        data: {
          url: `${product.publicUrl}-${nanoid(3)}`,
          productId: product.id,
          status: "Pending"
        }
      })
    }
  }


  // Create GiggedUser with their product
  await createProductsForUser(giggedUser);

  // Create fake business
  const createUser = async (index: number) => {
    const businessName = faker.company.companyName();
    const productURLResponse = await axios.get(faker.image.unsplash.imageUrl(undefined, undefined, "business logo"), { responseType: 'arraybuffer' });

    const newUser = await db.user.create({
      data: {
        businessName,
        email: `business-${index}@krabuu.com`,
        ekyash: undefined,
        username: businessName.toLowerCase() + nanoid(3),
        password,
        tag: faker.company.catchPhrase(),
        logoUrl: productURLResponse.request.res.responseUrl,
        website: faker.internet.url()
      },
    });

    await db.ekyash.create({
      data: {
        apiKey: `${nanoid(3)}-APPKEY17-07A8-4BAF-AA0F-B1568C5017A3`,
        phone: faker.phone.phoneNumber(),
        sid: 2324518403,
        pinEncoded: `${nanoid(3)}-44c80bbde592aed7e2138b67ec71e94a5a22d39bc36d66c3373c1ea33013d396`,
        pinHash: `${nanoid(3)}-8d4fd24a970f49292076bf74df011e9f8d0e7850273666fcf4db458f1ee2d461`,
        userId: newUser.id!
      },
    });

    return newUser;
  }

  // populate with products
  for (let i = 0; i < 5; i++) {
    const user = await createUser(i);
    await createProductsForUser(user);
  }



};

seed();
