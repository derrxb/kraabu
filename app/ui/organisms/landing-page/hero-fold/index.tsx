import { ChevronRightIcon } from '@heroicons/react/solid';
import React from 'react';
import heroMain from '~/assets/images/hero-home.png';
import { Button, ButtonColors } from '~/ui/atoms/button';
import { Heading } from '~/ui/atoms/heading';
import { Tag, TagAppearance } from '~/ui/atoms/tag';
import { FadeInOutItems } from '~/ui/molecules/fade-in-out-items';
import { List } from '~/ui/molecules/list';
import { ListItemAppearance } from '~/ui/molecules/list-item';

export const HeroFold = () => {
  return (
    <div className="flex h-[100vh] w-full flex-col px-4 md:h-[80vh]  md:flex-row lg:px-24">
      <div className=" order-2 flex flex-col justify-center space-y-4 md:order-1 md:w-1/2 ">
        <Tag appearance={TagAppearance.Gray}>Coming Soon</Tag>

        <Heading variant="h1">
          Sell anything online in Belize,{' '}
          <span key={1} className="text-primary-1">
            without the
          </span>{' '}
          <FadeInOutItems
            messages={[
              <span key={1} className="text-primary-1">
                hassle.
              </span>,
              <span key={2} className="text-primary-1">
                scams.
              </span>,
            ]}
          />
        </Heading>

        <p className="text-lg leading-10 text-primary-4 md:text-xl">
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
        <img src={heroMain} alt="hero-main" className="mb-12 h-[280px] w-[280px] lg:h-[285px] lg:w-[380px]" />
      </div>
    </div>
  );
};
