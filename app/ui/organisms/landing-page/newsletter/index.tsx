import React from 'react';
import { Button } from '~/ui/atoms/button';
import { Heading, HeadingVariant } from '~/ui/atoms/heading';

export type HeadingProps = {
  onSubmit: (email: string) => void;
};

/**
 * Ask user to sign up for newsletter
 * @returns
 */
export const Newsletter = ({ onSubmit }: HeadingProps) => {
  return (
    <div className="flex min-h-[480px] flex-col items-center justify-center rounded-xl bg-primary-2 py-4 px-8 text-center">
      <Heading
        variant={HeadingVariant.H2}
        className="bg-gradient-to-br from-primary-1 to-[#EF268E] bg-clip-text pb-4 text-transparent"
      >
        Belize is ready to step into the era of online shopping. <br /> Are you jumping on the train or getting left
        behind?
      </Heading>

      <p className="pb-4 text-lg leading-10 text-primary-4 md:text-xl">
        Register your interest now to secure your priority spot and be one of the first to know when we go live.{' '}
      </p>

      <form className="py-4" onSubmit={() => onSubmit('test')}>
        <div className="flex flex-row items-center">
          <div className="flex flex-col">
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <input
              id="email"
              name="email"
              placeholder="Email"
              className="mr-4 w-fit rounded-md border-2 border-white py-[14px] px-4 text-base focus:ring-4 focus:ring-indigo-600 md:w-[480px]"
            />
          </div>

          <Button variant="submit" label="Join Waitlist" />
        </div>
      </form>
    </div>
  );
};
