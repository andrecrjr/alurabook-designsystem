import React from 'react';

import { Meta, StoryFn } from '@storybook/react';
import AbInputQuantity from '../src/Components/AbInputQuantity';

export default {
  title: 'Components/AbInputQuantity',
  component: AbInputQuantity,
} as Meta<typeof AbInputQuantity>;

const Template: StoryFn<typeof AbInputQuantity> = args => (
  <AbInputQuantity {...args} />
);

export const InputQuantity = Template.bind({});
