# How Breadcrumb Component Works

## Overview
The Breadcrumb component provides navigation breadcrumbs that show the user's current location within a hierarchical structure. It helps users understand where they are and navigate back to previous levels.

## Core Functionality

### 1. Navigation Structure
- Displays a hierarchical path from root to current location
- Each breadcrumb item represents a level in the navigation hierarchy
- Supports clickable items for navigation and non-clickable items for current page

### 2. Visual Elements
- **Home Icon**: Optional home icon at the beginning of the breadcrumb trail
- **Separators**: Customizable separators between breadcrumb items (default: chevron right)
- **Truncation**: Automatically truncates long breadcrumb trails to prevent overflow

### 3. Interactive Features
- **Click Handlers**: Each breadcrumb item can have an onClick handler for navigation
- **Hover States**: Visual feedback when hovering over clickable items
- **Keyboard Navigation**: Supports keyboard navigation for accessibility

## Props Interface

```typescript
interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  showHome?: boolean;
  homeIcon?: React.ReactNode;
  onHomeClick?: () => void;
  maxItems?: number;
  className?: string;
}
```

## Implementation Details

### State Management
- No internal state required - fully controlled by props
- Navigation state managed by parent component

### Rendering Logic
1. **Home Icon Rendering**: Conditionally renders home icon if `showHome` is true
2. **Items Processing**: Maps through items array and renders each breadcrumb
3. **Separator Insertion**: Adds separators between items (not after the last item)
4. **Truncation Logic**: Implements ellipsis for long breadcrumb trails

### Styling Approach
- Uses Tailwind CSS for consistent styling
- Responsive design that adapts to different screen sizes
- Hover and focus states for better user experience

## Usage Patterns

### Basic Usage
```tsx
const breadcrumbItems = [
  { label: 'Dashboard', onClick: () => navigate('/dashboard') },
  { label: 'Products', onClick: () => navigate('/products') },
  { label: 'Electronics' }
];

<Breadcrumb items={breadcrumbItems} />
```

### With Custom Separator
```tsx
<Breadcrumb 
  items={items} 
  separator={<span>/</span>}
  showHome={true}
/>
```

### With Icons
```tsx
const itemsWithIcons = [
  { label: 'Dashboard', icon: <DashboardIcon />, onClick: () => {} },
  { label: 'Settings', icon: <SettingsIcon /> }
];

<Breadcrumb items={itemsWithIcons} />
```

## Accessibility Features

### ARIA Support
- Uses proper ARIA labels and roles
- Implements `aria-current="page"` for the current page item
- Provides screen reader friendly navigation structure

### Keyboard Navigation
- Tab navigation through clickable items
- Enter/Space key activation for breadcrumb items
- Focus management for better keyboard accessibility

### Visual Indicators
- Clear visual distinction between clickable and non-clickable items
- Sufficient color contrast for readability
- Focus indicators for keyboard users

## Best Practices

### Content Guidelines
- Keep breadcrumb labels concise and descriptive
- Use consistent naming conventions across the application
- Avoid deep nesting (recommended max 5-7 levels)

### Navigation Patterns
- Always make parent levels clickable for easy navigation
- Current page should not be clickable
- Provide clear visual hierarchy

### Performance Considerations
- Minimal re-renders due to stateless design
- Efficient rendering with proper key props
- Lightweight component with no heavy dependencies

## Common Use Cases

1. **E-commerce Navigation**: Product category → Subcategory → Product
2. **Admin Dashboards**: Dashboard → Section → Subsection → Page
3. **File System Navigation**: Folder → Subfolder → File
4. **Multi-step Forms**: Step 1 → Step 2 → Step 3
5. **Documentation Sites**: Section → Topic → Article

## Integration Notes

### Router Integration
- Works with any routing library (React Router, Next.js Router, etc.)
- Handles both programmatic navigation and href-based navigation
- Supports both client-side and server-side routing

### State Management
- Compatible with Redux, Zustand, Context API, or any state management solution
- Can be integrated with navigation state from routing libraries
- Supports dynamic breadcrumb generation based on current route