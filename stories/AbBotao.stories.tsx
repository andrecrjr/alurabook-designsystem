import React from 'react';
import { AbBotao } from '../src';

import { ComponentMeta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/AbBotao',
  component: AbBotao,
} as ComponentMeta<typeof AbBotao>;

const Template: StoryFn<typeof AbBotao> = () => <AbBotao />;

export const Primary = Template.bind({});
