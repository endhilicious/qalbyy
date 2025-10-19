import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SearchableSelectField } from './SearchableSelectField';
import type { SearchableSelectFieldProps, SearchableSelectOption } from './SearchableSelectField';

const meta: Meta<typeof SearchableSelectField> = {
  title: 'Components/SearchableSelectField',
  component: SearchableSelectField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A reusable searchable select dropdown component with filtering capabilities, keyboard navigation, and accessibility features.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      description: 'Array of options to display in the dropdown',
    },
    value: {
      description: 'Currently selected value',
    },
    onChange: {
      description: 'Callback function called when selection changes',
    },
    placeholder: {
      description: 'Placeholder text shown when no option is selected',
    },
    searchPlaceholder: {
      description: 'Placeholder text for the search input',
    },
    label: {
      description: 'Label text for the field',
    },
    helperText: {
      description: 'Helper text shown below the field',
    },
    error: {
      description: 'Error message to display',
    },
    disabled: {
      description: 'Whether the field is disabled',
    },
    required: {
      description: 'Whether the field is required',
    },
    searchable: {
      description: 'Whether to show search input in dropdown',
    },
    clearable: {
      description: 'Whether to allow clearing the selection',
    },
    noOptionsMessage: {
      description: 'Message shown when no options match the search',
    },
    maxHeight: {
      description: 'Maximum height for the dropdown options area',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchableSelectField>;

// Sample options for stories
const sampleOptions: SearchableSelectOption[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
  { value: 'fig', label: 'Fig' },
  { value: 'grape', label: 'Grape' },
  { value: 'honeydew', label: 'Honeydew' },
  { value: 'kiwi', label: 'Kiwi' },
  { value: 'lemon', label: 'Lemon' },
];

const countryOptions: SearchableSelectOption[] = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
  { value: 'au', label: 'Australia' },
  { value: 'br', label: 'Brazil' },
  { value: 'in', label: 'India' },
  { value: 'cn', label: 'China' },
];

const optionsWithDisabled: SearchableSelectOption[] = [
  { value: 'option1', label: 'Available Option 1' },
  { value: 'option2', label: 'Available Option 2' },
  { value: 'option3', label: 'Disabled Option', disabled: true },
  { value: 'option4', label: 'Available Option 3' },
  { value: 'option5', label: 'Another Disabled Option', disabled: true },
];

// Interactive wrapper component for stories
const InteractiveWrapper = (args: SearchableSelectFieldProps) => {
  const [value, setValue] = useState<string | number>(args.value || '');
  
  return (
    <div className="w-80">
      <SearchableSelectField
        {...args}
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export const Default: Story = {
  render: InteractiveWrapper,
  args: {
    options: sampleOptions,
    placeholder: 'Select a fruit',
    label: 'Favorite Fruit',
    helperText: 'Choose your favorite fruit from the list',
  },
};

export const WithSearch: Story = {
  render: InteractiveWrapper,
  args: {
    options: countryOptions,
    placeholder: 'Select a country',
    label: 'Country',
    searchable: true,
    searchPlaceholder: 'Search countries...',
    helperText: 'Type to search for a country',
  },
};

export const WithoutSearch: Story = {
  render: InteractiveWrapper,
  args: {
    options: sampleOptions,
    placeholder: 'Select an option',
    label: 'Simple Select',
    searchable: false,
    helperText: 'This dropdown does not have search functionality',
  },
};

export const Clearable: Story = {
  render: InteractiveWrapper,
  args: {
    options: sampleOptions,
    placeholder: 'Select a fruit',
    label: 'Clearable Select',
    clearable: true,
    helperText: 'You can clear the selection using the X button',
  },
};

export const Required: Story = {
  render: InteractiveWrapper,
  args: {
    options: sampleOptions,
    placeholder: 'Select a fruit',
    label: 'Required Field',
    required: true,
    helperText: 'This field is required',
  },
};

export const WithError: Story = {
  render: InteractiveWrapper,
  args: {
    options: sampleOptions,
    placeholder: 'Select a fruit',
    label: 'Field with Error',
    error: 'Please select a valid option',
  },
};

export const Disabled: Story = {
  render: InteractiveWrapper,
  args: {
    options: sampleOptions,
    placeholder: 'Select a fruit',
    label: 'Disabled Field',
    disabled: true,
    helperText: 'This field is disabled',
  },
};

export const WithDisabledOptions: Story = {
  render: InteractiveWrapper,
  args: {
    options: optionsWithDisabled,
    placeholder: 'Select an option',
    label: 'Options with Disabled Items',
    helperText: 'Some options are disabled and cannot be selected',
  },
};

export const PreSelected: Story = {
  render: InteractiveWrapper,
  args: {
    options: sampleOptions,
    value: 'banana',
    placeholder: 'Select a fruit',
    label: 'Pre-selected Value',
    helperText: 'This field has a pre-selected value',
  },
};

export const CustomHeight: Story = {
  render: InteractiveWrapper,
  args: {
    options: sampleOptions,
    placeholder: 'Select a fruit',
    label: 'Custom Max Height',
    maxHeight: '120px',
    helperText: 'This dropdown has a custom maximum height',
  },
};

export const LongList: Story = {
  render: InteractiveWrapper,
  args: {
    options: [
      ...sampleOptions,
      { value: 'mango', label: 'Mango' },
      { value: 'orange', label: 'Orange' },
      { value: 'papaya', label: 'Papaya' },
      { value: 'peach', label: 'Peach' },
      { value: 'pear', label: 'Pear' },
      { value: 'pineapple', label: 'Pineapple' },
      { value: 'plum', label: 'Plum' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'watermelon', label: 'Watermelon' },
    ],
    placeholder: 'Select a fruit',
    label: 'Long List',
    searchable: true,
    helperText: 'Search through a longer list of options',
  },
};

export const NoOptions: Story = {
  render: InteractiveWrapper,
  args: {
    options: [],
    placeholder: 'No options available',
    label: 'Empty Options',
    noOptionsMessage: 'No fruits available at the moment',
    helperText: 'This dropdown has no options',
  },
};