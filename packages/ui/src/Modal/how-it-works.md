# Modal Component

A flexible and accessible modal dialog component with customizable sizes, close behaviors, and styling options.

## Usage

```tsx
import { Modal } from '@repo/ui/Modal/Modal';

// Basic usage
const [isOpen, setIsOpen] = useState(false);

<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="My Modal">
  <p>Modal content goes here...</p>
</Modal>

// With custom size and close behaviors
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Settings"
  size="lg"
  closeOnOverlayClick={false}
  closeOnEscape={true}
>
  <div>Modal content...</div>
</Modal>
```

## Props

| Prop                  | Type                                              | Default | Description                        |
| --------------------- | ------------------------------------------------- | ------- | ---------------------------------- |
| `isOpen`              | `boolean`                                         | -       | Controls modal visibility          |
| `onClose`             | `() => void`                                      | -       | Callback when modal should close   |
| `title`               | `string`                                          | -       | Modal title (optional)             |
| `children`            | `ReactNode`                                       | -       | Modal content                      |
| `size`                | `'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| 'full'` | `'md'`  | Modal size                         |
| `showCloseButton`     | `boolean`                                         | `true`  | Show close button in header        |
| `closeOnOverlayClick` | `boolean`                                         | `true`  | Close modal when clicking overlay  |
| `closeOnEscape`       | `boolean`                                         | `true`  | Close modal when pressing Escape   |
| `className`           | `string`                                          | -       | Additional CSS classes for modal   |
| `overlayClassName`    | `string`                                          | -       | Additional CSS classes for overlay |
| `headerClassName`     | `string`                                          | -       | Additional CSS classes for header  |
| `bodyClassName`       | `string`                                          | -       | Additional CSS classes for body    |

## Features

- **Multiple Sizes**: From small to full-width modals
- **Flexible Close Options**: Control how users can close the modal
- **Accessibility**: Proper ARIA attributes and keyboard navigation
- **Body Scroll Lock**: Prevents background scrolling when modal is open
- **Customizable Styling**: Add custom classes to different parts
- **Escape Key Support**: Close with Escape key (configurable)

## Sizes

- **sm**: Small modal (max-width: 384px)
- **md**: Medium modal (max-width: 448px) - default
- **lg**: Large modal (max-width: 512px)
- **xl**: Extra large modal (max-width: 576px)
- **2xl**: 2X large modal (max-width: 672px)
- **full**: Full width with margins (max-width: 100% with 16px margins)

## Examples

### Confirmation Dialog

```tsx
<Modal
  isOpen={showConfirm}
  onClose={() => setShowConfirm(false)}
  title="Confirm Delete"
  size="sm"
>
  <div className="space-y-4">
    <p>Are you sure you want to delete this item?</p>
    <div className="flex justify-end space-x-3">
      <button onClick={() => setShowConfirm(false)}>Cancel</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  </div>
</Modal>
```

### Form Modal

```tsx
<Modal
  isOpen={showForm}
  onClose={() => setShowForm(false)}
  title="Edit Profile"
  size="lg"
>
  <form className="space-y-4">
    <InputText label="Name" placeholder="Enter name" />
    <InputTextarea label="Bio" placeholder="Enter bio" />
    <div className="flex justify-end space-x-3">
      <button type="button" onClick={() => setShowForm(false)}>
        Cancel
      </button>
      <button type="submit">Save</button>
    </div>
  </form>
</Modal>
```

### Modal Without Close Button

```tsx
<Modal
  isOpen={isOpen}
  onClose={onClose}
  title="Processing..."
  showCloseButton={false}
  closeOnOverlayClick={false}
  closeOnEscape={false}
>
  <div className="text-center">
    <p>Please wait while we process your request...</p>
  </div>
</Modal>
```
