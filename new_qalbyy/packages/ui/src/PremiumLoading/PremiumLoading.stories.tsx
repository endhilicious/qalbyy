import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { PremiumLoading } from './PremiumLoading';
import type { PremiumLoadingProps } from './PremiumLoading';

const meta: Meta<typeof PremiumLoading> = {
  title: 'Components/PremiumLoading',
  component: PremiumLoading,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A premium loading component with heartbeat-style animation, customizable branding, and multiple variants.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    message: {
      description: 'Loading message to display',
    },
    size: {
      description: 'Size of the loading component',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
    fullscreen: {
      description: 'Whether to show the fullscreen overlay',
    },
    showProgress: {
      description: 'Whether to show progress bar',
    },
    progress: {
      description: 'Progress percentage (0-100)',
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    logo: {
      description: 'Logo source URL or React element',
    },
    logoAlt: {
      description: 'Alt text for logo',
    },
    primaryColor: {
      description: 'Primary brand color',
      control: { type: 'select' },
      options: ['blue', 'amber', 'green', 'purple', 'red', 'indigo', 'teal'],
    },
    secondaryColor: {
      description: 'Secondary brand color',
      control: { type: 'select' },
      options: ['blue', 'amber', 'green', 'purple', 'red', 'indigo', 'teal'],
    },
    subMessage: {
      description: 'Additional loading text',
    },
    brandName: {
      description: 'Custom brand name or initials',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PremiumLoading>;

// Interactive wrapper for progress stories
const ProgressWrapper = (args: PremiumLoadingProps) => {
  const [progress, setProgress] = useState(0);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="w-96 h-96 relative">
      <PremiumLoading
        {...args}
        progress={progress}
        fullscreen={false}
      />
    </div>
  );
};

export const Default: Story = {
  args: {
    message: 'Loading...',
    subMessage: 'Please wait...',
    size: 'lg',
    fullscreen: false,
    brandName: 'JILC',
  },
  render: (args) => (
    <div className="w-96 h-96 relative">
      <PremiumLoading {...args} />
    </div>
  ),
};

export const Small: Story = {
  args: {
    message: 'Loading...',
    subMessage: 'Please wait...',
    size: 'sm',
    fullscreen: false,
    brandName: 'JILC',
  },
  render: (args) => (
    <div className="w-96 h-96 relative">
      <PremiumLoading {...args} />
    </div>
  ),
};

export const Medium: Story = {
  args: {
    message: 'Loading...',
    subMessage: 'Please wait...',
    size: 'md',
    fullscreen: false,
    brandName: 'JILC',
  },
  render: (args) => (
    <div className="w-96 h-96 relative">
      <PremiumLoading {...args} />
    </div>
  ),
};

export const Large: Story = {
  args: {
    message: 'Loading...',
    subMessage: 'Please wait...',
    size: 'lg',
    fullscreen: false,
    brandName: 'JILC',
  },
  render: (args) => (
    <div className="w-96 h-96 relative">
      <PremiumLoading {...args} />
    </div>
  ),
};

export const ExtraLarge: Story = {
  args: {
    message: 'Loading...',
    subMessage: 'Please wait...',
    size: 'xl',
    fullscreen: false,
    brandName: 'JILC',
  },
  render: (args) => (
    <div className="w-96 h-96 relative">
      <PremiumLoading {...args} />
    </div>
  ),
};

export const WithProgress: Story = {
  render: ProgressWrapper,
  args: {
    message: 'Processing...',
    subMessage: 'Please wait while we process your request',
    size: 'lg',
    showProgress: true,
    brandName: 'JILC',
  },
};

export const BlueTheme: Story = {
  args: {
    message: 'Loading...',
    subMessage: 'Please wait...',
    size: 'lg',
    fullscreen: false,
    primaryColor: 'blue',
    secondaryColor: 'indigo',
    brandName: 'BLUE',
  },
  render: (args) => (
    <div className="w-96 h-96 relative">
      <PremiumLoading {...args} />
    </div>
  ),
};

export const GreenTheme: Story = {
  args: {
    message: 'Loading...',
    subMessage: 'Please wait...',
    size: 'lg',
    fullscreen: false,
    primaryColor: 'green',
    secondaryColor: 'green',
    brandName: 'ECO',
  },
  render: (args) => (
    <div className="w-96 h-96 relative">
      <PremiumLoading {...args} />
    </div>
  ),
};

export const PurpleTheme: Story = {
  args: {
    message: 'Loading...',
    subMessage: 'Please wait...',
    size: 'lg',
    fullscreen: false,
    primaryColor: 'purple',
    secondaryColor: 'purple',
    brandName: 'PRO',
  },
  render: (args) => (
    <div className="w-96 h-96 relative">
      <PremiumLoading {...args} />
    </div>
  ),
};

export const AmberTheme: Story = {
  args: {
    message: 'Loading...',
    subMessage: 'Please wait...',
    size: 'lg',
    fullscreen: false,
    primaryColor: 'amber',
    secondaryColor: 'amber',
    brandName: 'GOLD',
  },
  render: (args) => (
    <div className="w-96 h-96 relative">
      <PremiumLoading {...args} />
    </div>
  ),
};

export const RedTheme: Story = {
  args: {
    message: 'Loading...',
    subMessage: 'Please wait...',
    size: 'lg',
    fullscreen: false,
    primaryColor: 'red',
    secondaryColor: 'red',
    brandName: 'FIRE',
  },
  render: (args) => (
    <div className="w-96 h-96 relative">
      <PremiumLoading {...args} />
    </div>
  ),
};

export const TealTheme: Story = {
  args: {
    message: 'Loading...',
    subMessage: 'Please wait...',
    size: 'lg',
    fullscreen: false,
    primaryColor: 'teal',
    secondaryColor: 'teal',
    brandName: 'AQUA',
  },
  render: (args) => (
    <div className="w-96 h-96 relative">
      <PremiumLoading {...args} />
    </div>
  ),
};

export const WithCustomLogo: Story = {
  args: {
    message: 'Loading...',
    subMessage: 'Please wait...',
    size: 'lg',
    fullscreen: false,
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-600">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    logoAlt: 'Custom Logo',
  },
  render: (args) => (
    <div className="w-96 h-96 relative">
      <PremiumLoading {...args} />
    </div>
  ),
};

export const CustomMessages: Story = {
  args: {
    message: 'Initializing Application...',
    subMessage: 'Setting up your workspace',
    size: 'lg',
    fullscreen: false,
    brandName: 'APP',
  },
  render: (args) => (
    <div className="w-96 h-96 relative">
      <PremiumLoading {...args} />
    </div>
  ),
};

export const Fullscreen: Story = {
  args: {
    message: 'Loading Application...',
    subMessage: 'Please wait while we prepare everything for you',
    size: 'xl',
    fullscreen: true,
    brandName: 'JILC',
  },
  parameters: {
    layout: 'fullscreen',
  },
};