"use client";
// PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-header.md' pada folder komponen ini (packages/ui/src/Header). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.

import React, { useState, useRef, useEffect } from "react";
import { LucideIcon, Bell, User, Settings, LogOut, ChevronDown } from "lucide-react";
import NotificationDrawer from "./NotificationDrawer";

export interface HeaderUser {
  name: string;
  email: string;
  role?: string;
  avatar?: string;
}

export interface HeaderNotification {
  id: string;
  title: string;
  message: string;
  type: "info" | "warning" | "success" | "error" | "user" | "system";
  timestamp: Date;
  time: string;
  read: boolean;
  priority: "low" | "medium" | "high";
}

export interface HeaderProps {
  /** User information to display */
  user?: HeaderUser;
  /** Application title/name */
  appTitle?: string;
  /** Application logo URL or component */
  logo?: string | React.ReactNode;
  /** Notifications array */
  notifications?: HeaderNotification[];
  /** Show notifications bell */
  showNotifications?: boolean;
  /** Show user menu */
  showUserMenu?: boolean;
  /** Mobile sidebar toggle button */
  onMobileMenuToggle?: () => void;
  /** Show mobile menu toggle */
  showMobileMenuToggle?: boolean;
  /** Close sidebar handler (for auto-close when notification drawer opens) */
  onCloseSidebar?: () => void;
  /** Logout handler */
  onLogout?: () => void;
  /** Settings handler */
  onSettings?: () => void;
  /** Profile handler */
  onProfile?: () => void;
  /** Notification click handler */
  onNotificationClick?: (notification: HeaderNotification) => void;
  /** Mark notification as read handler */
  onMarkNotificationRead?: (notificationId: string) => void;
  /** Mark all notifications as read handler */
  onMarkAllNotificationsRead?: () => void;
  /** Delete notification handler */
  onDeleteNotification?: (notificationId: string) => void;
  /** Clear all notifications handler */
  onClearAllNotifications?: () => void;
  /** Custom actions to display */
  customActions?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Header variant */
  variant?: "default" | "minimal" | "branded";
  /** Whether sidebar is collapsed (for responsive margins) */
  sidebarCollapsed?: boolean;
}

export function Header({
  user,
  appTitle = "JILC",
  logo,
  notifications = [],
  showNotifications = true,
  showUserMenu = true,
  onMobileMenuToggle,
  showMobileMenuToggle = true,
  onCloseSidebar,
  onLogout,
  onSettings,
  onProfile,
  onNotificationClick,
  onMarkNotificationRead,
  onMarkAllNotificationsRead,
  onDeleteNotification,
  onClearAllNotifications,
  customActions,
  className = "",
  variant = "default",
  sidebarCollapsed = false,
}: HeaderProps) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isNotificationDrawerOpen, setIsNotificationDrawerOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Close user menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update CSS variable --header-height dynamically based on actual header height
  useEffect(() => {
    const updateHeaderHeightVar = () => {
      
      const el = headerRef.current;
      if (!el) return;
      const height = el.offsetHeight;
      if (typeof document !== 'undefined') {
        document.documentElement.style.setProperty('--header-height', `${height}px`);
      }
    };

    // Initial set
    updateHeaderHeightVar();
    // Update on resize
    window.addEventListener('resize', updateHeaderHeightVar);
    return () => window.removeEventListener('resize', updateHeaderHeightVar);
  }, [customActions, variant, sidebarCollapsed]);

  const unreadNotifications = notifications.filter(n => !n.read);

  const renderLogo = () => {
    if (typeof logo === "string") {
      return (
        <img
          src={logo}
          alt={`${appTitle} Logo`}
          className="h-8 w-8 object-contain"
        />
      );
    }
    return logo;
  };



  const renderUserDropdown = () => (
    <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
      <div className="p-4 border-b border-gray-200">
        <p className="text-sm font-medium text-gray-900 truncate">
          {user?.name || "User"}
        </p>
        <p className="text-xs text-gray-500 truncate">
          {user?.email}
        </p>
        {user?.role && (
          <p className="text-xs text-gray-400 mt-1">
            {user.role}
          </p>
        )}
      </div>
      <div className="py-2">
        {onProfile && (
          <button
            onClick={() => {
              onProfile();
              setIsUserMenuOpen(false);
            }}
            className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <User className="h-4 w-4 mr-3" />
            Profile
          </button>
        )}
        {onSettings && (
          <button
            onClick={() => {
              onSettings();
              setIsUserMenuOpen(false);
            }}
            className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <Settings className="h-4 w-4 mr-3" />
            Settings
          </button>
        )}
        {onLogout && (
          <button
            onClick={() => {
              onLogout();
              setIsUserMenuOpen(false);
            }}
            className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut className="h-4 w-4 mr-3" />
            Logout
          </button>
        )}
      </div>
    </div>
  );

  const headerClasses = `
    fixed top-0 right-0 z-50
    bg-white border-b border-gray-200 shadow-sm
    transition-all duration-300 ease-in-out
    ${sidebarCollapsed ? 'lg:left-16' : 'lg:left-64'}
    left-0
    ${variant === "minimal" ? "py-2" : "py-3"}
    ${className}
  `.trim();

  return (
    <header ref={headerRef} className={headerClasses}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Left section */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu toggle */}
            {showMobileMenuToggle && onMobileMenuToggle && (
              <button
                onClick={onMobileMenuToggle}
                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                aria-label="Toggle mobile menu"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            )}

            {/* Logo and title */}
            {variant !== "minimal" && (
              <div className="flex items-center space-x-3">
                {logo && renderLogo()}
                <h1 className="text-xl font-semibold text-gray-900">
                  {appTitle}
                </h1>
              </div>
            )}
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            {/* Custom actions */}
            {customActions}

            {/* Notifications */}
            {showNotifications && (
              <button
                onClick={() => {
                  setIsNotificationDrawerOpen(true);
                  // Auto-close sidebar when notification drawer opens
                  onCloseSidebar?.();
                }}
                className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
                aria-label="Notifications"
              >
                <Bell className="h-5 w-5" />
                {unreadNotifications.length > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {unreadNotifications.length > 9 ? "9+" : unreadNotifications.length}
                  </span>
                )}
              </button>
            )}

            {/* User menu */}
            {showUserMenu && user && (
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 transition-colors"
                >
                  {user.avatar ? (
                    <img src={user.avatar} alt="User Avatar" className="h-6 w-6 rounded-full" />
                  ) : (
                    <div className="h-6 w-6 bg-gray-300 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-gray-600" />
                    </div>
                  )}
                  <span className="hidden sm:block text-sm font-medium truncate max-w-32">
                    {user.name}
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {isUserMenuOpen && renderUserDropdown()}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Notification Drawer */}
      <NotificationDrawer
        isOpen={isNotificationDrawerOpen}
        onClose={() => setIsNotificationDrawerOpen(false)}
        notifications={notifications}
        onMarkAsRead={(id) => onMarkNotificationRead?.(id)}
        onMarkAllAsRead={() => onMarkAllNotificationsRead?.()}
        onDeleteNotification={(id) => onDeleteNotification?.(id)}
        onClearAll={() => onClearAllNotifications?.()}
      />
    </header>
  );
}

export default Header;