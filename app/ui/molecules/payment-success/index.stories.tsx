import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { PaymentSuccess, PaymentSuccessProps } from ".";

export default {
  title: "Molecules/PaymentSuccess",
  component: PaymentSuccess,
  argTypes: {},
} as ComponentMeta<typeof PaymentSuccess>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PaymentSuccess> = (args) => (
  <div className="h-[100vh]">
    <PaymentSuccess {...(args as any)} />
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {} as PaymentSuccessProps;
