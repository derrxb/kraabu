import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { QRCodeProps } from '.';
import { QRCode } from '.';

export default {
  title: 'Atoms/QRCode',
  component: QRCode,
} as ComponentMeta<typeof QRCode>;

const Template: ComponentStory<typeof QRCode> = (args) => (
  <div className="flex h-full w-full flex-col items-center justify-center">
    <QRCode {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  url: 'https://boofcv.org/images/3/35/Example_rendered_qrcode.png',
} as QRCodeProps;
