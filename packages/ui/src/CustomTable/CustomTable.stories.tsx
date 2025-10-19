import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CustomTable, TableColumn, TableAction, TableConfig } from './CustomTable';
import { 
  Edit, 
  Trash2, 
  Eye, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  User,
  Users,
  FileText,
  AlertCircle,
  CheckCircle,
  Clock,
  Star
} from 'lucide-react';

const meta: Meta<typeof CustomTable> = {
  title: 'Components/CustomTable',
  component: CustomTable,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# CustomTable Component

A highly flexible and reusable table component with the following features:

## Features
- **Responsive Design**: Automatically switches between desktop table and mobile cards
- **Sorting**: Click column headers to sort data (ascending/descending)
- **Pagination**: Built-in pagination with customizable page sizes
- **Actions**: Support for row actions with different variants and conditions
- **Mobile Optimized**: Card-based layout for mobile with load more functionality
- **Customizable**: Extensive styling and behavior options
- **Empty States**: Configurable empty state with custom icons and actions
- **Loading States**: Built-in loading spinner
- **Text Wrapping**: Proper text wrapping for long content
- **Row Numbers**: Optional row numbering
- **Custom Rendering**: Custom render functions for columns
- **Accessibility**: Proper ARIA labels and keyboard navigation

## Usage
\`\`\`tsx
import { CustomTable, TableColumn, TableAction } from '@/components/ui/CustomTable';

const columns: TableColumn<User>[] = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'role', label: 'Role' }
];

const actions: TableAction<User>[] = [
  {
    key: 'edit',
    label: 'Edit',
    icon: Edit,
    variant: 'primary',
    onClick: (user) => console.log('Edit', user)
  }
];

<CustomTable
  data={users}
  config={{
    columns,
    actions,
    pagination: { enabled: true, pageSize: 10 }
  }}
/>
\`\`\`

## Props
- **data**: Array of data objects to display
- **config**: Table configuration object
- **onDataChange**: Callback when data changes
- **onRowClick**: Callback when a row is clicked
- **className**: Additional CSS classes
- **testId**: Test identifier for testing

## TableConfig Options
- **columns**: Array of column definitions
- **actions**: Array of action buttons
- **showRowNumbers**: Show row numbers
- **responsive**: Enable responsive design
- **loading**: Show loading state
- **emptyState**: Custom empty state configuration
- **pagination**: Pagination configuration
- **striped**: Striped row styling
- **hover**: Hover effects
- **compact**: Compact spacing
- **bordered**: Table borders
- **mobileActionsPosition**: Position of actions on mobile ('bottom' | 'top-right')
        `,
      },
    },
  },
  argTypes: {
    data: {
      description: 'Array of data objects to display in the table',
      control: { type: 'object' },
    },
    config: {
      description: 'Table configuration object',
      control: { type: 'object' },
    },
    onDataChange: {
      description: 'Callback function called when data changes',
      action: 'dataChanged',
    },
    onRowClick: {
      description: 'Callback function called when a row is clicked',
      action: 'rowClicked',
    },
    className: {
      description: 'Additional CSS classes for the table container',
      control: { type: 'text' },
    },
    testId: {
      description: 'Test identifier for testing purposes',
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CustomTable>;

// Sample data interfaces
interface User extends Record<string, unknown> {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  lastLogin: string;
  avatar?: string;
  department: string;
}

interface Product extends Record<string, unknown> {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'available' | 'out-of-stock' | 'discontinued';
  description: string;
  image?: string;
  rating: number;
}

interface Order extends Record<string, unknown> {
  id: string;
  customer: string;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  date: string;
  items: number;
  priority: 'low' | 'medium' | 'high';
}

// Sample data
const sampleUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    status: 'active',
    joinDate: '2023-01-15',
    lastLogin: '2024-01-20',
    department: 'Engineering',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'Manager',
    status: 'active',
    joinDate: '2023-03-22',
    lastLogin: '2024-01-19',
    department: 'Marketing',
    phone: '+1 (555) 987-6543',
    location: 'Los Angeles, CA'
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    role: 'Developer',
    status: 'inactive',
    joinDate: '2023-06-10',
    lastLogin: '2024-01-10',
    department: 'Engineering',
    phone: '+1 (555) 456-7890',
    location: 'Chicago, IL'
  },
  {
    id: '4',
    name: 'Alice Brown',
    email: 'alice.brown@example.com',
    role: 'Designer',
    status: 'pending',
    joinDate: '2024-01-01',
    lastLogin: 'Never',
    department: 'Design',
    location: 'Seattle, WA'
  },
  {
    id: '5',
    name: 'Charlie Wilson',
    email: 'charlie.wilson@example.com',
    role: 'Developer',
    status: 'active',
    joinDate: '2023-09-15',
    lastLogin: '2024-01-21',
    department: 'Engineering',
    phone: '+1 (555) 321-0987',
    location: 'Austin, TX'
  }
];

