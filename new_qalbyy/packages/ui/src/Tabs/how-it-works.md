# How Tabs Component Works

## Overview
The Tabs component is a flexible and accessible tabbed interface system built with React Context API. It provides a complete solution for organizing content into multiple panels with various styling options, orientations, and interactive features. The component follows modern design patterns and accessibility standards.

## Core Functionality

### 1. Tab Navigation
- **Active State Management**: Tracks and manages the currently active tab
- **Click Navigation**: Switch between tabs via mouse clicks
- **Keyboard Navigation**: Full keyboard accessibility with arrow keys
- **Programmatic Control**: External control of active tab state

### 2. Content Organization
- **Panel System**: Each tab corresponds to a content panel
- **Conditional Rendering**: Only active content is rendered for performance
- **Dynamic Content**: Support for dynamic tab and content generation
- **Lazy Loading**: Content can be loaded on-demand

### 3. Visual Variants
- **Default**: Clean, minimal tab design
- **Pills**: Rounded, pill-shaped tab buttons
- **Underline**: Tabs with bottom border indicators
- **Bordered**: Tabs with full border styling

### 4. Layout Options
- **Horizontal**: Traditional horizontal tab layout
- **Vertical**: Vertical tab layout for sidebar-style interfaces
- **Responsive**: Adapts to different screen sizes
- **Flexible Sizing**: Multiple size options (sm, md, lg)

## Component Architecture

### Context System
```typescript
interface TabsContextType {
  activeTab: string;
  setActiveTab: (tabId: string) => void;
  orientation: 'horizontal' | 'vertical';
  variant: 'default' | 'pills' | 'underline' | 'bordered';
  size: 'sm' | 'md' | 'lg';
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);
```

### Component Structure
```
Tabs (Provider)
├── TabsList (Container)
│   └── TabsTrigger (Individual Tabs)
└── TabsContent (Content Panels)
```

## Props Interfaces

### Tabs (Root Component)
```typescript
interface TabsProps {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'default' | 'pills' | 'underline' | 'bordered';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}
```

### TabsList (Container)
```typescript
interface TabsListProps {
  className?: string;
  children: React.ReactNode;
}
```

### TabsTrigger (Individual Tab)
```typescript
interface TabsTriggerProps {
  value: string;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}
```

### TabsContent (Content Panel)
```typescript
interface TabsContentProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}
```

## Implementation Details

### State Management
```typescript
const [activeTab, setActiveTab] = useState<string>(
  value || defaultValue || ''
);

useEffect(() => {
  if (value !== undefined) {
    setActiveTab(value);
  }
}, [value]);

const handleTabChange = useCallback((newValue: string) => {
  if (!value) {
    setActiveTab(newValue);
  }
  onValueChange?.(newValue);
}, [value, onValueChange]);
```

### Context Provider
```typescript
const contextValue = useMemo(() => ({
  activeTab,
  setActiveTab: handleTabChange,
  orientation: orientation || 'horizontal',
  variant: variant || 'default',
  size: size || 'md'
}), [activeTab, handleTabChange, orientation, variant, size]);

return (
  <TabsContext.Provider value={contextValue}>
    <div className={cn('tabs-root', className)}>
      {children}
    </div>
  </TabsContext.Provider>
);
```

### TabsList Implementation
```typescript
const TabsList: React.FC<TabsListProps> = ({ className, children }) => {
  const context = useContext(TabsContext);
  
  const listClasses = cn(
    'tabs-list',
    `tabs-list--${context?.orientation}`,
    `tabs-list--${context?.variant}`,
    `tabs-list--${context?.size}`,
    className
  );

  return (
    <div className={listClasses} role="tablist">
      {children}
    </div>
  );
};
```

### TabsTrigger Implementation
```typescript
const TabsTrigger: React.FC<TabsTriggerProps> = ({ 
  value, 
  disabled, 
  className, 
  children 
}) => {
  const context = useContext(TabsContext);
  
  const isActive = context?.activeTab === value;
  
  const handleClick = () => {
    if (!disabled && context) {
      context.setActiveTab(value);
    }
  };

  const triggerClasses = cn(
    'tabs-trigger',
    `tabs-trigger--${context?.variant}`,
    `tabs-trigger--${context?.size}`,
    {
      'tabs-trigger--active': isActive,
      'tabs-trigger--disabled': disabled
    },
    className
  );

  return (
    <button
      className={triggerClasses}
      onClick={handleClick}
      disabled={disabled}
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${value}`}
      id={`tab-${value}`}
    >
      {children}
    </button>
  );
};
```

### TabsContent Implementation
```typescript
const TabsContent: React.FC<TabsContentProps> = ({ 
  value, 
  className, 
  children 
}) => {
  const context = useContext(TabsContext);
  
  const isActive = context?.activeTab === value;
  
  if (!isActive) return null;

  return (
    <div
      className={cn('tabs-content', className)}
      role="tabpanel"
      aria-labelledby={`tab-${value}`}
      id={`panel-${value}`}
    >
      {children}
    </div>
  );
};
```

## Styling System

### CSS Architecture
```css
/* Base styles */
.tabs-root {
  @apply w-full;
}

