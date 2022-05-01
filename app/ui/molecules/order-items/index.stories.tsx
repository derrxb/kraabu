import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { OrderItemList, OrderItemListProps } from ".";

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
      amount: 100,
      currency: "BZD",
      quantity: 1,
    },
    {
      name: "Test Item Two",
      amount: 250,
      currency: "BZD",
      quantity: 5,
    },
  ],
} as OrderItemListProps;

export const EmptyList = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EmptyList.args = {
  items: [],
} as OrderItemListProps;
