# How CustomRichEditor Component Works

## Overview
The CustomRichEditor is a powerful rich text editor built on top of ReactQuill, enhanced with mathematical equation support, image handling, and extensive customization options. It provides a complete WYSIWYG editing experience suitable for content creation, documentation, and educational applications.

## Core Functionality

### 1. Rich Text Editing
- **WYSIWYG Interface**: What-you-see-is-what-you-get editing experience
- **Text Formatting**: Bold, italic, underline, strikethrough, and more
- **Lists**: Ordered and unordered lists with proper nesting
- **Headers**: Multiple heading levels (H1-H6)
- **Alignment**: Text alignment options (left, center, right, justify)
- **Colors**: Text and background color customization

### 2. Mathematical Equations
- **LaTeX Support**: Full LaTeX equation rendering using KaTeX
- **Inline Math**: Mathematical expressions within text lines
- **Block Math**: Standalone mathematical equations
- **Math Modal**: Dedicated interface for equation editing
- **Live Preview**: Real-time preview of mathematical expressions

### 3. Image Management
- **Image Upload**: Drag-and-drop and click-to-upload functionality
- **Image Resizing**: Built-in image resizing handles
- **Image Positioning**: Alignment and positioning options
- **Base64 Encoding**: Automatic image encoding for storage

### 4. Advanced Features
- **Code Blocks**: Syntax highlighting for code snippets
- **Links**: URL insertion and management
- **Tables**: Table creation and editing capabilities
- **Undo/Redo**: Full history management
- **Clipboard**: Enhanced copy/paste functionality

## Props Interface

```typescript
interface CustomRichEditorProps {
  value: string;
  onChange: (content: string) => void;
  placeholder?: string;
  readOnly?: boolean;
  height?: string;
  showMathButton?: boolean;
  onImageUpload?: (file: File) => Promise<string>;
  className?: string;
  style?: React.CSSProperties;
  modules?: any;
  formats?: string[];
  theme?: 'snow' | 'bubble';
}
```

## Implementation Details

### State Management
The component uses several state variables to manage its behavior:
- `isClient`: Ensures the component only renders on the client side
- `isMathModalOpen`: Controls the visibility of the math equation modal
- `hasError`: Tracks error states for graceful error handling
- `quillRef`: Reference to the Quill editor instance for direct manipulation

### Dynamic Imports and Initialization
To ensure compatibility with SSR (Server-Side Rendering) and avoid browser compatibility issues, the component uses a robust initialization system:
- ReactQuill is dynamically imported with `ssr: false`
- All dependencies (react-quill, quill-image-resize-module-react, katex) are loaded asynchronously using Promise.all
- The `initializeQuill` function handles module registration and custom blot creation
- `isQuillInitialized` flag prevents duplicate initialization

### Custom Quill Blots

#### MathBlot (Block Math)
```typescript
class MathBlot extends BlockEmbed {
  static create(value: string) {
    const node = super.create();
    katex.render(value, node, {
      throwOnError: false,
      displayMode: true
    });
    node.setAttribute('data-value', value);
    return node;
  }
}
```

#### InlineMathBlot (Inline Math)
```typescript
class InlineMathBlot extends Embed {
  static create(value: string) {
    const node = super.create();
    katex.render(value, node, {
      throwOnError: false,
      displayMode: false
    });
    node.setAttribute('data-value', value);
    return node;
  }
}
```

### Quill Modules Configuration
```typescript
const modules = useMemo(() => ({
  toolbar: {
    container: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'direction': 'rtl' }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['link', 'image', 'video'],
      ['clean'],
      ...(showMathButton ? [['math']] : [])
    ],
    handlers: {
      math: () => setShowMathModal(true)
    }
  },
  imageResize: {
    parchment: ReactQuill.Quill.import('parchment'),
    modules: ['Resize', 'DisplaySize', 'Toolbar']
  },
  clipboard: {
    matchVisual: false
  }
}), [showMathButton]);
```

## Mathematical Equation System

### LaTeX Integration
- **KaTeX Library**: Fast math rendering engine
- **Error Handling**: Graceful handling of invalid LaTeX syntax
- **Display Modes**: Support for both inline and block equations

### Math Modal Interface
- **Syntax Highlighting**: LaTeX syntax highlighting in editor
- **Live Preview**: Real-time rendering of equations
- **Template Library**: Common equation templates
- **Error Feedback**: Clear error messages for invalid syntax

### Equation Insertion
```typescript
const insertMathEquation = useCallback((latex: string, isInline: boolean = false) => {
  if (quillRef.current) {
    const quill = quillRef.current.getEditor();
    const range = quill.getSelection();
    
    if (range) {
      if (isInline) {
        quill.insertEmbed(range.index, 'inlineMath', latex);
      } else {
        quill.insertEmbed(range.index, 'math', latex);
      }
      quill.setSelection(range.index + 1);
    }
  }
}, []);
```

## Image Handling System

### Upload Process
```typescript
const handleImageUpload = useCallback(async (file: File): Promise<string> => {
  if (onImageUpload) {
    return await onImageUpload(file);
  }
  
  // Default: Convert to base64
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.readAsDataURL(file);
  });
}, [onImageUpload]);
```

