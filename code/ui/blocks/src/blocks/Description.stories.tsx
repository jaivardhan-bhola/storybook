import type { Meta, StoryObj } from '@storybook/react';
import { Description } from './Description';
import { BooleanControl } from '../controls/Boolean';

const meta: Meta<typeof Description> = {
  component: Description,
  parameters: {
    relativeCsfPaths: ['../controls/Boolean.stories'],
    controls: {
      include: [],
      hideNoControlsWarning: true,
    },
  },
  args: {
    of: BooleanControl,
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
