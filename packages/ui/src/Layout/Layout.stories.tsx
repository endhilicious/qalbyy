import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Layout } from "./Layout";
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

const meta: Meta<typeof Layout> = {
  title: "Layout/Layout",
  component: Layout,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
A complete Layout component that combines Header and Sidebar with responsive behavior and state management.

## Features
- **Complete Layout Solution**: Combines Header and Sidebar components
- **Responsive Design**: Mobile-first with proper breakpoints
- **State Management**: Handles sidebar open/close and collapsed states
- **Flexible Configuration**: Support for different layout variants
- **Mobile Optimized**: Touch-friendly with overlay and animations
- **TypeScript**: Full type safety with comprehensive interfaces

## Usage
\`\`\`tsx
import { Layout } from "@repo/ui";

const headerConfig = {
  user: { name: "John Doe", email: "john@example.com" },
  appTitle: "My App",
  onLogout: () => console.log("Logout"),
};

const sidebarConfig = {
  navigationItems: [
    { id: "dashboard", label: "Dashboard", href: "/dashboard", icon: Home },
    { id: "users", label: "Users", href: "/users", icon: Users },
  ],
  activePath: "/dashboard",
};

<Layout header={headerConfig} sidebar={sidebarConfig}>
  <div>Your page content here</div>
</Layout>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "sidebar-only", "header-only", "minimal"],
      description: "Layout variant",
    },
    showSidebar: {
      control: { type: "boolean" },
      description: "Show/hide sidebar",
    },
    showHeader: {
      control: { type: "boolean" },
      description: "Show/hide header",
    },
    sidebarCollapsed: {
      control: { type: "boolean" },
      description: "Sidebar collapsed state",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Layout>;

// Sample data
const sampleUser = {
  name: "John Doe",
  email: "john.doe@example.com",
  role: "Administrator",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format",
};

const sampleNotifications = [
  {
    id: "1",
    title: "New Message",
    message: "You have received a new message from the support team.",
    type: "info" as const,
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    read: false,
  },
  {
    id: "2",
    title: "System Update",
    message: "The system will be updated tonight at 2 AM.",
    type: "warning" as const,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    read: false,
  },
];

const studentNavigationItems = [
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
    badgeVariant: "info" as const,
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
    badgeVariant: "warning" as const,
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
    badgeVariant: "error" as const,
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

const officeNavigationItems = [
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
        badgeVariant: "success" as const,
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
    badgeVariant: "warning" as const,
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

const SampleContent = ({ title = "Dashboard", description = "Welcome to your dashboard" }) => (
  <div className="max-w-4xl mx-auto">
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
      <p className="text-gray-600">{description}</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold mb-2">Card 1</h3>
        <p className="text-gray-600">This is sample content to demonstrate the layout.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold mb-2">Card 2</h3>
        <p className="text-gray-600">The layout is responsive and works on all devices.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold mb-2">Card 3</h3>
        <p className="text-gray-600">You can customize the header and sidebar as needed.</p>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h3 className="text-lg font-semibold mb-4">Sample Table</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">John Doe</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Active</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Admin</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Jane Smith</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Active</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">User</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export const Default: Story = {
  args: {
    header: {
      user: sampleUser,
      appTitle: "Student Portal",
      notifications: sampleNotifications,
      onLogout: () => console.log("Logout clicked"),
      onSettings: () => console.log("Settings clicked"),
      onProfile: () => console.log("Profile clicked"),
    },
    sidebar: {
      navigationItems: studentNavigationItems,
      activePath: "/dashboard",
      user: sampleUser,
      appTitle: "Student Portal",
      onNavigationClick: (item) => console.log("Navigation clicked:", item),
    },
    children: <SampleContent />,
  },
};

export const OfficeApp: Story = {
  args: {
    header: {
      user: {
        name: "Admin User",
        email: "admin@office.com",
        role: "System Administrator",
      },
      appTitle: "Office Management",
      logo: "https://via.placeholder.com/32x32/059669/FFFFFF?text=O",
      notifications: sampleNotifications,
      onLogout: () => console.log("Office logout"),
      onSettings: () => console.log("Office settings"),
      onProfile: () => console.log("Office profile"),
    },
    sidebar: {
      navigationItems: officeNavigationItems,
      activePath: "/master-data/universities",
      user: {
        name: "Admin User",
        email: "admin@office.com",
        role: "System Administrator",
      },
      appTitle: "Office Management",
      logo: "https://via.placeholder.com/40x40/059669/FFFFFF?text=O",
      onNavigationClick: (item) => console.log("Office navigation:", item),
    },
    children: <SampleContent title="Office Dashboard" description="Manage your office operations efficiently" />,
  },
};

export const SidebarCollapsed: Story = {
  args: {
    ...Default.args,
    sidebarCollapsed: true,
  },
};

export const HeaderOnly: Story = {
  args: {
    variant: "header-only",
    header: {
      user: sampleUser,
      appTitle: "Header Only Layout",
      notifications: sampleNotifications,
      onLogout: () => console.log("Logout clicked"),
    },
    children: <SampleContent title="Header Only" description="This layout only shows the header" />,
  },
};

export const SidebarOnly: Story = {
  args: {
    variant: "sidebar-only",
    sidebar: {
      navigationItems: studentNavigationItems,
      activePath: "/dashboard",
      user: sampleUser,
      appTitle: "Sidebar Only",
      onNavigationClick: (item) => console.log("Navigation clicked:", item),
    },
    children: <SampleContent title="Sidebar Only" description="This layout only shows the sidebar" />,
  },
};

export const Minimal: Story = {
  args: {
    variant: "minimal",
    children: (
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
        <SampleContent title="Minimal Layout" description="This is a minimal layout without header or sidebar" />
      </div>
    ),
  },
};

export const CustomComponents: Story = {
  args: {
    customHeader: (
      <div className="bg-purple-600 text-white p-4">
        <h1 className="text-xl font-bold">Custom Header</h1>
      </div>
    ),
    customSidebar: (
      <div className="w-64 bg-purple-100 h-full p-4">
        <h2 className="font-bold mb-4">Custom Sidebar</h2>
        <ul className="space-y-2">
          <li><a href="#" className="block p-2 hover:bg-purple-200 rounded">Custom Link 1</a></li>
          <li><a href="#" className="block p-2 hover:bg-purple-200 rounded">Custom Link 2</a></li>
          <li><a href="#" className="block p-2 hover:bg-purple-200 rounded">Custom Link 3</a></li>
        </ul>
      </div>
    ),
    children: <SampleContent title="Custom Components" description="This layout uses custom header and sidebar components" />,
  },
};

export const MobileDemo: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const InteractiveDemo: Story = {
  render: () => {
    const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);
    const [mobileSidebarOpen, setMobileSidebarOpen] = React.useState(false);
    const [activePath, setActivePath] = React.useState("/dashboard");

    return (
      <Layout
        header={{
          user: sampleUser,
          appTitle: "Interactive Demo",
          notifications: sampleNotifications,
          onLogout: () => console.log("Logout clicked"),
          onSettings: () => console.log("Settings clicked"),
          onProfile: () => console.log("Profile clicked"),
        }}
        sidebar={{
          navigationItems: officeNavigationItems,
          activePath: activePath,
          user: sampleUser,
          appTitle: "Interactive Demo",
          onNavigationClick: (item) => {
            if (item.href) {
              setActivePath(item.href);
            }
            console.log("Navigation clicked:", item);
          },
        }}
        sidebarCollapsed={sidebarCollapsed}
        onSidebarCollapsedChange={setSidebarCollapsed}
        onMobileSidebarChange={setMobileSidebarOpen}
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Interactive Layout Demo</h1>
            <p className="text-gray-600 mb-6">
              This demo shows the layout with interactive state management. 
              Try collapsing the sidebar or opening it on mobile.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold mb-4">Layout State</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Active Path:</strong> <code className="bg-gray-100 px-2 py-1 rounded">{activePath}</code></p>
                <p><strong>Sidebar Collapsed:</strong> {sidebarCollapsed ? "Yes" : "No"}</p>
                <p><strong>Mobile Sidebar Open:</strong> {mobileSidebarOpen ? "Yes" : "No"}</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold mb-4">Controls</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                  className="block w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {sidebarCollapsed ? "Expand" : "Collapse"} Sidebar
                </button>
                <button
                  onClick={() => setActivePath("/users/students")}
                  className="block w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Navigate to Students
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Features Demonstrated</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Responsive sidebar that collapses on mobile</li>
              <li>Header with user menu and notifications</li>
              <li>Active navigation state management</li>
              <li>Mobile overlay and touch interactions</li>
              <li>Smooth animations and transitions</li>
              <li>TypeScript type safety</li>
            </ul>
          </div>
        </div>
      </Layout>
    );
  },
  parameters: {
    layout: "fullscreen",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Layout Variants</h2>
        <p className="text-gray-600 mb-8">Different layout configurations for various use cases.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="border rounded-lg overflow-hidden">
          <h3 className="p-4 text-lg font-semibold border-b bg-gray-50">Default Layout</h3>
          <div className="h-96">
            <Layout
              header={{
                user: sampleUser,
                appTitle: "Default",
                showNotifications: false,
              }}
              sidebar={{
                navigationItems: studentNavigationItems.slice(0, 3),
                activePath: "/dashboard",
                showUserInfo: false,
              }}
            >
              <div className="p-4">
                <h4 className="font-semibold">Default Layout</h4>
                <p className="text-sm text-gray-600">Header + Sidebar + Content</p>
              </div>
            </Layout>
          </div>
        </div>
        
        <div className="border rounded-lg overflow-hidden">
          <h3 className="p-4 text-lg font-semibold border-b bg-gray-50">Header Only</h3>
          <div className="h-96">
            <Layout
              variant="header-only"
              header={{
                user: sampleUser,
                appTitle: "Header Only",
                showNotifications: false,
              }}
            >
              <div className="p-4">
                <h4 className="font-semibold">Header Only Layout</h4>
                <p className="text-sm text-gray-600">Header + Content</p>
              </div>
            </Layout>
          </div>
        </div>
        
        <div className="border rounded-lg overflow-hidden">
          <h3 className="p-4 text-lg font-semibold border-b bg-gray-50">Sidebar Only</h3>
          <div className="h-96">
            <Layout
              variant="sidebar-only"
              sidebar={{
                navigationItems: studentNavigationItems.slice(0, 3),
                activePath: "/dashboard",
                showUserInfo: false,
              }}
            >
              <div className="p-4">
                <h4 className="font-semibold">Sidebar Only Layout</h4>
                <p className="text-sm text-gray-600">Sidebar + Content</p>
              </div>
            </Layout>
          </div>
        </div>
        
        <div className="border rounded-lg overflow-hidden">
          <h3 className="p-4 text-lg font-semibold border-b bg-gray-50">Minimal</h3>
          <div className="h-96 bg-gray-50">
            <Layout variant="minimal">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold">Minimal Layout</h4>
                <p className="text-sm text-gray-600">Content Only</p>
              </div>
            </Layout>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};