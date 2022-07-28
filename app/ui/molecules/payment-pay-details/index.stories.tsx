import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockGiggedOrderEntity } from '~/mocks/fixtures';
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
  order: mockGiggedOrderEntity.json(),
  user: mockGiggedOrderEntity.json().user,
  hasOrderItemsDisplayed: true,
} as PaymentPayDetailsProps;

export const WithoutOrderItems = Template.bind({});
WithoutOrderItems.args = {
  order: mockGiggedOrderEntity.json(),
  user: mockGiggedOrderEntity.json().user,
  hasOrderItemsDisplayed: false,
} as PaymentPayDetailsProps;
