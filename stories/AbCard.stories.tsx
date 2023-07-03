import React from 'react';
import { AbCard } from '../src';

import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/AbCard',
  component: AbCard,
} as Meta<typeof AbCard>;

const Template: StoryFn<typeof AbCard> = () => <AbCard />;

export const Card = Template.bind({});
