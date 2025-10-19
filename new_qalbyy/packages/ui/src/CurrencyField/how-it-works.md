# How CurrencyField Component Works

## Overview
The CurrencyField component is a specialized input field designed for handling monetary values across different currencies. It provides automatic formatting, validation, and a user-friendly interface for entering currency amounts.

## Core Functionality

### 1. Multi-Currency Support
- **Supported Currencies**: IDR, USD, EUR, JPY
- **Automatic Formatting**: Formats numbers according to currency and locale conventions
- **Currency Symbols**: Displays appropriate currency symbols (Rp, $, €, ¥)
- **Locale-Aware**: Uses proper number formatting for different regions

### 2. Input Behavior
- **Focus/Blur States**: Shows raw numbers when focused, formatted currency when blurred
- **Real-time Validation**: Prevents invalid characters during typing
- **Min/Max Constraints**: Enforces minimum and maximum value limits
- **Decimal Support**: Handles decimal places appropriately (no decimals for JPY)

### 3. User Experience Features
- **Visual Feedback**: Different states for normal, focused, error, and disabled
- **Helper Text**: Contextual guidance for input format
- **Error Handling**: Clear error messages with visual indicators
- **Accessibility**: Full keyboard navigation and screen reader support

## Props Interface

```typescript
interface CurrencyFieldProps {
  value: number;
  onChange: (value: number) => void;
  placeholder?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  error?: string;
  min?: number;
  max?: number;
  currency?: 'IDR' | 'USD' | 'EUR' | 'JPY';
  locale?: string;
  showHelperText?: boolean;
  helperText?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outlined' | 'filled';
}
```

## Implementation Details

### State Management
```typescript
const [displayValue, setDisplayValue] = useState('');
const [isFocused, setIsFocused] = useState(false);
```

- **displayValue**: Controls what's shown in the input field
- **isFocused**: Tracks focus state to switch between raw and formatted display

### Currency Formatting Logic

#### Format to Currency
```typescript
const formatToCurrency = (amount: number): string => {
  // Handles different currency formatting rules
  // IDR: Custom formatting with Rp prefix
  // Others: Uses Intl.NumberFormat for proper localization
}
```

#### Parse from Currency
```typescript
const parseFromCurrency = (currencyString: string): string => {
  // Removes currency symbols and formatting
  // Converts formatted string back to raw number
}
```

### Input Validation
- **Character Filtering**: Only allows numbers and decimal points (except JPY)
- **Keyboard Restrictions**: Prevents invalid key presses
- **Range Validation**: Enforces min/max constraints on blur

### Event Handlers

#### Focus Handler
- Switches to raw number display
- Removes currency formatting for easier editing

#### Blur Handler
- Applies min/max constraints
- Formats value back to currency display
- Triggers onChange if value changed

#### Change Handler
- Validates input in real-time
- Updates display value
- Maintains cursor position

## Styling System

### Size Variants
```typescript
const sizeClasses = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-3 py-2 text-base',
  lg: 'px-4 py-3 text-lg',
};
```

### Visual Variants
```typescript
const variantClasses = {
  default: 'border border-gray-300 bg-white',
  outlined: 'border-2 border-gray-300 bg-transparent',
  filled: 'border-0 bg-gray-100',
};
```

### State-Based Styling
- **Normal**: Standard border and background
- **Focused**: Blue border and ring for focus indication
- **Error**: Red border and error message display
- **Disabled**: Grayed out appearance with disabled cursor

## Currency-Specific Behavior

### Indonesian Rupiah (IDR)
- **Format**: Rp 1.500.000
- **Locale**: id-ID
- **Decimals**: Not typically used
- **Separator**: Dot for thousands

### US Dollar (USD)
- **Format**: $1,500.50
- **Locale**: en-US
- **Decimals**: 2 decimal places
- **Separator**: Comma for thousands, dot for decimals

### Euro (EUR)
- **Format**: €1.500,50
- **Locale**: de-DE
- **Decimals**: 2 decimal places
- **Separator**: Dot for thousands, comma for decimals

### Japanese Yen (JPY)
- **Format**: ¥1,500
- **Locale**: ja-JP
- **Decimals**: No decimal places
- **Separator**: Comma for thousands

## Usage Patterns

### Basic Usage
```tsx
const [amount, setAmount] = useState(0);

<CurrencyField
  value={amount}
  onChange={setAmount}
  label="Price"
  currency="USD"
/>
```

### With Validation
```tsx
<CurrencyField
  value={price}
  onChange={setPrice}
  label="Product Price"
  currency="IDR"
  min={1000}
  max={10000000}
  required
  error={priceError}
/>
```

### Different Variants
```tsx
<CurrencyField
  value={amount}
  onChange={setAmount}
  variant="outlined"
  size="lg"
  currency="EUR"
/>
```

## Accessibility Features

### ARIA Support
- Proper labeling with `aria-label` and `aria-describedby`
- Error state communication to screen readers
- Required field indication

### Keyboard Navigation
- Full keyboard accessibility
- Tab navigation support
- Enter key handling for form submission

### Screen Reader Support
- Descriptive helper text
- Error message announcements
- Currency type indication

## Best Practices

### Input Validation
- Always validate on both client and server side
- Provide clear error messages
- Use appropriate min/max constraints

### User Experience
- Show helper text to guide users
- Provide immediate feedback for invalid input
- Use consistent currency formatting across the application

### Performance
- Debounce onChange events for expensive operations
- Minimize re-renders with proper memoization
- Use controlled components for predictable behavior

## Common Use Cases

1. **E-commerce**: Product pricing, cart totals, payment amounts
2. **Financial Applications**: Account balances, transaction amounts
3. **Expense Tracking**: Budget entries, expense amounts
4. **Invoicing**: Line item prices, tax amounts, totals
5. **Payroll Systems**: Salary amounts, deductions, bonuses

## Integration Notes

### Form Libraries
- Compatible with React Hook Form, Formik, and other form libraries
- Supports validation schemas (Yup, Zod, etc.)
- Works with form state management

### API Integration
- Handles currency conversion if needed
- Supports different backend currency formats
- Can integrate with payment processing systems

### Internationalization
- Supports multiple locales and currencies
- Can be extended for additional currencies
- Integrates with i18n libraries for labels and messages