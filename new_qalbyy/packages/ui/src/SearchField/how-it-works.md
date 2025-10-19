# SearchField - How It Works

Reusable search input component with built-in debounce, clear button, and consistent styling.

## Import

```tsx
import { SearchField } from '@repo/ui';
```

## Basic Usage

```tsx
const [query, setQuery] = useState('');

<SearchField
  placeholder="Cari kegiatan ujian..."
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  onDebouncedChange={(v) => console.log('debounced:', v)}
/>
```

## Props

- `label?: string`
- `placeholder?: string` (default: `Cari...`)
- `value?: string`
- `onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void`
- `onDebouncedChange?: (value: string) => void` — fires after debounce if length ≥ `minChars`, or immediately with `""` when cleared
- `onClear?: () => void` — called when user clicks the clear (X) button
- `minChars?: number` (default: `3`)
- `debounceMs?: number` (default: `500`)
- `size?: 'sm' | 'md' | 'lg'` (default: `md`)
- `variant?: 'default' | 'outline' | 'filled'` (default: `outline`)
- `disabled?: boolean`
- `required?: boolean`
- `className?: string`
- `inputClassName?: string`

## Design

- Left `Search` icon, right `X` clear button
- Rounded-xl input, Tailwind transitions
- Size variants adjust height and icon size

## Pattern

Use `onDebouncedChange` to trigger data fetching. Keep `onChange` for immediate UI updates.

```tsx
const [raw, setRaw] = useState('');
const [term, setTerm] = useState('');

<SearchField
  value={raw}
  onChange={(e) => setRaw(e.target.value)}
  onDebouncedChange={(v) => setTerm(v)}
  minChars={3}
  debounceMs={500}
/>
```

## Accessibility

- Proper label support and `aria-label` fallback
- Keyboard and pointer friendly clear button