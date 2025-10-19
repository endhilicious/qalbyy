import type { Meta, StoryObj } from '@storybook/react';
import { Stepper, StepperNavigation } from './Stepper';
import { Users, Settings, Calendar, Clock } from 'lucide-react';

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'modern', 'minimal'],
    },
    currentStep: {
      control: { type: 'number', min: 1, max: 4 },
    },
    allowNavigation: {
      control: { type: 'boolean' },
    },
    showProgress: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultSteps = [
  {
    id: 'info',
    title: 'Informasi Dasar',
    description: 'Data kegiatan',
    icon: <Users className="w-5 h-5" />,
  },
  {
    id: 'access',
    title: 'Akses & Harga',
    description: 'Pengaturan akses',
    icon: <Settings className="w-5 h-5" />,
  },
  {
    id: 'schedule',
    title: 'Jadwal',
    description: 'Waktu pelaksanaan',
    icon: <Calendar className="w-5 h-5" />,
  },
  {
    id: 'exam',
    title: 'Pengaturan Ujian',
    description: 'Konfigurasi ujian',
    icon: <Clock className="w-5 h-5" />,
  },
];

export const Modern: Story = {
  args: {
    steps: defaultSteps,
    currentStep: 2,
    variant: 'modern',
    allowNavigation: false,
    showProgress: true,
  },
};

export const Default: Story = {
  args: {
    steps: defaultSteps,
    currentStep: 2,
    variant: 'default',
    allowNavigation: false,
    showProgress: true,
  },
};

export const Minimal: Story = {
  args: {
    steps: defaultSteps,
    currentStep: 2,
    variant: 'minimal',
    allowNavigation: false,
    showProgress: true,
  },
};

export const WithNavigation: Story = {
  args: {
    steps: defaultSteps,
    currentStep: 2,
    variant: 'modern',
    allowNavigation: true,
    showProgress: true,
  },
};

export const WithDisabledStep: Story = {
  args: {
    steps: [
      ...defaultSteps.slice(0, 3),
      {
        id: 'exam',
        title: 'Pengaturan Ujian',
        description: 'Konfigurasi ujian',
        icon: <Clock className="w-5 h-5" />,
        disabled: true,
      },
    ],
    currentStep: 2,
    variant: 'modern',
    allowNavigation: false,
    showProgress: true,
  },
};

export const CompleteFlow: Story = {
  args: {
    steps: defaultSteps,
    currentStep: 4,
    variant: 'modern',
    allowNavigation: true,
    showProgress: true,
  },
};

// Navigation component stories
export const Navigation: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <StepperNavigation
        onPrevious={() => console.log('Previous')}
        onNext={() => console.log('Next')}
        isFirstStep={false}
        isLastStep={false}
        showCancel={true}
        onCancel={() => console.log('Cancel')}
      />
    </div>
  ),
};

export const NavigationLastStep: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <StepperNavigation
        onPrevious={() => console.log('Previous')}
        onSubmit={() => console.log('Submit')}
        isFirstStep={false}
        isLastStep={true}
        showCancel={true}
        onCancel={() => console.log('Cancel')}
        submitText="Buat Kegiatan"
      />
    </div>
  ),
};



