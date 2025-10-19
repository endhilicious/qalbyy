import type { Meta, StoryObj } from "@storybook/react";
import { InputDateTime } from "./InputDateTime";

const meta = {
  title: "@Repo/UI/InputDateTime",
  component: InputDateTime,
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
    required: {
      control: { type: "boolean" },
    },
    includeTime: {
      control: { type: "boolean" },
    },
    label: {
      control: { type: "text" },
    },
    error: {
      control: { type: "text" },
    },
    helperText: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof InputDateTime>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: "Start Date & Time",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Event Date",
    helperText: "Select the date and time for the event",
  },
};

export const WithError: Story = {
  args: {
    label: "End Date & Time",
    error: "End date must be after start date",
  },
};

export const Required: Story = {
  args: {
    label: "Registration Deadline",
    required: true,
    helperText: "This field is required",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Field",
    disabled: true,
    value: "2024-01-15T10:30",
  },
};

export const DateOnly: Story = {
  args: {
    label: "Birth Date",
    includeTime: false,
    helperText: "Date only (no time selection)",
  },
};

export const Small: Story = {
  args: {
    label: "Small Input",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    label: "Large Input",
    size: "lg",
  },
};

export const Outline: Story = {
  args: {
    label: "Outline Variant",
    variant: "outline",
  },
};

export const Filled: Story = {
  args: {
    label: "Filled Variant",
    variant: "filled",
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: "Coming Soon Date",
    defaultValue: "2024-12-31T23:59",
    helperText: "Pre-filled with default value",
  },
};

export const MinMaxConstraints: Story = {
  args: {
    label: "Select Date (Within 30 days)",
    min: new Date().toISOString().slice(0, 16),
    max: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 16),
    helperText: "Can only select dates within the next 30 days",
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="space-y-6 w-96">
      <InputDateTime 
        label="Default State" 
        helperText="Select date and time"
      />

      <InputDateTime
        label="With Value"
        defaultValue="2024-12-25T15:30"
        helperText="Pre-filled value"
      />

      <InputDateTime
        label="Required Field"
        required
        helperText="This field is required"
      />

      <InputDateTime
        label="Error State"
        error="Invalid date selected"
      />

      <InputDateTime 
        label="Disabled State" 
        disabled 
        value="2024-01-01T00:00"
      />

      <InputDateTime
        label="Date Only"
        includeTime={false}
        helperText="Date selection without time"
      />
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="w-96 space-y-4 p-6 bg-white rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Event Registration Form
      </h3>
      
      <InputDateTime
        label="Coming Soon Date"
        helperText="When will this event be announced?"
      />

      <InputDateTime
        label="Start Date & Time"
        required
        helperText="Event start date and time"
      />

      <InputDateTime
        label="End Date & Time"
        required
        helperText="Event end date and time"
      />

      <div className="pt-4">
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
          Submit Registration
        </button>
      </div>
    </div>
  ),
};
