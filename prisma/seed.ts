import { PrismaClient } from '@prisma/client';
import bycrypt from 'bcryptjs';

const db = new PrismaClient();

const seed = async () => {
  const password = await bycrypt.hash('password', 12)

  // Create gigged user
  const giggedUser = await db.user.create({
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
};

seed();
