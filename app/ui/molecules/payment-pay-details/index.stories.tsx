import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { mockOrder } from '~/ui/assets/fixtures';
import type { PaymentPayDetailsProps } from '.';
import { PaymentPayDetails } from '.';

export default {
  title: 'Molecules/OrderDetails',
  component: PaymentPayDetails,
  argTypes: {},
} as ComponentMeta<typeof PaymentPayDetails>;

const Template: ComponentStory<typeof PaymentPayDetails> = (args) => (
  <div className="h-[100vh]">
    <PaymentPayDetails {...args} />
  </div>
);

export const WithOrderItems = Template.bind({});
WithOrderItems.args = {
  payment: mockOrder,
  vendor: mockOrder.supplier,
  hasOrderItemsDisplayed: true,
} as PaymentPayDetailsProps;

export const WithoutOrderItems = Template.bind({});
WithoutOrderItems.args = {
  payment: mockOrder,
  vendor: mockOrder.supplier,
  hasOrderItemsDisplayed: false,
} as PaymentPayDetailsProps;
