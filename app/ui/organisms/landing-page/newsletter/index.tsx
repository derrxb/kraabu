import { Form } from '@remix-run/react';
import { Button } from '~/ui/atoms/button';
import { Heading, HeadingVariant } from '~/ui/atoms/heading';

/**
 * Ask user to sign up for newsletter
 * @returns
 */
export const Newsletter = () => {
  return (
    <div className="flex min-h-[480px] flex-col items-center justify-center bg-primary-2 py-4 px-8 text-center md:rounded-xl">
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

      <Form className="py-4" method="POST" action="/api/join-waitlist">
        <div className="flex flex-row items-center">
          <div className="flex flex-col">
            <label htmlFor="firstName" className="sr-only">
              First Name
            </label>

            <input
              required
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              autoComplete="given-name"
              className="mr-4 w-fit rounded-md border-2 border-transparent border-white py-[14px] px-4 text-base outline-none outline focus:border-transparent focus:ring-4 focus:ring-primary-1 md:w-56"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <input
              required
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              autoComplete="email"
              className="mr-4 w-fit rounded-md border-2 border-transparent border-white py-[14px] px-4 text-base outline-none outline focus:border-transparent focus:ring-4 focus:ring-primary-1 md:w-80"
            />
          </div>

          <Button variant="submit">Join wait list</Button>
        </div>
      </Form>
    </div>
  );
};
