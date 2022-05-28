import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { FadeInOutItems } from '.';

export default {
  title: 'Molecules/FadeInOutItems',
  component: FadeInOutItems,
} as ComponentMeta<typeof FadeInOutItems>;

const Template: ComponentStory<typeof FadeInOutItems> = (args) => <FadeInOutItems {...args} />;

export const Default = Template.bind({});
Default.args = {
  messages: ['Fade-1', 'Fade-2'],
};
