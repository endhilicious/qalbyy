# How Card Component Works

## Overview
The Card component is a versatile and flexible container component designed to display content in a structured and visually appealing way. It supports various layouts, styling options, interactive states, and image positioning, making it suitable for a wide range of use cases from simple content containers to complex interactive elements.

## Core Functionality

### 1. Content Organization
- **Header Section**: Optional title, subtitle, or custom header content
- **Main Content**: Primary content area with flexible layout
- **Footer Section**: Optional footer content for actions or additional information
- **Image Support**: Integrated image display with multiple positioning options

### 2. Visual Variants
- **Default**: Clean, minimal card with subtle border
- **Outlined**: Emphasized border for better definition
- **Elevated**: Shadow-based elevation for depth
- **Filled**: Background-filled variant for contrast

### 3. Interactive Features
- **Clickable Cards**: Full card click handling with proper accessibility
- **Hover Effects**: Smooth transitions and visual feedback
- **Keyboard Navigation**: Full keyboard accessibility support
- **Disabled State**: Proper disabled state handling

### 4. Layout Options
- **Image Positioning**: Top, bottom, left, or right image placement
- **Flexible Sizing**: Multiple size options (sm, md, lg)
- **Padding Control**: Customizable internal spacing
- **Border Radius**: Various rounding options
- **Full Width**: Option to take full container width

## Props Interface

```typescript
interface CardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: 'default' | 'outlined' | 'elevated' | 'filled';
  size?: 'sm' | 'md' | 'lg';
  clickable?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  divider?: boolean;
  image?: string;
  imageAlt?: string;
  imagePosition?: 'top' | 'bottom' | 'left' | 'right';
}
```

## Implementation Details

### Styling System
```typescript
// Variant styles
const variantClasses = {
  default: 'bg-white border border-gray-200',
  outlined: 'bg-white border-2 border-gray-300',
  elevated: 'bg-white shadow-lg border border-gray-100',
  filled: 'bg-gray-50 border border-gray-200'
};

// Size styles
const sizeClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg'
};

// Padding styles
const paddingClasses = {
  none: '',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6'
};

// Rounded styles
const roundedClasses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  full: 'rounded-full'
};
```

### Interactive State Management
```typescript
const isInteractive = clickable && !disabled;

// Interactive styles
const interactiveClasses = isInteractive
  ? 'cursor-pointer hover:shadow-md transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
  : '';

// Disabled styles
const disabledClasses = disabled
  ? 'opacity-50 cursor-not-allowed'
  : '';
```

### Event Handling
```typescript
const handleClick = () => {
  if (isInteractive && onClick) {
    onClick();
  }
};

const handleKeyDown = (e: React.KeyboardEvent) => {
  if (isInteractive && (e.key === 'Enter' || e.key === ' ')) {
    e.preventDefault();
    onClick?.();
  }
};
```

### Header Component Logic
```typescript
const HeaderComponent = header || (title || subtitle) ? (
  <div className={`${padding !== 'none' ? paddingClasses[padding] : ''} ${divider ? 'border-b border-gray-200' : ''}`}>
    {header || (
      <div>
        {title && (
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {title}
          </h3>
        )}
        {subtitle && (
          <p className="text-sm text-gray-600">
            {subtitle}
          </p>
        )}
      </div>
    )}
  </div>
) : null;
```

### Image Component Logic
```typescript
const ImageComponent = image ? (
  <div className={`
    ${imagePosition === 'top' ? 'rounded-t-md' : ''}
    ${imagePosition === 'bottom' ? 'rounded-b-md' : ''}
    ${imagePosition === 'left' || imagePosition === 'right' ? 'rounded-md' : ''}
    overflow-hidden
  `}>
    <img
      src={image}
      alt={imageAlt || ''}
      className={`
        w-full h-auto object-cover
        ${imagePosition === 'left' || imagePosition === 'right' ? 'h-full' : ''}
      `}
    />
  </div>
) : null;
```

### Layout Rendering Logic

#### Horizontal Layout (Left/Right Images)
```typescript
if (image && (imagePosition === 'left' || imagePosition === 'right')) {
  return (
    <div className={cardClasses} {...eventHandlers}>
      <div className={`flex ${imagePosition === 'right' ? 'flex-row-reverse' : ''}`}>
        <div className="flex-shrink-0 w-1/3">
          {ImageComponent}
        </div>
        <div className="flex-1 flex flex-col">
          {HeaderComponent}
          {ContentComponent}
          {FooterComponent}
        </div>
      </div>
    </div>
  );
}
```

#### Vertical Layout (Top/Bottom Images)
```typescript
return (
  <div className={cardClasses} {...eventHandlers}>
    {image && imagePosition === 'top' && ImageComponent}
    {HeaderComponent}
    {ContentComponent}
    {FooterComponent}
    {image && imagePosition === 'bottom' && ImageComponent}
  </div>
);
```

## Usage Patterns

### Basic Card
```tsx
<Card title="Basic Card" subtitle="Simple card example">
  <p>This is the main content of the card.</p>
</Card>
```

### Card with Custom Header
```tsx
<Card 
  header={
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-bold">Custom Header</h3>
      <Badge variant="secondary">New</Badge>
    </div>
  }
>
  <p>Content with custom header</p>
</Card>
```

### Interactive Card
```tsx
<Card 
  title="Clickable Card"
  clickable
  onClick={() => console.log('Card clicked')}
  variant="elevated"
>
  <p>Click anywhere on this card</p>
</Card>
```

### Card with Image
```tsx
<Card 
  title="Product Card"
  subtitle="$29.99"
  image="/product-image.jpg"
  imageAlt="Product image"
  imagePosition="top"
  footer={
    <Button variant="primary" fullWidth>
      Add to Cart
    </Button>
  }
>
  <p>Product description goes here</p>
</Card>
```

