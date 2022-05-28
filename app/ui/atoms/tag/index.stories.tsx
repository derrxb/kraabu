import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import type { TagProps } from '.';
import { Tag } from '.';

export default {
  title: 'Atoms/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Coming Soon',
} as TagProps;