.tabs-list {
  @apply flex;
}

.tabs-list--horizontal {
  @apply flex-row border-b border-gray-200;
}

.tabs-list--vertical {
  @apply flex-col border-r border-gray-200;
}

/* Variant styles */
.tabs-trigger--default {
  @apply px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700;
}

.tabs-trigger--pills {
  @apply px-4 py-2 rounded-full text-sm font-medium;
}

.tabs-trigger--underline {
  @apply px-4 py-2 text-sm font-medium border-b-2 border-transparent;
}

.tabs-trigger--bordered {
  @apply px-4 py-2 text-sm font-medium border border-gray-200;
}
```

### Size Variations
```css
/* Small size */
.tabs-trigger--sm {
  @apply px-3 py-1.5 text-xs;
}

/* Medium size (default) */
.tabs-trigger--md {
  @apply px-4 py-2 text-sm;
}

/* Large size */
.tabs-trigger--lg {
  @apply px-6 py-3 text-base;
}
```

### Active States
```css
.tabs-trigger--active.tabs-trigger--default {
  @apply text-blue-600 border-b-2 border-blue-600;
}

.tabs-trigger--active.tabs-trigger--pills {
  @apply bg-blue-600 text-white;
}

.tabs-trigger--active.tabs-trigger--underline {
  @apply text-blue-600 border-blue-600;
}

.tabs-trigger--active.tabs-trigger--bordered {
  @apply bg-blue-50 text-blue-600 border-blue-600;
}
```

## Usage Patterns

### Basic Usage
```tsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
  </TabsList>
  
  <TabsContent value="tab1">
    <p>Content for Tab 1</p>
  </TabsContent>
  
  <TabsContent value="tab2">
    <p>Content for Tab 2</p>
  </TabsContent>
  
  <TabsContent value="tab3">
    <p>Content for Tab 3</p>
  </TabsContent>
</Tabs>
```

### Controlled Usage
```tsx
const [activeTab, setActiveTab] = useState('tab1');

<Tabs value={activeTab} onValueChange={setActiveTab}>
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

### With Different Variants
```tsx
<Tabs defaultValue="tab1" variant="pills" size="lg">
  <TabsList>
    <TabsTrigger value="tab1">Dashboard</TabsTrigger>
    <TabsTrigger value="tab2">Analytics</TabsTrigger>
    <TabsTrigger value="tab3">Settings</TabsTrigger>
  </TabsList>
  
  <TabsContent value="tab1">Dashboard content</TabsContent>
  <TabsContent value="tab2">Analytics content</TabsContent>
  <TabsContent value="tab3">Settings content</TabsContent>
</Tabs>
```

### Vertical Layout
```tsx
<Tabs defaultValue="tab1" orientation="vertical">
  <div className="flex">
    <TabsList className="w-48">
      <TabsTrigger value="tab1">Profile</TabsTrigger>
      <TabsTrigger value="tab2">Account</TabsTrigger>
      <TabsTrigger value="tab3">Security</TabsTrigger>
    </TabsList>
    
    <div className="flex-1 ml-6">
      <TabsContent value="tab1">Profile settings</TabsContent>
      <TabsContent value="tab2">Account settings</TabsContent>
      <TabsContent value="tab3">Security settings</TabsContent>
    </div>
  </div>
</Tabs>
```

### With Icons and Badges
```tsx
<Tabs defaultValue="inbox">
  <TabsList>
    <TabsTrigger value="inbox">
      <Mail className="w-4 h-4 mr-2" />
      Inbox
      <Badge variant="secondary" className="ml-2">12</Badge>
    </TabsTrigger>
    
    <TabsTrigger value="sent">
      <Send className="w-4 h-4 mr-2" />
      Sent
    </TabsTrigger>
    
    <TabsTrigger value="drafts" disabled>
      <FileText className="w-4 h-4 mr-2" />
      Drafts
    </TabsTrigger>
  </TabsList>
  
  <TabsContent value="inbox">Inbox messages</TabsContent>
  <TabsContent value="sent">Sent messages</TabsContent>
  <TabsContent value="drafts">Draft messages</TabsContent>
</Tabs>
```

