import React from 'react';

import { Meta, StoryFn } from '@storybook/react';
import AbTag from '../src/Components/AbTag';

export default {
  title: 'Components/AbTag',
  component: AbTag,
} as Meta<typeof AbTag>;

const Template: StoryFn<typeof AbTag> = args => <AbTag {...args} />;

export const Tag = Template.bind({});

Tag.args = {
  text: 'Android',
};
