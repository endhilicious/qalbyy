'use client';
// PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-stepper.md' pada folder komponen ini (packages/ui/src/Stepper). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.

import React from 'react';
import { cn } from '../lib/utils';
import { Check, Clock, Users, Settings, Calendar } from 'lucide-react';

export interface StepperStep {
  id: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface StepperProps {
  steps: StepperStep[];
  currentStep: number;
  onStepClick?: (stepIndex: number) => void;
  className?: string;
  variant?: 'default' | 'modern' | 'minimal';
  allowNavigation?: boolean;
  showProgress?: boolean;
}

const defaultIcons = {
  info: <Users className="w-5 h-5" />,
  access: <Settings className="w-5 h-5" />,
  schedule: <Calendar className="w-5 h-5" />,
  exam: <Clock className="w-5 h-5" />,
};

export function Stepper({
  steps,
  currentStep,
  onStepClick,
  className,
  variant = 'modern',
  allowNavigation = false,
  showProgress = true,
}: StepperProps) {
  const getStepStatus = (stepIndex: number) => {
    if (stepIndex < currentStep - 1) return 'completed';
    if (stepIndex === currentStep - 1) return 'current';
    return 'upcoming';
  };

  const getStepClasses = (status: 'completed' | 'current' | 'upcoming', disabled = false) => {
    if (disabled) {
      return {
        circle: 'bg-gray-100 border-gray-200 text-gray-400',
        text: 'text-gray-400',
        description: 'text-gray-300',
        connector: 'bg-gray-200',
      };
    }

    switch (status) {
      case 'completed':
        return {
          circle: 'bg-emerald-500 border-emerald-500 text-white shadow-emerald-200',
          text: 'text-emerald-700 font-semibold',
          description: 'text-emerald-600',
          connector: 'bg-emerald-500',
        };
      case 'current':
        return {
          circle: 'bg-blue-500 border-blue-500 text-white shadow-blue-200',
          text: 'text-blue-700 font-semibold',
          description: 'text-blue-600',
          connector: 'bg-blue-500',
        };
      case 'upcoming':
        return {
          circle: 'bg-white border-gray-300 text-gray-500 hover:border-gray-400',
          text: 'text-gray-600',
          description: 'text-gray-500',
          connector: 'bg-gray-200',
        };
    }
  };

  const progressPercentage = ((currentStep - 1) / (steps.length - 1)) * 100;

  if (variant === 'minimal') {
    return (
      <div className={cn('w-full', className)}>
        {showProgress && (
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progress</span>
              <span>{currentStep} of {steps.length}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const status = getStepStatus(index);
            const classes = getStepClasses(status, step.disabled);
            const isClickable = allowNavigation && !step.disabled && (status === 'completed' || status === 'current');

            return (
              <div key={step.id} className="flex items-center flex-1">
                <div
                  className={cn(
                    'flex flex-col items-center space-y-2 group',
                    isClickable && 'cursor-pointer hover:opacity-80 transition-opacity'
                  )}
                  onClick={() => isClickable && onStepClick?.(index)}
                >
                  <div
                    className={cn(
                      'w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-medium transition-all duration-200',
                      classes.circle
                    )}
                  >
                    {status === 'completed' ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <span className="text-sm">{index + 1}</span>
                    )}
                  </div>
                  <div className="text-center max-w-20">
                    <h3 className={cn('text-xs font-medium transition-colors leading-tight', classes.text)}>
                      {step.title}
                    </h3>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      'flex-1 h-0.5 mx-2 transition-colors duration-200',
                      classes.connector
                    )}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (variant === 'default') {
    return (
      <div className={cn('w-full', className)}>
        {showProgress && (
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progress</span>
              <span>{currentStep} of {steps.length}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const status = getStepStatus(index);
            const classes = getStepClasses(status, step.disabled);
            const isClickable = allowNavigation && !step.disabled && (status === 'completed' || status === 'current');

            return (
              <div key={step.id} className="flex items-center flex-1">
                <div
                  className={cn(
                    'flex flex-col items-center space-y-3 group',
                    isClickable && 'cursor-pointer hover:opacity-80 transition-opacity'
                  )}
                  onClick={() => isClickable && onStepClick?.(index)}
                >
                  <div
                    className={cn(
                      'w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-medium transition-all duration-200 shadow-sm',
                      classes.circle,
                      'group-hover:scale-105'
                    )}
                  >
                    {status === 'completed' ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <span className="text-base font-semibold">{index + 1}</span>
                    )}
                  </div>
                  <div className="text-center max-w-24 sm:max-w-32">
                    <h3 className={cn('text-sm font-medium transition-colors leading-tight', classes.text)}>
                      {step.title}
                    </h3>
                    {step.description && (
                      <p className={cn('text-xs mt-1 transition-colors leading-tight', classes.description)}>
                        {step.description}
                      </p>
                    )}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      'flex-1 h-0.5 mx-4 transition-colors duration-200',
                      classes.connector
                    )}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Modern variant - enhanced with icons and better styling
  return (
    <div className={cn('w-full', className)}>
      {showProgress && (
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-3">
            <span className="font-medium">Progress</span>
            <span className="text-blue-600 font-semibold">{currentStep} of {steps.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-emerald-500 h-3 rounded-full transition-all duration-500 ease-out shadow-sm"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      )}
      
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const status = getStepStatus(index);
          const classes = getStepClasses(status, step.disabled);
          const isClickable = allowNavigation && !step.disabled && (status === 'completed' || status === 'current');
          const stepIcon = step.icon || defaultIcons[step.id as keyof typeof defaultIcons];

          return (
            <div key={step.id} className="flex items-center flex-1">
              <div
                className={cn(
                  'flex flex-col items-center space-y-3 group',
                  isClickable && 'cursor-pointer hover:opacity-80 transition-all duration-200'
                )}
                onClick={() => isClickable && onStepClick?.(index)}
              >
                <div
                  className={cn(
                    'relative w-12 h-12 rounded-full border-2 flex items-center justify-center text-sm font-medium transition-all duration-300 shadow-lg',
                    classes.circle,
                    'group-hover:scale-110 group-hover:shadow-xl',
                    status === 'current' && 'ring-4 ring-blue-200 ring-opacity-50',
                    status === 'completed' && 'ring-4 ring-emerald-200 ring-opacity-50'
                  )}
                >
                  {status === 'completed' ? (
                    <Check className="w-6 h-6" />
                  ) : stepIcon ? (
                    <div className={cn('transition-colors', status === 'current' ? 'text-white' : 'text-gray-500')}>
                      {stepIcon}
                    </div>
                  ) : (
                    <span className={cn('text-base font-semibold', status === 'current' ? 'text-white' : 'text-gray-500')}>
                      {index + 1}
                    </span>
                  )}
                  
                  {/* Subtle glow effect for current step */}
                  {status === 'current' && (
                    <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 animate-pulse" />
                  )}
                </div>
                
                <div className="text-center max-w-28 sm:max-w-36">
                  <h3 className={cn('text-sm font-medium transition-colors leading-tight', classes.text)}>
                    {step.title}
                  </h3>
                  {step.description && (
                    <p className={cn('text-xs mt-1 transition-colors leading-tight', classes.description)}>
                      {step.description}
                    </p>
                  )}
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    'flex-1 h-1 mx-6 transition-colors duration-300 rounded-full',
                    classes.connector,
                    'shadow-sm'
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Navigation component for stepper
export interface StepperNavigationProps {
  onPrevious?: () => void;
  onNext?: () => void;
  onSubmit?: () => void;
  previousText?: string;
  nextText?: string;
  submitText?: string;
  isFirstStep?: boolean;
  isLastStep?: boolean;
  isLoading?: boolean;
  className?: string;
  showCancel?: boolean;
  onCancel?: () => void;
  cancelText?: string;
}

export function StepperNavigation({
  onPrevious,
  onNext,
  onSubmit,
  previousText = 'Sebelumnya',
  nextText = 'Selanjutnya',
  submitText = 'Simpan',
  isFirstStep = false,
  isLastStep = false,
  isLoading = false,
  className,
  showCancel = true,
  onCancel,
  cancelText = 'Batal',
}: StepperNavigationProps) {
  return (
    <div className={cn('flex justify-between items-center pt-8 border-t border-gray-200 mt-8', className)}>
      <div className="flex space-x-3">
        {showCancel && onCancel && (
          <button
            type="button"
            onClick={onCancel}
            disabled={isLoading}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            {cancelText}
          </button>
        )}
        {!isFirstStep && onPrevious && (
          <button
            type="button"
            onClick={onPrevious}
            disabled={isLoading}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            {previousText}
          </button>
        )}
      </div>

       <div>
        {isLastStep ? (
          <button
            type="button"
            onClick={onSubmit}
            disabled={isLoading}
            className="px-6 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 min-w-[120px] shadow-md hover:shadow-lg"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Menyimpan...</span>
              </div>
            ) : (
              submitText
            )}
          </button>
        ) : (
          <button
            type="button"
            onClick={onNext}
            disabled={isLoading}
            className="px-6 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg"
          >
            {nextText}
          </button>
        )}
      </div>
    </div>
  );
}
