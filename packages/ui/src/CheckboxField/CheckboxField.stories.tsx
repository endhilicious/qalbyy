import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { CheckboxField, CheckboxFieldProps } from './CheckboxField';

const meta: Meta<typeof CheckboxField> = {
  title: 'Components/CheckboxField',
  component: CheckboxField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile checkbox component that supports both single checkbox and multiple checkbox group modes.',
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
    color: {
      control: { type: 'select' },
      options: ['blue', 'green', 'purple', 'red', 'yellow'],
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
    indeterminate: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Single checkbox wrapper
const SingleCheckboxWrapper = (args: CheckboxFieldProps) => {
  const [checked, setChecked] = useState<boolean>(args.checked || false);
  
  return (
    <div className="w-96">
      <CheckboxField
        {...args}
        checked={checked}
        onChange={setChecked}
      />
      <div className="mt-4 p-3 bg-gray-100 rounded">
        <strong>Checked:</strong> {checked ? 'Yes' : 'No'}
      </div>
    </div>
  );
};

// Multiple checkbox wrapper
const MultipleCheckboxWrapper = (args: CheckboxFieldProps) => {
  const [values, setValues] = useState<(string | number)[]>(args.value || []);
  
  return (
    <div className="w-96">
      <CheckboxField
        {...args}
        value={values}
        onMultiChange={setValues}
      />
      <div className="mt-4 p-3 bg-gray-100 rounded">
        <strong>Selected Values:</strong> {values.length > 0 ? values.join(', ') : 'None'}
      </div>
    </div>
  );
};

export const SingleCheckbox: Story = {
  render: SingleCheckboxWrapper,
  args: {
    label: 'I agree to the terms and conditions',
    description: 'Please read our terms and conditions before proceeding',
  },
};

export const SingleCheckboxRequired: Story = {
  render: SingleCheckboxWrapper,
  args: {
    label: 'Required checkbox',
    required: true,
    helperText: 'This checkbox must be checked to continue',
  },
};

export const SingleCheckboxWithError: Story = {
  render: SingleCheckboxWrapper,
  args: {
    label: 'Accept privacy policy',
    error: 'You must accept the privacy policy to continue',
    required: true,
  },
};

export const SingleCheckboxDisabled: Story = {
  render: SingleCheckboxWrapper,
  args: {
    label: 'Disabled checkbox',
    description: 'This checkbox is disabled',
    disabled: true,
    checked: true,
  },
};

export const SingleCheckboxIndeterminate: Story = {
  render: SingleCheckboxWrapper,
  args: {
    label: 'Indeterminate checkbox',
    description: 'This checkbox shows an indeterminate state',
    indeterminate: true,
  },
};

export const MultipleCheckboxes: Story = {
  render: MultipleCheckboxWrapper,
  args: {
    groupLabel: 'Select your interests',
    options: [
      { value: 'technology', label: 'Technology' },
      { value: 'sports', label: 'Sports' },
      { value: 'music', label: 'Music' },
      { value: 'travel', label: 'Travel' },
    ],
  },
};

export const MultipleCheckboxesWithDescriptions: Story = {
  render: MultipleCheckboxWrapper,
  args: {
    groupLabel: 'Choose your subscription preferences',
    options: [
      { 
        value: 'newsletter', 
        label: 'Newsletter', 
        description: 'Weekly updates about new features and content' 
      },
      { 
        value: 'promotions', 
        label: 'Promotions', 
        description: 'Special offers and discounts' 
      },
      { 
        value: 'updates', 
        label: 'Product Updates', 
        description: 'Important announcements and product changes' 
      },
    ],
  },
};

export const MultipleCheckboxesPreselected: Story = {
  render: MultipleCheckboxWrapper,
  args: {
    groupLabel: 'Notification settings',
    value: ['email', 'push'],
    options: [
      { value: 'email', label: 'Email notifications' },
      { value: 'sms', label: 'SMS notifications' },
      { value: 'push', label: 'Push notifications' },
      { value: 'in_app', label: 'In-app notifications' },
    ],
  },
};

export const MultipleCheckboxesHorizontal: Story = {
  render: MultipleCheckboxWrapper,
  args: {
    groupLabel: 'Days of the week',
    direction: 'horizontal',
    options: [
      { value: 'mon', label: 'Mon' },
      { value: 'tue', label: 'Tue' },
      { value: 'wed', label: 'Wed' },
      { value: 'thu', label: 'Thu' },
      { value: 'fri', label: 'Fri' },
    ],
  },
};

export const MultipleCheckboxesWithDisabled: Story = {
  render: MultipleCheckboxWrapper,
  args: {
    groupLabel: 'Available features',
    options: [
      { value: 'basic', label: 'Basic features', description: 'Always available' },
      { value: 'premium', label: 'Premium features', description: 'Requires subscription', disabled: true },
      { value: 'beta', label: 'Beta features', description: 'Experimental features' },
    ],
  },
};

export const MultipleCheckboxesWithError: Story = {
  render: MultipleCheckboxWrapper,
  args: {
    groupLabel: 'Required selections',
    required: true,
    error: 'Please select at least one option',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
  },
};

export const SmallSize: Story = {
  render: SingleCheckboxWrapper,
  args: {
    label: 'Small checkbox',
    size: 'sm',
    description: 'This is a small-sized checkbox',
  },
};

export const LargeSize: Story = {
  render: SingleCheckboxWrapper,
  args: {
    label: 'Large checkbox',
    size: 'lg',
    description: 'This is a large-sized checkbox',
  },
};

export const GreenColor: Story = {
  render: SingleCheckboxWrapper,
  args: {
    label: 'Green checkbox',
    color: 'green',
    description: 'This checkbox uses green color theme',
  },
};

export const PurpleColor: Story = {
  render: MultipleCheckboxWrapper,
  args: {
    groupLabel: 'Purple checkboxes',
    color: 'purple',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
  },
};

export const RedColor: Story = {
  render: SingleCheckboxWrapper,
  args: {
    label: 'Red checkbox',
    color: 'red',
    description: 'This checkbox uses red color theme',
  },
};

export const WithoutGroupLabel: Story = {
  render: MultipleCheckboxWrapper,
  args: {
    options: [
      { value: 'terms', label: 'I agree to the terms of service' },
      { value: 'privacy', label: 'I agree to the privacy policy' },
      { value: 'marketing', label: 'I want to receive marketing emails' },
    ],
  },
};

export const FullWidth: Story = {
  render: (args: CheckboxFieldProps) => {
    const [values, setValues] = useState<(string | number)[]>(args.value || []);
    
    return (
      <div className="w-full max-w-2xl">
        <CheckboxField
          {...args}
          value={values}
          onMultiChange={setValues}
          fullWidth
        />
        <div className="mt-4 p-3 bg-gray-100 rounded">
          <strong>Selected Values:</strong> {values.length > 0 ? values.join(', ') : 'None'}
        </div>
      </div>
    );
  },
  args: {
    groupLabel: 'Full width checkbox group',
    options: [
      { value: 'option1', label: 'Option 1', description: 'This is a longer description for option 1' },
      { value: 'option2', label: 'Option 2', description: 'This is a longer description for option 2' },
      { value: 'option3', label: 'Option 3', description: 'This is a longer description for option 3' },
    ],
  },
};