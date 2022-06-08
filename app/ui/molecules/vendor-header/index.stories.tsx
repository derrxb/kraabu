import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { mockSupplier } from '~/mocks/fixtures';
import type { VendorHeaderProps } from '.';
import { VendorHeader } from '.';

export default {
  title: 'Molecules/VendorHeader',
  component: VendorHeader,
  argTypes: {},
} as ComponentMeta<typeof VendorHeader>;

const Template: ComponentStory<typeof VendorHeader> = (args) => <VendorHeader {...(args as any)} />;

export const Default = Template.bind({});
Default.args = {
  ...mockSupplier,
} as VendorHeaderProps;
