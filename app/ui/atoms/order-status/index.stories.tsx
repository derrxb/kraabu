import { PaymentStatus } from '@prisma/client';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import type { OrderStatusProps } from '.';
import { OrderStatus } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/OrderStatus',
  component: OrderStatus,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof OrderStatus>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OrderStatus> = (args) => <OrderStatus {...args} />;

export const Pending = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Pending.args = {
  status: PaymentStatus.Pending,
} as OrderStatusProps;

export const Completed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Completed.args = {
  status: PaymentStatus.Completed,
} as OrderStatusProps;

export const Failed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Failed.args = {
  status: PaymentStatus.Failed,
} as OrderStatusProps;
