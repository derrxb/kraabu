import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { mockPayment } from "~/ui/assets/fixtures";
import type { PaymentPayDetailsProps } from ".";
import { PaymentPayDetails } from ".";

export default {
  title: "Molecules/PaymentPayDetails",
  component: PaymentPayDetails,
  argTypes: {},
} as ComponentMeta<typeof PaymentPayDetails>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PaymentPayDetails> = (args) => (
  <div className="h-[100vh]">
    <PaymentPayDetails {...(args as any)} />
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  payment: mockPayment,
  vendor: mockPayment.supplier,
} as PaymentPayDetailsProps;
