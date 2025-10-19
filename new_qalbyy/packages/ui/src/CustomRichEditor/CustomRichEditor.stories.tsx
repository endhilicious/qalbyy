import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { CustomRichEditor } from './CustomRichEditor';

const meta: Meta<typeof CustomRichEditor> = {
  title: 'Components/CustomRichEditor',
  component: CustomRichEditor,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A powerful rich text editor with math equation support, image upload, and extensive formatting options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'The HTML content of the editor',
    },
    onChange: {
      action: 'changed',
      description: 'Callback fired when the content changes',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when editor is empty',
    },
    height: {
      control: 'text',
      description: 'Height of the editor container',
    },
    readOnly: {
      control: 'boolean',
      description: 'Whether the editor is read-only',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    showMathButton: {
      control: 'boolean',
      description: 'Whether to show the math equation button',
    },
    onImageUpload: {
      action: 'image-uploaded',
      description: 'Callback for handling image uploads',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Template component for interactive stories
const Template = (args: any) => {
  const [value, setValue] = useState(args.value || '');
  
  const handleImageUpload = async (file: File): Promise<string> => {
    // Simulate image upload
    return new Promise((resolve) => {
      setTimeout(() => {
        const url = URL.createObjectURL(file);
        resolve(url);
      }, 1000);
    });
  };

  return (
    <div style={{ height: '500px' }}>
      <CustomRichEditor
        {...args}
        value={value}
        onChange={setValue}
        onImageUpload={handleImageUpload}
      />
    </div>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    placeholder: 'Start writing your content...',
    height: '300px',
    showMathButton: true,
    readOnly: false,
  },
};

export const WithInitialContent: Story = {
  render: Template,
  args: {
    value: '<h2>Welcome to the Rich Text Editor</h2><p>This editor supports <strong>bold text</strong>, <em>italic text</em>, and much more!</p><ul><li>Bullet points</li><li>Numbered lists</li><li>And more formatting options</li></ul>',
    placeholder: 'Start writing...',
    height: '300px',
    showMathButton: true,
    readOnly: false,
  },
};

export const ReadOnly: Story = {
  render: Template,
  args: {
    value: '<h3>Read-Only Mode</h3><p>This editor is in <strong>read-only mode</strong>. You cannot edit the content, but you can still view all the formatting and math equations.</p><blockquote>This is a blockquote example.</blockquote>',
    placeholder: 'This is read-only...',
    height: '250px',
    showMathButton: false,
    readOnly: true,
  },
};

export const WithoutMathButton: Story = {
  render: Template,
  args: {
    value: '<p>This editor has the math button disabled.</p>',
    placeholder: 'Write without math support...',
    height: '200px',
    showMathButton: false,
    readOnly: false,
  },
};

export const TallEditor: Story = {
  render: Template,
  args: {
    value: '<h1>Large Editor</h1><p>This is a taller editor for longer content.</p>',
    placeholder: 'Write a long document...',
    height: '500px',
    showMathButton: true,
    readOnly: false,
  },
};

export const CompactEditor: Story = {
  render: Template,
  args: {
    value: '<p>Compact editor for short notes.</p>',
    placeholder: 'Quick note...',
    height: '150px',
    showMathButton: true,
    readOnly: false,
  },
};

export const WithMathEquations: Story = {
  render: Template,
  args: {
    value: '<h3>Math Equations Example</h3><p>Here are some mathematical expressions:</p><p>Inline math: The quadratic formula is useful for solving equations.</p><p>Block math equations:</p><p>You can insert complex mathematical expressions using LaTeX syntax.</p>',
    placeholder: 'Write with math equations...',
    height: '400px',
    showMathButton: true,
    readOnly: false,
  },
};

export const CustomStyling: Story = {
  render: Template,
  args: {
    value: '<p>This editor has custom styling applied.</p>',
    placeholder: 'Custom styled editor...',
    height: '250px',
    showMathButton: true,
    readOnly: false,
    className: 'border-2 border-blue-500 rounded-lg shadow-lg',
  },
};

// Playground story for testing all features
export const Playground: Story = {
  render: Template,
  args: {
    value: '',
    placeholder: 'Try all the features here...',
    height: '400px',
    showMathButton: true,
    readOnly: false,
    className: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use this playground to test all the features of the CustomRichEditor component. Try formatting text, inserting images, adding math equations, and more!',
      },
    },
  },
};