import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { HeroSecurity } from '.';

export default {
  title: 'Organisms/LandingPage/HeroSecurity',
  component: HeroSecurity,
  argTypes: {},
} as ComponentMeta<typeof HeroSecurity>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeroSecurity> = (args) => (
  <div className="h-[100vh] w-full">
    <HeroSecurity {...(args as any)} />
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
