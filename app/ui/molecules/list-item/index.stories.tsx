import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ListItem, ListItemAppearance } from '.';

export default {
  title: 'Molecules/ListItem',
  component: ListItem,
  argTypes: {},
} as ComponentMeta<typeof ListItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ListItem> = (args) => (
  <div className="h-[100vh] w-full">
    <ListItem {...(args as any)} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: 'list-item',
};

export const Primary = Template.bind({});
Primary.args = {
  appearance: ListItemAppearance.Primary,
  children: 'list-item',
};

export const Secondary = Template.bind({});
Secondary.args = {
  appearance: ListItemAppearance.Secondary,
  children: 'list-item',
};
