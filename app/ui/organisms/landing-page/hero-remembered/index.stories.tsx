import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { HeroRemembered } from '.';

export default {
  title: 'Organisms/LandingPage/HeroRemembered',
  component: HeroRemembered,
  argTypes: {},
} as ComponentMeta<typeof HeroRemembered>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeroRemembered> = (args) => (
  <div className="h-[100vh] w-full">
    <HeroRemembered {...(args as any)} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
