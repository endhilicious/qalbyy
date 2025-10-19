"use client";
// PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-sidebar.md' pada folder komponen ini (packages/ui/src/Sidebar). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.

import React, { useState, useEffect } from "react";
import { LucideIcon, X, ChevronDown, ChevronRight } from "lucide-react";

export interface SidebarNavigationItem {
  /** Unique identifier for the navigation item */
  id: string;
  /** Display label */
  label: string;
  /** Navigation href/path */
  href?: string;
  /** Lucide icon component */
  icon?: LucideIcon;
  /** Item description for tooltips or additional info */
  description?: string;
  /** Badge text to display */
  badge?: string;
  /** Badge variant */
  badgeVariant?: "default" | "success" | "warning" | "error" | "info";
  /** Whether the item is disabled */
  disabled?: boolean;
  /** Whether the item is coming soon */
  comingSoon?: boolean;
  /** Child navigation items for nested menus */
  children?: SidebarNavigationItem[];
  /** Custom click handler */
  onClick?: () => void;
}

export interface SidebarUser {
  name: string;
  email: string;
  role?: string;
  avatar?: string;
}

export interface SidebarProps {
  /** Navigation items array */
  navigationItems: SidebarNavigationItem[];
  /** Current active path for highlighting */
  activePath?: string;
  /** User information */
  user?: SidebarUser;
  /** Application title/name */
  appTitle?: string;
  /** Application logo URL or component */
  logo?: string | React.ReactNode;
  /** Whether sidebar is open (for mobile) */
  isOpen?: boolean;
  /** Close sidebar handler (for mobile) */
  onClose?: () => void;
  /** Navigation item click handler */
  onNavigationClick?: (item: SidebarNavigationItem) => void;
  /** Footer content */
  footerContent?: React.ReactNode;
  /** Show user info in header */
  showUserInfo?: boolean;
  /** Show close button (mobile) */
  showCloseButton?: boolean;
  /** Sidebar variant */
  variant?: "default" | "compact" | "minimal";
  /** Additional CSS classes */
  className?: string;
  /** Collapsible sidebar */
  collapsible?: boolean;
  /** Collapsed state */
  collapsed?: boolean;
  /** Toggle collapsed state */
  onToggleCollapsed?: () => void;
}

