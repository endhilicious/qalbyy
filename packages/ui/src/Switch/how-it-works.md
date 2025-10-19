# Switch Component

A modern, accessible toggle switch component with smooth animations and multiple variants.

## Features

- **Smooth Animations**: 300ms transition for toggle movement
- **Multiple Sizes**: Small, medium, and large options
- **Color Variants**: Blue, green, purple, red, and teal themes
- **Accessibility**: Full keyboard support and ARIA attributes
- **Flexible**: Works standalone or with labels and descriptions
- **Disabled State**: Visual feedback for disabled switches
- **Compact Variant**: Inline version for simpler layouts

## Usage

### Basic Usage

```tsx
import { Switch } from '@repo/ui';

function MyComponent() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
    />
  );
}
```

### With Label and Description

```tsx
<Switch
  id="notifications"
  checked={notificationsEnabled}
  onChange={setNotificationsEnabled}
  label="Enable Notifications"
  description="Receive email notifications about your account"
  color="teal"
/>
```

### Different Sizes

```tsx
<Switch checked={enabled} onChange={setEnabled} size="sm" />
<Switch checked={enabled} onChange={setEnabled} size="md" />
<Switch checked={enabled} onChange={setEnabled} size="lg" />
```

### Different Colors

```tsx
<Switch checked={enabled} onChange={setEnabled} color="blue" />
<Switch checked={enabled} onChange={setEnabled} color="green" />
<Switch checked={enabled} onChange={setEnabled} color="purple" />
<Switch checked={enabled} onChange={setEnabled} color="red" />
<Switch checked={enabled} onChange={setEnabled} color="teal" />
```

### Compact Variant

```tsx
import { CompactSwitch } from '@repo/ui';

<CompactSwitch
  checked={enabled}
  onChange={setEnabled}
  label="Dark Mode"
/>
```

### Disabled State

```tsx
<Switch
  checked={enabled}
  onChange={setEnabled}
  disabled={true}
  label="Disabled Switch"
/>
```

## Props

### SwitchProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | - | **Required**. Current state of the switch |
| `onChange` | `(checked: boolean) => void` | - | **Required**. Callback when switch changes |
| `id` | `string` | - | HTML id attribute |
| `disabled` | `boolean` | `false` | Disable the switch |
| `label` | `string` | - | Label text |
| `description` | `string` | - | Description text below label |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size variant |
| `color` | `'blue' \| 'green' \| 'purple' \| 'red' \| 'teal'` | `'teal'` | Color theme |
| `className` | `string` | - | Additional CSS classes for container |
| `labelClassName` | `string` | - | Additional CSS classes for label |
| `descriptionClassName` | `string` | - | Additional CSS classes for description |

### CompactSwitchProps

Same as `SwitchProps` but without `description` and with an additional `inline` prop.

## Size Reference

- **Small (sm)**: 36px × 20px switch, 16px circle
- **Medium (md)**: 44px × 24px switch, 20px circle
- **Large (lg)**: 56px × 28px switch, 24px circle

## Color Reference

- **Blue**: `#2563EB` (blue-600)
- **Green**: `#059669` (emerald-600)
- **Purple**: `#9333EA` (purple-600)
- **Red**: `#DC2626` (red-600)
- **Teal**: `#0D9488` (teal-600)

## Accessibility

- **Keyboard Support**: Space and Enter keys toggle the switch
- **ARIA Attributes**: Proper `role="switch"` and `aria-checked`
- **Focus Indicators**: Visible focus ring
- **Screen Readers**: Proper labeling with `aria-describedby`
- **Disabled State**: `aria-disabled` attribute

## Animations

- **Toggle Transition**: 300ms ease-in-out
- **Color Change**: 300ms ease-in-out
- **Hover Effect**: Opacity change on hover
- **Shadow**: Smooth shadow on toggle circle

## Styling

### Switch Sizes
```css
Small:  w-9 h-5 (circle: w-4 h-4, translate: 4)
Medium: w-11 h-6 (circle: w-5 h-5, translate: 5)
Large:  w-14 h-7 (circle: w-6 h-6, translate: 7)
```

### States
- **Off**: Gray background (bg-gray-300)
- **On**: Colored background based on color prop
- **Disabled**: 50% opacity
- **Focus**: Ring with matching color

## Examples

### Form Integration

```tsx
<form>
  <Switch
    id="terms"
    checked={agreedToTerms}
    onChange={setAgreedToTerms}
    label="I agree to the terms and conditions"
    color="blue"
  />
  
  <Switch
    id="newsletter"
    checked={subscribeNewsletter}
    onChange={setSubscribeNewsletter}
    label="Subscribe to newsletter"
    description="Receive updates about new features"
    color="green"
  />
</form>
```

### Settings Panel

```tsx
<div className="space-y-4">
  <Switch
    id="darkMode"
    checked={darkMode}
    onChange={setDarkMode}
    label="Dark Mode"
    description="Use dark theme across the app"
    color="purple"
  />
  
  <Switch
    id="soundEffect"
    checked={soundEnabled}
    onChange={setSoundEnabled}
    label="Sound Effect"
    description="Play sounds for notifications"
    color="teal"
  />
</div>
```

## Best Practices

1. **Use Clear Labels**: Make switch purpose obvious
2. **Provide Descriptions**: Explain what the switch does
3. **Choose Appropriate Colors**: Match your brand/context
4. **Handle Disabled State**: Show why switch is disabled
5. **Group Related Switches**: Use consistent spacing
6. **Immediate Feedback**: Don't require save button
7. **Keyboard Accessible**: Ensure keyboard navigation works

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support with touch events

## Performance

- Lightweight: Minimal DOM elements
- Smooth: CSS transitions, no JavaScript animations
- Efficient: No unnecessary re-renders



