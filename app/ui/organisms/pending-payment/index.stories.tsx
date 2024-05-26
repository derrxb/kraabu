import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockGiggedOrderEntity } from '~/mocks/fixtures';
import { PaymentMethod, PendingPayment } from '.';

export default {
  title: 'Organisms/PendingPayment',
  component: PendingPayment,
  argTypes: {},
} as ComponentMeta<typeof PendingPayment>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PendingPayment> = (args) => (
  <div className="h-[100vh] w-full">
    <PendingPayment {...(args as any)} />
  </div>
);

export const EKyash = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EKyash.args = {
  order: mockGiggedOrderEntity.json(),
  paymentMethod: PaymentMethod.EKyash,
};
