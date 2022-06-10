import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockOrderItemEntity } from '~/mocks/fixtures';
import type { OrderItemProps } from '.';
import { OrderItem } from '.';

export default {
  title: 'Molecules/OrderItem',
  component: OrderItem,
  argTypes: {},
} as ComponentMeta<typeof OrderItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OrderItem> = (args) => <OrderItem {...(args as any)} />;

export const QuantityOne = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
QuantityOne.args = {
  ...mockOrderItemEntity.json(),
  quantity: 1,
} as OrderItemProps;

export const QuantityMultiple = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
QuantityMultiple.args = {
  ...mockOrderItemEntity.json(),
  quantity: 10,
} as OrderItemProps;

export const FreeItem = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FreeItem.args = {
  ...mockOrderItemEntity.json(),
  price: 0,
  currency: 'BZD',
} as OrderItemProps;
