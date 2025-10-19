import type { Meta, StoryObj } from '@storybook/react';
import { Badge, StatusBadge } from './Badge';
import { X, Check, AlertTriangle, Info, Star, Heart, Bell } from 'lucide-react';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A versatile badge component for displaying status, labels, and notifications with multiple variants and sizes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Content to display inside the badge',
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error', 'info'],
      description: 'Visual variant of the badge',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the badge',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler for interactive badges',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Badge Stories
export const Default: Story = {
  args: {
    children: 'Default Badge',
    variant: 'default',
    size: 'md',
  },
};

export const Success: Story = {
  args: {
    children: 'Success',
    variant: 'success',
    size: 'md',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning',
    variant: 'warning',
    size: 'md',
  },
};

export const Error: Story = {
  args: {
    children: 'Error',
    variant: 'error',
    size: 'md',
  },
};

export const Information: Story = {
  args: {
    children: 'Info',
    variant: 'info',
    size: 'md',
  },
};

// Size Variations
export const SmallSize: Story = {
  args: {
    children: 'Small',
    variant: 'default',
    size: 'sm',
  },
};

export const MediumSize: Story = {
  args: {
    children: 'Medium',
    variant: 'default',
    size: 'md',
  },
};

export const LargeSize: Story = {
  args: {
    children: 'Large',
    variant: 'default',
    size: 'lg',
  },
};

// Interactive Badge
export const Clickable: Story = {
  args: {
    children: 'Click me',
    variant: 'info',
    size: 'md',
    onClick: () => alert('Badge clicked!'),
  },
};

// Badges with Icons
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="success" size="md">
        <Check className="w-3 h-3 mr-1" />
        Completed
      </Badge>
      <Badge variant="error" size="md">
        <X className="w-3 h-3 mr-1" />
        Failed
      </Badge>
      <Badge variant="warning" size="md">
        <AlertTriangle className="w-3 h-3 mr-1" />
        Warning
      </Badge>
      <Badge variant="info" size="md">
        <Info className="w-3 h-3 mr-1" />
        Information
      </Badge>
      <Badge variant="default" size="md">
        <Star className="w-3 h-3 mr-1" />
        Featured
      </Badge>
    </div>
  ),
};

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">All Variants - Medium Size</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="default">Default</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">All Sizes - Success Variant</h3>
        <div className="flex flex-wrap gap-2 items-center">
          <Badge variant="success" size="sm">Small</Badge>
          <Badge variant="success" size="md">Medium</Badge>
          <Badge variant="success" size="lg">Large</Badge>
        </div>
      </div>
    </div>
  ),
};

// Number Badges
export const NumberBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="error" size="sm">1</Badge>
      <Badge variant="error" size="sm">5</Badge>
      <Badge variant="error" size="sm">99+</Badge>
      <Badge variant="info" size="md">12</Badge>
      <Badge variant="success" size="lg">100</Badge>
    </div>
  ),
};

// Status Indicators
export const StatusIndicators: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">User Status</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="success">Online</Badge>
          <Badge variant="warning">Away</Badge>
          <Badge variant="error">Offline</Badge>
          <Badge variant="info">Busy</Badge>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Order Status</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="warning">Pending</Badge>
          <Badge variant="info">Processing</Badge>
          <Badge variant="success">Shipped</Badge>
          <Badge variant="success">Delivered</Badge>
          <Badge variant="error">Cancelled</Badge>
        </div>
      </div>
    </div>
  ),
};

// Custom Styling
export const CustomStyling: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default" className="border-2 border-gray-300">
        Bordered
      </Badge>
      <Badge variant="success" className="shadow-lg">
        With Shadow
      </Badge>
      <Badge variant="info" className="uppercase tracking-wider">
        Uppercase
      </Badge>
      <Badge variant="warning" className="italic">
        Italic Text
      </Badge>
    </div>
  ),
};

// StatusBadge Stories
const statusBadgeMeta: Meta<typeof StatusBadge> = {
  title: 'Components/Badge/StatusBadge',
  component: StatusBadge,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A specialized badge component that automatically determines variant based on status text.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Content to display (overrides status)',
    },
    status: {
      control: 'text',
      description: 'Status text that determines the variant automatically',
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error', 'info'],
      description: 'Manual variant override',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the badge',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export const StatusBadgeDefault: StoryObj<typeof StatusBadge> = {
  ...statusBadgeMeta,
  args: {
    status: 'active',
    size: 'md',
  },
};

