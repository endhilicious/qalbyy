// PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-badge.md' pada folder komponen ini (packages/ui/src/Badge). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.
import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  onClick,
}: BadgeProps) => {
  const baseClasses = 'inline-flex items-center font-medium rounded-full transition-all duration-200';

  const variantClasses = {
    default: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
    success: 'bg-green-100 text-green-800 hover:bg-green-200',
    warning: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
    error: 'bg-red-100 text-red-800 hover:bg-red-200',
    info: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
  };

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };

  const cursorClass = onClick ? 'cursor-pointer hover:shadow-sm' : '';
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${cursorClass} ${className}`;

  return (
    <span className={classes} onClick={onClick}>
      {children}
    </span>
  );
};

export interface StatusBadgeProps {
  children?: React.ReactNode;
  status?: string;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function StatusBadge({ 
  children, 
  status, 
  variant, 
  size = 'md',
  className = ''
}: StatusBadgeProps) {
  const getVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
      case 'verified':
      case 'completed':
      case 'complete':
      case 'selected':
      case 'printed':
      case 'available':
      case 'distributed':
      case 'used':
      case 'success':
      case 'approved':
      case 'published':
        return 'success';
      case 'pending':
      case 'in progress':
      case 'not selected':
      case 'not printed':
      case 'generated':
      case 'nearly full':
      case 'processing':
      case 'draft':
      case 'review':
        return 'warning';
      case 'inactive':
      case 'cancelled':
      case 'rejected':
      case 'incomplete':
      case 'not started':
      case 'full':
      case 'overbooked':
      case 'error':
      case 'failed':
      case 'expired':
        return 'error';
      case 'info':
      case 'information':
      case 'note':
      case 'new':
        return 'info';
      default:
        return 'default';
    }
  };

  const finalVariant = variant || (status ? getVariant(status) : 'default');
  const content = children || status;

  return (
    <Badge variant={finalVariant} size={size} className={className}>
      {content}
    </Badge>
  );
}

export default Badge;