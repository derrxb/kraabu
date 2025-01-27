import heroSecurity from 'public/images/hero-security.svg';
import walletEKyash from 'public/images/wallets/ekyash.png';
import { Heading, HeadingVariant } from '~/ui/atoms/heading';

/**
 * Hero describing how easy it is to sell anything online.
 */
export const HeroSecurity = () => {
  return (
    <div className="flex h-fit min-h-[480px] w-full flex-col items-center px-4 py-12 md:flex-row lg:px-24">
      <div className="order-2 flex flex-col justify-center space-y-8 md:order-1 md:w-1/2">
        <Heading variant={HeadingVariant.H1}>
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
        </div>
      </div>

      <div className="order-1 flex flex-col items-center justify-center md:order-2 md:w-1/2">
        <img src={heroSecurity} alt="hero-business" className="w-[calc(100%-30%)] lg:w-[calc(100%-35%)]" />
      </div>
    </div>
  );
};