## Accessibility Features

### ARIA Support
- **role="tablist"**: Identifies the tab list container
- **role="tab"**: Identifies individual tab buttons
- **role="tabpanel"**: Identifies content panels
- **aria-selected**: Indicates the active tab
- **aria-controls**: Links tabs to their content panels
- **aria-labelledby**: Links content panels to their tabs

### Keyboard Navigation
```typescript
const handleKeyDown = (event: React.KeyboardEvent) => {
  const tabs = Array.from(tabListRef.current?.querySelectorAll('[role="tab"]') || []);
  const currentIndex = tabs.findIndex(tab => tab === event.target);
  
  switch (event.key) {
    case 'ArrowRight':
    case 'ArrowDown':
      event.preventDefault();
      const nextIndex = (currentIndex + 1) % tabs.length;
      (tabs[nextIndex] as HTMLElement)?.focus();
      break;
      
    case 'ArrowLeft':
    case 'ArrowUp':
      event.preventDefault();
      const prevIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
      (tabs[prevIndex] as HTMLElement)?.focus();
      break;
      
    case 'Home':
      event.preventDefault();
      (tabs[0] as HTMLElement)?.focus();
      break;
      
    case 'End':
      event.preventDefault();
      (tabs[tabs.length - 1] as HTMLElement)?.focus();
      break;
  }
};
```

### Focus Management
- **Tab Order**: Proper tab order through the interface
- **Focus Indicators**: Clear visual focus indicators
- **Focus Trapping**: Focus management within tab panels

## Performance Optimizations

### Conditional Rendering
```typescript
const TabsContent: React.FC<TabsContentProps> = ({ value, children }) => {
  const context = useContext(TabsContext);
  
  // Only render active content
  if (context?.activeTab !== value) return null;
  
  return <div role="tabpanel">{children}</div>;
};
```

### Memoization
```typescript
const TabsTrigger = React.memo<TabsTriggerProps>(({ value, children, ...props }) => {
  const context = useContext(TabsContext);
  
  const isActive = useMemo(() => 
    context?.activeTab === value, 
    [context?.activeTab, value]
  );
  
  // Component implementation
});
```

### Event Optimization
```typescript
const handleTabChange = useCallback((newValue: string) => {
  if (!value) {
    setActiveTab(newValue);
  }
  onValueChange?.(newValue);
}, [value, onValueChange]);
```

## Best Practices

### Content Organization
- **Logical Grouping**: Group related content together
- **Clear Labels**: Use descriptive tab labels
- **Consistent Structure**: Maintain consistent content structure across tabs

### Performance
- **Lazy Loading**: Load content only when tabs are activated
- **Virtualization**: Use virtualization for large numbers of tabs
- **Memoization**: Memoize expensive computations

### User Experience
- **Loading States**: Show loading indicators for async content
- **Error Handling**: Graceful error handling in tab content
- **Responsive Design**: Ensure tabs work well on all screen sizes

### Accessibility
- **Keyboard Support**: Full keyboard navigation support
- **Screen Readers**: Proper ARIA labeling for screen readers
- **Focus Management**: Clear focus indicators and management

## Common Use Cases

1. **Settings Panels**: Organize different setting categories
2. **Data Views**: Switch between different data representations
3. **Form Sections**: Break long forms into manageable sections
4. **Dashboard Widgets**: Organize different dashboard views
5. **Content Categories**: Categorize content by type or topic
6. **Navigation Menus**: Secondary navigation within pages
7. **Wizard Steps**: Multi-step process navigation
8. **File Browsers**: Organize files by type or category

## Integration Notes

### State Management
- **Redux**: Can be integrated with Redux for global state
- **Context API**: Uses React Context for internal state
- **URL Sync**: Can be synchronized with URL parameters

### Styling Integration
- **Tailwind CSS**: Built with Tailwind CSS classes
- **CSS Modules**: Compatible with CSS modules
- **Styled Components**: Can be styled with styled-components

### Framework Compatibility
- **React**: Primary framework support
- **Next.js**: Full SSR/SSG compatibility
- **TypeScript**: Complete type safety
- **React Router**: Can be integrated with routing systems