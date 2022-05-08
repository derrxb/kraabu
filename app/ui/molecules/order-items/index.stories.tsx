import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import type { OrderItemListProps } from ".";
import { OrderItemList } from ".";

export default {
  title: "Molecules/OrderItems",
  component: OrderItemList,
  argTypes: {},
} as ComponentMeta<typeof OrderItemList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OrderItemList> = (args) => (
  <OrderItemList {...(args as any)} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  items: [
    {
      name: "Test Item One",
      price: 100,
      currency: "BZD",
      quantity: 1,
      description: "test",
      id: 1,
    },
    {
      name: "Test Item Two",
      price: 250,
      currency: "BZD",
      quantity: 5,
      description: "test",
      id: 2,
    },
  ],
} as OrderItemListProps;

export const EmptyList = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EmptyList.args = {
  items: [],
} as OrderItemListProps;