export const AutomaticStatusMapping: StoryObj<typeof StatusBadge> = {
  ...statusBadgeMeta,
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Success Status</h3>
        <div className="flex flex-wrap gap-2">
          <StatusBadge status="active" />
          <StatusBadge status="verified" />
          <StatusBadge status="completed" />
          <StatusBadge status="approved" />
          <StatusBadge status="published" />
          <StatusBadge status="success" />
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Warning Status</h3>
        <div className="flex flex-wrap gap-2">
          <StatusBadge status="pending" />
          <StatusBadge status="in progress" />
          <StatusBadge status="processing" />
          <StatusBadge status="draft" />
          <StatusBadge status="review" />
          <StatusBadge status="nearly full" />
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Error Status</h3>
        <div className="flex flex-wrap gap-2">
          <StatusBadge status="inactive" />
          <StatusBadge status="cancelled" />
          <StatusBadge status="rejected" />
          <StatusBadge status="failed" />
          <StatusBadge status="expired" />
          <StatusBadge status="error" />
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Info Status</h3>
        <div className="flex flex-wrap gap-2">
          <StatusBadge status="info" />
          <StatusBadge status="new" />
          <StatusBadge status="note" />
          <StatusBadge status="information" />
        </div>
      </div>
    </div>
  ),
};

export const StatusBadgeWithOverride: StoryObj<typeof StatusBadge> = {
  ...statusBadgeMeta,
  render: () => (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">Manual Variant Override</h3>
      <div className="flex flex-wrap gap-2">
        <StatusBadge status="active" variant="warning" />
        <StatusBadge status="failed" variant="success" />
        <StatusBadge status="pending" variant="error" />
      </div>
    </div>
  ),
};

export const StatusBadgeWithCustomContent: StoryObj<typeof StatusBadge> = {
  ...statusBadgeMeta,
  render: () => (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">Custom Content with Status-based Variant</h3>
      <div className="flex flex-wrap gap-2">
        <StatusBadge status="active">
          <Check className="w-3 h-3 mr-1" />
          Online
        </StatusBadge>
        <StatusBadge status="pending">
          <Bell className="w-3 h-3 mr-1" />
          Notification
        </StatusBadge>
        <StatusBadge status="error">
          <Heart className="w-3 h-3 mr-1" />
          Favorite
        </StatusBadge>
      </div>
    </div>
  ),
};

// Real-world Examples
export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">E-commerce Product Tags</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="error" size="sm">Sale</Badge>
          <Badge variant="info" size="sm">New</Badge>
          <Badge variant="success" size="sm">Best Seller</Badge>
          <Badge variant="warning" size="sm">Limited</Badge>
          <Badge variant="default" size="sm">Featured</Badge>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">User Roles</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="error" size="md">Admin</Badge>
          <Badge variant="warning" size="md">Moderator</Badge>
          <Badge variant="info" size="md">Editor</Badge>
          <Badge variant="success" size="md">Contributor</Badge>
          <Badge variant="default" size="md">Viewer</Badge>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Priority Levels</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="error" size="lg">Critical</Badge>
          <Badge variant="warning" size="lg">High</Badge>
          <Badge variant="info" size="lg">Medium</Badge>
          <Badge variant="success" size="lg">Low</Badge>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Notification Counts</h3>
        <div className="flex flex-wrap gap-2 items-center">
          <div className="relative">
            <Bell className="w-6 h-6 text-gray-600" />
            <Badge variant="error" size="sm" className="absolute -top-2 -right-2">3</Badge>
          </div>
          <div className="relative">
            <Heart className="w-6 h-6 text-gray-600" />
            <Badge variant="error" size="sm" className="absolute -top-2 -right-2">12</Badge>
          </div>
          <div className="relative">
            <Star className="w-6 h-6 text-gray-600" />
            <Badge variant="error" size="sm" className="absolute -top-2 -right-2">99+</Badge>
          </div>
        </div>
      </div>
    </div>
  ),
};