import React from 'react';
import heroSecurity from '~/assets/images/hero-security.png';
import walletDigi from '~/assets/images/wallets/digiwallet.png';
import walletEKyash from '~/assets/images/wallets/ekyash.png';
import { Heading } from '~/ui/atoms/heading';

/**
 * Hero describing how easy it is to sell anything online.
 */
export const HeroSecurity = () => {
  return (
    <div className="flex h-fit w-full flex-col items-center px-4 py-12 md:flex-row lg:px-24">
      <div className="flex flex-col justify-center space-y-8 md:w-1/2">
        <Heading variant="h1">
          Your money’s safety is our{' '}
          <span key={1} className="text-primary-2">
            #1 priority!
          </span>
        </Heading>

        <p className="text-lg leading-10 text-primary-4 md:text-xl">
          Designed to weed out scammers and keep your money safe. Payments are accepted across all E-wallets in Belize.
        </p>

        <div className="flex flex-row items-center space-x-8">
          <img src={walletEKyash} alt="ekyash wallet" className="h-8 w-32" />
          <img src={walletDigi} alt="digiwallet" className="h-8 w-32" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center md:w-1/2">
        <img src={heroSecurity} alt="hero-business" className="mb-12" />
      </div>
    </div>
  );
};
