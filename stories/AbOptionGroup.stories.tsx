import React from 'react';

import { Meta, StoryFn } from '@storybook/react';
import { AbOptionGroup } from '../src';

export default {
  title: 'Components/AbOptionGroup',
  component: AbOptionGroup,
} as Meta<typeof AbOptionGroup>;

const Template: StoryFn<typeof AbOptionGroup> = args => (
  <AbOptionGroup {...args} />
);

export const OptionGroup = Template.bind({});

OptionGroup.args = {
  options: [
    {
      id: 1,
      title: 'E-book',
      body: 'R$ 00,00',
      footer: '.pdf, .epub, .mob',
    },
    {
      id: 2,
      title: 'Impresso',
      body: 'R$ 00,00',
      footer: '.pdf, .epub, .mob',
    },
    {
      id: 3,
      title: 'Kindle',
      body: 'R$ 20,00',
      footer: '.pdf, .epub, .mob',
    },
  ],
};
