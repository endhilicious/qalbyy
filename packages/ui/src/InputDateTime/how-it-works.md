# InputDateTime Component

## Overview

A reusable datetime input component built with React and TypeScript. Provides a consistent UI for date and time selection with support for various states, variants, and sizes.

## Features

- ✅ **DateTime & Date Modes**: Toggle between datetime-local and date input types
- ✅ **Multiple Variants**: default, outline, filled
- ✅ **Flexible Sizing**: sm, md, lg
- ✅ **Form Integration**: Supports all standard HTML input attributes
- ✅ **Error Handling**: Built-in error state with custom messages
- ✅ **Helper Text**: Additional context for users
- ✅ **Required Indicator**: Visual asterisk for required fields
- ✅ **Accessibility**: Proper label association and ARIA support
- ✅ **TypeScript**: Full type safety
- ✅ **Ref Forwarding**: Compatible with form libraries

## Usage

### Basic Usage

```tsx
import { InputDateTime } from "@repo/ui";

function MyForm() {
  const [date, setDate] = useState("");

  return (
    <InputDateTime
      label="Event Date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
    />
  );
}
```

### Date Only (No Time)

```tsx
<InputDateTime
  label="Birth Date"
  includeTime={false}
  value={birthDate}
  onChange={(e) => setBirthDate(e.target.value)}
/>
```

### With Validation

```tsx
<InputDateTime
  label="Start Date"
  required
  value={startDate}
  onChange={(e) => setStartDate(e.target.value)}
  error={errors.startDate}
  helperText="Select the event start date and time"
/>
```

### With Min/Max Constraints

```tsx
<InputDateTime
  label="Appointment Date"
  min={new Date().toISOString().slice(0, 16)}
  max={maxDate}
  value={appointment}
  onChange={(e) => setAppointment(e.target.value)}
/>
```

### Different Sizes

```tsx
// Small
<InputDateTime label="Small" size="sm" />

// Medium (default)
<InputDateTime label="Medium" size="md" />

// Large
<InputDateTime label="Large" size="lg" />
```

### Different Variants

```tsx
// Default
<InputDateTime label="Default" variant="default" />

// Outline
<InputDateTime label="Outline" variant="outline" />

// Filled
<InputDateTime label="Filled" variant="filled" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text displayed above input |
| `error` | `string` | - | Error message (shows red border and message) |
| `helperText` | `string` | - | Helper text shown below input |
| `variant` | `"default" \| "outline" \| "filled"` | `"default"` | Visual style variant |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Input size |
| `includeTime` | `boolean` | `true` | Include time selection (datetime-local vs date) |
| `required` | `boolean` | `false` | Mark as required (shows asterisk) |
| `disabled` | `boolean` | `false` | Disable input |
| `value` | `string` | - | Controlled value |
| `defaultValue` | `string` | - | Uncontrolled default value |
| `onChange` | `function` | - | Change handler |
| `min` | `string` | - | Minimum allowed date/time |
| `max` | `string` | - | Maximum allowed date/time |
| `className` | `string` | - | Additional CSS classes |

## Form Integration Examples

### React Hook Form

```tsx
import { useForm } from "react-hook-form";
import { InputDateTime } from "@repo/ui";

function EventForm() {
  const { register, formState: { errors } } = useForm();

  return (
    <form>
      <InputDateTime
        label="Event Start"
        {...register("startDate", { required: "Start date is required" })}
        error={errors.startDate?.message}
      />
    </form>
  );
}
```

### Formik

```tsx
import { useFormik } from "formik";
import { InputDateTime } from "@repo/ui";

function EventForm() {
  const formik = useFormik({
    initialValues: { startDate: "" },
    onSubmit: (values) => console.log(values),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputDateTime
        label="Event Start"
        name="startDate"
        value={formik.values.startDate}
        onChange={formik.handleChange}
        error={formik.errors.startDate}
      />
    </form>
  );
}
```

### Controlled Component

```tsx
function ActivityForm() {
  const [formData, setFormData] = useState({
    comingSoonDate: "",
    startDateTime: "",
    endDateTime: "",
  });

  return (
    <>
      <InputDateTime
        label="Coming Soon Date"
        value={formData.comingSoonDate}
        onChange={(e) => setFormData({ ...formData, comingSoonDate: e.target.value })}
      />

      <InputDateTime
        label="Start Date & Time"
        value={formData.startDateTime}
        onChange={(e) => setFormData({ ...formData, startDateTime: e.target.value })}
        required
      />

      <InputDateTime
        label="End Date & Time"
        value={formData.endDateTime}
        onChange={(e) => setFormData({ ...formData, endDateTime: e.target.value })}
        required
      />
    </>
  );
}
```

## Date Format

### datetime-local (default)
- Format: `YYYY-MM-DDTHH:mm`
- Example: `"2024-12-31T23:59"`

### date (includeTime={false})
- Format: `YYYY-MM-DD`
- Example: `"2024-12-31"`

## Accessibility

- Proper label association via `htmlFor` and `id`
- Error messages linked to input
- Keyboard navigation support
- Screen reader friendly
- Required field indicator

## Styling

The component uses Tailwind CSS classes and is fully customizable:

```tsx
// Custom className
<InputDateTime
  label="Custom Styled"
  className="shadow-lg"
/>
```

## Browser Compatibility

Works with all modern browsers that support `<input type="datetime-local">`:
- Chrome/Edge (full support)
- Firefox (full support)
- Safari (full support)
- Opera (full support)

**Note**: For older browsers, consider using a polyfill or date picker library.

## Best Practices

1. **Always provide a label** for accessibility
2. **Use helper text** to guide users
3. **Set min/max** constraints when applicable
4. **Handle errors** gracefully with clear messages
5. **Use controlled components** for form state management
6. **Format dates** properly before sending to API

## Common Patterns

### Event Date Range

```tsx
const [startDate, setStartDate] = useState("");
const [endDate, setEndDate] = useState("");

<InputDateTime
  label="Start Date & Time"
  value={startDate}
  onChange={(e) => setStartDate(e.target.value)}
  max={endDate || undefined}
  required
/>

<InputDateTime
  label="End Date & Time"
  value={endDate}
  onChange={(e) => setEndDate(e.target.value)}
  min={startDate || undefined}
  required
/>
```

### Future Dates Only

```tsx
<InputDateTime
  label="Appointment Date"
  min={new Date().toISOString().slice(0, 16)}
  helperText="Select a future date"
/>
```

### Working Hours Only

```tsx
<InputDateTime
  label="Meeting Time"
  min="2024-01-01T09:00"
  max="2024-12-31T17:00"
  helperText="Business hours: 9 AM - 5 PM"
/>
```
