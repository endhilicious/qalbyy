# InputEmail Component

A specialized email input component with built-in email validation and consistent styling.

## Usage

```tsx
import { InputEmail } from '@repo/ui/InputEmail/InputEmail';

// Basic usage
<InputEmail placeholder="Enter your email..." />

// With label and validation
<InputEmail
  label="Email Address"
  placeholder="Enter your email"
  error="Please enter a valid email"
  required
/>

// Different variants and sizes
<InputEmail
  label="Work Email"
  variant="outline"
  size="lg"
  helperText="Use your company email"
/>
```

## Props

| Prop          | Type                                 | Default     | Description                                           |
| ------------- | ------------------------------------ | ----------- | ----------------------------------------------------- |
| `label`       | `string`                             | -           | Label text displayed above the input                  |
| `error`       | `string`                             | -           | Error message displayed below the input               |
| `helperText`  | `string`                             | -           | Helper text displayed below the input (when no error) |
| `variant`     | `'default' \| 'outline' \| 'filled'` | `'default'` | Visual style variant                                  |
| `size`        | `'sm' \| 'md' \| 'lg'`               | `'md'`      | Input size                                            |
| `disabled`    | `boolean`                            | `false`     | Disable the input                                     |
| `required`    | `boolean`                            | `false`     | Mark field as required                                |
| `placeholder` | `string`                             | -           | Placeholder text                                      |
| `className`   | `string`                             | -           | Additional CSS classes                                |

## Features

- **Email Type**: Automatically sets input type to "email"
- **Browser Validation**: Uses native HTML5 email validation
- **Consistent Styling**: Matches other input components
- **Accessibility**: Proper labels and ARIA attributes

## Examples

### Basic email field

```tsx
<InputEmail label="Email Address" placeholder="Enter your email" required />
```

### Work email field

```tsx
<InputEmail
  label="Work Email"
  placeholder="name@company.com"
  helperText="Use your company email address"
/>
```

### Email with validation

```tsx
<InputEmail
  label="Email"
  placeholder="Enter your email"
  error="Please enter a valid email address"
/>
```