const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    category: 'Electronics',
    price: 99.99,
    stock: 45,
    status: 'available',
    description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life.',
    rating: 4.5,
    reviews: 128
  },
  {
    id: '2',
    name: 'Ergonomic Office Chair',
    category: 'Furniture',
    price: 299.99,
    stock: 0,
    status: 'out-of-stock',
    description: 'Comfortable ergonomic chair with lumbar support and adjustable height.',
    rating: 4.2,
    reviews: 89
  },
  {
    id: '3',
    name: 'Smart Water Bottle',
    category: 'Health',
    price: 49.99,
    stock: 23,
    status: 'available',
    description: 'Smart water bottle that tracks your hydration and reminds you to drink water.',
    rating: 4.0,
    reviews: 56
  }
];

const sampleOrders: Order[] = [
  {
    id: 'ORD-001',
    customer: 'John Doe',
    total: 299.99,
    status: 'delivered',
    date: '2024-01-15',
    items: 3,
    paymentMethod: 'Credit Card'
  },
  {
    id: 'ORD-002',
    customer: 'Jane Smith',
    total: 149.50,
    status: 'shipped',
    date: '2024-01-18',
    items: 2,
    paymentMethod: 'PayPal'
  },
  {
    id: 'ORD-003',
    customer: 'Bob Johnson',
    total: 89.99,
    status: 'processing',
    date: '2024-01-20',
    items: 1,
    paymentMethod: 'Credit Card'
  }
];

