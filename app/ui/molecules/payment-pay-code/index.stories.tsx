import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import type { PaymentPayCodeProps } from '.';
import { PaymentPayCode } from '.';

export default {
  title: 'Molecules/PaymentPayCode',
  component: PaymentPayCode,
  argTypes: {},
} as ComponentMeta<typeof PaymentPayCode>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PaymentPayCode> = (args) => (
  <div className="h-[100vh] w-full">
    <PaymentPayCode {...(args as any)} />
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  paymentMethod: {
    name: 'EKyash',
    url: 'https://www.e-kyash.com/',
    color: '#e24241',
  },
  qr: 'https://boofcv.org/images/3/35/Example_rendered_qrcode.png',
} as PaymentPayCodeProps;
