import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';
import { Home, Folder, FileText, Settings, User } from 'lucide-react';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A navigation component that shows the current page location within a navigational hierarchy.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of breadcrumb items',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    separator: {
      control: 'text',
      description: 'Custom separator element',
    },
    showHome: {
      control: 'boolean',
      description: 'Whether to show the home icon',
    },
    homeHref: {
      control: 'text',
      description: 'URL for the home link',
    },
    homeLabel: {
      control: 'text',
      description: 'Accessible label for home link',
    },
    maxItems: {
      control: 'number',
      description: 'Maximum number of items to display before truncation',
    },
    variant: {
      control: 'select',
      options: ['default', 'simple', 'compact'],
      description: 'Visual variant of the breadcrumb',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Projects', href: '/projects' },
      { label: 'My Project' },
    ],
    showHome: true,
    variant: 'default',
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      { label: 'Dashboard', href: '/dashboard', icon: <Home className="h-4 w-4" /> },
      { label: 'Documents', href: '/documents', icon: <Folder className="h-4 w-4" /> },
      { label: 'Report.pdf', icon: <FileText className="h-4 w-4" /> },
    ],
    showHome: false,
    variant: 'default',
  },
};

export const SimpleVariant: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Category', href: '/category' },
      { label: 'Subcategory', href: '/category/subcategory' },
      { label: 'Current Page' },
    ],
    variant: 'simple',
    showHome: false,
  },
};

export const CompactVariant: Story = {
  args: {
    items: [
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Settings', href: '/settings' },
      { label: 'Profile' },
    ],
    variant: 'compact',
    showHome: true,
  },
};

export const WithCustomSeparator: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Electronics', href: '/products/electronics' },
      { label: 'Smartphones' },
    ],
    separator: <span className="mx-2 text-blue-500">→</span>,
    showHome: false,
  },
};

export const LongBreadcrumb: Story = {
  args: {
    items: [
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Administration', href: '/admin' },
      { label: 'User Management', href: '/admin/users' },
      { label: 'Roles & Permissions', href: '/admin/users/roles' },
      { label: 'Edit Role', href: '/admin/users/roles/edit' },
      { label: 'Advanced Settings' },
    ],
    showHome: true,
    variant: 'default',
  },
};

export const TruncatedBreadcrumb: Story = {
  args: {
    items: [
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Administration', href: '/admin' },
      { label: 'User Management', href: '/admin/users' },
      { label: 'Roles & Permissions', href: '/admin/users/roles' },
      { label: 'Edit Role', href: '/admin/users/roles/edit' },
      { label: 'Advanced Settings' },
    ],
    maxItems: 4,
    showHome: true,
    variant: 'default',
  },
};

export const TruncatedWithDropdown: Story = {
  args: {
    items: [
      { label: 'Dashboard', href: '/dashboard', icon: <Home className="h-4 w-4" /> },
      { label: 'Administration', href: '/admin', icon: <Settings className="h-4 w-4" /> },
      { label: 'User Management', href: '/admin/users', icon: <User className="h-4 w-4" /> },
      { label: 'Roles & Permissions', href: '/admin/users/roles', icon: <Settings className="h-4 w-4" /> },
      { label: 'Security Settings', href: '/admin/users/roles/security', icon: <Settings className="h-4 w-4" /> },
      { label: 'Advanced Permissions', href: '/admin/users/roles/security/advanced', icon: <Settings className="h-4 w-4" /> },
      { label: 'Edit Role', href: '/admin/users/roles/security/advanced/edit', icon: <Settings className="h-4 w-4" /> },
      { label: 'Current Page' },
    ],
    maxItems: 4,
    showHome: true,
    variant: 'default',
  },
};

export const WithClickHandlers: Story = {
  args: {
    items: [
      { 
        label: 'Dashboard', 
        href: '/dashboard',
        onClick: () => alert('Navigating to Dashboard'),
        icon: <Home className="h-4 w-4" />
      },
      { 
        label: 'Settings', 
        href: '/settings',
        onClick: () => alert('Navigating to Settings'),
        icon: <Settings className="h-4 w-4" />
      },
      { 
        label: 'Profile',
        icon: <User className="h-4 w-4" />
      },
    ],
    onHomeClick: () => alert('Home clicked!'),
    showHome: true,
    variant: 'default',
  },
};

export const CustomHomeIcon: Story = {
  args: {
    items: [
      { label: 'Projects', href: '/projects' },
      { label: 'My Project' },
    ],
    showHome: true,
    homeIcon: <Settings className="h-4 w-4" />,
    homeLabel: 'Settings',
    homeHref: '/settings',
  },
};

export const NoHome: Story = {
  args: {
    items: [
      { label: 'Level 1', href: '/level1' },
      { label: 'Level 2', href: '/level1/level2' },
      { label: 'Level 3', href: '/level1/level2/level3' },
      { label: 'Current Page' },
    ],
    showHome: false,
    variant: 'default',
  },
};

export const SingleItem: Story = {
  args: {
    items: [
      { label: 'Current Page' },
    ],
    showHome: true,
    variant: 'default',
  },
};

export const CustomStyling: Story = {
  args: {
    items: [
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Projects', href: '/projects' },
      { label: 'My Project' },
    ],
    className: 'bg-gray-100 p-3 rounded-lg border',
    showHome: true,
    variant: 'default',
  },
};