// User table configuration
const userColumns: TableColumn<User>[] = [
  {
    key: 'name',
    label: 'Name',
    sortable: true,
    width: '250px',
    render: (value, user) => (
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0 h-8 w-8">
          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium">
            {String(value).charAt(0).toUpperCase()}
          </div>
        </div>
        <div>
          <div className="text-sm font-medium text-gray-900">{String(value)}</div>
          <div className="text-sm text-gray-500">{user.department}</div>
        </div>
      </div>
    ),
    mobileRender: (value, user) => (
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0 h-10 w-10">
          <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
            {String(value).charAt(0).toUpperCase()}
          </div>
        </div>
        <div>
          <div className="font-medium text-gray-900">{String(value)}</div>
          <div className="text-sm text-gray-500">{user.department}</div>
        </div>
      </div>
    )
  },
  {
    key: 'email',
    label: 'Email',
    sortable: true,
    width: '200px',
    render: (value) => (
      <div className="flex items-center space-x-2">
        <Mail className="h-4 w-4 text-gray-400" />
        <span className="text-sm text-gray-900">{String(value)}</span>
      </div>
    )
  },
  {
    key: 'role',
    label: 'Role',
    sortable: true,
    width: '120px',
    render: (value) => {
      const roleColors: Record<string, string> = {
        Admin: 'bg-red-100 text-red-800',
        Manager: 'bg-blue-100 text-blue-800',
        Developer: 'bg-green-100 text-green-800',
        Designer: 'bg-purple-100 text-purple-800'
      };
      return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${roleColors[String(value)] || 'bg-gray-100 text-gray-800'}`}>
          {String(value)}
        </span>
      );
    }
  },
  {
    key: 'status',
    label: 'Status',
    sortable: true,
    width: '120px',
    render: (value) => {
      const statusConfig: Record<string, { color: string; icon: React.ComponentType<any> }> = {
        active: { color: 'bg-green-100 text-green-800', icon: CheckCircle },
        inactive: { color: 'bg-red-100 text-red-800', icon: AlertCircle },
        pending: { color: 'bg-yellow-100 text-yellow-800', icon: Clock }
      };
      const config = statusConfig[String(value)];
      const Icon = config?.icon || AlertCircle;
      
      return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config?.color || 'bg-gray-100 text-gray-800'}`}>
          <Icon className="h-3 w-3 mr-1" />
          {String(value)}
        </span>
      );
    }
  },
  {
    key: 'phone',
    label: 'Phone',
    hideOnMobile: true,
    render: (value) => value ? (
      <div className="flex items-center space-x-2">
        <Phone className="h-4 w-4 text-gray-400" />
        <span className="text-sm text-gray-900">{String(value)}</span>
      </div>
    ) : <span className="text-gray-400">-</span>
  },
  {
    key: 'location',
    label: 'Location',
    hideOnMobile: true,
    render: (value) => value ? (
      <div className="flex items-center space-x-2">
        <MapPin className="h-4 w-4 text-gray-400" />
        <span className="text-sm text-gray-900">{String(value)}</span>
      </div>
    ) : <span className="text-gray-400">-</span>
  },
  {
    key: 'joinDate',
    label: 'Join Date',
    sortable: true,
    hideOnMobile: true,
    render: (value) => (
      <div className="flex items-center space-x-2">
        <Calendar className="h-4 w-4 text-gray-400" />
        <span className="text-sm text-gray-900">{new Date(String(value)).toLocaleDateString()}</span>
      </div>
    )
  }
];

const userActions: TableAction<User>[] = [
  {
    key: 'view',
    label: 'View',
    icon: Eye,
    variant: 'secondary',
    onClick: (user) => console.log('View user:', user),
    title: 'View user details'
  },
  {
    key: 'edit',
    label: 'Edit',
    icon: Edit,
    variant: 'primary',
    onClick: (user) => console.log('Edit user:', user),
    title: 'Edit user'
  },
  {
    key: 'delete',
    label: 'Delete',
    icon: Trash2,
    variant: 'danger',
    onClick: (user) => console.log('Delete user:', user),
    condition: (user) => user.status !== 'active',
    title: 'Delete user'
  }
];

