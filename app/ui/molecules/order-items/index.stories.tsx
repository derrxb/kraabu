import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockOrderItemEntity } from '~/mocks/fixtures';
import type { OrderItemListProps } from '.';
import { OrderItemList } from '.';

export default {
  title: 'Molecules/OrderItems',
  component: OrderItemList,
  argTypes: {},
} as ComponentMeta<typeof OrderItemList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OrderItemList> = (args) => <OrderItemList {...(args as any)} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  items: [
    { ...mockOrderItemEntity.json(), quantity: 1 },
    { ...mockOrderItemEntity.json(), quantity: 2 },
  ],
} as OrderItemListProps;

export const EmptyList = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EmptyList.args = {
  items: [],
} as OrderItemListProps;
