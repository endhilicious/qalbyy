# InputText Component

A versatile text input component that provides consistent styling and behavior across the application.

## Usage

```tsx
import { InputText } from '@repo/ui/InputText/InputText';

// Basic usage
<InputText placeholder="Enter text..." />

// With label and validation
<InputText
  label="Username"
  placeholder="Enter your username"
  error="Username is required"
  required
/>

// Different variants and sizes
<InputText
  label="Email"
  variant="outline"
  size="lg"
  type="email"
  helperText="We'll never share your email"
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
| `type`        | `string`                             | `'text'`    | HTML input type                                       |
| `placeholder` | `string`                             | -           | Placeholder text                                      |
| `className`   | `string`                             | -           | Additional CSS classes                                |

## Variants

- **default**: Standard input with border
- **outline**: Input with thicker border
- **filled**: Input with background fill

## Sizes

- **sm**: Small height (32px)
- **md**: Medium height (40px) - default
- **lg**: Large height (48px)

## Examples

### Form with validation

```tsx
<InputText
  label="Full Name"
  placeholder="Enter your full name"
  required
  helperText="This will be displayed on your profile"
/>
```

### Error state

```tsx
<InputText
  label="Email"
  type="email"
  placeholder="Enter your email"
  error="Please enter a valid email address"
/>
```

### Different input types

```tsx
<InputText type="password" label="Password" />
<InputText type="email" label="Email" />
<InputText type="number" label="Age" min={0} max={120} />
```
