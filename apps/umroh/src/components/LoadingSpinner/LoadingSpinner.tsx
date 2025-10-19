import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '',
  text = 'Memuat...'
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  return (
    <div className={`flex flex-col items-center space-y-4 ${className}`}>
      <div className={`animate-spin rounded-full border-3 border-gray-200 border-t-green-600 ${sizeClasses[size]} shadow-sm`} />
      {text && (
        <p className="text-gray-600 text-sm font-medium animate-pulse">{text}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;
