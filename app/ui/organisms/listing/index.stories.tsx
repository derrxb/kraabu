import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockGiggedOrderEntity } from '~/mocks/fixtures';
import { Listing } from '.';

export default {
  title: 'Organisms/Listing',
  component: Listing,
  argTypes: {},
} as ComponentMeta<typeof Listing>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Listing> = (args) => (
  <div className="h-[100vh] w-full">
    <Listing {...(args as any)} />
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  payment: mockGiggedOrderEntity.json(),
};
