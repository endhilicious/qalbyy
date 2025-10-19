'use client';
// PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-tabs.md' pada folder komponen ini (packages/ui/src/Tabs). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.

import * as React from 'react';

// Utility function for class names (simplified version)
const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

interface TabsContextType {
  value: string;
  onValueChange: (value: string) => void;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'default' | 'pills' | 'underline' | 'bordered';
  size?: 'sm' | 'md' | 'lg';
}

const TabsContext = React.createContext<TabsContextType | undefined>(undefined);

export interface TabsProps {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'default' | 'pills' | 'underline' | 'bordered';
  size?: 'sm' | 'md' | 'lg';
}

export const Tabs = ({ 
  defaultValue, 
  value, 
  onValueChange, 
  children, 
  className,
  orientation = 'horizontal',
  variant = 'default',
  size = 'md'
}: TabsProps) => {
  const [internalValue, setInternalValue] = React.useState(defaultValue || '');

  const currentValue = value !== undefined ? value : internalValue;
  const handleValueChange = onValueChange || setInternalValue;

  const orientationClasses = {
    horizontal: 'flex-col',
    vertical: 'flex-row',
  };

  return (
    <TabsContext.Provider value={{ 
      value: currentValue, 
      onValueChange: handleValueChange,
      orientation,
      variant,
      size
    }}>
      <div className={cn('flex', orientationClasses[orientation], className)}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, ...props }, ref) => {
    const context = React.useContext(TabsContext);
    if (!context) throw new Error('TabsList must be used within Tabs');

    const { orientation, variant, size } = context;

    const orientationClasses = {
      horizontal: 'flex-row',
      vertical: 'flex-col w-48',
    };

    const variantClasses = {
      default: 'bg-gray-100 rounded-md p-1',
      pills: 'bg-gray-50 rounded-lg p-1',
      underline: 'border-b border-gray-200',
      bordered: 'border border-gray-200 rounded-md bg-white',
    };

    const sizeClasses = {
      sm: 'h-8',
      md: 'h-10',
      lg: 'h-12',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center justify-start text-gray-500',
          orientationClasses[orientation],
          variantClasses[variant],
          variant !== 'underline' && sizeClasses[size],
          className
        )}
        {...props}
      />
    );
  }
);
TabsList.displayName = 'TabsList';

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  icon?: React.ReactNode;
  badge?: string | number;
}

export const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, value, children, icon, badge, disabled, ...props }, ref) => {
    const context = React.useContext(TabsContext);
    if (!context) throw new Error('TabsTrigger must be used within Tabs');

    const { value: currentValue, onValueChange, orientation, variant, size } = context;
    const isActive = currentValue === value;

    const baseClasses = 'inline-flex items-center justify-center whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50';

    const sizeClasses = {
      sm: 'px-2 py-1 text-xs gap-1',
      md: 'px-3 py-1.5 text-sm gap-1.5',
      lg: 'px-4 py-2 text-base gap-2',
    };

    const variantClasses = {
      default: {
        base: 'rounded-sm',
        active: 'bg-white text-gray-900 shadow-sm',
        inactive: 'text-gray-500 hover:text-gray-900 hover:bg-gray-50',
      },
      pills: {
        base: 'rounded-md',
        active: 'bg-blue-500 text-white shadow-sm',
        inactive: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100',
      },
      underline: {
        base: 'rounded-none border-b-2 border-transparent',
        active: 'border-blue-500 text-blue-600',
        inactive: 'text-gray-500 hover:text-gray-700 hover:border-gray-300',
      },
      bordered: {
        base: 'rounded-none border-r border-gray-200 last:border-r-0',
        active: 'bg-blue-50 text-blue-600 border-blue-200',
        inactive: 'text-gray-500 hover:text-gray-700 hover:bg-gray-50',
      },
    };

    const orientationClasses = {
      horizontal: 'flex-row',
      vertical: 'flex-col w-full justify-start',
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          sizeClasses[size],
          variantClasses[variant].base,
          isActive ? variantClasses[variant].active : variantClasses[variant].inactive,
          orientationClasses[orientation],
          className
        )}
        onClick={() => !disabled && onValueChange(value)}
        disabled={disabled}
        role="tab"
        aria-selected={isActive}
        aria-controls={`tabpanel-${value}`}
        id={`tab-${value}`}
        {...props}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
        {badge && (
          <span className={cn(
            'ml-auto flex-shrink-0 rounded-full text-xs font-medium',
            isActive 
              ? 'bg-blue-100 text-blue-600' 
              : 'bg-gray-200 text-gray-600',
            size === 'sm' ? 'px-1.5 py-0.5' : 'px-2 py-0.5'
          )}>
            {badge}
          </span>
        )}
      </button>
    );
  }
);
TabsTrigger.displayName = 'TabsTrigger';

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  forceMount?: boolean;
}

export const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, value, children, forceMount = false, ...props }, ref) => {
    const context = React.useContext(TabsContext);
    if (!context) throw new Error('TabsContent must be used within Tabs');

    const isActive = context.value === value;

    if (!forceMount && !isActive) return null;

    return (
      <div
        ref={ref}
        className={cn(
          'mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
          !isActive && 'hidden',
          className
        )}
        role="tabpanel"
        aria-labelledby={`tab-${value}`}
        id={`tabpanel-${value}`}
        tabIndex={0}
        {...props}
      >
        {children}
      </div>
    );
  }
);
TabsContent.displayName = 'TabsContent';

// Compound component pattern
export const TabsComponent = Object.assign(Tabs, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
});

export default TabsComponent;