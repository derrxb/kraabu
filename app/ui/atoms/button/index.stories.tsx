import { ChevronRightIcon } from '@heroicons/react/solid';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
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
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const ButtonLink = Template.bind({});
ButtonLink.args = {
  size: 'small',
  variant: 'link',
  href: 'https://ekyash.page.link/GQTJ',
  label: 'Pay with E-Kyash App',
  color: ButtonColors.EKyash,
};

export const CTAWithIcon = Template.bind({});
CTAWithIcon.args = {
  size: 'small',
  variant: 'button',
  label: `Join waitlist - it's free`,
  color: ButtonColors.Primary,
  icon: <ChevronRightIcon className="h-4 w-4" />,
};
