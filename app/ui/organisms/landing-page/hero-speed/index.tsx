import { ChevronRightIcon } from '@heroicons/react/solid';
import heroBusiness from '~/assets/images/hero-business.svg';
import { Button, ButtonColors } from '~/ui/atoms/button';
import { Heading, HeadingVariant } from '~/ui/atoms/heading';
import { FadeInOutItems } from '~/ui/molecules/fade-in-out-items';
import { List } from '~/ui/molecules/list';
import { ListItemAppearance } from '~/ui/molecules/list-item';

/**
 * Hero describing how easy it is to sell anything online.
 */
export const HeroSpeed = () => {
  return (
    <div className="flex h-fit w-full flex-col items-center px-4 py-12 md:flex-row lg:px-24">
      <div className="flex flex-col items-center justify-center md:w-1/2">
        <img src={heroBusiness} alt="hero-business" className="h-[480px] w-[480px]" />
      </div>

      <div className="flex flex-col justify-center space-y-4  md:w-1/2 ">
        <Heading variant={HeadingVariant.H1}>
          The{' '}
          <FadeInOutItems
            messages={[
              <span key={1} className="inline-flex w-[10.5rem] text-primary-2">
                easiest
              </span>,
              <span key={1} className="inline-flex w-[10.5rem] text-primary-2">
                fastest
              </span>,
            ]}
          />{' '}
          way to sell anything online in Belize.
        </Heading>

        <p className="text-lg leading-10 text-primary-4 md:text-xl">
          Grow your business, expand your reach, and sell online. Made for businesses of all sizes.
        </p>

        <List
          appearance={ListItemAppearance.Primary}
          items={[
            'Clothing and apparel',
            'Jewelry and accessories',
            'Electronics',
            'Food and Pastries',
            'Health and Beauty products',
            'Furniture',
            'Automobiles',
            'School Supplies and Books',
            'and more....',
          ]}
        />

        <Button
          size="small"
          variant="button"
          color={ButtonColors.Primary}
          icon={<ChevronRightIcon className="h-4 w-4" />}
        >
          Join waitlist - it's free
        </Button>
      </div>
    </div>
  );
};
