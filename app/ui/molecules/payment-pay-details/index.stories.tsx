import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { PaymentPayDetails, PaymentPayDetailsProps } from ".";
import { PaymentStatus } from "../../../domain/payments/entities/payment";

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
  payment: {
    id: "test-payment",
    description: "Test Description",
    status: PaymentStatus.Completed,
    invoice: "invoice-id",
    createdAt: new Date().getTime(),
    user: "test-user",
    amount: 100,
    currency: "BZD",
    additionalData: {
      gateway: "gateway",
      hashkey: "hashkey",
      qrCodeUrl: "",
      paymentKey: "pay-key",
      order: {
        description: "Test Item",
        id: "test-id",
        name: "Test Item",
        price: 100,
        quantity: 10,
      },
    },
  } as any,
  vendor: {
    name: "VendorOne",
    logoUrl:
      "https://thumbs.bfldr.com/at/pl546j-7le8zk-838dm2?expiry=1651396723&fit=bounds&height=800&sig=YzU0ODQ0MDQ4YzZiNWExNmI3ODkxNjgyNTQ1MDgxZTgwNjU5MjY0ZA%3D%3D&width=1100",
    tag: "We provided everything you need",
    homepage: "https://example.com",
  },
} as PaymentPayDetailsProps;
