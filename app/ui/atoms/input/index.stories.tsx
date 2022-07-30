import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { InputProps } from '.';
import { Input } from '.';

export default {
  title: 'Atoms/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputStory = Template.bind({});
InputStory.args = {
  value: 'test',
  name: 'test',
  label: 'test',
} as InputProps;
