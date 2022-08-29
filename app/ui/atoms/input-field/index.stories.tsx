import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { InputFieldProps } from '.';
import { InputField } from '.';

export default {
  title: 'Atoms/Input',
  component: InputField,
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => <InputField {...args} />;

export const InputStory = Template.bind({});
InputStory.args = {
  value: 'test',
  name: 'test',
  label: 'test',
} as InputFieldProps;
