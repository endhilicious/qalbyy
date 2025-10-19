import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";
import { SidebarNavigationItem, SidebarUser } from "./Sidebar";
import { 
  Home, 
  Users, 
  BookOpen, 
  Calendar, 
  Settings, 
  FileText, 
  BarChart3, 
  GraduationCap,
  Building,
  UserCheck,
  ClipboardList,
  Award,
  MessageSquare,
  Bell
} from "lucide-react";

const meta: Meta<typeof Sidebar> = {
  title: "Layout/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
A reusable Sidebar component that provides navigation with support for nested menus, badges, and mobile responsiveness.

## Features
- **Responsive Design**: Mobile-first with overlay and slide-in animation
- **Nested Navigation**: Support for multi-level menu items
- **Active State**: Automatic highlighting of active navigation items
- **Badges & Indicators**: Support for badges, coming soon indicators
- **Collapsible**: Optional collapsible sidebar for desktop
- **Mobile Optimized**: Touch-friendly with proper spacing
- **TypeScript**: Full type safety with comprehensive interfaces

## Usage
\`\`\`tsx
import { Sidebar } from "@repo/ui";

const navigationItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    id: "users",
    label: "Users",
    href: "/users",
    icon: Users,
    badge: "12",
  },
];

<Sidebar
  navigationItems={navigationItems}
  activePath="/dashboard"
  appTitle="My App"
  isOpen={true}
  onClose={() => setIsOpen(false)}
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "compact", "minimal"],
      description: "Sidebar visual variant",
    },
    isOpen: {
      control: { type: "boolean" },
      description: "Whether sidebar is open (mobile)",
    },
    showUserInfo: {
      control: { type: "boolean" },
      description: "Show user info in header",
    },
    showCloseButton: {
      control: { type: "boolean" },
      description: "Show close button (mobile)",
    },
    collapsible: {
      control: { type: "boolean" },
      description: "Enable collapsible sidebar",
    },
    collapsed: {
      control: { type: "boolean" },
      description: "Collapsed state",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

// Sample data
const sampleUser: SidebarUser = {
  name: "John Doe",
  email: "john.doe@example.com",
  role: "Administrator",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format",
};

const studentNavigationItems: SidebarNavigationItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    href: "/dashboard",
    icon: Home,
    description: "Overview and quick access",
  },
  {
    id: "courses",
    label: "My Courses",
    href: "/courses",
    icon: BookOpen,
    badge: "3",
    badgeVariant: "info",
    description: "Enrolled courses and materials",
  },
  {
    id: "schedule",
    label: "Schedule",
    href: "/schedule",
    icon: Calendar,
    description: "Class timetable and events",
  },
  {
    id: "assignments",
    label: "Assignments",
    href: "/assignments",
    icon: ClipboardList,
    badge: "5",
    badgeVariant: "warning",
    description: "Pending and completed tasks",
  },
  {
    id: "grades",
    label: "Grades",
    href: "/grades",
    icon: Award,
    description: "Academic performance",
  },
  {
    id: "messages",
    label: "Messages",
    href: "/messages",
    icon: MessageSquare,
    badge: "2",
    badgeVariant: "error",
    description: "Communication with instructors",
  },
  {
    id: "settings",
    label: "Settings",
    href: "/settings",
    icon: Settings,
    comingSoon: true,
    description: "Account and preferences",
  },
];

const officeNavigationItems: SidebarNavigationItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    href: "/dashboard",
    icon: Home,
    description: "System overview",
  },
  {
    id: "master-data",
    label: "Master Data",
    icon: FileText,
    description: "Core system data",
    children: [
      {
        id: "universities",
        label: "Universities",
        href: "/master-data/universities",
        icon: GraduationCap,
        badge: "15",
      },
      {
        id: "schools",
        label: "Schools",
        href: "/master-data/schools",
        icon: Building,
        badge: "42",
      },
      {
        id: "branches",
        label: "Branches",
        href: "/master-data/branches",
        icon: Building,
      },
    ],
  },
  {
    id: "users",
    label: "User Management",
    icon: Users,
    description: "Manage system users",
    children: [
      {
        id: "students",
        label: "Students",
        href: "/users/students",
        icon: UserCheck,
        badge: "1,234",
        badgeVariant: "success",
      },
      {
        id: "instructors",
        label: "Instructors",
        href: "/users/instructors",
        icon: UserCheck,
        badge: "89",
      },
      {
        id: "admins",
        label: "Administrators",
        href: "/users/admins",
        icon: UserCheck,
      },
    ],
  },
  {
    id: "reports",
    label: "Reports",
    href: "/reports",
    icon: BarChart3,
    description: "Analytics and insights",
  },
  {
    id: "notifications",
    label: "Notifications",
    href: "/notifications",
    icon: Bell,
    badge: "7",
    badgeVariant: "warning",
    description: "System alerts",
  },
  {
    id: "settings",
    label: "System Settings",
    href: "/settings",
    icon: Settings,
    description: "Configuration and preferences",
  },
];

export const Default: Story = {
  args: {
    navigationItems: studentNavigationItems,
    activePath: "/dashboard",
    user: sampleUser,
    appTitle: "Student Portal",
    isOpen: true,
    showUserInfo: true,
    showCloseButton: true,
    onNavigationClick: (item) => console.log("Navigation clicked:", item),
    onClose: () => console.log("Sidebar closed"),
  },
};

export const OfficeApp: Story = {
  args: {
    navigationItems: officeNavigationItems,
    activePath: "/master-data/universities",
    user: {
      name: "Admin User",
      email: "admin@office.com",
      role: "System Administrator",
    },
    appTitle: "Office Management",
    logo: "https://via.placeholder.com/40x40/059669/FFFFFF?text=O",
    isOpen: true,
    showUserInfo: true,
    onNavigationClick: (item) => console.log("Office navigation:", item),
    onClose: () => console.log("Office sidebar closed"),
  },
};

export const Collapsed: Story = {
  args: {
    ...Default.args,
    collapsible: true,
    collapsed: true,
    onToggleCollapsed: () => console.log("Toggle collapsed"),
  },
};

export const Minimal: Story = {
  args: {
    ...Default.args,
    variant: "minimal",
    showUserInfo: false,
  },
};

export const WithFooter: Story = {
  args: {
    ...Default.args,
    footerContent: (
      <div className="space-y-2">
        <button className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
          <Settings className="h-4 w-4 mr-3" />
          Settings
        </button>
        <div className="text-xs text-gray-500 text-center">
          Version 1.0.0
        </div>
      </div>
    ),
  },
};

export const MobileOpen: Story = {
  args: {
    ...Default.args,
    isOpen: true,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const MobileClosed: Story = {
  args: {
    ...Default.args,
    isOpen: false,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const WithoutUser: Story = {
  args: {
    ...Default.args,
    user: undefined,
    showUserInfo: false,
  },
};

export const NestedMenuExpanded: Story = {
  args: {
    navigationItems: officeNavigationItems,
    activePath: "/master-data/universities",
    user: sampleUser,
    appTitle: "Office System",
    isOpen: true,
    onNavigationClick: (item) => console.log("Nested navigation:", item),
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-screen">
      <div className="border rounded-lg overflow-hidden">
        <h3 className="p-4 text-lg font-semibold border-b">Default</h3>
        <div className="h-96">
          <Sidebar 
            navigationItems={studentNavigationItems}
            activePath="/dashboard"
            user={sampleUser}
            appTitle="Student Portal"
            isOpen={true}
            showUserInfo={true}
            showCloseButton={true}
          />
        </div>
      </div>
      
      <div className="border rounded-lg overflow-hidden">
        <h3 className="p-4 text-lg font-semibold border-b">Collapsed</h3>
        <div className="h-96">
          <Sidebar 
            navigationItems={studentNavigationItems}
            activePath="/dashboard"
            user={sampleUser}
            appTitle="Student Portal"
            isOpen={true}
            collapsible={true}
            collapsed={true}
          />
        </div>
      </div>
      
      <div className="border rounded-lg overflow-hidden">
        <h3 className="p-4 text-lg font-semibold border-b">Office App</h3>
        <div className="h-96">
          <Sidebar 
            navigationItems={officeNavigationItems}
            activePath="/master-data/universities"
            user={{
              name: "Admin User",
              email: "admin@office.com",
              role: "System Administrator",
            }}
            appTitle="Office Management"
            logo="https://via.placeholder.com/40x40/059669/FFFFFF?text=O"
            isOpen={true}
            showUserInfo={true}
          />
        </div>
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
        <div className="border rounded-lg overflow-hidden h-96">
          <Sidebar 
            navigationItems={studentNavigationItems}
            activePath="/dashboard"
            user={sampleUser}
            appTitle="Student Portal"
            isOpen={true}
            showUserInfo={true}
            showCloseButton={true}
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Mobile View (Open)</h3>
        <div className="max-w-sm border rounded-lg overflow-hidden h-96 relative">
          <Sidebar 
            navigationItems={studentNavigationItems}
            activePath="/dashboard"
            user={sampleUser}
            appTitle="Student Portal"
            isOpen={true}
            showUserInfo={true}
            showCloseButton={true}
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "padded",
  },
};

export const InteractiveDemo: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [collapsed, setCollapsed] = React.useState(false);
    const [activePath, setActivePath] = React.useState("/dashboard");

    return (
      <div className="h-screen flex">
        <Sidebar
          navigationItems={officeNavigationItems}
          activePath={activePath}
          user={sampleUser}
          appTitle="Interactive Demo"
          isOpen={isOpen}
          collapsed={collapsed}
          collapsible={true}
          onClose={() => setIsOpen(false)}
          onToggleCollapsed={() => setCollapsed(!collapsed)}
          onNavigationClick={(item) => {
            if (item.href) {
              setActivePath(item.href);
            }
            console.log("Navigation clicked:", item);
          }}
        />
        <div className="flex-1 p-8 bg-gray-50">
          <div className="max-w-2xl">
            <h1 className="text-2xl font-bold mb-4">Interactive Sidebar Demo</h1>
            <p className="text-gray-600 mb-6">
              This demo shows the sidebar in action. Try clicking navigation items, 
              collapsing the sidebar, or opening it on mobile.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                {isOpen ? "Close" : "Open"} Mobile Sidebar
              </button>
              <button
                onClick={() => setCollapsed(!collapsed)}
                className="hidden lg:block px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              >
                {collapsed ? "Expand" : "Collapse"} Sidebar
              </button>
              <div className="p-4 bg-white rounded-lg border">
                <p className="text-sm text-gray-600">
                  Active Path: <code className="bg-gray-100 px-2 py-1 rounded">{activePath}</code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    layout: "fullscreen",
  },
};