import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Modal } from "./Modal";
import { InputText } from "../InputText/InputText";
import { InputTextarea } from "../InputTextarea/InputTextarea";

const ModalExample = ({
  isOpen,
  onClose,
  title,
  size,
  showCloseButton,
  closeOnOverlayClick,
  closeOnEscape,
}: any) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      size={size}
      showCloseButton={showCloseButton}
      closeOnOverlayClick={closeOnOverlayClick}
      closeOnEscape={closeOnEscape}
    >
      <div className="space-y-4">
        <p className="text-gray-600">
          This is a sample modal content. You can put any content here.
        </p>

        <InputText
          label="Name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <InputTextarea
          label="Message"
          placeholder="Enter your message"
          rows={3}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />

        <div className="flex justify-end space-x-3 pt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
};

const meta = {
  title: "@Repo/UI/Modal",
  component: ModalExample,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    isOpen: {
      control: { type: "boolean" },
    },
    title: {
      control: { type: "text" },
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl", "2xl", "full"],
    },
    showCloseButton: {
      control: { type: "boolean" },
    },
    closeOnOverlayClick: {
      control: { type: "boolean" },
    },
    closeOnEscape: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof ModalExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: "Default Modal",
  },
};

export const WithoutTitle: Story = {
  args: {
    isOpen: true,
    title: "",
  },
};

export const Small: Story = {
  args: {
    isOpen: true,
    title: "Small Modal",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    isOpen: true,
    title: "Large Modal",
    size: "lg",
  },
};

export const ExtraLarge: Story = {
  args: {
    isOpen: true,
    title: "Extra Large Modal",
    size: "xl",
  },
};

export const TwoExtraLarge: Story = {
  args: {
    isOpen: true,
    title: "2XL Modal",
    size: "2xl",
  },
};

export const FullWidth: Story = {
  args: {
    isOpen: true,
    title: "Full Width Modal",
    size: "full",
  },
};

export const WithoutCloseButton: Story = {
  args: {
    isOpen: true,
    title: "Modal Without Close Button",
    showCloseButton: false,
  },
};

export const NoOverlayClose: Story = {
  args: {
    isOpen: true,
    title: "No Overlay Close",
    closeOnOverlayClick: false,
  },
};

export const NoEscapeClose: Story = {
  args: {
    isOpen: true,
    title: "No Escape Close",
    closeOnEscape: false,
  },
};

export const ConfirmationDialog: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Confirm Action"
        size="sm"
      >
        <div className="space-y-4">
          <p className="text-gray-600">
            Are you sure you want to delete this item? This action cannot be
            undone.
          </p>

          <div className="flex justify-end space-x-3">
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Cancel
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    );
  },
};

export const FormModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });

    return (
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Contact Form"
        size="lg"
      >
        <form className="space-y-4">
          <InputText
            label="Full Name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />

          <InputText
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />

          <InputTextarea
            label="Message"
            placeholder="Enter your message"
            rows={4}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          />

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                console.log("Form submitted:", formData);
                setIsOpen(false);
              }}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </Modal>
    );
  },
};

export const AllSizes: Story = {
  render: () => {
    const [openModal, setOpenModal] = useState<string | null>(null);

    const sizes = [
      { key: "sm", label: "Small" },
      { key: "md", label: "Medium" },
      { key: "lg", label: "Large" },
      { key: "xl", label: "Extra Large" },
      { key: "2xl", label: "2X Large" },
      { key: "full", label: "Full Width" },
    ] as const;

    return (
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Modal Sizes</h2>
        <div className="grid grid-cols-2 gap-4">
          {sizes.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setOpenModal(key)}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Open {label} Modal
            </button>
          ))}
        </div>

        {sizes.map(({ key, label }) => (
          <Modal
            key={key}
            isOpen={openModal === key}
            onClose={() => setOpenModal(null)}
            title={`${label} Modal`}
            size={key}
          >
            <div className="space-y-4">
              <p className="text-gray-600">
                This is a {label.toLowerCase()} modal. The content adjusts based
                on the size.
              </p>

              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setOpenModal(null)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Close
                </button>
              </div>
            </div>
          </Modal>
        ))}
      </div>
    );
  },
};
