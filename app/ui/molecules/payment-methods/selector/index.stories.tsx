import type { ComponentMeta, ComponentStory } from '@storybook/react';
import noop from 'lodash/noop';
import type { PaymentMethodSelectorProps } from '.';
import { PaymentMethodSelector } from '.';

export default {
  title: 'Molecules/PaymentMethods/Selector',
  component: PaymentMethodSelector,
} as ComponentMeta<typeof PaymentMethodSelector>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PaymentMethodSelector> = (args) => (
  <div className="h-[100vh] w-full">
    <PaymentMethodSelector {...(args as any)} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  onClick: noop,
} as PaymentMethodSelectorProps;
