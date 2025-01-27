import heroRemembered from 'public/images/hero-remembered.svg';
import { Heading, HeadingVariant } from '~/ui/atoms/heading';

/**
 * Hero describing how easy it is to sell anything online.
 */
export const HeroRemembered = () => {
  return (
    <div className="flex h-fit min-h-[480px] w-full flex-col items-center px-4 py-12 md:flex-row lg:px-24">
      <div className="flex flex-col items-center justify-center md:w-1/2">
        <img src={heroRemembered} alt="hero-business" className="w-[calc(100%-30%)] lg:w-[calc(100%-35%)]" />
      </div>

      <div className="flex flex-col justify-center space-y-4  md:w-1/2 ">
        <Heading variant={HeadingVariant.H1}>
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