### Image Resize Module
- **Resize Handles**: Visual handles for image resizing
- **Aspect Ratio**: Maintains aspect ratio during resize
- **Size Display**: Shows current image dimensions
- **Toolbar Integration**: Resize controls in image toolbar

## Styling and Theming

### CSS Architecture
- **Modular Styles**: Component-scoped styling
- **Theme Support**: Light and dark theme compatibility
- **Responsive Design**: Mobile-friendly interface
- **Custom Properties**: CSS variables for easy theming

### Toolbar Customization
- **Icon Styling**: Custom SVG icons for better visual consistency
- **Button States**: Hover, active, and disabled states
- **Responsive Toolbar**: Adapts to different screen sizes
- **Custom Buttons**: Support for additional toolbar buttons

## Usage Patterns

### Basic Usage
```tsx
const [content, setContent] = useState('');

<CustomRichEditor
  value={content}
  onChange={setContent}
  placeholder="Start writing..."
/>
```

### With Math Support
```tsx
<CustomRichEditor
  value={content}
  onChange={setContent}
  showMathButton={true}
  placeholder="Write your mathematical content..."
/>
```

### Custom Image Upload
```tsx
const handleImageUpload = async (file: File) => {
  const formData = new FormData();
  formData.append('image', file);
  
  const response = await fetch('/api/upload', {
    method: 'POST',
    body: formData
  });
  
  const { url } = await response.json();
  return url;
};

<CustomRichEditor
  value={content}
  onChange={setContent}
  onImageUpload={handleImageUpload}
/>
```

### Read-Only Mode
```tsx
<CustomRichEditor
  value={content}
  onChange={() => {}}
  readOnly={true}
  showMathButton={false}
/>
```

## Accessibility Features

### Keyboard Navigation
- **Tab Navigation**: Full keyboard accessibility
- **Shortcut Keys**: Standard text editing shortcuts
- **Focus Management**: Proper focus handling throughout the editor

### Screen Reader Support
- **ARIA Labels**: Comprehensive ARIA labeling
- **Role Attributes**: Proper semantic roles
- **Content Description**: Accessible content descriptions

### Visual Accessibility
- **High Contrast**: Support for high contrast themes
- **Font Scaling**: Respects user font size preferences
- **Color Independence**: Functionality doesn't rely solely on color

## Performance Optimizations

### Lazy Loading
- **Dynamic Imports**: Loads Quill only when needed
- **Code Splitting**: Separates editor code from main bundle
- **Module Registration**: Registers Quill modules on demand

### Memory Management
- **Event Cleanup**: Proper cleanup of event listeners
- **Reference Management**: Careful handling of Quill references
- **State Optimization**: Minimizes unnecessary re-renders

### Bundle Size
- **Tree Shaking**: Only includes used Quill modules
- **CSS Optimization**: Optimized CSS delivery
- **Asset Optimization**: Compressed images and fonts

## Best Practices

### Content Management
- **Sanitization**: Always sanitize HTML content
- **Validation**: Validate content structure
- **Version Control**: Consider content versioning for important documents

### Performance
- **Debouncing**: Debounce onChange events for expensive operations
- **Memoization**: Use React.memo for performance-critical scenarios
- **Lazy Initialization**: Initialize editor only when needed

### User Experience
- **Auto-save**: Implement auto-save functionality
- **Error Recovery**: Provide content recovery mechanisms
- **Loading States**: Show loading indicators during operations

## Common Use Cases

1. **Content Management Systems**: Article and blog post editing
2. **Educational Platforms**: Course content with mathematical equations
3. **Documentation Tools**: Technical documentation with code and math
4. **Note-Taking Applications**: Rich note-taking with multimedia support
5. **Email Editors**: Rich email composition interfaces
6. **Forum Systems**: Rich post and comment editing
7. **Wiki Systems**: Collaborative content editing

## Integration Notes

## Dependencies

The component requires the following dependencies to be installed:

```bash
# Core dependencies
pnpm add react-quill katex quill-image-resize-module-react

# Type definitions
pnpm add -D @types/katex @types/quill
```

A custom type declaration file is also required for `quill-image-resize-module-react` since it doesn't have official TypeScript support.

### Framework Compatibility
- **React**: Primary framework support
- **Next.js**: Full SSR/SSG compatibility with dynamic imports
- **TypeScript**: Complete type safety with proper type definitions
- Supports both controlled and uncontrolled usage patterns
- Can be integrated with form libraries like React Hook Form or Formik
- Provides callback for custom image upload handling
- All dependencies are loaded asynchronously to prevent SSR issues
- Includes proper error handling and fallback states

### Backend Integration
- **Content Storage**: Works with any backend storage system
- **Image Hosting**: Flexible image upload integration
- **Real-time Collaboration**: Can be extended for collaborative editing

### Third-party Services
- **Cloud Storage**: AWS S3, Cloudinary, etc.
- **CDN Integration**: Content delivery optimization
- **Analytics**: Usage tracking and analytics integration