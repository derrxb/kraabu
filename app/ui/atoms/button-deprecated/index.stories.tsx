import { ChevronRightIcon } from '@heroicons/react/24/outline';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { ButtonProps } from '.';
import { Button, ButtonColors } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Button',
};

export const ButtonLink = Template.bind({});
ButtonLink.args = {
  size: 'small',
  variant: 'link',
  href: 'https://ekyash.page.link/GQTJ',
  children: 'Button link',
  color: ButtonColors.Primary,
};

export const CTAWithIcon = Template.bind({});
CTAWithIcon.args = {
  size: 'small',
  variant: 'button',
  children: `Join waitlist - it's free`,
  color: ButtonColors.Primary,
  icon: <ChevronRightIcon className="h-4 w-4" />,
};

export const EKyashButton = Template.bind({});
EKyashButton.args = {
  size: 'small',
  variant: 'button',
  children: `Pay with E-Kyash`,
  color: ButtonColors.EKyash,
} as ButtonProps;

export const EKyashButtonLink = Template.bind({});
EKyashButtonLink.args = {
  size: 'small',
  children: `Pay with E-Kyash`,
  color: ButtonColors.EKyash,
  variant: 'link',
  href: 'https://ekyash.page.link/GQTJ',
} as ButtonProps;

export const DigiWalletButton = Template.bind({});
DigiWalletButton.args = {
  size: 'small',
  variant: 'button',
  children: `Pay with DigiWallet`,
  color: ButtonColors.DigiWallet,
} as ButtonProps;

export const DigiWalletButtonLink = Template.bind({});
DigiWalletButtonLink.args = {
  size: 'small',
  children: `Pay with DigiWallet`,
  color: ButtonColors.DigiWallet,
  variant: 'link',
  href: 'https://ekyash.page.link/GQTJ',
} as ButtonProps;

export const DisabledButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DisabledButton.args = {
  children: 'Button',
  isFullWidth: true,
  disabled: true,
};

export const DisabledButtonLink = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DisabledButtonLink.args = {
  children: 'Button',
  isFullWidth: true,
  href: 'https://example.com',
  disabled: true,
  variant: 'link',
};
