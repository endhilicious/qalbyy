# Usage Example - Activity Form

## Migration Guide untuk `apps/office/src/components/screens/activity-form/index.tsx`

### Step 1: Import Component

Tambahkan import di bagian atas file:

```tsx
import { InputDateTime } from "@repo/ui/InputDateTime";
```

### Step 2: Replace Existing Inputs

#### Coming Soon Date (Line 398-404)

**Before:**
```tsx
<div>
  <label className='block text-sm font-medium text-gray-700 mb-2'>
    Coming Soon Date
  </label>
  <input
    type='datetime-local'
    value={formData.coming_soon_date}
    onChange={e => setFormData({ ...formData, coming_soon_date: e.target.value })}
    className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
  />
</div>
```

**After:**
```tsx
<div>
  <InputDateTime
    label="Coming Soon Date"
    value={formData.coming_soon_date}
    onChange={e => setFormData({ ...formData, coming_soon_date: e.target.value })}
    helperText="Tanggal pengumuman kegiatan"
  />
</div>
```

#### Start Date & Time (Line 410-416)

**Before:**
```tsx
<div>
  <label className='block text-sm font-medium text-gray-700 mb-2'>
    Start Date & Time <span className='text-red-500'>*</span>
  </label>
  <input
    type='datetime-local'
    value={formData.start_datetime}
    onChange={e => setFormData({ ...formData, start_datetime: e.target.value })}
    className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
    required
  />
</div>
```

**After:**
```tsx
<div>
  <InputDateTime
    label="Start Date & Time"
    value={formData.start_datetime}
    onChange={e => setFormData({ ...formData, start_datetime: e.target.value })}
    required
    helperText="Tanggal dan waktu mulai kegiatan"
  />
</div>
```

#### End Date & Time (Line 422-428)

**Before:**
```tsx
<div>
  <label className='block text-sm font-medium text-gray-700 mb-2'>
    End Date & Time <span className='text-red-500'>*</span>
  </label>
  <input
    type='datetime-local'
    value={formData.end_datetime}
    onChange={e => setFormData({ ...formData, end_datetime: e.target.value })}
    className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
    required
  />
</div>
```

**After:**
```tsx
<div>
  <InputDateTime
    label="End Date & Time"
    value={formData.end_datetime}
    onChange={e => setFormData({ ...formData, end_datetime: e.target.value })}
    required
    min={formData.start_datetime || undefined}
    error={formData.end_datetime && formData.start_datetime && 
           formData.end_datetime < formData.start_datetime ? 
           "End date must be after start date" : undefined}
    helperText="Tanggal dan waktu selesai kegiatan"
  />
</div>
```

### Complete Code After Migration

```tsx
{/* Date & Time Section */}
<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
  {/* Coming Soon Date */}
  <InputDateTime
    label="Coming Soon Date"
    value={formData.coming_soon_date}
    onChange={e => setFormData({ ...formData, coming_soon_date: e.target.value })}
    helperText="Tanggal pengumuman kegiatan"
  />

  {/* Start Date & Time */}
  <InputDateTime
    label="Start Date & Time"
    value={formData.start_datetime}
    onChange={e => setFormData({ ...formData, start_datetime: e.target.value })}
    required
    helperText="Tanggal dan waktu mulai kegiatan"
  />

  {/* End Date & Time */}
  <InputDateTime
    label="End Date & Time"
    value={formData.end_datetime}
    onChange={e => setFormData({ ...formData, end_datetime: e.target.value })}
    required
    min={formData.start_datetime || undefined}
    error={formData.end_datetime && formData.start_datetime && 
           formData.end_datetime < formData.start_datetime ? 
           "End date must be after start date" : undefined}
    helperText="Tanggal dan waktu selesai kegiatan"
  />
</div>
```

## Benefits of Migration

✅ **Reduced Code** - 15 lines → 5 lines per input  
✅ **Consistent Styling** - Automatic styling from design system  
✅ **Built-in Validation** - Error states and helper text included  
✅ **Better Accessibility** - Proper ARIA labels and associations  
✅ **Type Safety** - Full TypeScript support  
✅ **Easier Maintenance** - Single source of truth for datetime inputs  

## Additional Features Available

### Add Min/Max Constraints

```tsx
<InputDateTime
  label="Event Date"
  value={formData.start_datetime}
  onChange={e => setFormData({ ...formData, start_datetime: e.target.value })}
  min={new Date().toISOString().slice(0, 16)} // Future dates only
  max="2025-12-31T23:59" // Max date
/>
```

### Different Variants

```tsx
// Outline variant for emphasis
<InputDateTime
  label="Important Date"
  variant="outline"
  value={formData.start_datetime}
  onChange={e => setFormData({ ...formData, start_datetime: e.target.value })}
/>

// Filled variant for subtle appearance
<InputDateTime
  label="Optional Date"
  variant="filled"
  value={formData.coming_soon_date}
  onChange={e => setFormData({ ...formData, coming_soon_date: e.target.value })}
/>
```

### Different Sizes

```tsx
// Large for prominence
<InputDateTime
  label="Main Event Date"
  size="lg"
  value={formData.start_datetime}
  onChange={e => setFormData({ ...formData, start_datetime: e.target.value })}
/>

// Small for compact forms
<InputDateTime
  label="Deadline"
  size="sm"
  value={formData.end_datetime}
  onChange={e => setFormData({ ...formData, end_datetime: e.target.value })}
/>
```

## Testing

Component ini sudah dilengkapi dengan:
- ✅ Unit tests (Vitest)
- ✅ Storybook stories (untuk visual testing)
- ✅ TypeScript type checking
- ✅ ESLint validation

Untuk menjalankan tests:

```bash
cd packages/ui
pnpm test
```

Untuk melihat di Storybook:

```bash
cd packages/ui
pnpm storybook
```
