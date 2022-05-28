import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import type { ListItemsProps } from '.';
import { List } from '.';
import { ListItemAppearance } from '../list-item';

export default {
  title: 'Molecules/List',
  component: List,
  argTypes: {},
} as ComponentMeta<typeof List>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof List> = (args) => (
  <div className="h-[100vh] w-full">
    <List {...(args as any)} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  items: ['one', 'two', 'three'],
} as ListItemsProps;

export const Primary = Template.bind({});
Primary.args = {
  appearance: ListItemAppearance.Primary,
  items: ['one', 'two', 'three'],
} as ListItemsProps;

export const Secondary = Template.bind({});
Secondary.args = {
  appearance: ListItemAppearance.Secondary,
  items: ['one', 'two', 'three'],
} as ListItemsProps;
