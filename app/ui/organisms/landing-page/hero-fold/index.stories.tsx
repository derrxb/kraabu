import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { HeroFold } from '.';

export default {
  title: 'Organisms/LandingPage/HeroFold',
  component: HeroFold,
  argTypes: {},
} as ComponentMeta<typeof HeroFold>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeroFold> = (args) => (
  <div className="h-[100vh] w-full">
    <HeroFold {...(args as any)} />
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
