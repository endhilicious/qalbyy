# Badge Component

## Overview

The Badge component is a reusable UI element for displaying status indicators, labels, and categorization tags. It supports multiple variants, sizes, and includes a specialized StatusBadge for automatic status-based styling.

## Components

### Badge
Main badge component with customizable styling.

### StatusBadge
Specialized badge that automatically determines variant based on status text.

## Usage

### Basic Badge

```tsx
import { Badge } from '@repo/ui';

// Simple badge
<Badge variant="success">Active</Badge>

// Clickable badge
<Badge 
  variant="warning" 
  size="lg"
  onClick={() => console.log('Badge clicked')}
>
  Pending
</Badge>
```

### Status Badge

```tsx
import { StatusBadge } from '@repo/ui';

// Automatic variant detection
<StatusBadge status="completed" />
<StatusBadge status="pending" />
<StatusBadge status="error" />

// Custom content with status-based styling
<StatusBadge status="active">
  User is online
</StatusBadge>
```

## Props

### Badge Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Badge content (required) |
| variant | 'default' \| 'success' \| 'warning' \| 'error' \| 'info' | 'default' | Visual style variant |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Badge size |
| className | string | '' | Additional CSS classes |
| onClick | () => void | - | Click handler (makes badge clickable) |

### StatusBadge Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Custom content (optional) |
| status | string | - | Status text for automatic variant detection |
| variant | 'default' \| 'success' \| 'warning' \| 'error' \| 'info' | auto | Override automatic variant |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Badge size |
| className | string | '' | Additional CSS classes |

## Variants

- **default**: Gray background for neutral states
- **success**: Green background for positive states
- **warning**: Yellow background for caution states
- **error**: Red background for error states
- **info**: Blue background for informational states

## Sizes

- **sm**: Small (px-2 py-0.5 text-xs)
- **md**: Medium (px-3 py-1 text-sm) - Default
- **lg**: Large (px-4 py-1.5 text-base)

## Status Mapping (StatusBadge)

### Success Variant
- active, verified, completed, complete, selected, printed, available, distributed, used, success, approved, published

### Warning Variant
- pending, in progress, not selected, not printed, generated, nearly full, processing, draft, review

### Error Variant
- inactive, cancelled, rejected, incomplete, not started, full, overbooked, error, failed, expired

### Info Variant
- info, information, note, new

## Features

- **Responsive Design**: Works on all screen sizes
- **Accessibility**: Proper semantic markup and hover states
- **Customizable**: Extensive styling options via props and className
- **Interactive**: Optional click handlers with visual feedback
- **Smart Status Detection**: Automatic variant selection based on status text
- **TypeScript Support**: Full type definitions included

## Examples

```tsx
// Different variants
<Badge variant="default">Default</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="info">Info</Badge>

// Different sizes
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>

// Interactive badge
<Badge 
  variant="info" 
  onClick={() => alert('Badge clicked!')}
>
  Click me
</Badge>

// Status badges with automatic styling
<StatusBadge status="completed" />
<StatusBadge status="pending" />
<StatusBadge status="failed" />

// Custom status badge
<StatusBadge status="active" size="lg">
  System Online
</StatusBadge>
```

## Styling

The component uses Tailwind CSS classes and supports:
- Hover effects for interactive badges
- Smooth transitions
- Consistent spacing and typography
- Responsive design patterns

## Best Practices

1. Use StatusBadge for dynamic status indicators
2. Use appropriate variants for semantic meaning
3. Keep badge text concise and clear
4. Use onClick only when the badge represents an actionable item
5. Consider accessibility when using color-only differentiation