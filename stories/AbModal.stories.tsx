import React from 'react';
import { Meta, Story } from '@storybook/react';
import AbModal from '../src/Components/AbModal';

export default {
  title: 'Components/AbModal',
  component: AbModal,
} as Meta<typeof AbModal>;

const Template: Story<typeof AbModal> = args => <AbModal {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  title: 'Login',
  open: true,
};
