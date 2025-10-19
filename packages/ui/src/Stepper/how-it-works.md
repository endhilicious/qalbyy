# Stepper Component

A modern, reusable stepper component for multi-step forms and processes.

## Features

- **Multiple Variants**: Modern, default, and minimal styles
- **Progress Indicator**: Visual progress bar with percentage
- **Icon Support**: Custom icons for each step
- **Navigation Control**: Optional step navigation
- **Disabled Steps**: Support for disabled steps
- **Responsive Design**: Mobile-friendly layout
- **Accessibility**: Proper ARIA labels and keyboard navigation

## Variants

### Modern (Default)
- Enhanced styling with gradients and shadows
- Larger step indicators (48px)
- Ring effects for current and completed steps
- Smooth animations and hover effects

### Default
- Clean, professional appearance
- Medium step indicators (40px)
- Standard colors and transitions
- Good balance of visual appeal and simplicity

### Minimal
- Compact design for space-constrained layouts
- Small step indicators (32px)
- Reduced visual elements
- Focus on functionality

## Usage

```tsx
import { Stepper } from '@repo/ui';

const steps = [
  {
    id: 'info',
    title: 'Basic Information',
    description: 'Enter basic details',
    icon: <Users className="w-5 h-5" />,
  },
  {
    id: 'access',
    title: 'Access & Pricing',
    description: 'Set access rules',
    icon: <Settings className="w-5 h-5" />,
  },
  {
    id: 'schedule',
    title: 'Schedule',
    description: 'Set timing',
    icon: <Calendar className="w-5 h-5" />,
  },
  {
    id: 'exam',
    title: 'Exam Settings',
    description: 'Configure exam',
    icon: <Clock className="w-5 h-5" />,
    disabled: true, // Optional: disable step
  },
];

function MyForm() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <Stepper
      steps={steps}
      currentStep={currentStep}
      variant="modern"
      allowNavigation={true}
      showProgress={true}
      onStepClick={setCurrentStep}
    />
  );
}
```

## Props

### StepperProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `steps` | `StepperStep[]` | - | Array of step objects |
| `currentStep` | `number` | - | Current active step (1-based) |
| `onStepClick` | `(index: number) => void` | - | Callback when step is clicked |
| `className` | `string` | - | Additional CSS classes |
| `variant` | `'default' \| 'modern' \| 'minimal'` | `'modern'` | Visual variant |
| `allowNavigation` | `boolean` | `false` | Enable step navigation |
| `showProgress` | `boolean` | `true` | Show progress bar |

### StepperStep

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | - | Unique identifier |
| `title` | `string` | - | Step title |
| `description` | `string` | - | Optional description |
| `icon` | `React.ReactNode` | - | Optional icon |
| `disabled` | `boolean` | `false` | Disable the step |

## Navigation Component

The `StepperNavigation` component provides consistent navigation buttons for stepper forms.

```tsx
import { StepperNavigation } from '@repo/ui';

<StepperNavigation
  onPrevious={handlePrevious}
  onNext={handleNext}
  onSubmit={handleSubmit}
  isFirstStep={currentStep === 1}
  isLastStep={currentStep === totalSteps}
  isLoading={isSubmitting}
  showCancel={true}
  onCancel={handleCancel}
/>
```

### StepperNavigationProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onPrevious` | `() => void` | - | Previous step handler |
| `onNext` | `() => void` | - | Next step handler |
| `onSubmit` | `() => void` | - | Form submission handler |
| `isFirstStep` | `boolean` | `false` | Is first step |
| `isLastStep` | `boolean` | `false` | Is last step |
| `isLoading` | `boolean` | `false` | Loading state |
| `showCancel` | `boolean` | `true` | Show cancel button |
| `onCancel` | `() => void` | - | Cancel handler |
| `previousText` | `string` | `'Sebelumnya'` | Previous button text |
| `nextText` | `string` | `'Selanjutnya'` | Next button text |
| `submitText` | `string` | `'Simpan'` | Submit button text |
| `cancelText` | `string` | `'Batal'` | Cancel button text |

## Styling

The component uses Tailwind CSS classes and supports customization through:

- **CSS Variables**: For color theming
- **className**: For additional styling
- **Variant System**: Pre-defined style variants

## Accessibility

- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- Focus management
- Color contrast compliance

## Best Practices

1. **Step Titles**: Keep titles concise and descriptive
2. **Icons**: Use consistent icon style and size
3. **Navigation**: Enable navigation only when appropriate
4. **Progress**: Always show progress for better UX
5. **Disabled Steps**: Use sparingly and provide clear feedback
6. **Responsive**: Test on mobile devices
7. **Loading States**: Handle loading states gracefully



