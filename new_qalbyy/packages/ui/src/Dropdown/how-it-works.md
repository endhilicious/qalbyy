# Dropdown Component

A flexible dropdown/select component with consistent styling, validation support, and customizable options.

## Usage

```tsx
import { Dropdown } from '@repo/ui/Dropdown/Dropdown';

// Basic usage
const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
];

<Dropdown
  options={options}
  placeholder="Select an option..."
/>

// With label and validation
<Dropdown
  label="Country"
  options={countryOptions}
  placeholder="Select your country"
  error="Please select a country"
  required
/>
```

## Props

| Prop          | Type                                 | Default     | Description                                              |
| ------------- | ------------------------------------ | ----------- | -------------------------------------------------------- |
| `options`     | `DropdownOption[]`                   | -           | Array of dropdown options                                |
| `label`       | `string`                             | -           | Label text displayed above the dropdown                  |
| `error`       | `string`                             | -           | Error message displayed below the dropdown               |
| `helperText`  | `string`                             | -           | Helper text displayed below the dropdown (when no error) |
| `placeholder` | `string`                             | -           | Placeholder text for the dropdown                        |
| `variant`     | `'default' \| 'outline' \| 'filled'` | `'default'` | Visual style variant                                     |
| `size`        | `'sm' \| 'md' \| 'lg'`               | `'md'`      | Dropdown size                                            |
| `disabled`    | `boolean`                            | `false`     | Disable the dropdown                                     |
| `required`    | `boolean`                            | `false`     | Mark field as required                                   |
| `className`   | `string`                             | -           | Additional CSS classes                                   |

## DropdownOption Interface

```tsx
interface DropdownOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}
```

## Features

- **Custom Styling**: Consistent with other input components
- **Validation Support**: Error and helper text display
- **Disabled Options**: Individual options can be disabled
- **Accessibility**: Proper labels and ARIA attributes
- **Responsive**: Adapts to different screen sizes

## Variants

- **default**: Standard dropdown with border
- **outline**: Dropdown with thicker border
- **filled**: Dropdown with background fill

## Sizes

- **sm**: Small height (32px)
- **md**: Medium height (40px) - default
- **lg**: Large height (48px)

## Examples

### Basic dropdown

```tsx
const colors = [
  { value: "red", label: "Red" },
  { value: "blue", label: "Blue" },
  { value: "green", label: "Green" },
];

<Dropdown
  label="Favorite Color"
  options={colors}
  placeholder="Choose a color"
/>;
```

### With validation

```tsx
<Dropdown
  label="Country"
  options={countries}
  placeholder="Select your country"
  error="Country is required"
  required
/>
```

### With disabled options

```tsx
const statusOptions = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
  { value: "suspended", label: "Suspended", disabled: true },
];

<Dropdown label="Status" options={statusOptions} placeholder="Select status" />;
```

### Form integration

```tsx
const [selectedCountry, setSelectedCountry] = useState("");

<Dropdown
  label="Country"
  options={countries}
  value={selectedCountry}
  onChange={(e) => setSelectedCountry(e.target.value)}
  required
/>;
```
