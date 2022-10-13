import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { mockGiggedProductEntity } from '~/mocks/fixtures';
import type { ProductListingItemTypeProps } from '.';
import { ProductListingItem } from '.';

export default {
  title: 'Molecules/ProductListingItem',
  component: ProductListingItem,
  argTypes: {},
} as ComponentMeta<typeof ProductListingItem>;

const Template: ComponentStory<typeof ProductListingItem> = (args) => (
  <div className="h-[100vh]">
    <ProductListingItem {...args} />
  </div>
);

export const Published = Template.bind({});
Published.args = {
  product: mockGiggedProductEntity.json(),
  isOwner: false,
} as ProductListingItemTypeProps;

export const UnPublished = Template.bind({});
UnPublished.args = {
  product: {
    ...mockGiggedProductEntity.json(),
    published: false,
  },
  isOwner: true,
} as ProductListingItemTypeProps;