// Product table configuration
const productColumns: TableColumn<Product>[] = [
  {
    key: 'name',
    label: 'Product',
    sortable: true,
    render: (value, product) => (
      <div>
        <div className="text-sm font-medium text-gray-900">{String(value)}</div>
        <div className="text-sm text-gray-500">{product.category}</div>
      </div>
    )
  },
  {
    key: 'price',
    label: 'Price',
    sortable: true,
    align: 'right',
    render: (value) => (
      <span className="text-sm font-medium text-gray-900">${Number(value).toFixed(2)}</span>
    )
  },
  {
    key: 'stock',
    label: 'Stock',
    sortable: true,
    align: 'center',
    render: (value, product) => (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        product.status === 'out-of-stock' ? 'bg-red-100 text-red-800' :
        Number(value) < 10 ? 'bg-yellow-100 text-yellow-800' :
        'bg-green-100 text-green-800'
      }`}>
        {String(value)}
      </span>
    )
  },
  {
    key: 'rating',
    label: 'Rating',
    sortable: true,
    hideOnMobile: true,
    render: (value, product) => (
      <div className="flex items-center space-x-1">
        <Star className="h-4 w-4 text-yellow-400 fill-current" />
        <span className="text-sm text-gray-900">{Number(value).toFixed(1)}</span>
        <span className="text-sm text-gray-500">({product.reviews})</span>
      </div>
    )
  }
];

// Order table configuration
const orderColumns: TableColumn<Order>[] = [
  {
    key: 'id',
    label: 'Order ID',
    sortable: true,
    render: (value) => (
      <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">
        {String(value)}
      </span>
    )
  },
  {
    key: 'customer',
    label: 'Customer',
    sortable: true,
    render: (value) => (
      <div className="flex items-center space-x-2">
        <User className="h-4 w-4 text-gray-400" />
        <span>{String(value)}</span>
      </div>
    )
  },
  {
    key: 'total',
    label: 'Total',
    sortable: true,
    align: 'right',
    render: (value) => (
      <span className="text-lg font-semibold text-green-600">
        ${Number(value).toFixed(2)}
      </span>
    )
  },
  {
    key: 'status',
    label: 'Status',
    sortable: true,
    render: (value) => {
      const statusConfig: Record<string, { color: string; icon: React.ComponentType<any> }> = {
        pending: { color: 'bg-yellow-100 text-yellow-800 border-yellow-200', icon: Clock },
        processing: { color: 'bg-blue-100 text-blue-800 border-blue-200', icon: AlertCircle },
        shipped: { color: 'bg-purple-100 text-purple-800 border-purple-200', icon: FileText },
        delivered: { color: 'bg-green-100 text-green-800 border-green-200', icon: CheckCircle },
        cancelled: { color: 'bg-red-100 text-red-800 border-red-200', icon: AlertCircle }
      };
      const config = statusConfig[String(value)];
      const Icon = config?.icon || AlertCircle;
      
      return (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${config?.color || 'bg-gray-100 text-gray-800 border-gray-200'}`}>
          <Icon className="h-3 w-3 mr-1" />
          {String(value).charAt(0).toUpperCase() + String(value).slice(1)}
        </span>
      );
    }
  },
  {
    key: 'date',
    label: 'Date',
    sortable: true,
    hideOnMobile: true,
    render: (value) => (
      <div className="flex items-center space-x-2">
        <Calendar className="h-4 w-4 text-gray-400" />
        <span>{new Date(String(value)).toLocaleDateString()}</span>
      </div>
    )
  }
];

// Basic table story
export const Default: Story = {
  args: {
    data: sampleUsers,
    config: {
      columns: userColumns as TableColumn<Record<string, unknown>>[],
      actions: userActions as TableAction<Record<string, unknown>>[],
      responsive: true,
      showRowNumbers: true,
    },
  },
};

// Loading state
export const Loading: Story = {
  args: {
    data: [],
    config: {
      columns: userColumns as TableColumn<Record<string, unknown>>[],
      loading: true,
      responsive: true,
    },
  },
};

// Empty state
export const EmptyState: Story = {
  args: {
    data: [],
    config: {
      columns: userColumns as TableColumn<Record<string, unknown>>[],
      responsive: true,
      emptyState: {
        icon: Users,
        title: 'No users found',
        description: 'Get started by adding your first user.',
        action: {
          label: 'Add User',
          onClick: () => alert('Add user clicked'),
        },
      },
    },
  },
};

// Product table
export const ProductTable: Story = {
  args: {
    data: sampleProducts,
    config: {
      columns: productColumns as TableColumn<Record<string, unknown>>[],
      responsive: true,
      showRowNumbers: true,
      striped: true,
      hover: true,
    },
  },
};

// Compact table
export const CompactTable: Story = {
  args: {
    data: sampleUsers,
    config: {
      columns: userColumns as TableColumn<Record<string, unknown>>[],
      actions: userActions as TableAction<Record<string, unknown>>[],
      responsive: true,
      compact: true,
      bordered: true,
    },
  },
};

// Mobile actions at top-right
export const MobileActionsTopRight: Story = {
  args: {
    data: sampleUsers,
    config: {
      columns: userColumns as TableColumn<Record<string, unknown>>[],
      actions: userActions as TableAction<Record<string, unknown>>[],
      responsive: true,
      mobileActionsPosition: 'top-right',
    },
  },
};

