import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Heading } from '.';

export default {
  title: 'Atoms/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = {
  variant: 'h1',
  children: 'Heading 1',
};
