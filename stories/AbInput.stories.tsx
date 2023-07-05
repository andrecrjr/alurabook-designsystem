import React from 'react';
import { AbCard } from '../src';

import { Meta, StoryFn } from '@storybook/react';
import { AbInput } from '../src';

export default {
  title: 'Components/AbInput',
  component: AbInput,
} as Meta<typeof AbInput>;

const Template: StoryFn<typeof AbInput> = args => <AbInput {...args} />;

export const InputEmail = Template.bind({});

InputEmail.args = {
  input: {
    type: 'email',
    placeholder: 'email@email.com.br',
  },
  label: 'E-mail',
};

export const InputPassword = Template.bind({});

InputPassword.args = {
  input: {
    type: 'password',
    placeholder: '***********',
  },
  label: 'Password',
};