// Order table actions
const orderActions: TableAction<Order>[] = [
  {
    key: 'view',
    label: 'View',
    icon: Eye,
    variant: 'secondary',
    onClick: (order) => alert(`View order: ${order.id}`),
  },
  {
    key: 'download',
    label: 'Download',
    icon: Download,
    variant: 'primary',
    onClick: (order) => alert(`Download order: ${order.id}`),
    condition: (order) => order.status === 'delivered',
  },
];

// No actions table
export const NoActions: Story = {
  args: {
    data: sampleUsers,
    config: {
      columns: userColumns as TableColumn<Record<string, unknown>>[],
      responsive: true,
      showRowNumbers: true,
      striped: true,
    },
  },
};

// Custom rendering
export const CustomRendering: Story = {
  args: {
    data: sampleOrders,
    config: {
      columns: orderColumns as TableColumn<Record<string, unknown>>[],
      actions: orderActions as TableAction<Record<string, unknown>>[],
      responsive: true,
      showRowNumbers: true,
      pagination: {
        enabled: true,
        pageSize: 5,
        showPageSizeSelector: true,
        showInfo: true,
      },
    },
  },
};

// Non-responsive table
export const NonResponsive: Story = {
  args: {
    data: sampleUsers,
    config: {
      columns: userColumns as TableColumn<Record<string, unknown>>[],
      actions: userActions as TableAction<Record<string, unknown>>[],
      responsive: false,
      showRowNumbers: true,
    },
  },
};

// All styling options
export const AllStylingOptions: Story = {
  args: {
    data: sampleUsers,
    config: {
      columns: userColumns as TableColumn<Record<string, unknown>>[],
      actions: userActions as TableAction<Record<string, unknown>>[],
      responsive: true,
      showRowNumbers: true,
      striped: true,
      hover: true,
      compact: false,
      bordered: true,
      pagination: {
        enabled: true,
        pageSize: 3,
        showPageSizeSelector: true,
        showInfo: true,
      },
    },
  },
};

// Checklist functionality demo
export const ChecklistDemo: Story = {
  render: (args) => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>(['1', '3']);

    const handleSelectionChange = (selectedItems: User[], selectedIds: string[]) => {
      setSelectedIds(selectedIds);
      console.log('Selected items:', selectedItems);
      console.log('Selected IDs:', selectedIds);
    };

    const checklistColumns: TableColumn<User>[] = [
      {
        key: 'name',
        label: 'Name',
        sortable: true,
        width: '250px',
        render: (value, user) => (
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0 h-8 w-8">
              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium">
                {String(value).charAt(0).toUpperCase()}
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">{String(value)}</div>
              <div className="text-sm text-gray-500">{user.department}</div>
            </div>
          </div>
        ),
      },
      {
        key: 'email',
        label: 'Email',
        sortable: true,
        width: '200px',
        render: (value) => (
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-900">{String(value)}</span>
          </div>
        )
      },
      {
        key: 'role',
        label: 'Role',
        sortable: true,
        width: '120px',
        render: (value) => {
          const roleColors: Record<string, string> = {
            Admin: 'bg-red-100 text-red-800',
            Manager: 'bg-blue-100 text-blue-800',
            Developer: 'bg-green-100 text-green-800',
            Designer: 'bg-purple-100 text-purple-800'
          };
          return (
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${roleColors[String(value)] || 'bg-gray-100 text-gray-800'}`}>
              {String(value)}
            </span>
          );
        }
      },
      {
        key: 'status',
        label: 'Status',
        sortable: true,
        width: '120px',
        render: (value) => {
          const statusConfig: Record<string, { color: string; icon: React.ComponentType<any> }> = {
            active: { color: 'bg-green-100 text-green-800', icon: CheckCircle },
            inactive: { color: 'bg-red-100 text-red-800', icon: AlertCircle },
            pending: { color: 'bg-yellow-100 text-yellow-800', icon: Clock }
          };
          const config = statusConfig[String(value)];
          const Icon = config?.icon || AlertCircle;
          
          return (
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config?.color || 'bg-gray-100 text-gray-800'}`}>
              <Icon className="h-3 w-3 mr-1" />
              {String(value)}
            </span>
          );
        }
      }
    ];

    return (
      <div className="space-y-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Checklist Functionality Demo</h3>
          <p className="text-blue-700 mb-3">
            This demo showcases the checklist functionality in CustomTable. You can:
          </p>
          <ul className="list-disc list-inside text-blue-700 space-y-1">
            <li>Select individual items using checkboxes</li>
            <li>Use "Select All" to select all items on the current page</li>
            <li>View selected items count and IDs</li>
            <li>Works on both desktop and mobile views</li>
            <li>Supports disabled items (user with ID "2" is disabled)</li>
          </ul>
        </div>
        
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-2">Selection Status:</h4>
          <div className="text-sm text-gray-700">
            <p><strong>Selected Count:</strong> {selectedIds.length}</p>
            <p><strong>Selected IDs:</strong> {selectedIds.length > 0 ? selectedIds.join(', ') : 'None'}</p>
          </div>
        </div>

        <CustomTable
          data={sampleUsers}
          config={{
            columns: checklistColumns as TableColumn<Record<string, unknown>>[],
            responsive: true,
            showRowNumbers: true,
            selectable: true,
            selectableOptions: {
              showSelectAll: true,
              onSelectionChange: handleSelectionChange,
              getItemId: (item) => String(item.id),
              disableSelection: (item) => String(item.id) === '2', // Disable selection for user with ID "2"
              selectedIds: selectedIds,
            },
            pagination: {
              enabled: true,
              pageSize: 5,
              showPageSizeSelector: true,
              showInfo: true,
            },
            striped: true,
            hover: true,
          }}
        />
      </div>
    );
  },
};

