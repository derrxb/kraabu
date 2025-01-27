import { ChevronRightIcon } from '@heroicons/react/24/outline';
import heroMain from 'public/images/hero-home.svg';
import { Button, ButtonColors } from '~/ui/atoms/button-deprecated';
import { Heading, HeadingVariant } from '~/ui/atoms/heading';
import { Tag, TagAppearance } from '~/ui/atoms/tag';
import { FadeInOutItems } from '~/ui/molecules/fade-in-out-items';
import { List } from '~/ui/molecules/list';
import { ListItemAppearance } from '~/ui/molecules/list-item';

export const HeroFold = () => {
  return (
    <div className="flex h-[100vh] w-full flex-col md:h-[85vh] md:flex-row">
      <div className=" order-2 flex flex-col justify-center space-y-4 md:order-1 md:w-1/2 ">
        <Tag appearance={TagAppearance.Gray}>Coming Soon</Tag>

        <Heading variant={HeadingVariant.H1}>
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
          Create a link, accept payment with Belize’s E-Wallets, get paid. It’s that easy!
        </p>

        <Button
          size="small"
          variant="button"
          color={ButtonColors.Primary}
          icon={<ChevronRightIcon className="h-4 w-4" />}
        >
          Join waitlist - it's free
        </Button>

        <List appearance={ListItemAppearance.Secondary} items={['No credit card required', 'No website needed']} />
      </div>

      <div className="order-1 flex flex-col items-center justify-center md:order-2 md:w-1/2">
        <img src={heroMain} alt="hero-main" className="mb-12 h-fit w-fit" />
      </div>
    </div>
  );
};
