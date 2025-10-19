# InputDateTime Component

Reusable datetime input component for consistent date/time selection across applications.

## Quick Start

### Installation

The component is already available in the `@repo/ui` package.

### Import

```tsx
import { InputDateTime } from "@repo/ui/InputDateTime";
// or with type
import { InputDateTime, type InputDateTimeProps } from "@repo/ui/InputDateTime";
```

## Usage in Office App (Activity Form)

Replace the existing datetime inputs with the reusable component:

### Before:

```tsx
<input
  type='datetime-local'
  value={formData.coming_soon_date}
  onChange={e => setFormData({ ...formData, coming_soon_date: e.target.value })}
  className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
/>
```

### After:

```tsx
<InputDateTime
  label="Coming Soon Date"
  value={formData.coming_soon_date}
  onChange={e => setFormData({ ...formData, coming_soon_date: e.target.value })}
/>
```

### Complete Example for Activity Form:

```tsx
import { InputDateTime } from "@repo/ui/InputDateTime";

function ActivityForm() {
  const [formData, setFormData] = useState({
    coming_soon_date: "",
    start_datetime: "",
    end_datetime: "",
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Coming Soon Date */}
      <div>
        <InputDateTime
          label="Coming Soon Date"
          value={formData.coming_soon_date}
          onChange={e => setFormData({ ...formData, coming_soon_date: e.target.value })}
          helperText="When will this activity be announced?"
        />
      </div>

      {/* Start Date & Time */}
      <div>
        <InputDateTime
          label="Start Date & Time"
          value={formData.start_datetime}
          onChange={e => setFormData({ ...formData, start_datetime: e.target.value })}
          required
          helperText="Activity start date and time"
        />
      </div>

      {/* End Date & Time */}
      <div>
        <InputDateTime
          label="End Date & Time"
          value={formData.end_datetime}
          onChange={e => setFormData({ ...formData, end_datetime: e.target.value })}
          required
          min={formData.start_datetime || undefined}
          helperText="Must be after start date"
        />
      </div>
    </div>
  );
}
```

## Benefits

✅ **Consistent Styling** - Same look and feel across all forms  
✅ **Built-in Validation** - Error states and helper text  
✅ **Accessibility** - Proper labels and ARIA attributes  
✅ **Type Safety** - Full TypeScript support  
✅ **Responsive** - Works on all screen sizes  
✅ **Customizable** - Multiple variants and sizes  

## Props

See [how-it-works.md](./how-it-works.md) for complete documentation.

## Storybook

View all variations in Storybook:

```bash
cd packages/ui
pnpm storybook
```

Then navigate to `@Repo/UI/InputDateTime` in the sidebar.