// Interactive demo
export const InteractiveDemo: Story = {
  render: (args) => {
    const [data, setData] = React.useState(sampleUsers);
    const [selectedRows, setSelectedRows] = React.useState<string[]>([]);

    const handleEdit = (user: User) => {
      const newName = prompt('Enter new name:', user.name);
      if (newName) {
        setData(prev => prev.map(u => 
          u.id === user.id ? { ...u, name: newName } : u
        ));
      }
    };

    const handleDelete = (user: User) => {
      if (confirm(`Delete user ${user.name}?`)) {
        setData(prev => prev.filter(u => u.id !== user.id));
      }
    };

    const handleRowClick = (user: User) => {
      setSelectedRows(prev => 
        prev.includes(user.id as string) 
          ? prev.filter(id => id !== user.id)
          : [...prev, user.id as string]
      );
    };

    const interactiveColumns: TableColumn<User>[] = [
      ...userColumns.slice(0, 4),
      {
        key: 'selected',
        label: 'Selected',
        render: (_, user) => (
          <input
            type="checkbox"
            checked={selectedRows.includes(user.id as string)}
            onChange={() => handleRowClick(user)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
        ),
      },
    ];

    const interactiveActions: TableAction<User>[] = [
      {
        key: 'edit',
        label: 'Edit',
        icon: Edit,
        variant: 'primary',
        onClick: handleEdit,
      },
      {
        key: 'delete',
        label: 'Delete',
        icon: Trash2,
        variant: 'danger',
        onClick: handleDelete,
      },
    ];

    return (
      <div className="space-y-4">
        <div className="text-sm text-gray-600">
          Selected rows: {selectedRows.length}
        </div>
        <CustomTable
          data={data}
          config={{
            columns: interactiveColumns as TableColumn<Record<string, unknown>>[],
            actions: interactiveActions as TableAction<Record<string, unknown>>[],
            responsive: true,
            showRowNumbers: true,
            hover: true,
            pagination: {
              enabled: true,
              pageSize: 5,
              showPageSizeSelector: true,
              showInfo: true,
            },
          }}
          onRowClick={handleRowClick}
        />
      </div>
    );
  },
};