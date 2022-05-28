import { ChevronRightIcon } from '@heroicons/react/solid';
import noop from 'lodash/noop';
import { Button, ButtonColors } from '~/ui/atoms/button';
import { Krabuu } from '~/ui/atoms/krabuu';

export const SiteNav = ({ className }: { className?: string }) => {
  return (
    <nav className={`flex h-[96px] w-full flex-row items-center px-4 md:px-24 ${className}`}>
      <div className="mr-auto">
        <Krabuu size="large" />
      </div>

      <div className="ml-auto">
        <Button
          label="Join waitlist - it's free"
          variant="button"
          color={ButtonColors.Primary}
          onClick={noop}
          size="small"
          icon={<ChevronRightIcon className="h-4 w-4" />}
        />
      </div>
    </nav>
  );
};
