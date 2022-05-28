import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { SiteNav } from '.';

export default {
  title: 'Molecules/SiteNav',
  component: SiteNav,
  argTypes: {},
} as ComponentMeta<typeof SiteNav>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SiteNav> = (args) => (
  <div className="h-[100vh] w-full">
    <SiteNav {...(args as any)} />
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