export function Sidebar({
  navigationItems,
  activePath,
  user,
  appTitle = "JILC",
  logo,
  isOpen = false,
  onClose,
  onNavigationClick,
  footerContent,
  showUserInfo = true,
  showCloseButton = true,
  variant = "default",
  className = "",
  collapsible = false,
  collapsed = false,
  onToggleCollapsed,
}: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  // Auto-expand parent items if child is active
  useEffect(() => {
    if (activePath) {
      const findParentItems = (items: SidebarNavigationItem[], path: string): string[] => {
        const parents: string[] = [];
        
        const search = (navItems: SidebarNavigationItem[], parentId?: string) => {
          navItems.forEach(item => {
            if (item.href === path && parentId) {
              parents.push(parentId);
            }
            if (item.children) {
              search(item.children, item.id);
            }
          });
        };
        
        search(items);
        return parents;
      };

      const parentIds = findParentItems(navigationItems, activePath);
      if (parentIds.length > 0) {
        setExpandedItems(prev => new Set([...prev, ...parentIds]));
      }
    }
  }, [activePath, navigationItems]);

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const isItemActive = (item: SidebarNavigationItem): boolean => {
    if (item.href === activePath) return true;
    if (item.children) {
      return item.children.some(child => isItemActive(child));
    }
    return false;
  };

  const getBadgeClasses = (variant: string) => {
    const baseClasses = "px-2 py-0.5 text-xs font-medium rounded-full";
    switch (variant) {
      case "success":
        return `${baseClasses} bg-green-100 text-green-800`;
      case "warning":
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case "error":
        return `${baseClasses} bg-red-100 text-red-800`;
      case "info":
        return `${baseClasses} bg-blue-100 text-blue-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  const renderLogo = () => {
    if (typeof logo === "string") {
      return (
        <img
          src={logo}
          alt={`${appTitle} Logo`}
          className={`object-contain transition-all duration-200 ${
            collapsed ? "h-6 w-6" : "h-10 w-10"
          }`}
        />
      );
    }
    return logo;
  };

  const renderNavigationItem = (item: SidebarNavigationItem, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.id);
    const isActive = isItemActive(item);
    const isDisabled = item.disabled || item.comingSoon;

    const itemClasses = `
      group flex items-center w-full ${collapsed ? "px-1" : "px-3"} py-2 text-sm font-medium rounded-lg transition-all duration-200
      ${!collapsed ? "gap-3" : ""}
      ${level > 0 ? "ml-4" : ""}
      ${isActive 
        ? "bg-blue-50 text-blue-700 border-r-2" 
        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
      }
      ${isDisabled 
        ? "opacity-50 cursor-not-allowed" 
        : "cursor-pointer"
      }
    `.trim();

    const handleClick = () => {
      if (isDisabled) return;
      
      if (hasChildren) {
        toggleExpanded(item.id);
      } else {
        onNavigationClick?.(item);
        item.onClick?.();
        // Close mobile sidebar after navigation
        if (onClose && window.innerWidth < 1024) {
          onClose();
        }
      }
    };

    return (
      <div key={item.id}>
        <div className={itemClasses} onClick={handleClick}>
          {/* Icon */}
          {item.icon && (
            <item.icon className={`mr-3 h-5 w-5 flex-shrink-0 ${
              isActive ? "text-blue-700" : "text-gray-400 group-hover:text-gray-500"
            }`} />
          )}

          {/* Label and description */}
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="truncate">{item.label}</span>
                <div className="flex items-center space-x-2">
                  {/* Badge */}
                  {item.badge && (
                    <span className={getBadgeClasses(item.badgeVariant || "default")}>
                      {item.badge}
                    </span>
                  )}
                  {/* Coming soon indicator */}
                  {item.comingSoon && (
                    <span className="text-xs text-gray-400">Soon</span>
                  )}
                  {/* Expand/collapse icon */}
                  {hasChildren && (
                    <div className="ml-auto">
                      {isExpanded ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </div>
                  )}
                </div>
              </div>
              {/* Description */}
              {item.description && !collapsed && (
                <p className="text-xs text-gray-500 mt-1 truncate">
                  {item.description}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Children */}
        {hasChildren && isExpanded && !collapsed && (
          <div className="mt-1 space-y-1">
            {item.children!.map(child => renderNavigationItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  const sidebarClasses = `
    flex flex-col h-full border-r border-gray-200 shadow-sm
    ${variant === "compact" ? "w-16" : collapsed ? "w-16" : "w-64"}
    ${variant === "minimal" ? "border-none shadow-none" : ""}
    ${className}
  `.trim();

  // Mobile overlay with smooth transition
  const mobileOverlay = (
    <div
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] lg:hidden transition-opacity duration-300 ease-in-out ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={onClose}
      aria-hidden="true"
    />
  );

  // Proper sidebar classes with fixed positioning for full height
  const sidebarContainerClasses = `
    fixed inset-y-0 left-0 z-[70] bg-white shadow-xl transform transition-all duration-300 ease-in-out
    ${collapsed ? "w-16" : "w-64"}
    ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
  `;

  const sidebarContent = (
    <div className={sidebarClasses}>
      {/* Header */}
      <div className={`flex items-center border-b border-gray-200 flex-shrink-0 ${
        collapsed ? "justify-center p-3" : "justify-between p-4"
      }`}>
        <div className={`flex items-center ${collapsed ? "justify-center" : "space-x-3"}`}>
          {logo && (
            <div className={`flex items-center justify-center ${
              collapsed ? "w-10 h-10 rounded-lg bg-blue-50 border border-blue-100" : ""
            }`}>
              {renderLogo()}
            </div>
          )}
          {!collapsed && (
            <div>
              <h1 className="text-lg font-semibold text-gray-900">{appTitle}</h1>
              {user && showUserInfo && (
                <p className="text-xs text-gray-500 truncate">{user.name}</p>
              )}
            </div>
          )}
        </div>

        {/* Close button (mobile) */}
        {showCloseButton && onClose && (
          <button
            onClick={onClose}
            className="lg:hidden p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        )}

        {/* Collapse toggle (desktop) */}
        {collapsible && onToggleCollapsed && (
          <button
            onClick={onToggleCollapsed}
            className="hidden lg:block p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
            aria-label="Toggle sidebar"
          >
            <ChevronRight className={`h-4 w-4 transition-transform ${collapsed ? "" : "rotate-180"}`} />
          </button>
        )}
      </div>

      {/* Navigation - Scrollable area */}
      <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {navigationItems.map(item => renderNavigationItem(item))}
      </nav>

      {/* Footer */}
      {footerContent && !collapsed && (
        <div className="p-4 border-t border-gray-200 flex-shrink-0">
          {footerContent}
        </div>
      )}
    </div>
  );

  return (
    <>
      {mobileOverlay}
      <div className={sidebarContainerClasses}>
        {sidebarContent}
      </div>
    </>
  );
}

export default Sidebar;