import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { InfiniteLoader } from "./InfiniteLoader";

// Sample data type
interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}

// Sample data generator
const generateUsers = (count: number): User[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 1}`,
  }));
};

const UserCard = ({ user }: { user: User }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
        <span className="text-sm font-medium text-gray-600">
          {user.name.charAt(0)}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium text-gray-900 truncate">
          {user.name}
        </h3>
        <p className="text-sm text-gray-500 truncate">{user.email}</p>
      </div>
    </div>
  </div>
);

const ProductCard = ({ product }: { product: any }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
    <div className="w-full h-32 bg-gray-200 rounded-md mb-3 flex items-center justify-center">
      <span className="text-gray-500">Product Image</span>
    </div>
    <h3 className="text-sm font-medium text-gray-900 mb-1">{product.name}</h3>
    <p className="text-sm text-gray-600 mb-2">{product.description}</p>
    <p className="text-lg font-semibold text-blue-600">${product.price}</p>
  </div>
);

const meta = {
  title: "@Repo/UI/InfiniteLoader",
  component: InfiniteLoader,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    pageSize: {
      control: { type: "number" },
    },
    hasMore: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },
    selectable: {
      control: { type: "boolean" },
    },
    columns: {
      control: { type: "select" },
      options: [1, 2, 3, 4],
    },
    gap: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    emptyMessage: {
      control: { type: "text" },
    },
    loadingMessage: {
      control: { type: "text" },
    },
    loadMoreButtonText: {
      control: { type: "text" },
    },
    showLoadMoreButton: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof InfiniteLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: generateUsers(20),
    renderCard: (user: User) => <UserCard user={user} />,
    pageSize: 6,
    hasMore: true,
    loading: false,
  },
};

export const WithLoading: Story = {
  args: {
    data: generateUsers(20),
    renderCard: (user: User) => <UserCard user={user} />,
    pageSize: 6,
    hasMore: true,
    loading: true,
  },
};

export const Selectable: Story = {
  render: () => {
    const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

    return (
      <InfiniteLoader
        data={generateUsers(20)}
        renderCard={(user: User) => <UserCard user={user} />}
        pageSize={6}
        hasMore={true}
        selectable={true}
        selectedItems={selectedUsers}
        onSelectionChange={setSelectedUsers}
        getItemId={(user: User) => user.id}
      />
    );
  },
};

export const TwoColumns: Story = {
  args: {
    data: generateUsers(20),
    renderCard: (user: User) => <UserCard user={user} />,
    pageSize: 8,
    hasMore: true,
    columns: 2,
  },
};

export const ThreeColumns: Story = {
  args: {
    data: generateUsers(30),
    renderCard: (user: User) => <UserCard user={user} />,
    pageSize: 9,
    hasMore: true,
    columns: 3,
  },
};

export const FourColumns: Story = {
  args: {
    data: generateUsers(40),
    renderCard: (user: User) => <UserCard user={user} />,
    pageSize: 12,
    hasMore: true,
    columns: 4,
  },
};

export const ProductGrid: Story = {
  render: () => {
    const products = Array.from({ length: 24 }, (_, i) => ({
      id: i + 1,
      name: `Product ${i + 1}`,
      description: `This is a great product ${i + 1}`,
      price: Math.floor(Math.random() * 100) + 10,
    }));

    return (
      <InfiniteLoader
        data={products}
        renderCard={(product: any) => <ProductCard product={product} />}
        pageSize={12}
        hasMore={true}
        columns={3}
        gap="lg"
      />
    );
  },
};

export const EmptyState: Story = {
  args: {
    data: [],
    renderCard: (user: User) => <UserCard user={user} />,
    emptyMessage: "No users found. Try adjusting your search criteria.",
  },
};

export const CustomMessages: Story = {
  args: {
    data: generateUsers(20),
    renderCard: (user: User) => <UserCard user={user} />,
    pageSize: 6,
    hasMore: true,
    loadingMessage: "Fetching more users...",
    loadMoreButtonText: "Show More Users",
  },
};

export const WithoutLoadMoreButton: Story = {
  args: {
    data: generateUsers(20),
    renderCard: (user: User) => <UserCard user={user} />,
    pageSize: 6,
    hasMore: true,
    showLoadMoreButton: false,
  },
};

export const LargeGap: Story = {
  args: {
    data: generateUsers(20),
    renderCard: (user: User) => <UserCard user={user} />,
    pageSize: 8,
    hasMore: true,
    columns: 2,
    gap: "lg",
  },
};

export const SmallGap: Story = {
  args: {
    data: generateUsers(20),
    renderCard: (user: User) => <UserCard user={user} />,
    pageSize: 8,
    hasMore: true,
    columns: 2,
    gap: "sm",
  },
};

export const Interactive: Story = {
  render: () => {
    const [users, setUsers] = useState(generateUsers(6));
    const [loading, setLoading] = useState(false);
    const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
    const [hasMore, setHasMore] = useState(true);

    const loadMore = () => {
      setLoading(true);
      setTimeout(() => {
        const newUsers = generateUsers(6).map((user, index) => ({
          ...user,
          id: users.length + index + 1,
          name: `User ${users.length + index + 1}`,
          email: `user${users.length + index + 1}@example.com`,
        }));
        setUsers((prev) => [...prev, ...newUsers]);
        setLoading(false);

        if (users.length >= 30) {
          setHasMore(false);
        }
      }, 1000);
    };

    return (
      <div className="space-y-4">
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-medium text-blue-900">Interactive Demo</h3>
          <p className="text-sm text-blue-700 mt-1">
            Scroll down or click "Load More" to load additional items. Select
            items to see selection functionality.
          </p>
          {selectedUsers.length > 0 && (
            <p className="text-sm text-blue-700 mt-2">
              Selected: {selectedUsers.length} user
              {selectedUsers.length > 1 ? "s" : ""}
            </p>
          )}
        </div>

        <InfiniteLoader
          data={users}
          renderCard={(user: User) => <UserCard user={user} />}
          pageSize={6}
          hasMore={hasMore}
          loading={loading}
          onLoadMore={loadMore}
          selectable={true}
          selectedItems={selectedUsers}
          onSelectionChange={setSelectedUsers}
          getItemId={(user: User) => user.id}
          columns={2}
        />
      </div>
    );
  },
};
