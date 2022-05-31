import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

const Dummy = () => null;

export default {
  title: 'Organisms/LandingPage/Newsletter',
  component: Dummy,
  argTypes: {},
} as ComponentMeta<typeof Dummy>;

const Template: ComponentStory<typeof Dummy> = (args) => (
  <div className="h-[100vh] w-full">
    <h1>
      Not Implemented Yet, see{' '}
      <a href="https://github.com/remix-run/remix/discussions/2481" className="text-primary-1">
        https://github.com/remix-run/remix/discussions/2481
      </a>
    </h1>
  </div>
);

export const Default = Template.bind({});
Default.args = {};
