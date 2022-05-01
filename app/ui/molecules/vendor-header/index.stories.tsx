import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { VendorHeader, VendorHeaderProps } from ".";

export default {
  title: "Molecules/VendorHeader",
  component: VendorHeader,
  argTypes: {},
} as ComponentMeta<typeof VendorHeader>;

const Template: ComponentStory<typeof VendorHeader> = (args) => (
  <VendorHeader {...(args as any)} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  name: "VendorOne",
  logoUrl:
    "https://thumbs.bfldr.com/at/pl546j-7le8zk-838dm2?expiry=1651396723&fit=bounds&height=800&sig=YzU0ODQ0MDQ4YzZiNWExNmI3ODkxNjgyNTQ1MDgxZTgwNjU5MjY0ZA%3D%3D&width=1100",
  tag: "We provided everything you need",
  homepage: "https://example.com",
} as VendorHeaderProps;