### Card with Side Image
```tsx
<Card 
  title="News Article"
  subtitle="Published 2 hours ago"
  image="/news-image.jpg"
  imagePosition="left"
  clickable
  onClick={() => navigate('/article/123')}
>
  <p>Article excerpt and summary...</p>
</Card>
```

### Settings Card
```tsx
<Card 
  variant="outlined"
  padding="lg"
  divider
  header={
    <div className="flex items-center">
      <Settings className="w-5 h-5 mr-2" />
      <span className="font-semibold">Account Settings</span>
    </div>
  }
  footer={
    <div className="flex justify-end space-x-2">
      <Button variant="outline">Cancel</Button>
      <Button variant="primary">Save</Button>
    </div>
  }
>
  <div className="space-y-4">
    <Input label="Username" />
    <Input label="Email" type="email" />
  </div>
</Card>
```

### Compact Card
```tsx
<Card 
  size="sm"
  padding="sm"
  rounded="lg"
  variant="filled"
>
  <div className="flex items-center space-x-2">
    <Avatar size="sm" />
    <div>
      <p className="font-medium">John Doe</p>
      <p className="text-xs text-gray-500">Online</p>
    </div>
  </div>
</Card>
```

## Accessibility Features

### ARIA Support
```typescript
<div
  role={isInteractive ? 'button' : undefined}
  aria-disabled={disabled}
  tabIndex={isInteractive ? 0 : undefined}
>
```

### Keyboard Navigation
- **Enter Key**: Activates clickable cards
- **Space Key**: Alternative activation method
- **Tab Navigation**: Proper focus management
- **Focus Indicators**: Clear visual focus indicators

### Screen Reader Support
- **Semantic HTML**: Proper heading hierarchy
- **Alt Text**: Image alt text support
- **Role Attributes**: Appropriate ARIA roles
- **State Communication**: Disabled state communication

## Styling and Theming

### CSS Architecture
```css
/* Base card styles */
.card-base {
  @apply transition-all duration-200 ease-in-out;
}

/* Variant styles */
.card-default {
  @apply bg-white border border-gray-200;
}

.card-outlined {
  @apply bg-white border-2 border-gray-300;
}

.card-elevated {
  @apply bg-white shadow-lg border border-gray-100;
}

.card-filled {
  @apply bg-gray-50 border border-gray-200;
}

/* Interactive states */
.card-interactive {
  @apply cursor-pointer hover:shadow-md;
  @apply focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2;
}

.card-disabled {
  @apply opacity-50 cursor-not-allowed;
}
```

### Responsive Design
```css
/* Mobile-first responsive design */
@media (max-width: 640px) {
  .card-horizontal {
    @apply flex-col;
  }
  
  .card-image-side {
    @apply w-full;
  }
}
```

## Performance Optimizations

### Conditional Rendering
```typescript
// Only render components when needed
const HeaderComponent = header || (title || subtitle) ? (
  // Header JSX
) : null;

const FooterComponent = footer ? (
  // Footer JSX
) : null;
```

### Memoization Opportunities
```typescript
const Card = React.memo<CardProps>(({ 
  children, 
  title, 
  subtitle,
  // ... other props
}) => {
  // Component implementation
});
```

### Event Handler Optimization
```typescript
const handleClick = useCallback(() => {
  if (isInteractive && onClick) {
    onClick();
  }
}, [isInteractive, onClick]);
```

## Best Practices

### Content Organization
- **Clear Hierarchy**: Use title and subtitle for clear content hierarchy
- **Consistent Spacing**: Maintain consistent padding and spacing
- **Logical Flow**: Organize content in a logical reading order

### Visual Design
- **Appropriate Variants**: Choose variants that match your design system
- **Consistent Sizing**: Use consistent sizing across similar cards
- **Proper Contrast**: Ensure sufficient color contrast for accessibility

### Interactive Design
- **Clear Affordances**: Make clickable cards obviously interactive
- **Feedback**: Provide clear hover and focus feedback
- **Error States**: Handle disabled states appropriately

### Performance
- **Image Optimization**: Optimize images for web delivery
- **Lazy Loading**: Consider lazy loading for image-heavy card lists
- **Virtualization**: Use virtualization for large card lists

## Common Use Cases

1. **Product Cards**: E-commerce product displays with images and actions
2. **Article Cards**: Blog posts and news articles with thumbnails
3. **User Profiles**: User information cards with avatars
4. **Dashboard Widgets**: Data visualization containers
5. **Settings Panels**: Configuration and settings interfaces
6. **Feature Highlights**: Marketing and feature showcase cards
7. **Notification Cards**: Alert and notification displays
8. **Media Cards**: Video and audio content containers
9. **Form Sections**: Grouped form elements
10. **Navigation Cards**: Menu and navigation elements

## Integration Notes

### State Management
- **Local State**: Internal state for interactive features
- **External State**: Can be controlled by parent components
- **Form Integration**: Works well with form libraries

### Styling Integration
- **Tailwind CSS**: Built with Tailwind CSS classes
- **Custom Themes**: Easily customizable with CSS variables
- **Design Systems**: Integrates well with design system tokens

### Framework Compatibility
- **React**: Primary framework support
- **Next.js**: Full SSR/SSG compatibility
- **TypeScript**: Complete type safety
- **Testing**: Easy to test with React Testing Library

### Animation Integration
- **Framer Motion**: Can be enhanced with motion animations
- **CSS Transitions**: Built-in transition support
- **Custom Animations**: Extensible for custom animation needs