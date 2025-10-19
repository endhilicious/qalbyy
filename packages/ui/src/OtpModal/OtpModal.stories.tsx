import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { OtpModal, OtpModalProps } from './OtpModal';

const meta: Meta<typeof OtpModal> = {
  title: 'Components/OtpModal',
  component: OtpModal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A modal component for OTP (One-Time Password) verification with customizable length, auto-submit, and resend functionality.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: { table: { disable: true } },
    onClose: { table: { disable: true } },
    onSubmit: { table: { disable: true } },
    onResend: { table: { disable: true } },
    length: {
      control: { type: 'number', min: 4, max: 8 },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    inputType: {
      control: { type: 'select' },
      options: ['numeric', 'text'],
    },
    autoSubmit: {
      control: { type: 'boolean' },
    },
    masked: {
      control: { type: 'boolean' },
    },
    showResend: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    resendCooldown: {
      control: { type: 'number', min: 10, max: 120 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive wrapper for stories
const InteractiveWrapper = (args: Partial<OtpModalProps>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [submittedOtp, setSubmittedOtp] = useState<string>('');
  const [resendCount, setResendCount] = useState(0);
  
  const handleSubmit = (otp: string) => {
    console.log('OTP submitted:', otp);
    setSubmittedOtp(otp);
    // Simulate verification delay
    setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  };

  const handleResend = () => {
    console.log('Resend requested');
    setResendCount(prev => prev + 1);
  };

  return (
    <div className="p-4">
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Open OTP Modal
      </button>
      
      {submittedOtp && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md">
          <p className="text-sm text-green-600">
            <strong>Last submitted OTP:</strong> {submittedOtp}
          </p>
        </div>
      )}
      
      {resendCount > 0 && (
        <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-md">
          <p className="text-sm text-blue-600">
            <strong>Resend count:</strong> {resendCount}
          </p>
        </div>
      )}

      <OtpModal
        length={6}
        title="Enter Verification Code"
        description="Please enter the verification code"
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleSubmit}
        onResend={handleResend}
      />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <InteractiveWrapper {...args} />,
  args: {
    title: 'Enter Verification Code',
    description: 'Please enter the 6-digit code sent to your phone',
    contactInfo: '+1 (555) 123-4567',
  },
};

export const EmailVerification: Story = {
  render: (args) => <InteractiveWrapper {...args} />,
  args: {
    title: 'Email Verification',
    description: 'Please enter the verification code sent to your email',
    contactInfo: 'user@example.com',
    length: 6,
  },
};

export const FourDigitCode: Story = {
  render: (args) => <InteractiveWrapper {...args} />,
  args: {
    title: 'Enter PIN',
    description: 'Please enter your 4-digit PIN',
    length: 4,
    showResend: false,
  },
};

export const EightDigitCode: Story = {
  render: (args) => <InteractiveWrapper {...args} />,
  args: {
    title: 'Security Code',
    description: 'Please enter the 8-digit security code',
    length: 8,
    contactInfo: 'your authenticator app',
  },
};

export const WithError: Story = {
  render: (args) => <InteractiveWrapper {...args} />,
  args: {
    title: 'Enter Verification Code',
    description: 'Please enter the 6-digit code sent to your phone',
    contactInfo: '+1 (555) 123-4567',
    error: 'Invalid code. Please try again.',
  },
};

export const WithSuccess: Story = {
  render: (args) => <InteractiveWrapper {...args} />,
  args: {
    title: 'Enter Verification Code',
    description: 'Please enter the 6-digit code sent to your phone',
    contactInfo: '+1 (555) 123-4567',
    success: 'Code verified successfully!',
  },
};

export const Loading: Story = {
  render: (args) => <InteractiveWrapper {...args} />,
  args: {
    title: 'Enter Verification Code',
    description: 'Please enter the 6-digit code sent to your phone',
    contactInfo: '+1 (555) 123-4567',
    loading: true,
  },
};

export const NoAutoSubmit: Story = {
  render: (args) => <InteractiveWrapper {...args} />,
  args: {
    title: 'Enter Verification Code',
    description: 'Please enter the 6-digit code and click verify',
    contactInfo: '+1 (555) 123-4567',
    autoSubmit: false,
  },
};

export const AlphanumericCode: Story = {
  render: (args) => <InteractiveWrapper {...args} />,
  args: {
    title: 'Enter Access Code',
    description: 'Please enter the alphanumeric access code',
    inputType: 'text',
    length: 6,
    contactInfo: 'your email',
  },
};

export const MaskedInput: Story = {
  render: (args) => <InteractiveWrapper {...args} />,
  args: {
    title: 'Enter Secret Code',
    description: 'Please enter your secret code',
    masked: true,
    length: 6,
    showResend: false,
  },
};

export const SmallSize: Story = {
  render: (args) => <InteractiveWrapper {...args} />,
  args: {
    title: 'Enter Code',
    description: 'Small size OTP modal',
    size: 'sm',
    length: 4,
  },
};

export const LargeSize: Story = {
  render: (args) => <InteractiveWrapper {...args} />,
  args: {
    title: 'Enter Verification Code',
    description: 'Large size OTP modal with bigger inputs',
    size: 'lg',
    length: 6,
    contactInfo: '+1 (555) 123-4567',
  },
};

export const CustomCooldown: Story = {
  render: (args) => <InteractiveWrapper {...args} />,
  args: {
    title: 'Enter Verification Code',
    description: 'Custom 30-second resend cooldown',
    contactInfo: '+1 (555) 123-4567',
    resendCooldown: 30,
  },
};

export const NoResend: Story = {
  render: (args) => <InteractiveWrapper {...args} />,
  args: {
    title: 'Enter Security Code',
    description: 'One-time security code (no resend option)',
    showResend: false,
    length: 6,
  },
};

export const BankingStyle: Story = {
  render: (args) => <InteractiveWrapper {...args} />,
  args: {
    title: 'Transaction Authorization',
    description: 'Enter the authorization code to complete your transaction',
    contactInfo: 'your registered mobile number',
    length: 6,
    inputType: 'numeric',
    autoSubmit: false,
    resendCooldown: 120,
  },
};