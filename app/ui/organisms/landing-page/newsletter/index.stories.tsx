import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Newsletter } from '.';

export default {
  title: 'Organisms/LandingPage/Newsletter',
  component: Newsletter,
  argTypes: {},
} as ComponentMeta<typeof Newsletter>;

const Template: ComponentStory<typeof Newsletter> = (args) => (
  <div className="h-[100vh] w-full">
    <Newsletter {...(args as any)} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
