import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // The a11y addon (see README setup step) audits every story
    // automatically and surfaces WCAG violations right in the Storybook UI.
    a11y: { disable: false },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: "primary", children: "Save changes" },
};

export const Secondary: Story = {
  args: { variant: "secondary", children: "Cancel" },
};

export const Loading: Story = {
  args: { variant: "primary", isLoading: true, children: "Saving..." },
};

export const IconOnlyWithAccessibleLabel: Story = {
  args: { accessibleLabel: "Close dialog", children: "✕" },
};
