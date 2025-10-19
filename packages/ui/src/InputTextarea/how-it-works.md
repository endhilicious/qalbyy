# InputTextarea Component

A versatile textarea component for multi-line text input with consistent styling and flexible resizing options.

## Usage

```tsx
import { InputTextarea } from '@repo/ui/InputTextarea/InputTextarea';

// Basic usage
<InputTextarea placeholder="Enter your message..." />

// With label and validation
<InputTextarea
  label="Description"
  placeholder="Enter description"
  error="Description is required"
  required
/>

// Different variants and sizes
<InputTextarea
  label="Feedback"
  variant="outline"
  size="lg"
  resize="both"
  helperText="Your feedback helps us improve"
/>
```

## Props

| Prop          | Type                                             | Default      | Description                                              |
| ------------- | ------------------------------------------------ | ------------ | -------------------------------------------------------- |
| `label`       | `string`                                         | -            | Label text displayed above the textarea                  |
| `error`       | `string`                                         | -            | Error message displayed below the textarea               |
| `helperText`  | `string`                                         | -            | Helper text displayed below the textarea (when no error) |
| `variant`     | `'default' \| 'outline' \| 'filled'`             | `'default'`  | Visual style variant                                     |
| `size`        | `'sm' \| 'md' \| 'lg'`                           | `'md'`       | Textarea size                                            |
| `resize`      | `'none' \| 'vertical' \| 'horizontal' \| 'both'` | `'vertical'` | Resize behavior                                          |
| `disabled`    | `boolean`                                        | `false`      | Disable the textarea                                     |
| `required`    | `boolean`                                        | `false`      | Mark field as required                                   |
| `placeholder` | `string`                                         | -            | Placeholder text                                         |
| `rows`        | `number`                                         | -            | Number of visible text lines                             |
| `className`   | `string`                                         | -            | Additional CSS classes                                   |

## Features

- **Flexible Sizing**: Multiple size options (sm, md, lg)
- **Resize Control**: Control how users can resize the textarea
- **Consistent Styling**: Matches other input components
- **Accessibility**: Proper labels and ARIA attributes
- **Validation Support**: Error and helper text display

## Resize Options

- **none**: Textarea cannot be resized
- **vertical**: Can only resize vertically (default)
- **horizontal**: Can only resize horizontally
- **both**: Can resize in both directions

## Examples

### Basic textarea

```tsx
<InputTextarea label="Message" placeholder="Enter your message" rows={4} />
```

### Feedback form

```tsx
<InputTextarea
  label="Feedback"
  placeholder="Please share your feedback..."
  helperText="Your feedback helps us improve"
  resize="both"
  rows={5}
/>
```

### Fixed size textarea

```tsx
<InputTextarea
  label="Description"
  placeholder="Enter description"
  resize="none"
  rows={3}
/>
```

### With validation

```tsx
<InputTextarea
  label="Comment"
  placeholder="Enter your comment"
  error="Comment is required"
  required
/>
```
