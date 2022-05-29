import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { HeroSpeed } from '.';

export default {
  title: 'Organisms/LandingPage/HeroSpeed',
  component: HeroSpeed,
  argTypes: {},
} as ComponentMeta<typeof HeroSpeed>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeroSpeed> = (args) => (
  <div className="h-[100vh] w-full">
    <HeroSpeed {...(args as any)} />
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
