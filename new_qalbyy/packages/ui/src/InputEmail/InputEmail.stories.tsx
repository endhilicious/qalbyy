import type { Meta, StoryObj } from "@storybook/react";
import { InputEmail } from "./InputEmail";

const meta = {
  title: "@Repo/UI/InputEmail",
  component: InputEmail,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "outline", "filled"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    label: {
      control: { type: "text" },
    },
    placeholder: {
      control: { type: "text" },
    },
    error: {
      control: { type: "text" },
    },
    helperText: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof InputEmail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter your email...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Email Address",
    placeholder: "Enter your email",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Email Address",
    placeholder: "Enter your email",
    helperText: "We will never share your email",
  },
};

export const WithError: Story = {
  args: {
    label: "Email Address",
    placeholder: "Enter your email",
    error: "Please enter a valid email address",
  },
};

export const Disabled: Story = {
  args: {
    label: "Email Address",
    placeholder: "Enter your email",
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    label: "Email",
    placeholder: "Enter email",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    label: "Email Address",
    placeholder: "Enter your email",
    size: "lg",
  },
};

export const Outline: Story = {
  args: {
    label: "Email Address",
    placeholder: "Enter your email",
    variant: "outline",
  },
};

export const Filled: Story = {
  args: {
    label: "Email Address",
    placeholder: "Enter your email",
    variant: "filled",
  },
};

export const Required: Story = {
  args: {
    label: "Email Address",
    placeholder: "Enter your email",
    required: true,
  },
};

export const WithValue: Story = {
  args: {
    label: "Email Address",
    defaultValue: "john.doe@example.com",
  },
};

export const WorkEmail: Story = {
  args: {
    label: "Work Email",
    placeholder: "name@company.com",
    helperText: "Use your company email address",
  },
};

export const PersonalEmail: Story = {
  args: {
    label: "Personal Email",
    placeholder: "yourname@gmail.com",
    helperText: "This will be used for account notifications",
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <InputEmail label="Default State" placeholder="Enter email..." />

      <InputEmail
        label="With Helper Text"
        placeholder="Enter email..."
        helperText="We will never share your email"
      />

      <InputEmail
        label="Error State"
        placeholder="Enter email..."
        error="Please enter a valid email address"
      />

      <InputEmail
        label="Disabled State"
        placeholder="Enter email..."
        disabled
      />

      <InputEmail
        label="Required Field"
        placeholder="Enter email..."
        required
      />
    </div>
  ),
};
