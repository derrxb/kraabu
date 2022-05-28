import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Krabuu } from '.';

export default {
  title: 'Atoms/Krabuu',
  component: Krabuu,
} as ComponentMeta<typeof Krabuu>;

const Template: ComponentStory<typeof Krabuu> = (args) => <Krabuu {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'large',
};
