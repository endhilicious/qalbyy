import "@testing-library/jest-dom/vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { InfiniteLoader } from "../InfiniteLoader";

// Mock IntersectionObserver
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = mockIntersectionObserver;

const mockData = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

const mockRenderCard = (item: any) => (
  <div key={item.id} data-testid={`item-${item.id}`}>
    {item.name}
  </div>
);

describe("InfiniteLoader", () => {
  it("should render items correctly", async () => {
    render(<InfiniteLoader data={mockData} renderCard={mockRenderCard} />);

    expect(await screen.findByTestId("item-1")).toBeInTheDocument();
    expect(await screen.findByTestId("item-2")).toBeInTheDocument();
    expect(await screen.findByTestId("item-3")).toBeInTheDocument();
  });

  it("should display empty message when no data", () => {
    render(
      <InfiniteLoader
        data={[]}
        renderCard={mockRenderCard}
        emptyMessage="No items found"
      />,
    );

    expect(screen.getByText("No items found")).toBeInTheDocument();
  });

  it("should display loading indicator when loading", async () => {
    render(
      <InfiniteLoader
        data={mockData}
        renderCard={mockRenderCard}
        loading={true}
      />,
    );

    expect(await screen.findByText("Loading more items...")).toBeInTheDocument();
  });

  it("should show load more button when hasMore is true", async () => {
    render(
      <InfiniteLoader
        data={mockData}
        renderCard={mockRenderCard}
        hasMore={true}
        showLoadMoreButton={true}
      />,
    );

    expect(await screen.findByText("Load More")).toBeInTheDocument();
  });

  it("should call onLoadMore when load more button is clicked", async () => {
    const onLoadMore = vi.fn();
    render(
      <InfiniteLoader
        data={mockData}
        renderCard={mockRenderCard}
        hasMore={true}
        onLoadMore={onLoadMore}
        showLoadMoreButton={true}
      />,
    );

    const loadMoreButton = await screen.findByText("Load More");
    fireEvent.click(loadMoreButton);

    expect(onLoadMore).toHaveBeenCalledTimes(1);
  });

  it("should render with different column layouts", async () => {
    const { rerender } = render(
      <InfiniteLoader
        data={mockData}
        renderCard={mockRenderCard}
        columns={2}
      />,
    );

    await screen.findByTestId("item-1");
    const grid = screen.getByTestId("item-1").closest(".grid");
    expect(grid).toHaveClass("md:grid-cols-2");

    rerender(
      <InfiniteLoader
        data={mockData}
        renderCard={mockRenderCard}
        columns={3}
      />,
    );

    await screen.findByTestId("item-1");
    const updatedGrid = screen.getByTestId("item-1").closest(".grid");
    expect(updatedGrid).toHaveClass("lg:grid-cols-3");
  });

  it("should render with different gap sizes", async () => {
    const { rerender } = render(
      <InfiniteLoader data={mockData} renderCard={mockRenderCard} gap="sm" />,
    );

    await screen.findByTestId("item-1");
    const grid = screen.getByTestId("item-1").closest(".grid");
    expect(grid).toHaveClass("gap-2");

    rerender(
      <InfiniteLoader data={mockData} renderCard={mockRenderCard} gap="lg" />,
    );

    await screen.findByTestId("item-1");
    const updatedGrid = screen.getByTestId("item-1").closest(".grid");
    expect(updatedGrid).toHaveClass("gap-6");
  });

  it("should display selection controls when selectable is true", async () => {
    render(
      <InfiniteLoader
        data={mockData}
        renderCard={mockRenderCard}
        selectable={true}
      />,
    );

    expect(await screen.findByText("Select items")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("should handle item selection", async () => {
    const onSelectionChange = vi.fn();
    render(
      <InfiniteLoader
        data={mockData}
        renderCard={mockRenderCard}
        selectable={true}
        onSelectionChange={onSelectionChange}
        getItemId={(item) => item.id}
      />,
    );

    await screen.findByText("Select items");
    const checkboxes = screen.getAllByRole("checkbox");
    // Click on the first item checkbox (skip the select all checkbox)
    fireEvent.click(checkboxes[1]);

    expect(onSelectionChange).toHaveBeenCalledWith([mockData[0]]);
  });

  it("should handle select all functionality", async () => {
    const onSelectionChange = vi.fn();
    render(
      <InfiniteLoader
        data={mockData}
        renderCard={mockRenderCard}
        selectable={true}
        onSelectionChange={onSelectionChange}
        getItemId={(item) => item.id}
      />,
    );

    await screen.findByText("Select items");
    const selectAllCheckbox = screen.getByRole("checkbox");
    fireEvent.click(selectAllCheckbox);

    expect(onSelectionChange).toHaveBeenCalledWith(mockData);
  });

  it("should display selected count", async () => {
    render(
      <InfiniteLoader
        data={mockData}
        renderCard={mockRenderCard}
        selectable={true}
        selectedItems={[mockData[0]]}
        getItemId={(item) => item.id}
      />,
    );

    expect(await screen.findByText("1 item selected")).toBeInTheDocument();
  });

  it("should show clear selection button when items are selected", async () => {
    const onSelectionChange = vi.fn();
    render(
      <InfiniteLoader
        data={mockData}
        renderCard={mockRenderCard}
        selectable={true}
        selectedItems={[mockData[0]]}
        onSelectionChange={onSelectionChange}
        getItemId={(item) => item.id}
      />,
    );

    const clearButton = await screen.findByText("Clear Selection");
    expect(clearButton).toBeInTheDocument();

    fireEvent.click(clearButton);
    expect(onSelectionChange).toHaveBeenCalledWith([]);
  });

  it("should apply custom className", async () => {
    render(
      <InfiniteLoader
        data={mockData}
        renderCard={mockRenderCard}
        className="custom-class"
      />,
    );

    await screen.findByTestId("item-1");
    const container = screen.getByTestId("item-1").closest(".custom-class");
    expect(container).toBeInTheDocument();
  });

  it("should use custom empty message", () => {
    render(
      <InfiniteLoader
        data={[]}
        renderCard={mockRenderCard}
        emptyMessage="Custom empty message"
      />,
    );

    expect(screen.getByText("Custom empty message")).toBeInTheDocument();
  });

  it("should use custom loading message", async () => {
    render(
      <InfiniteLoader
        data={mockData}
        renderCard={mockRenderCard}
        loading={true}
        loadingMessage="Custom loading message"
      />,
    );

    expect(await screen.findByText("Custom loading message")).toBeInTheDocument();
  });

  it("should use custom load more button text", async () => {
    render(
      <InfiniteLoader
        data={mockData}
        renderCard={mockRenderCard}
        hasMore={true}
        loadMoreButtonText="Custom Load More"
        showLoadMoreButton={true}
      />,
    );

    expect(await screen.findByText("Custom Load More")).toBeInTheDocument();
  });
});
