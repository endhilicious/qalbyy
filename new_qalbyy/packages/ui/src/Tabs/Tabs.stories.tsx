import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A reusable tabs component with multiple variants, orientations, and sizes. Supports icons, badges, and accessibility features.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'Default active tab value',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the tabs',
    },
    variant: {
      control: 'select',
      options: ['default', 'pills', 'underline', 'bordered'],
      description: 'Visual variant of the tabs',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the tabs',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Icons for examples
const HomeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a1 1 0 00-1-1H4a1 1 0 00-1-1V7a2 2 0 012-2h14a2 2 0 012 2v1" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const SettingsIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

// Template for controlled tabs
const ControlledTemplate = (args: any) => {
  const [value, setValue] = useState(args.defaultValue || 'tab1');
  
  return (
    <div className="w-96">
      <Tabs {...args} value={value} onValueChange={setValue}>
        <TabsList>
          <TabsTrigger value="tab1">Overview</TabsTrigger>
          <TabsTrigger value="tab2">Analytics</TabsTrigger>
          <TabsTrigger value="tab3">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-2">Overview</h3>
            <p className="text-gray-600">This is the overview tab content. Here you can see general information and statistics.</p>
          </div>
        </TabsContent>
        <TabsContent value="tab2">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold mb-2">Analytics</h3>
            <p className="text-gray-600">Analytics data and charts would be displayed here with detailed metrics.</p>
          </div>
        </TabsContent>
        <TabsContent value="tab3">
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold mb-2">Reports</h3>
            <p className="text-gray-600">Generate and view various reports from this section.</p>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-4 p-3 bg-gray-100 rounded text-sm">
        <strong>Active Tab:</strong> {value}
      </div>
    </div>
  );
};

export const Default: Story = {
  render: ControlledTemplate,
  args: {
    defaultValue: 'tab1',
    variant: 'default',
    size: 'md',
    orientation: 'horizontal',
  },
};

export const Pills: Story = {
  render: ControlledTemplate,
  args: {
    defaultValue: 'tab1',
    variant: 'pills',
    size: 'md',
    orientation: 'horizontal',
  },
};

export const Underline: Story = {
  render: ControlledTemplate,
  args: {
    defaultValue: 'tab1',
    variant: 'underline',
    size: 'md',
    orientation: 'horizontal',
  },
};

export const Bordered: Story = {
  render: ControlledTemplate,
  args: {
    defaultValue: 'tab1',
    variant: 'bordered',
    size: 'md',
    orientation: 'horizontal',
  },
};

export const WithIcons: Story = {
  render: (args) => {
    const [value, setValue] = useState('home');
    
    return (
      <div className="w-96">
        <Tabs {...args} value={value} onValueChange={setValue}>
          <TabsList>
            <TabsTrigger value="home" icon={<HomeIcon />}>Home</TabsTrigger>
            <TabsTrigger value="profile" icon={<UserIcon />}>Profile</TabsTrigger>
            <TabsTrigger value="settings" icon={<SettingsIcon />}>Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="home">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">🏠 Home</h3>
              <p className="text-gray-600">Welcome to your dashboard home page.</p>
            </div>
          </TabsContent>
          <TabsContent value="profile">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold mb-2">👤 Profile</h3>
              <p className="text-gray-600">Manage your profile information and preferences.</p>
            </div>
          </TabsContent>
          <TabsContent value="settings">
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold mb-2">⚙️ Settings</h3>
              <p className="text-gray-600">Configure your application settings.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    );
  },
  args: {
    variant: 'pills',
    size: 'md',
  },
};

export const WithBadges: Story = {
  render: (args) => {
    const [value, setValue] = useState('inbox');
    
    return (
      <div className="w-96">
        <Tabs {...args} value={value} onValueChange={setValue}>
          <TabsList>
            <TabsTrigger value="inbox" badge="12">Inbox</TabsTrigger>
            <TabsTrigger value="sent" badge="3">Sent</TabsTrigger>
            <TabsTrigger value="drafts" badge="1">Drafts</TabsTrigger>
            <TabsTrigger value="archive">Archive</TabsTrigger>
          </TabsList>
          <TabsContent value="inbox">
            <div className="p-4 bg-red-50 rounded-lg">
              <h3 className="font-semibold mb-2">📥 Inbox (12 new)</h3>
              <p className="text-gray-600">You have 12 new messages in your inbox.</p>
            </div>
          </TabsContent>
          <TabsContent value="sent">
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold mb-2">📤 Sent (3 recent)</h3>
              <p className="text-gray-600">Your 3 most recently sent messages.</p>
            </div>
          </TabsContent>
          <TabsContent value="drafts">
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold mb-2">📝 Drafts (1 unsaved)</h3>
              <p className="text-gray-600">You have 1 unsaved draft.</p>
            </div>
          </TabsContent>
          <TabsContent value="archive">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">📦 Archive</h3>
              <p className="text-gray-600">Your archived messages.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    );
  },
  args: {
    variant: 'default',
    size: 'md',
  },
};

export const Vertical: Story = {
  render: (args) => {
    const [value, setValue] = useState('general');
    
    return (
      <div className="w-full max-w-2xl">
        <Tabs {...args} value={value} onValueChange={setValue}>
          <TabsList>
            <TabsTrigger value="general">General Settings</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>
          <TabsContent value="general">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-3">General Settings</h3>
              <p className="text-gray-600 mb-4">Configure your general application preferences.</p>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Display Name</label>
                  <input type="text" className="w-full px-3 py-2 border rounded-md" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Language</label>
                  <select className="w-full px-3 py-2 border rounded-md">
                    <option>English</option>
                    <option>Indonesian</option>
                  </select>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="security">
            <div className="p-6 bg-red-50 rounded-lg">
              <h3 className="font-semibold mb-3">Security Settings</h3>
              <p className="text-gray-600 mb-4">Manage your account security and privacy.</p>
              <div className="space-y-3">
                <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                  Change Password
                </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  Enable 2FA
                </button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="notifications">
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="font-semibold mb-3">Notification Preferences</h3>
              <p className="text-gray-600 mb-4">Choose how you want to be notified.</p>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  Email notifications
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Push notifications
                </label>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="billing">
            <div className="p-6 bg-green-50 rounded-lg">
              <h3 className="font-semibold mb-3">Billing Information</h3>
              <p className="text-gray-600 mb-4">Manage your subscription and payment methods.</p>
              <div className="space-y-3">
                <div className="p-3 bg-white rounded border">
                  <p className="font-medium">Current Plan: Pro</p>
                  <p className="text-sm text-gray-600">$29/month</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    );
  },
  args: {
    orientation: 'vertical',
    variant: 'bordered',
    size: 'md',
  },
};

export const Sizes: Story = {
  render: () => {
    const [values, setValues] = useState({
      small: 'tab1',
      medium: 'tab1',
      large: 'tab1',
    });

    return (
      <div className="space-y-8 w-96">
        <div>
          <h3 className="font-semibold mb-3">Small Size</h3>
          <Tabs value={values.small} onValueChange={(val) => setValues(prev => ({ ...prev, small: val }))} size="sm">
            <TabsList>
              <TabsTrigger value="tab1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab2">Tab 2</TabsTrigger>
              <TabsTrigger value="tab3">Tab 3</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <div className="p-3 bg-gray-50 rounded text-sm">Small tab content</div>
            </TabsContent>
            <TabsContent value="tab2">
              <div className="p-3 bg-blue-50 rounded text-sm">Small tab content 2</div>
            </TabsContent>
            <TabsContent value="tab3">
              <div className="p-3 bg-green-50 rounded text-sm">Small tab content 3</div>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Medium Size (Default)</h3>
          <Tabs value={values.medium} onValueChange={(val) => setValues(prev => ({ ...prev, medium: val }))} size="md">
            <TabsList>
              <TabsTrigger value="tab1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab2">Tab 2</TabsTrigger>
              <TabsTrigger value="tab3">Tab 3</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <div className="p-4 bg-gray-50 rounded">Medium tab content</div>
            </TabsContent>
            <TabsContent value="tab2">
              <div className="p-4 bg-blue-50 rounded">Medium tab content 2</div>
            </TabsContent>
            <TabsContent value="tab3">
              <div className="p-4 bg-green-50 rounded">Medium tab content 3</div>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Large Size</h3>
          <Tabs value={values.large} onValueChange={(val) => setValues(prev => ({ ...prev, large: val }))} size="lg">
            <TabsList>
              <TabsTrigger value="tab1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab2">Tab 2</TabsTrigger>
              <TabsTrigger value="tab3">Tab 3</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <div className="p-5 bg-gray-50 rounded text-lg">Large tab content</div>
            </TabsContent>
            <TabsContent value="tab2">
              <div className="p-5 bg-blue-50 rounded text-lg">Large tab content 2</div>
            </TabsContent>
            <TabsContent value="tab3">
              <div className="p-5 bg-green-50 rounded text-lg">Large tab content 3</div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    );
  },
};

export const DisabledTab: Story = {
  render: (args) => {
    const [value, setValue] = useState('available');
    
    return (
      <div className="w-96">
        <Tabs {...args} value={value} onValueChange={setValue}>
          <TabsList>
            <TabsTrigger value="available">Available</TabsTrigger>
            <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
            <TabsTrigger value="premium" badge="Pro">Premium</TabsTrigger>
          </TabsList>
          <TabsContent value="available">
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold mb-2">✅ Available</h3>
              <p className="text-gray-600">This tab is available and can be clicked.</p>
            </div>
          </TabsContent>
          <TabsContent value="disabled">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">❌ Disabled</h3>
              <p className="text-gray-600">This tab is disabled and cannot be accessed.</p>
            </div>
          </TabsContent>
          <TabsContent value="premium">
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold mb-2">⭐ Premium</h3>
              <p className="text-gray-600">This is a premium feature with a badge.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    );
  },
  args: {
    variant: 'pills',
    size: 'md',
  },
};

export const Playground: Story = {
  render: ControlledTemplate,
  args: {
    defaultValue: 'tab1',
    variant: 'default',
    size: 'md',
    orientation: 'horizontal',
  },
};