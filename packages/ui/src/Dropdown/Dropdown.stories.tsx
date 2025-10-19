import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";

const countries = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "uk", label: "United Kingdom" },
  { value: "au", label: "Australia" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
  { value: "jp", label: "Japan" },
  { value: "cn", label: "China" },
];

const colors = [
  { value: "red", label: "Red" },
  { value: "blue", label: "Blue" },
  { value: "green", label: "Green" },
  { value: "yellow", label: "Yellow" },
  { value: "purple", label: "Purple" },
  { value: "orange", label: "Orange" },
];

const priorities = [
  { value: "low", label: "Low Priority" },
  { value: "medium", label: "Medium Priority" },
  { value: "high", label: "High Priority" },
  { value: "urgent", label: "Urgent" },
];

const statusOptions = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
  { value: "pending", label: "Pending" },
  { value: "suspended", label: "Suspended", disabled: true },
];

const meta = {
  title: "@Repo/UI/Dropdown",
  component: Dropdown,
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
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: colors,
    placeholder: "Select a color...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Country",
    options: countries,
    placeholder: "Select your country",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Priority Level",
    options: priorities,
    placeholder: "Select priority",
    helperText: "Choose the priority level for this task",
  },
};

export const WithError: Story = {
  args: {
    label: "Status",
    options: statusOptions,
    placeholder: "Select status",
    error: "Please select a valid status",
  },
};

export const Disabled: Story = {
  args: {
    label: "Color",
    options: colors,
    placeholder: "Select a color",
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    label: "Size",
    options: colors,
    placeholder: "Select size",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    label: "Category",
    options: colors,
    placeholder: "Select category",
    size: "lg",
  },
};

export const Outline: Story = {
  args: {
    label: "Style",
    options: colors,
    placeholder: "Select style",
    variant: "outline",
  },
};

export const Filled: Story = {
  args: {
    label: "Theme",
    options: colors,
    placeholder: "Select theme",
    variant: "filled",
  },
};

export const Required: Story = {
  args: {
    label: "Required Field",
    options: countries,
    placeholder: "Please select a country",
    required: true,
  },
};

export const WithValue: Story = {
  args: {
    label: "Pre-selected",
    options: countries,
    defaultValue: "us",
  },
};

export const WithDisabledOptions: Story = {
  args: {
    label: "Status",
    options: statusOptions,
    placeholder: "Select status",
    helperText: "Some options may be disabled",
  },
};

export const CountrySelector: Story = {
  args: {
    label: "Country",
    options: countries,
    placeholder: "Choose your country",
    helperText: "This will be used for shipping calculations",
  },
};

export const ColorPicker: Story = {
  args: {
    label: "Favorite Color",
    options: colors,
    placeholder: "Pick your favorite color",
    variant: "outline",
  },
};

export const PrioritySelector: Story = {
  args: {
    label: "Task Priority",
    options: priorities,
    placeholder: "Select priority level",
    variant: "filled",
    size: "lg",
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <Dropdown
        label="Default State"
        options={colors}
        placeholder="Select an option..."
      />

      <Dropdown
        label="With Helper Text"
        options={colors}
        placeholder="Select an option..."
        helperText="This is helper text"
      />

      <Dropdown
        label="Error State"
        options={colors}
        placeholder="Select an option..."
        error="Please select a valid option"
      />

      <Dropdown
        label="Disabled State"
        options={colors}
        placeholder="Select an option..."
        disabled
      />

      <Dropdown
        label="Required Field"
        options={colors}
        placeholder="Select an option..."
        required
      />
    </div>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <Dropdown
        label="Small Size"
        options={colors}
        placeholder="Small dropdown"
        size="sm"
      />

      <Dropdown
        label="Medium Size (Default)"
        options={colors}
        placeholder="Medium dropdown"
        size="md"
      />

      <Dropdown
        label="Large Size"
        options={colors}
        placeholder="Large dropdown"
        size="lg"
      />
    </div>
  ),
};

export const DifferentVariants: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <Dropdown
        label="Default Variant"
        options={colors}
        placeholder="Default style"
        variant="default"
      />

      <Dropdown
        label="Outline Variant"
        options={colors}
        placeholder="Outline style"
        variant="outline"
      />

      <Dropdown
        label="Filled Variant"
        options={colors}
        placeholder="Filled style"
        variant="filled"
      />
    </div>
  ),
};
