import { faker } from '@faker-js/faker';
import type { User } from '@prisma/client';
import { OrderStatus, PrismaClient } from '@prisma/client';
import axios from 'axios';
import bycrypt from 'bcryptjs';
import kebabCase from 'lodash/kebabCase';
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
        logoUrl: faker.image.avatar(),
        website: "https://gigged.bz",
      },
    });
  } catch (e) {
    giggedUser = await db.user.create({
      data: {
        businessName: 'GIGGED_TEST',
        email: faker.internet.email({ allowSpecialCharacters: true }),
        ekyash: undefined,
        username: nanoid(),
        password,
        tag: 'GIGGED TEST',
        logoUrl: faker.image.avatar(),
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
    await Promise.all(Array.from(Array(50).keys()).map(async () => {
      let productImageUrl = faker.image.urlLoremFlickr({ category: "product" })
      const productName = faker.commerce.productName();
      try {
        const productURLResponse = await axios.get(productImageUrl, { responseType: 'arraybuffer' });
        productImageUrl = productURLResponse.request.res.responseUrl
       } catch (error) {
        productImageUrl = faker.image.urlLoremFlickr({ category: "product" })
      }
      const product = await db.product.create({
        data: {
          coverImage: productImageUrl,
          thumbnailImage: productImageUrl,
          description: faker.commerce.productDescription(),
          name: productName,
          price: Number(faker.commerce.price({ min: 10_000, max:100_000})),
          publicUrl: `${kebabCase(productName)}-${nanoid(4)}`,
          published: Math.ceil(Math.random() * 10) > 5,
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
    }))
  }

  const createPendingOrdersForUser = async (user: User) => {
    const products = await db.product.findMany({
      where: {
        userId: user.id
      }
    })

    return await Promise.all(products.map(async (p) => {
      await db.order.create({
        data: {
          additionalData: {
            paymentKey: nanoid(),
          },
          amount: p.price,
          description: p.description,
          currency: p.currency,
          status: OrderStatus.Pending,
          invoice: nanoid(),
          orderItems: {
            create: {
              name: p.name,
              price: p.price,
              currency: p.currency,
              description: p.description,
              quantity: 1,
            }
          },
          userId: user.id
        }
      })
    }))
  }

  const createPendingGiggedOrdersForGiggedUser = async (user: User) => {
    const products = await db.product.findMany({
      where: {
        userId: user.id
      }
    })

    return await Promise.all(products.map(async (p) => {
      await db.order.create({
        data: {
          additionalData: {
            gateway: nanoid(),
            hashkey: nanoid(),
            paymentKey: nanoid(),
          },
          amount: p.price,
          description: p.description,
          currency: p.currency,
          status: OrderStatus.Pending,
          invoice: nanoid(),
          orderItems: {
            create: {
              name: p.name,
              price: p.price,
              currency: p.currency,
              description: p.description,
              quantity: 1,
            }
          },
          userId: user.id
        }
      })
    }))
  }


  // Create GiggedUser with their product
  await createProductsForUser(giggedUser);
  await createPendingOrdersForUser(giggedUser);
  await createPendingGiggedOrdersForGiggedUser(giggedUser)

  // Create fake business
  const createUser = async (index: number) => {
    const businessName = faker.company.buzzNoun();
    const productURLResponse = await axios.get(faker.image.urlLoremFlickr({ category: "business" }), { responseType: 'arraybuffer' });

    const newUser = await db.user.create({
      data: {
        businessName,
        email: `business-${index}${nanoid(2)}@krabuu.com`,
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
        phone: faker.phone.number(),
        sid: 2324518403,
        pinEncoded: `${nanoid(3)}-44c80bbde592aed7e2138b67ec71e94a5a22d39bc36d66c3373c1ea33013d396`,
        pinHash: `${nanoid(3)}-8d4fd24a970f49292076bf74df011e9f8d0e7850273666fcf4db458f1ee2d461`,
        userId: newUser.id!
      },
    });

    return newUser;
  }

  // populate with products
  await Promise.all(
    Array.from(Array(5).keys()).map(async (_, index) => {
      const user = await createUser(index);
      await createProductsForUser(user);
      await createPendingOrdersForUser(user);
    })
  )
};

seed();
