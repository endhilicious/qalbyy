# InfiniteLoader Component

A powerful infinite scroll component with selection capabilities, customizable grid layouts, and loading states.

## Usage

```tsx
import { InfiniteLoader } from '@repo/ui/InfiniteLoader/InfiniteLoader';

// Basic usage
<InfiniteLoader
  data={items}
  renderCard={(item) => <ItemCard item={item} />}
  pageSize={10}
  hasMore={true}
  onLoadMore={loadMoreItems}
  loading={isLoading}
/>

// With selection
<InfiniteLoader
  data={users}
  renderCard={(user) => <UserCard user={user} />}
  selectable={true}
  selectedItems={selectedUsers}
  onSelectionChange={setSelectedUsers}
  getItemId={(user) => user.id}
/>
```

## Props

| Prop                | Type                                        | Default           | Description                               |
| ------------------- | ------------------------------------------- | ----------------- | ----------------------------------------- |
| `data`              | `TData[]`                                   | -                 | Array of data items to display            |
| `renderCard`        | `(item: TData, index: number) => ReactNode` | -                 | Function to render each item              |
| `pageSize`          | `number`                                    | `10`              | Number of items to load per page          |
| `hasMore`           | `boolean`                                   | `false`           | Whether more data is available            |
| `onLoadMore`        | `() => void`                                | -                 | Callback when more items should be loaded |
| `loading`           | `boolean`                                   | `false`           | Loading state                             |
| `className`         | `string`                                    | -                 | Additional CSS classes                    |
| `emptyMessage`      | `string`                                    | `"No data found"` | Message when no data                      |
| `selectable`        | `boolean`                                   | `false`           | Enable item selection                     |
| `selectedItems`     | `TData[]`                                   | `[]`              | Currently selected items                  |
| `onSelectionChange` | `(selected: TData[]) => void`               | -                 | Selection change callback                 |
| `getItemId`         | `(item: TData) => string \| number`         | -                 | Function to get unique item ID            |
| `columns`           | `1 \| 2 \| 3 \| 4`                          | `1`               | Number of grid columns                    |
| `gap`               | `'sm' \| 'md' \| 'lg'`                      | `'md'`            | Grid gap size                             |

## Features

- **Infinite Scroll**: Automatic loading on scroll with intersection observer
- **Manual Load More**: Fallback button for manual loading
- **Selection**: Multi-select with select all functionality
- **Responsive Grid**: 1-4 column layouts with responsive breakpoints
- **Loading States**: Customizable loading indicators and messages
- **Empty States**: Customizable empty state messages
- **Flexible Rendering**: Custom render functions for any data type

## Grid Layouts

- **1 Column**: Single column layout (default)
- **2 Columns**: 1 column on mobile, 2 on medium+ screens
- **3 Columns**: 1 on mobile, 2 on medium, 3 on large screens
- **4 Columns**: 1 on mobile, 2 on medium, 3 on large, 4 on extra large

## Examples

### Basic user list

```tsx
<InfiniteLoader
  data={users}
  renderCard={(user) => (
    <div className="p-4 border rounded">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  )}
  pageSize={10}
  hasMore={hasMoreUsers}
  onLoadMore={loadMoreUsers}
  loading={loading}
/>
```

### Selectable product grid

```tsx
<InfiniteLoader
  data={products}
  renderCard={(product) => <ProductCard product={product} />}
  selectable={true}
  selectedItems={selectedProducts}
  onSelectionChange={setSelectedProducts}
  getItemId={(product) => product.id}
  columns={3}
  gap="lg"
/>
```

### Custom loading and empty states

```tsx
<InfiniteLoader
  data={items}
  renderCard={renderItem}
  emptyMessage="No items found. Try adjusting your search."
  loadingMessage="Loading more items..."
  loadMoreButtonText="Show More"
  showLoadMoreButton={false}
/>
```
