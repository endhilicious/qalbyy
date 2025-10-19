import type { Meta, StoryObj } from "@storybook/react";
import { InputPassword } from "./InputPassword";

const meta = {
  title: "@Repo/UI/InputPassword",
  component: InputPassword,
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
    showToggle: {
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
} satisfies Meta<typeof InputPassword>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter your password...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    helperText: "Must be at least 8 characters long",
  },
};

export const WithError: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    error: "Password must be at least 8 characters",
  },
};

export const Disabled: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    disabled: true,
  },
};

export const WithoutToggle: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    showToggle: false,
  },
};

export const Small: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    size: "lg",
  },
};

export const Outline: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    variant: "outline",
  },
};

export const Filled: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    variant: "filled",
  },
};

export const Required: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    required: true,
  },
};

export const WithValue: Story = {
  args: {
    label: "Password",
    defaultValue: "mypassword123",
  },
};

export const ConfirmPassword: Story = {
  args: {
    label: "Confirm Password",
    placeholder: "Confirm your password",
    helperText: "Must match your password",
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <InputPassword label="Default State" placeholder="Enter password..." />

      <InputPassword
        label="With Helper Text"
        placeholder="Enter password..."
        helperText="Must be at least 8 characters"
      />

      <InputPassword
        label="Error State"
        placeholder="Enter password..."
        error="Password is too short"
      />

      <InputPassword
        label="Disabled State"
        placeholder="Enter password..."
        disabled
      />

      <InputPassword
        label="Without Toggle"
        placeholder="Enter password..."
        showToggle={false}
      />

      <InputPassword
        label="Required Field"
        placeholder="Enter password..."
        required
      />
    </div>
  ),
};
