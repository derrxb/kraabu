import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import type { OrderItemProps } from ".";
import { OrderItem } from ".";

export default {
  title: "Molecules/OrderItem",
  component: OrderItem,
  argTypes: {},
} as ComponentMeta<typeof OrderItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OrderItem> = (args) => (
  <OrderItem {...(args as any)} />
);

export const QuantityOne = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
QuantityOne.args = {
  name: "Test Item one",
  currency: "BZD",
  quantity: 1,
  description: "Test",
  price: 100,
  id: 1,
} as OrderItemProps;

export const QuantityMultiple = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
QuantityMultiple.args = {
  name: "Test Item one",
  description: "Test Item Description",
  price: 100,
  currency: "BZD",
  quantity: 10,
} as OrderItemProps;

export const FreeItem = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FreeItem.args = {
  name: "Test Item one",
  description: "Test Item Description",
  price: 0,
  currency: "BZD",
  quantity: 10,
} as OrderItemProps;
