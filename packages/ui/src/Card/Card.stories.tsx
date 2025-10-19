import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardProps } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile card component that can be used to display content in a structured and visually appealing way.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'elevated', 'filled'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
    },
    rounded: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
    },
    imagePosition: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
    },
    clickable: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
    divider: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'This is a subtitle',
    children: 'This is the main content of the card. It can contain any React elements or text.',
  },
};

export const WithoutHeader: Story = {
  args: {
    children: 'This is a simple card without a header. Just the content area.',
  },
};

export const WithFooter: Story = {
  args: {
    title: 'Card with Footer',
    children: 'This card has a footer section below the content.',
    footer: (
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">Last updated: Today</span>
        <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">
          Action
        </button>
      </div>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    title: 'Outlined Card',
    children: 'This card uses the outlined variant with a thicker border.',
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    title: 'Elevated Card',
    children: 'This card uses the elevated variant with a shadow.',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    title: 'Filled Card',
    children: 'This card uses the filled variant with a background color.',
  },
};

export const Clickable: Story = {
  args: {
    title: 'Clickable Card',
    children: 'This card is clickable. Try clicking on it!',
    clickable: true,
    onClick: () => alert('Card clicked!'),
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Card',
    children: 'This card is disabled and cannot be interacted with.',
    clickable: true,
    disabled: true,
    onClick: () => alert('This should not fire'),
  },
};

export const WithDivider: Story = {
  args: {
    title: 'Card with Divider',
    subtitle: 'The header is separated from content',
    children: 'This card has a divider line between the header and content sections.',
    divider: true,
  },
};

export const SmallSize: Story = {
  args: {
    size: 'sm',
    title: 'Small Card',
    children: 'This is a small-sized card with smaller text.',
  },
};

export const LargeSize: Story = {
  args: {
    size: 'lg',
    title: 'Large Card',
    children: 'This is a large-sized card with bigger text.',
  },
};

export const NoPadding: Story = {
  args: {
    padding: 'none',
    children: (
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Custom Padding</h3>
        <p>This card has no default padding, allowing for custom spacing.</p>
      </div>
    ),
  },
};

export const LargePadding: Story = {
  args: {
    padding: 'lg',
    title: 'Large Padding',
    children: 'This card has large padding for a more spacious feel.',
  },
};

export const FullyRounded: Story = {
  args: {
    rounded: 'xl',
    title: 'Rounded Card',
    children: 'This card has extra large border radius.',
  },
};

export const WithImage: Story = {
  args: {
    title: 'Card with Image',
    children: 'This card includes an image at the top.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Beautiful landscape',
  },
};

export const WithImageBottom: Story = {
  args: {
    title: 'Card with Bottom Image',
    children: 'This card has an image at the bottom.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Beautiful landscape',
    imagePosition: 'bottom',
  },
};

export const WithImageLeft: Story = {
  args: {
    title: 'Card with Left Image',
    children: 'This card has an image on the left side, creating a horizontal layout.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Beautiful landscape',
    imagePosition: 'left',
  },
  parameters: {
    layout: 'padded',
  },
};

export const WithImageRight: Story = {
  args: {
    title: 'Card with Right Image',
    children: 'This card has an image on the right side.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Beautiful landscape',
    imagePosition: 'right',
  },
  parameters: {
    layout: 'padded',
  },
};

export const CustomHeader: Story = {
  args: {
    header: (
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-purple-600">Custom Header</h3>
          <p className="text-sm text-gray-500">With custom styling</p>
        </div>
        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
          <span className="text-purple-600 text-sm font-bold">!</span>
        </div>
      </div>
    ),
    children: 'This card uses a custom header component instead of the default title/subtitle.',
    divider: true,
  },
};

export const ProductCard: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Headphones',
    title: 'Premium Headphones',
    children: (
      <div>
        <p className="text-gray-600 mb-3">
          High-quality wireless headphones with noise cancellation and premium sound quality.
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">$299</span>
          <div className="flex items-center">
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-sm text-gray-500 ml-1">(4.8)</span>
          </div>
        </div>
      </div>
    ),
    footer: (
      <div className="flex gap-2">
        <button className="flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Add to Cart
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
          ♡
        </button>
      </div>
    ),
    clickable: true,
    onClick: () => alert('Product clicked!'),
  },
};

export const FullWidth: Story = {
  args: {
    title: 'Full Width Card',
    children: 'This card takes the full width of its container.',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};