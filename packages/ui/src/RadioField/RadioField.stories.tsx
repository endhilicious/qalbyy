import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { RadioField, RadioFieldProps } from './RadioField';

const meta: Meta<typeof RadioField> = {
  title: 'Components/RadioField',
  component: RadioField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A reusable radio button group component with customizable styling, validation, and accessibility features.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['vertical', 'horizontal'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive wrapper for stories
const InteractiveWrapper = (args: RadioFieldProps) => {
  const [value, setValue] = useState<string | number>(args.value || '');
  
  return (
    <div className="w-96">
      <RadioField
        {...args}
        value={value}
        onChange={setValue}
      />
      <div className="mt-4 p-3 bg-gray-100 rounded">
        <strong>Selected Value:</strong> {value || 'None'}
      </div>
    </div>
  );
};

export const Default: Story = {
  render: InteractiveWrapper,
  args: {
    label: 'Choose your preference',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
    onChange: () => {},
  },
};

export const WithDescriptions: Story = {
  render: InteractiveWrapper,
  args: {
    label: 'Select a plan',
    options: [
      { 
        value: 'basic', 
        label: 'Basic Plan', 
        description: 'Perfect for individuals getting started' 
      },
      { 
        value: 'pro', 
        label: 'Pro Plan', 
        description: 'Great for growing teams and businesses' 
      },
      { 
        value: 'enterprise', 
        label: 'Enterprise Plan', 
        description: 'Advanced features for large organizations' 
      },
    ],
    onChange: () => {},
  },
};

export const WithPreselectedValue: Story = {
  render: InteractiveWrapper,
  args: {
    label: 'Payment method',
    value: 'credit_card',
    options: [
      { value: 'credit_card', label: 'Credit Card' },
      { value: 'paypal', label: 'PayPal' },
      { value: 'bank_transfer', label: 'Bank Transfer' },
    ],
    onChange: () => {},
  },
};

export const HorizontalLayout: Story = {
  render: InteractiveWrapper,
  args: {
    label: 'Gender',
    direction: 'horizontal',
    options: [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
      { value: 'other', label: 'Other' },
    ],
    onChange: () => {},
  },
};

export const WithError: Story = {
  render: InteractiveWrapper,
  args: {
    label: 'Required selection',
    required: true,
    error: 'Please select an option',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    onChange: () => {},
  },
};

export const WithHelperText: Story = {
  render: InteractiveWrapper,
  args: {
    label: 'Newsletter subscription',
    helperText: 'You can change this preference later in your account settings',
    options: [
      { value: 'daily', label: 'Daily digest' },
      { value: 'weekly', label: 'Weekly summary' },
      { value: 'never', label: 'Never' },
    ],
    onChange: () => {},
  },
};

export const Disabled: Story = {
  render: InteractiveWrapper,
  args: {
    label: 'Disabled field',
    disabled: true,
    value: 'option2',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
    onChange: () => {},
  },
};

export const WithDisabledOptions: Story = {
  render: InteractiveWrapper,
  args: {
    label: 'Select availability',
    options: [
      { value: 'morning', label: 'Morning', description: 'Available' },
      { value: 'afternoon', label: 'Afternoon', description: 'Fully booked', disabled: true },
      { value: 'evening', label: 'Evening', description: 'Available' },
    ],
    onChange: () => {},
  },
};

export const SmallSize: Story = {
  render: InteractiveWrapper,
  args: {
    label: 'Small size',
    size: 'sm',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
    onChange: () => {},
  },
};

export const LargeSize: Story = {
  render: InteractiveWrapper,
  args: {
    label: 'Large size',
    size: 'lg',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
    onChange: () => {},
  },
};

export const WithoutLabel: Story = {
  render: InteractiveWrapper,
  args: {
    options: [
      { value: 'agree', label: 'I agree to the terms and conditions' },
      { value: 'disagree', label: 'I do not agree' },
    ],
    onChange: () => {},
  },
};

export const FullWidth: Story = {
  render: (args: RadioFieldProps) => {
    const [value, setValue] = useState<string | number>(args.value || '');
    
    return (
      <div className="w-full max-w-2xl">
        <RadioField
          {...args}
          value={value}
          onChange={setValue}
          fullWidth
        />
        <div className="mt-4 p-3 bg-gray-100 rounded">
          <strong>Selected Value:</strong> {value || 'None'}
        </div>
      </div>
    );
  },
  args: {
    label: 'Full width radio field',
    options: [
      { value: 'option1', label: 'Option 1', description: 'This is a longer description for option 1' },
      { value: 'option2', label: 'Option 2', description: 'This is a longer description for option 2' },
      { value: 'option3', label: 'Option 3', description: 'This is a longer description for option 3' },
    ],
    onChange: () => {},
  },
};