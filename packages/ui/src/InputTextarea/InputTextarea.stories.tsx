import type { Meta, StoryObj } from "@storybook/react";
import { InputTextarea } from "./InputTextarea";

const meta = {
  title: "@Repo/UI/InputTextarea",
  component: InputTextarea,
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
    resize: {
      control: { type: "select" },
      options: ["none", "vertical", "horizontal", "both"],
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
    rows: {
      control: { type: "number" },
    },
  },
} satisfies Meta<typeof InputTextarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter your message...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Message",
    placeholder: "Enter your message",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Description",
    placeholder: "Enter description",
    helperText: "Provide a detailed description",
  },
};

export const WithError: Story = {
  args: {
    label: "Comment",
    placeholder: "Enter your comment",
    error: "Comment is required",
  },
};

export const Disabled: Story = {
  args: {
    label: "Message",
    placeholder: "Enter your message",
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    label: "Short Note",
    placeholder: "Enter short note",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    label: "Long Description",
    placeholder: "Enter detailed description",
    size: "lg",
  },
};

export const Outline: Story = {
  args: {
    label: "Message",
    placeholder: "Enter your message",
    variant: "outline",
  },
};

export const Filled: Story = {
  args: {
    label: "Message",
    placeholder: "Enter your message",
    variant: "filled",
  },
};

export const Required: Story = {
  args: {
    label: "Message",
    placeholder: "Enter your message",
    required: true,
  },
};

export const WithValue: Story = {
  args: {
    label: "Message",
    defaultValue: "This is a pre-filled message...",
  },
};

export const NoResize: Story = {
  args: {
    label: "Fixed Size",
    placeholder: "This textarea cannot be resized",
    resize: "none",
  },
};

export const HorizontalResize: Story = {
  args: {
    label: "Horizontal Resize",
    placeholder: "Can only resize horizontally",
    resize: "horizontal",
  },
};

export const BothResize: Story = {
  args: {
    label: "Both Resize",
    placeholder: "Can resize both ways",
    resize: "both",
  },
};

export const CustomRows: Story = {
  args: {
    label: "Custom Height",
    placeholder: "This has 6 rows",
    rows: 6,
  },
};

export const FeedbackForm: Story = {
  args: {
    label: "Feedback",
    placeholder: "Please share your feedback...",
    helperText: "Your feedback helps us improve",
    rows: 4,
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <InputTextarea label="Default State" placeholder="Enter message..." />

      <InputTextarea
        label="With Helper Text"
        placeholder="Enter message..."
        helperText="Provide detailed information"
      />

      <InputTextarea
        label="Error State"
        placeholder="Enter message..."
        error="This field is required"
      />

      <InputTextarea
        label="Disabled State"
        placeholder="Enter message..."
        disabled
      />

      <InputTextarea
        label="Required Field"
        placeholder="Enter message..."
        required
      />
    </div>
  ),
};
