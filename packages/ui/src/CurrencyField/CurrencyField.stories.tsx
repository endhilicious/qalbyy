import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { CurrencyField } from './CurrencyField';

const meta: Meta<typeof CurrencyField> = {
  title: 'Components/CurrencyField',
  component: CurrencyField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A reusable currency input field component with support for multiple currencies, formatting, and validation.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'number',
      description: 'The current numeric value',
    },
    onChange: {
      action: 'changed',
      description: 'Callback fired when the value changes',
    },
    currency: {
      control: 'select',
      options: ['IDR', 'USD', 'EUR', 'JPY'],
      description: 'Currency type for formatting',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input field',
    },
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'filled'],
      description: 'Visual variant of the input field',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the field is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the field is required',
    },
    showHelperText: {
      control: 'boolean',
      description: 'Whether to show helper text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Template for interactive stories
const Template = (args: any) => {
  const [value, setValue] = useState(args.value || 0);
  
  return (
    <div className="w-80">
      <CurrencyField
        {...args}
        value={value}
        onChange={setValue}
      />
      <div className="mt-4 p-3 bg-gray-100 rounded text-sm">
        <strong>Current Value:</strong> {value}
      </div>
    </div>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    label: 'Amount',
    placeholder: 'Enter amount',
    value: 0,
  },
};

export const WithInitialValue: Story = {
  render: Template,
  args: {
    label: 'Price',
    value: 1500000,
    currency: 'IDR',
  },
};

export const USD: Story = {
  render: Template,
  args: {
    label: 'Price (USD)',
    value: 1250.50,
    currency: 'USD',
    locale: 'en-US',
  },
};

export const EUR: Story = {
  render: Template,
  args: {
    label: 'Price (EUR)',
    value: 999.99,
    currency: 'EUR',
    locale: 'de-DE',
  },
};

export const JPY: Story = {
  render: Template,
  args: {
    label: 'Price (JPY)',
    value: 150000,
    currency: 'JPY',
    locale: 'ja-JP',
  },
};

export const Required: Story = {
  render: Template,
  args: {
    label: 'Required Amount',
    required: true,
    value: 0,
  },
};

export const WithError: Story = {
  render: Template,
  args: {
    label: 'Amount',
    value: 0,
    error: 'Amount is required',
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    label: 'Disabled Field',
    value: 500000,
    disabled: true,
  },
};

export const WithMinMax: Story = {
  render: Template,
  args: {
    label: 'Amount (Min: 100, Max: 10000)',
    value: 5000,
    min: 100,
    max: 10000,
    helperText: 'Amount must be between 100 and 10,000',
  },
};

export const SmallSize: Story = {
  render: Template,
  args: {
    label: 'Small Size',
    value: 1000,
    size: 'sm',
  },
};

export const LargeSize: Story = {
  render: Template,
  args: {
    label: 'Large Size',
    value: 1000,
    size: 'lg',
  },
};

export const OutlinedVariant: Story = {
  render: Template,
  args: {
    label: 'Outlined Variant',
    value: 1000,
    variant: 'outlined',
  },
};

export const FilledVariant: Story = {
  render: Template,
  args: {
    label: 'Filled Variant',
    value: 1000,
    variant: 'filled',
  },
};

export const CustomHelperText: Story = {
  render: Template,
  args: {
    label: 'Custom Helper',
    value: 0,
    helperText: 'Enter the total amount in your local currency',
    showHelperText: true,
  },
};

export const NoHelperText: Story = {
  render: Template,
  args: {
    label: 'No Helper Text',
    value: 0,
    showHelperText: false,
  },
};

export const AllCurrencies: Story = {
  render: () => {
    const [values, setValues] = useState({
      IDR: 1500000,
      USD: 1250.50,
      EUR: 999.99,
      JPY: 150000,
    });

    return (
      <div className="space-y-6 w-80">
        <CurrencyField
          label="Indonesian Rupiah"
          value={values.IDR}
          onChange={(val) => setValues(prev => ({ ...prev, IDR: val }))}
          currency="IDR"
        />
        <CurrencyField
          label="US Dollar"
          value={values.USD}
          onChange={(val) => setValues(prev => ({ ...prev, USD: val }))}
          currency="USD"
        />
        <CurrencyField
          label="Euro"
          value={values.EUR}
          onChange={(val) => setValues(prev => ({ ...prev, EUR: val }))}
          currency="EUR"
        />
        <CurrencyField
          label="Japanese Yen"
          value={values.JPY}
          onChange={(val) => setValues(prev => ({ ...prev, JPY: val }))}
          currency="JPY"
        />
        
        <div className="mt-6 p-4 bg-gray-100 rounded">
          <h3 className="font-semibold mb-2">Current Values:</h3>
          <div className="space-y-1 text-sm">
            <div>IDR: {values.IDR.toLocaleString('id-ID')}</div>
            <div>USD: {values.USD.toLocaleString('en-US')}</div>
            <div>EUR: {values.EUR.toLocaleString('de-DE')}</div>
            <div>JPY: {values.JPY.toLocaleString('ja-JP')}</div>
          </div>
        </div>
      </div>
    );
  },
};

export const Playground: Story = {
  render: Template,
  args: {
    label: 'Playground',
    value: 1000000,
    currency: 'IDR',
    size: 'md',
    variant: 'default',
    required: false,
    disabled: false,
    showHelperText: true,
    placeholder: 'Enter amount',
  },
};