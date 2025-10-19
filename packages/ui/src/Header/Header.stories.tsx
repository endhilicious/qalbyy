import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";
import { HeaderUser, HeaderNotification } from "./Header";

const meta: Meta<typeof Header> = {
  title: "Layout/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
A reusable Header component that provides navigation, user menu, notifications, and mobile responsiveness.

## Features
- **Responsive Design**: Mobile-first approach with collapsible elements
- **User Menu**: Avatar dropdown with profile, settings, and logout options
- **Notifications**: Bell icon with unread count and dropdown list
- **Mobile Support**: Hamburger menu toggle for mobile sidebar
- **Customizable**: Multiple variants and custom actions support
- **TypeScript**: Full type safety with comprehensive interfaces

## Usage
\`\`\`tsx
import { Header } from "@repo/ui";

const user = {
  name: "John Doe",
  email: "john@example.com",
  role: "Administrator"
};

<Header
  user={user}
  appTitle="My App"
  onLogout={() => console.log("Logout")}
  onMobileMenuToggle={() => console.log("Toggle menu")}
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "minimal", "branded"],
      description: "Header visual variant",
    },
    showNotifications: {
      control: { type: "boolean" },
      description: "Show/hide notifications bell",
    },
    showUserMenu: {
      control: { type: "boolean" },
      description: "Show/hide user menu",
    },
    showMobileMenuToggle: {
      control: { type: "boolean" },
      description: "Show/hide mobile menu toggle button",
    },
    appTitle: {
      control: { type: "text" },
      description: "Application title displayed in header",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

// Sample data
const sampleUser: HeaderUser = {
  name: "John Doe",
  email: "john.doe@example.com",
  role: "Administrator",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format",
};

const sampleNotifications: HeaderNotification[] = [
  {
    id: "1",
    title: "New Message",
    message: "You have received a new message from the support team.",
    type: "info",
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    time: "30 minutes ago",
    read: false,
    priority: "medium",
  },
  {
    id: "2",
    title: "System Update",
    message: "The system will be updated tonight at 2 AM.",
    type: "warning",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    time: "2 hours ago",
    read: false,
    priority: "high",
  },
  {
    id: "3",
    title: "Task Completed",
    message: "Your data export has been completed successfully.",
    type: "success",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    time: "1 day ago",
    read: true,
    priority: "low",
  },
];

export const Default: Story = {
  args: {
    user: sampleUser,
    appTitle: "JILC Dashboard",
    notifications: sampleNotifications,
    showNotifications: true,
    showUserMenu: true,
    showMobileMenuToggle: true,
    onLogout: () => console.log("Logout clicked"),
    onSettings: () => console.log("Settings clicked"),
    onProfile: () => console.log("Profile clicked"),
    onMobileMenuToggle: () => console.log("Mobile menu toggle clicked"),
    onNotificationClick: (notification) => console.log("Notification clicked:", notification),
    onMarkNotificationRead: (id) => console.log("Mark as read:", id),
    onMarkAllNotificationsRead: () => console.log("Mark all as read"),
    onDeleteNotification: (id) => console.log("Delete notification:", id),
    onClearAllNotifications: () => console.log("Clear all notifications"),
  },
};

export const WithLogo: Story = {
  args: {
    ...Default.args,
    logo: "https://via.placeholder.com/32x32/3B82F6/FFFFFF?text=L",
  },
};

export const Minimal: Story = {
  args: {
    ...Default.args,
    variant: "minimal",
    showNotifications: false,
    showMobileMenuToggle: false,
  },
};

export const NoNotifications: Story = {
  args: {
    ...Default.args,
    notifications: [],
  },
};

export const NoUser: Story = {
  args: {
    ...Default.args,
    user: undefined,
    showUserMenu: false,
  },
};

export const MobileOnly: Story = {
  args: {
    ...Default.args,
    showMobileMenuToggle: true,
    showNotifications: false,
    showUserMenu: false,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const WithCustomActions: Story = {
  args: {
    ...Default.args,
    customActions: (
      <div className="flex items-center space-x-2">
        <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          New Item
        </button>
        <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    ),
  },
};

export const StudentApp: Story = {
  args: {
    user: {
      name: "Jane Student",
      email: "jane.student@university.edu",
      role: "Student",
    },
    appTitle: "Student Portal",
    notifications: [
      {
        id: "1",
        title: "Assignment Due",
        message: "Your Math assignment is due tomorrow.",
        type: "warning",
        timestamp: new Date(),
        time: "Just now",
        read: false,
        priority: "high",
      },
      {
        id: "2",
        title: "Grade Posted",
        message: "Your Physics exam grade has been posted.",
        type: "info",
        timestamp: new Date(Date.now() - 1000 * 60 * 60),
        time: "1 hour ago",
        read: false,
        priority: "medium",
      },
    ],
    onLogout: () => console.log("Student logout"),
    onProfile: () => console.log("Student profile"),
    onMobileMenuToggle: () => console.log("Student mobile menu"),
  },
};

export const OfficeApp: Story = {
  args: {
    user: {
      name: "Admin User",
      email: "admin@office.com",
      role: "Office Administrator",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face&auto=format",
    },
    appTitle: "Office Management",
    logo: "https://via.placeholder.com/32x32/059669/FFFFFF?text=O",
    notifications: [
      {
        id: "1",
        title: "New Registration",
        message: "A new student has registered for the program.",
        type: "info",
        timestamp: new Date(),
        time: "Just now",
        read: false,
        priority: "medium",
      },
      {
        id: "2",
        title: "System Alert",
        message: "Database backup completed successfully.",
        type: "success",
        timestamp: new Date(Date.now() - 1000 * 60 * 30),
        time: "30 minutes ago",
        read: true,
        priority: "low",
      },
    ],
    onLogout: () => console.log("Office logout"),
    onSettings: () => console.log("Office settings"),
    onProfile: () => console.log("Office profile"),
    onMobileMenuToggle: () => console.log("Office mobile menu"),
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Default Header</h3>
        <Header {...Default.args} />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Minimal Variant</h3>
        <Header {...Minimal.args} />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">With Logo</h3>
        <Header {...WithLogo.args} />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">No Notifications</h3>
        <Header {...NoNotifications.args} />
      </div>
    </div>
  ),
  parameters: {
    layout: "padded",
  },
};

export const ResponsiveDemo: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Desktop View</h3>
        <div className="border rounded-lg overflow-hidden">
          <Header {...Default.args} />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Mobile View</h3>
        <div className="max-w-sm border rounded-lg overflow-hidden">
          <Header {...Default.args} />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "padded",
  },
};