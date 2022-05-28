import { ChevronRightIcon } from '@heroicons/react/solid';
import React from 'react';
import heroMain from '~/assets/images/hero-home.png';
import { Button, ButtonColors } from '~/ui/atoms/button';
import { Tag, TagAppearance } from '~/ui/atoms/tag';
import { List } from '~/ui/molecules/list';
import { ListItemAppearance } from '~/ui/molecules/list-item';

export const HeroFold = () => {
  return (
    <div className="md:12  flex h-[100vh] w-full flex-col px-4  md:flex-row lg:px-24">
      <div className=" order-2 flex flex-col justify-center space-y-4 md:order-1 md:w-1/2 ">
        <Tag appearance={TagAppearance.Gray}>Coming Soon</Tag>

        <h1 className="text-3xl font-extrabold text-primary-3 md:text-4xl lg:text-5xl">
          Sell anything online in Belize, <span className="text-primary-1">without the hassle</span>
        </h1>

        <p className="text-xl leading-10 text-primary-4">
          Create a link, accept payment with Belize’s E-Wallets, get paid. It’s that easy! We’re the easiest, fastest,
          and most secure way to sell anything online in Belize.
        </p>

        <Button
          size="small"
          variant="button"
          label="Join waitlist - it's free"
          color={ButtonColors.Primary}
          icon={<ChevronRightIcon className="h-4 w-4" />}
        />

        <List
          appearance={ListItemAppearance.Secondary}
          items={['No credit card required', 'No time limit on free plan']}
        />
      </div>

      <div className="order-1 flex flex-col items-center justify-center md:order-2 md:w-1/2">
        <img src={heroMain} alt="hero-main" className="mb-12 h-[280px] w-[280px] lg:h-[400px] lg:w-[420px]" />
      </div>
    </div>
  );
};
