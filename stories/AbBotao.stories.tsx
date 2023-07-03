import React from 'react';
import { AbBotao, AbBotaoProps } from '../src';

import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/AbBotao',
  component: AbBotao,
} as Meta<typeof AbBotao>;

const Template: StoryFn<typeof AbBotao> = args => <AbBotao {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: 'AbBotão Primario',
  kind: 'primario',
} as AbBotaoProps;

export const Secondary = Template.bind({});

Secondary.args = {
  text: 'AbBotão Secundário',
  kind: 'secundario',
} as AbBotaoProps;
