import type { Meta, StoryObj } from "@storybook/react";
import { InputText } from "./InputText";

const meta = {
  title: "@Repo/UI/InputText",
  component: InputText,
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
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text here...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Full Name",
    placeholder: "Enter your full name",
    helperText: "This will be displayed on your profile",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    error: "Please enter a valid email address",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Field",
    placeholder: "This field is disabled",
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    label: "Small Input",
    placeholder: "Small size",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    label: "Large Input",
    placeholder: "Large size",
    size: "lg",
  },
};

export const Outline: Story = {
  args: {
    label: "Outline Variant",
    placeholder: "Outline style",
    variant: "outline",
  },
};

export const Filled: Story = {
  args: {
    label: "Filled Variant",
    placeholder: "Filled style",
    variant: "filled",
  },
};

export const Required: Story = {
  args: {
    label: "Required Field",
    placeholder: "This field is required",
    required: true,
  },
};

export const WithValue: Story = {
  args: {
    label: "Pre-filled Value",
    defaultValue: "john.doe@example.com",
  },
};

export const PasswordType: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
};

export const EmailType: Story = {
  args: {
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
  },
};

export const NumberType: Story = {
  args: {
    label: "Age",
    type: "number",
    placeholder: "Enter your age",
    min: 0,
    max: 120,
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <InputText label="Default State" placeholder="Enter text..." />

      <InputText
        label="With Helper Text"
        placeholder="Enter text..."
        helperText="This is helper text"
      />

      <InputText
        label="Error State"
        placeholder="Enter text..."
        error="This field has an error"
      />

      <InputText label="Disabled State" placeholder="Enter text..." disabled />

      <InputText label="Required Field" placeholder="Enter text..." required />
    </div>
  ),
};
