import { ChevronRightIcon } from '@heroicons/react/solid';
import React from 'react';
import heroMain from '~/assets/images/hero-home.png';
import { Button, ButtonColors } from '~/ui/atoms/button';
import { Tag, TagAppearance } from '~/ui/atoms/tag';
import { ListItem, ListItemAppearance } from '~/ui/molecules/list-item';

export const HeroFold = () => {
  return (
    <div className="flex h-[100vh] w-full flex-row px-4 md:px-24">
      <div className=" flex w-1/2 flex-col justify-center space-y-4">
        <Tag appearance={TagAppearance.Gray}>Coming Soon</Tag>

        <h1 className="text-5xl font-extrabold text-primary-3">
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

        <ul className="mt-4 flex flex-col space-y-2">
          <ListItem appearance={ListItemAppearance.Secondary}>No credit card required</ListItem>
          <ListItem appearance={ListItemAppearance.Secondary}>No time limit on free plan</ListItem>
        </ul>
      </div>

      <div className="flex w-1/2 items-center justify-center">
        <img src={heroMain} alt="hero-main" className="mb-12 h-[400px] w-[420px]" />
      </div>
    </div>
  );
};
