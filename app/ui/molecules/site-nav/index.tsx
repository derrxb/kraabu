import { ChevronRightIcon } from '@heroicons/react/24/outline';
import noop from 'lodash/noop';
import { Button, ButtonColors } from '~/ui/atoms/button';
import { Krabuu } from '~/ui/atoms/krabuu';

export const SiteNav = ({ className }: { className?: string }) => {
  return (
    <nav className={`flex h-[96px] w-full flex-row items-center ${className}`}>
      <div className="mr-auto">
        <Krabuu isLink size="large" />
      </div>

      <div className="ml-auto">
        <Button
          variant="button"
          color={ButtonColors.Primary}
          onClick={noop}
          size="small"
          icon={<ChevronRightIcon className="h-4 w-4" />}
        >
          Join waitlist - it's free
        </Button>
      </div>
    </nav>
  );
};
