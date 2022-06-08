import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockOrder } from 'mocks/fixtures';
import React from 'react';
import { PendingPayment } from '.';

export default {
  title: 'Organisms/PendingPayment',
  component: PendingPayment,
  argTypes: {},
} as ComponentMeta<typeof PendingPayment>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PendingPayment> = (args) => (
  <div className="h-[100vh] w-full">
    <PendingPayment {...(args as any)} />
  </div>
);

export const EKyash = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EKyash.args = {
  payment: mockOrder,
};
