import React from 'react';
import heroRemembered from '~/assets/images/hero-remembered.png';
import { Heading } from '~/ui/atoms/heading';

/**
 * Hero describing how easy it is to sell anything online.
 */
export const HeroRemembered = () => {
  return (
    <div className="flex h-fit w-full flex-col items-center px-4 py-12 md:flex-row lg:px-24">
      <div className="flex flex-col items-center justify-center md:w-1/2">
        <img src={heroRemembered} alt="hero-business" />
      </div>

      <div className="flex flex-col justify-center space-y-4  md:w-1/2 ">
        <Heading variant="h1">
          Let your brand be
          <span key={1} className="text-primary-2">
            {' '}
            remembered
          </span>
        </Heading>

        <p className="text-lg leading-10 text-primary-4 md:text-xl">
          Krabuu increases your brand awareness and customer loyalty. Customers see you when they are buying something.
        </p>

        <p className="text-lg leading-10 text-primary-4 md:text-xl">
          We make it easy to customize the checkout experience with your own business logo, colors, and Krabuu domain.
        </p>
      </div>
    </div>
  );
};
