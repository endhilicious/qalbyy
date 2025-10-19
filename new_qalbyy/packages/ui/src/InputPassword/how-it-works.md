# InputPassword Component

A secure password input component with toggle visibility functionality and consistent styling.

## Usage

```tsx
import { InputPassword } from '@repo/ui/InputPassword/InputPassword';

// Basic usage
<InputPassword placeholder="Enter password..." />

// With label and validation
<InputPassword
  label="Password"
  placeholder="Enter your password"
  error="Password is required"
  required
/>

// Without toggle button
<InputPassword
  label="Password"
  showToggle={false}
  helperText="Password will be hidden"
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
| `showToggle`  | `boolean`                            | `true`      | Show/hide password toggle button                      |
| `disabled`    | `boolean`                            | `false`     | Disable the input                                     |
| `required`    | `boolean`                            | `false`     | Mark field as required                                |
| `placeholder` | `string`                             | -           | Placeholder text                                      |
| `className`   | `string`                             | -           | Additional CSS classes                                |

## Features

- **Toggle Visibility**: Click the eye icon to show/hide password
- **Consistent Styling**: Matches InputText component styling
- **Accessibility**: Proper labels and ARIA attributes
- **Responsive**: Adapts to different screen sizes

## Examples

### Basic password field

```tsx
<InputPassword label="Password" placeholder="Enter your password" required />
```

### Confirm password field

```tsx
<InputPassword
  label="Confirm Password"
  placeholder="Confirm your password"
  helperText="Must match your password"
/>
```

### Password with validation

```tsx
<InputPassword
  label="New Password"
  placeholder="Enter new password"
  error="Password must be at least 8 characters"
  helperText="Include uppercase, lowercase, and numbers"
/>
```
