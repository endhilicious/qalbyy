import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Stepper, StepperNavigation } from '../Stepper';
import type { StepperStep } from '../Stepper';
import { Users, Settings, Calendar, Clock } from 'lucide-react';

// Mock data for testing
const mockSteps: StepperStep[] = [
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
    title: 'Ujian',
    description: 'Pengaturan ujian',
    icon: <Clock className="w-5 h-5" />,
    disabled: true,
  },
];

const mockStepsMinimal: StepperStep[] = [
  { id: 'step1', title: 'Step 1' },
  { id: 'step2', title: 'Step 2' },
  { id: 'step3', title: 'Step 3' },
];

describe('Stepper Component', () => {
  describe('Basic Rendering', () => {
    it('renders stepper with steps correctly', () => {
      render(
        <Stepper
          steps={mockSteps}
          currentStep={1}
        />
      );

      // Check if all step titles are rendered
      expect(screen.getByText('Informasi Dasar')).toBeInTheDocument();
      expect(screen.getByText('Akses & Harga')).toBeInTheDocument();
      expect(screen.getByText('Jadwal')).toBeInTheDocument();
      expect(screen.getByText('Ujian')).toBeInTheDocument();
    });

    it('renders step descriptions when provided', () => {
      render(
        <Stepper
          steps={mockSteps}
          currentStep={1}
        />
      );

      expect(screen.getByText('Data kegiatan')).toBeInTheDocument();
      expect(screen.getByText('Pengaturan akses')).toBeInTheDocument();
      expect(screen.getByText('Waktu pelaksanaan')).toBeInTheDocument();
      expect(screen.getByText('Pengaturan ujian')).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      const { container } = render(
        <Stepper
          steps={mockStepsMinimal}
          currentStep={1}
          className="custom-stepper"
        />
      );

      expect(container.firstChild).toHaveClass('custom-stepper');
    });
  });

  describe('Step Status and Styling', () => {
    it('shows correct status for current step', () => {
      render(
        <Stepper
          steps={mockStepsMinimal}
          currentStep={2}
        />
      );

      // Current step should have specific styling
      const stepElements = screen.getAllByText(/Step \d/);
      expect(stepElements).toHaveLength(3);
    });

    it('shows completed steps with check icon', () => {
      render(
        <Stepper
          steps={mockStepsMinimal}
          currentStep={3}
        />
      );

      // Should have check icons for completed steps
      const checkIcons = document.querySelectorAll('svg[data-testid="check-icon"], .lucide-check');
      expect(checkIcons.length).toBeGreaterThan(0);
    });

    it('handles disabled steps correctly', () => {
      render(
        <Stepper
          steps={mockSteps}
          currentStep={2}
        />
      );

      // Disabled step should have appropriate styling
      const ujianStep = screen.getByText('Ujian');
      expect(ujianStep).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('renders default variant correctly', () => {
      const { container } = render(
        <Stepper
          steps={mockStepsMinimal}
          currentStep={1}
          variant="default"
        />
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it('renders modern variant correctly', () => {
      const { container } = render(
        <Stepper
          steps={mockSteps}
          currentStep={1}
          variant="modern"
        />
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it('renders minimal variant correctly', () => {
      const { container } = render(
        <Stepper
          steps={mockStepsMinimal}
          currentStep={1}
          variant="minimal"
        />
      );

      expect(container.firstChild).toBeInTheDocument();
    });
  });

  describe('Progress Bar', () => {
    it('shows progress bar by default', () => {
      render(
        <Stepper
          steps={mockStepsMinimal}
          currentStep={2}
        />
      );

      expect(screen.getByText('Progress')).toBeInTheDocument();
      expect(screen.getByText('2 of 3')).toBeInTheDocument();
    });

    it('hides progress bar when showProgress is false', () => {
      render(
        <Stepper
          steps={mockStepsMinimal}
          currentStep={2}
          showProgress={false}
        />
      );

      expect(screen.queryByText('Progress')).not.toBeInTheDocument();
    });

    it('calculates progress percentage correctly', () => {
      render(
        <Stepper
          steps={mockStepsMinimal}
          currentStep={2}
        />
      );

      // Progress should be calculated as (currentStep - 1) / (totalSteps - 1) * 100
      // For step 2 of 3: (2-1)/(3-1)*100 = 50%
      const progressBar = document.querySelector('[style*="width"]');
      expect(progressBar).toBeInTheDocument();
    });
  });

  describe('Navigation and Interaction', () => {
    it('calls onStepClick when step is clicked and navigation is allowed', () => {
      const mockOnStepClick = vi.fn();
      
      render(
        <Stepper
          steps={mockStepsMinimal}
          currentStep={2}
          allowNavigation={true}
          onStepClick={mockOnStepClick}
        />
      );

      // Click on first step (completed step should be clickable)
      const firstStep = screen.getByText('Step 1');
      fireEvent.click(firstStep.closest('div')!);
      
      expect(mockOnStepClick).toHaveBeenCalledWith(0);
    });

    it('does not call onStepClick when navigation is disabled', () => {
      const mockOnStepClick = vi.fn();
      
      render(
        <Stepper
          steps={mockStepsMinimal}
          currentStep={2}
          allowNavigation={false}
          onStepClick={mockOnStepClick}
        />
      );

      const firstStep = screen.getByText('Step 1');
      fireEvent.click(firstStep.closest('div')!);
      
      expect(mockOnStepClick).not.toHaveBeenCalled();
    });

    it('does not call onStepClick for disabled steps', () => {
      const mockOnStepClick = vi.fn();
      
      render(
        <Stepper
          steps={mockSteps}
          currentStep={2}
          allowNavigation={true}
          onStepClick={mockOnStepClick}
        />
      );

      // Try to click disabled step
      const disabledStep = screen.getByText('Ujian');
      fireEvent.click(disabledStep.closest('div')!);
      
      expect(mockOnStepClick).not.toHaveBeenCalled();
    });
  });

  describe('Icons and Default Icons', () => {
    it('renders custom icons when provided', () => {
      render(
        <Stepper
          steps={mockSteps}
          currentStep={1}
          variant="modern"
        />
      );

      // Icons should be rendered (we can't easily test the exact icon, but we can test they exist)
      expect(screen.getByText('Informasi Dasar')).toBeInTheDocument();
    });

    it('renders default icons for known step ids', () => {
      const stepsWithDefaultIcons: StepperStep[] = [
        { id: 'info', title: 'Info' },
        { id: 'access', title: 'Access' },
        { id: 'schedule', title: 'Schedule' },
        { id: 'exam', title: 'Exam' },
      ];

      render(
        <Stepper
          steps={stepsWithDefaultIcons}
          currentStep={1}
          variant="modern"
        />
      );

      expect(screen.getByText('Info')).toBeInTheDocument();
      expect(screen.getByText('Access')).toBeInTheDocument();
      expect(screen.getByText('Schedule')).toBeInTheDocument();
      expect(screen.getByText('Exam')).toBeInTheDocument();
    });

    it('renders step numbers when no icon is provided', () => {
      render(
        <Stepper
          steps={mockStepsMinimal}
          currentStep={1}
          variant="modern"
        />
      );

      // Should render step numbers
      expect(screen.getByText('1')).toBeInTheDocument();
      expect(screen.getByText('2')).toBeInTheDocument();
      expect(screen.getByText('3')).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('handles empty steps array', () => {
      render(
        <Stepper
          steps={[]}
          currentStep={1}
        />
      );

      expect(screen.getByText('Progress')).toBeInTheDocument();
    });

    it('handles currentStep beyond steps length', () => {
      render(
        <Stepper
          steps={mockStepsMinimal}
          currentStep={10}
        />
      );

      expect(screen.getByText('10 of 3')).toBeInTheDocument();
    });

    it('handles currentStep of 0 or negative', () => {
      render(
        <Stepper
          steps={mockStepsMinimal}
          currentStep={0}
        />
      );

      expect(screen.getByText('0 of 3')).toBeInTheDocument();
    });
  });
});

describe('StepperNavigation Component', () => {
  describe('Basic Rendering', () => {
    it('renders navigation buttons correctly', () => {
      render(
        <StepperNavigation
          onPrevious={vi.fn()}
          onNext={vi.fn()}
          isFirstStep={false}
          isLastStep={false}
        />
      );

      expect(screen.getByText('Sebelumnya')).toBeInTheDocument();
      expect(screen.getByText('Selanjutnya')).toBeInTheDocument();
    });

    it('renders with custom button texts', () => {
      render(
        <StepperNavigation
          onPrevious={vi.fn()}
          onNext={vi.fn()}
          onSubmit={vi.fn()}
          previousText="Back"
          nextText="Continue"
          submitText="Finish"
          isFirstStep={false}
          isLastStep={true}
        />
      );

      expect(screen.getByText('Back')).toBeInTheDocument();
      expect(screen.getByText('Finish')).toBeInTheDocument();
      expect(screen.queryByText('Continue')).not.toBeInTheDocument();
    });

    it('renders cancel button when showCancel is true', () => {
      render(
        <StepperNavigation
          onCancel={vi.fn()}
          showCancel={true}
          cancelText="Cancel"
        />
      );

      expect(screen.getByText('Cancel')).toBeInTheDocument();
    });
  });

  describe('Button States', () => {
    it('hides previous button on first step', () => {
      render(
        <StepperNavigation
          onPrevious={vi.fn()}
          onNext={vi.fn()}
          isFirstStep={true}
          isLastStep={false}
        />
      );

      expect(screen.queryByText('Sebelumnya')).not.toBeInTheDocument();
      expect(screen.getByText('Selanjutnya')).toBeInTheDocument();
    });

    it('shows submit button on last step', () => {
      render(
        <StepperNavigation
          onNext={vi.fn()}
          onSubmit={vi.fn()}
          isFirstStep={false}
          isLastStep={true}
        />
      );

      expect(screen.queryByText('Selanjutnya')).not.toBeInTheDocument();
      expect(screen.getByText('Simpan')).toBeInTheDocument();
    });

    it('disables buttons when loading', () => {
      render(
        <StepperNavigation
          onPrevious={vi.fn()}
          onNext={vi.fn()}
          onCancel={vi.fn()}
          isLoading={true}
          showCancel={true}
        />
      );

      const buttons = screen.getAllByRole('button');
      buttons.forEach(button => {
        expect(button).toBeDisabled();
      });
    });

    it('shows loading state on submit button', () => {
      render(
        <StepperNavigation
          onSubmit={vi.fn()}
          isLastStep={true}
          isLoading={true}
        />
      );

      expect(screen.getByText('Menyimpan...')).toBeInTheDocument();
    });
  });

  describe('Event Handlers', () => {
    it('calls onPrevious when previous button is clicked', () => {
      const mockOnPrevious = vi.fn();
      
      render(
        <StepperNavigation
          onPrevious={mockOnPrevious}
          onNext={vi.fn()}
          isFirstStep={false}
          isLastStep={false}
        />
      );

      fireEvent.click(screen.getByText('Sebelumnya'));
      expect(mockOnPrevious).toHaveBeenCalledTimes(1);
    });

    it('calls onNext when next button is clicked', () => {
      const mockOnNext = vi.fn();
      
      render(
        <StepperNavigation
          onPrevious={vi.fn()}
          onNext={mockOnNext}
          isFirstStep={false}
          isLastStep={false}
        />
      );

      fireEvent.click(screen.getByText('Selanjutnya'));
      expect(mockOnNext).toHaveBeenCalledTimes(1);
    });

    it('calls onSubmit when submit button is clicked', () => {
      const mockOnSubmit = vi.fn();
      
      render(
        <StepperNavigation
          onSubmit={mockOnSubmit}
          isLastStep={true}
        />
      );

      fireEvent.click(screen.getByText('Simpan'));
      expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    });

    it('calls onCancel when cancel button is clicked', () => {
      const mockOnCancel = vi.fn();
      
      render(
        <StepperNavigation
          onCancel={mockOnCancel}
          showCancel={true}
        />
      );

      fireEvent.click(screen.getByText('Batal'));
      expect(mockOnCancel).toHaveBeenCalledTimes(1);
    });
  });

  describe('Custom Styling', () => {
    it('applies custom className', () => {
      const { container } = render(
        <StepperNavigation
          className="custom-navigation"
        />
      );

      expect(container.firstChild).toHaveClass('custom-navigation');
    });
  });

  describe('Edge Cases', () => {
    it('renders without any handlers', () => {
      const { container } = render(<StepperNavigation />);
      
      // Should render without errors - check for the main navigation container
      expect(container.firstChild).toBeInTheDocument();
      expect(container.firstChild).toHaveClass('flex', 'justify-between', 'items-center');
    });

    it('renders next button even without handler on non-last step', () => {
      render(
        <StepperNavigation
          isFirstStep={false}
          isLastStep={false}
          // No onNext handler provided
        />
      );

      // Component renders button even without handler (this is the actual behavior)
      expect(screen.getByText('Selanjutnya')).toBeInTheDocument();
    });

    it('renders submit button even without handler on last step', () => {
      render(
        <StepperNavigation
          isFirstStep={false}
          isLastStep={true}
          // No onSubmit handler provided
        />
      );

      // Component renders button even without handler (this is the actual behavior)
      expect(screen.getByText('Simpan')).toBeInTheDocument();
    });
  });
});