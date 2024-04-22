import { faker } from '@faker-js/faker';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { AvatarProps } from '.';
import { Avatar } from '.';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarBase = Template.bind({});
AvatarBase.args = {
  src: faker.image.unsplash.avatar(),
  fallback: 'AB',
} as AvatarProps;

export const AvatarFallback = Template.bind({});
AvatarFallback.args = {
  src: 'invalid',
  fallback: 'AB',
} as AvatarProps;
