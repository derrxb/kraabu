import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import type { OrderTotalProps } from '.';
import { OrderTotal } from '.';

export default {
  title: 'Atoms/OrderTotal',
  component: OrderTotal,
} as ComponentMeta<typeof OrderTotal>;

const Template: ComponentStory<typeof OrderTotal> = (args) => <OrderTotal {...args} />;

export const Default = Template.bind({});
Default.args = {
  amount: 1500, // 15000 = $15.00BZD
  currency: 'BZD',
} as OrderTotalProps;
