'use client';
// PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-otpmodal.md' pada folder komponen ini (packages/ui/src/OtpModal). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.

import React, { useState, useRef, useEffect } from 'react';

export interface OtpModalProps {
  /** Whether the modal is open */
  isOpen: boolean;
  /** Function to close the modal */
  onClose: () => void;
  /** Function called when OTP is submitted */
  onSubmit: (otp: string) => void;
  /** Function called when resend is requested */
  onResend?: () => void;
  /** Number of OTP digits */
  length?: number;
  /** Modal title */
  title?: string;
  /** Modal description */
  description?: string;
  /** Contact information (phone/email) */
  contactInfo?: string;
  /** Whether to show resend button */
  showResend?: boolean;
  /** Resend cooldown in seconds */
  resendCooldown?: number;
  /** Whether the form is loading */
  loading?: boolean;
  /** Error message */
  error?: string;
  /** Success message */
  success?: string;
  /** Custom className */
  className?: string;
  /** Whether to auto-submit when all digits are filled */
  autoSubmit?: boolean;
  /** Input type (numeric or text) */
  inputType?: 'numeric' | 'text';
  /** Whether to mask the input */
  masked?: boolean;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * OtpModal Component
 * 
 * A modal component for OTP (One-Time Password) verification with
 * customizable length, auto-submit, resend functionality, and
 * accessibility features.
 */
export function OtpModal({
  isOpen,
  onClose,
  onSubmit,
  onResend,
  length = 6,
  title = 'Enter Verification Code',
  description = 'Please enter the verification code sent to your device',
  contactInfo,
  showResend = true,
  resendCooldown = 60,
  loading = false,
  error,
  success,
  className = "",
  autoSubmit = true,
  inputType = 'numeric',
  masked = false,
  size = 'md'
}: OtpModalProps) {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(''));
  const [resendTimer, setResendTimer] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Size configurations
  const sizeConfig = {
    sm: {
      input: 'w-8 h-8 text-sm',
      modal: 'max-w-sm',
      spacing: 'gap-2'
    },
    md: {
      input: 'w-12 h-12 text-lg',
      modal: 'max-w-md',
      spacing: 'gap-3'
    },
    lg: {
      input: 'w-16 h-16 text-xl',
      modal: 'max-w-lg',
      spacing: 'gap-4'
    }
  };

  const currentSize = sizeConfig[size];

  // Initialize input refs
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, length);
  }, [length]);

  // Handle resend timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setOtp(new Array(length).fill(''));
      setTimeout(() => {
        inputRefs.current[0]?.focus();
      }, 100);
    }
  }, [isOpen, length]);

  // Auto-submit when all digits are filled
  useEffect(() => {
    if (autoSubmit && otp.every(digit => digit !== '') && !loading) {
      handleSubmit();
    }
  }, [otp, autoSubmit, loading, onSubmit]);

  const handleChange = (index: number, value: string) => {
    if (loading) return;
    
    const processedValue = inputType === 'numeric' ? value.replace(/\D/g, '') : value;
    if (processedValue.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = processedValue;
    setOtp(newOtp);
    
    // Auto-focus next input
    if (processedValue && index < length - 1) {
      const nextInput = inputRefs.current[index + 1];
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (loading) return;
    
    if (e.key === 'Backspace') {
      if (!otp[index] && index > 0) {
        const prevInput = inputRefs.current[index - 1];
        prevInput?.focus();
      } else {
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      const prevInput = inputRefs.current[index - 1];
      prevInput?.focus();
    } else if (e.key === 'ArrowRight' && index < length - 1) {
      const nextInput = inputRefs.current[index + 1];
      nextInput?.focus();
    } else if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const paste = e.clipboardData.getData('text');
    const pasteValue = inputType === 'numeric' ? paste.replace(/\D/g, '') : paste;
    
    if (pasteValue.length >= length) {
      const newOtp = pasteValue.slice(0, length).split('');
      setOtp(newOtp);
      
      if (autoSubmit && newOtp.every(digit => digit !== '')) {
        onSubmit(newOtp.join(''));
      }
    }
  };

  const handleSubmit = () => {
    if (loading) return;
    
    const otpValue = otp.join('');
    if (otpValue.length === length) {
      onSubmit(otpValue);
    }
  };

  const handleResend = () => {
    if (resendTimer > 0 || loading) return;
    
    setResendTimer(resendCooldown);
    setOtp(new Array(length).fill(''));
    onResend?.();
    
    setTimeout(() => {
      inputRefs.current[0]?.focus();
    }, 100);
  };

  const handleClose = () => {
    if (loading) return;
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className={`
        relative bg-white rounded-lg shadow-xl p-6 mx-4 w-full ${currentSize.modal}
        transform transition-all ${className}
      `}>
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {title}
          </h2>
          <p className="text-sm text-gray-600">
            {description}
          </p>
          {contactInfo && (
            <p className="text-sm text-gray-500 mt-1">
              Sent to <span className="font-medium">{contactInfo}</span>
            </p>
          )}
        </div>

        {/* OTP Input */}
        <div className={`flex justify-center ${currentSize.spacing} mb-6`}>
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={el => {
                  if (el) {
                    inputRefs.current[index] = el;
                  }
                }}
              type={masked ? 'password' : 'text'}
              inputMode={inputType === 'numeric' ? 'numeric' : 'text'}
              pattern={inputType === 'numeric' ? '[0-9]*' : '[a-zA-Z0-9]*'}
              maxLength={1}
              value={digit}
              onChange={e => handleChange(index, e.target.value)}
              onKeyDown={e => handleKeyDown(index, e)}
              onPaste={handlePaste}
              disabled={loading}
              className={`
                ${currentSize.input} text-center border-2 rounded-lg font-semibold
                ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'}
                ${loading ? 'opacity-50 cursor-not-allowed' : 'focus:outline-none focus:ring-2 focus:ring-opacity-50'}
                transition-colors
              `}
              aria-label={`Digit ${index + 1} of ${length}`}
            />
          ))}
        </div>

        {/* Messages */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-600 text-center">{error}</p>
          </div>
        )}

        {success && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-md">
            <p className="text-sm text-green-600 text-center">{success}</p>
          </div>
        )}

        {/* Actions */}
        <div className="space-y-3">
          {/* Submit Button */}
          {!autoSubmit && (
            <button
              onClick={handleSubmit}
              disabled={loading || otp.some(digit => digit === '')}
              className={`
                w-full py-2 px-4 rounded-md font-medium transition-colors
                ${loading || otp.some(digit => digit === '') 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                }
              `}
            >
              {loading ? 'Verifying...' : 'Verify Code'}
            </button>
          )}

          {/* Resend Button */}
          {showResend && (
            <div className="text-center">
              {resendTimer > 0 ? (
                <p className="text-sm text-gray-500">
                  Resend code in {resendTimer} seconds
                </p>
              ) : (
                <button
                  onClick={handleResend}
                  disabled={loading}
                  className={`
                    text-sm font-medium transition-colors
                    ${loading 
                      ? 'text-gray-400 cursor-not-allowed' 
                      : 'text-blue-600 hover:text-blue-700 focus:outline-none focus:underline'
                    }
                  `}
                >
                  Didn't receive the code? Resend
                </button>
              )}
            </div>
          )}

          {/* Close Button */}
          <button
            onClick={handleClose}
            disabled={loading}
            className={`
              w-full py-2 px-4 border border-gray-300 rounded-md font-medium transition-colors
              ${loading 
                ? 'text-gray-400 cursor-not-allowed' 
                : 'text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
              }
            `}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

OtpModal.displayName = 'OtpModal';

export default OtpModal;