"use client";
// PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-layout.md' pada folder komponen ini (packages/ui/src/Layout). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.

import React, { useState, useEffect } from "react";
import { Header, HeaderProps } from "../Header";
import { Sidebar, SidebarProps } from "../Sidebar";

export interface LayoutProps {
  /** Header configuration */
  header?: Omit<HeaderProps, "onMobileMenuToggle" | "showMobileMenuToggle">;
  /** Sidebar configuration */
  sidebar?: Omit<SidebarProps, "isOpen" | "onClose">;
  /** Main content */
  children: React.ReactNode;
  /** Layout variant */
  variant?: "default" | "sidebar-only" | "header-only" | "minimal";
  /** Additional CSS classes for the layout container */
  className?: string;
  /** Additional CSS classes for the main content area */
  contentClassName?: string;
  /** Whether to show the sidebar by default on desktop */
  showSidebar?: boolean;
  /** Whether to show the header */
  showHeader?: boolean;
  /** Custom header component (overrides default header) */
  customHeader?: React.ReactNode;
  /** Custom sidebar component (overrides default sidebar) */
  customSidebar?: React.ReactNode;
  /** Sidebar collapsed state (desktop) */
  sidebarCollapsed?: boolean;
  /** Sidebar collapsed state change handler */
  onSidebarCollapsedChange?: (collapsed: boolean) => void;
  /** Mobile sidebar state change handler */
  onMobileSidebarChange?: (isOpen: boolean) => void;
}

export function Layout({
  header,
  sidebar,
  children,
  variant = "default",
  className = "",
  contentClassName = "",
  showSidebar = true,
  showHeader = true,
  customHeader,
  customSidebar,
  sidebarCollapsed = false,
  onSidebarCollapsedChange,
  onMobileSidebarChange,
}: LayoutProps) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(sidebarCollapsed);
  const [isLgViewport, setIsLgViewport] = useState(false);

  // Sync external collapsed state
  useEffect(() => {
    setIsCollapsed(sidebarCollapsed);
  }, [sidebarCollapsed]);

  // Notify consumer and lock/unlock body scroll whenever mobile sidebar state changes
  useEffect(() => {
    onMobileSidebarChange?.(isMobileSidebarOpen);

    // Generic body scroll lock when mobile sidebar opens
    if (typeof document !== 'undefined') {
      const body = document.body;
      body.style.overflow = isMobileSidebarOpen ? 'hidden' : '';
      // Prevent rubber-band scrolling on iOS
      body.style.touchAction = isMobileSidebarOpen ? 'none' : '';
      body.style.overscrollBehavior = isMobileSidebarOpen ? 'contain' : '';
    }
  }, [isMobileSidebarOpen, onMobileSidebarChange]);

  const handleMobileMenuToggle = () => {
    setIsMobileSidebarOpen(prev => !prev);
  };

  const handleSidebarClose = () => {
    setIsMobileSidebarOpen(false);
    onMobileSidebarChange?.(false);
  };

  const handleToggleCollapsed = () => {
    setIsCollapsed(prev => {
      const next = !prev;
      onSidebarCollapsedChange?.(next);
      return next;
    });
  };

  // Close mobile sidebar on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileSidebarOpen) {
        setIsMobileSidebarOpen(false);
        onMobileSidebarChange?.(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileSidebarOpen, onMobileSidebarChange]);

  // Detect viewport >= lg (1024px) to apply desktop margin-left via inline style
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(min-width: 1024px)');
    const update = () => setIsLgViewport(mq.matches);
    update();
    if (mq.addEventListener) {
      mq.addEventListener('change', update);
      return () => mq.removeEventListener('change', update);
    } else {
      // Fallback for older browsers
      mq.addListener(update);
      return () => mq.removeListener(update);
    }
  }, []);

  const shouldShowSidebar = showSidebar && (variant === "default" || variant === "sidebar-only");
  const shouldShowHeader = showHeader && (variant === "default" || variant === "header-only");

  const layoutClasses = `
    min-h-screen bg-gray-50
    ${variant === "minimal" ? "p-4" : ""}
    ${className}
  `.trim();

  const headerProps = header || {};
  const sidebarProps = sidebar || {};

  const isDesktopSidebarCollapsed = isCollapsed;

  const contentAreaClasses = `
    flex-1 overflow-auto
    ${shouldShowHeader ? "" : ""}
    ${variant === "minimal" ? "p-0" : ""}
    ${contentClassName}
  `.trim();

  // Render custom components if provided
  const renderHeader = () => {
    if (customHeader) return customHeader;
    if (!shouldShowHeader || !header) return null;

    return (
      <Header
        {...header}
        onMobileMenuToggle={shouldShowSidebar ? handleMobileMenuToggle : undefined}
        showMobileMenuToggle={shouldShowSidebar}
      />
    );
  };

  const renderSidebar = () => {
    if (customSidebar) return customSidebar;
    if (!shouldShowSidebar || !sidebar) return null;

    return (
      <Sidebar
        {...sidebarProps}
        isOpen={isMobileSidebarOpen}
        onClose={handleSidebarClose}
        collapsed={isCollapsed}
        collapsible={true}
        onToggleCollapsed={handleToggleCollapsed}
      />
    );
  };

  if (variant === "minimal") {
    return (
      <div className={layoutClasses}>
        {children}
      </div>
    );
  }

  return (
    <div className={layoutClasses}>
      {/* Sidebar - Fixed positioning for desktop, overlay untuk mobile disediakan oleh Sidebar */}
      {renderSidebar()}

      {/* Main content area dengan margin kiri responsif mengikuti lebar sidebar */}
      <div
        className="flex flex-col min-h-screen transition-all duration-300 ease-in-out"
        style={{
          marginLeft: isLgViewport && shouldShowSidebar
            ? (isCollapsed ? "4rem" : "16rem")
            : "0px",
        }}
      >
        {/* Header */}
        {shouldShowHeader && (
          <Header
            {...headerProps}
            onMobileMenuToggle={handleMobileMenuToggle}
            showMobileMenuToggle={shouldShowSidebar}
            onCloseSidebar={handleSidebarClose}
            sidebarCollapsed={isDesktopSidebarCollapsed}
          />
        )}

        {/* Page content */}
        <main
          className={`
          flex-1 
          px-4 sm:px-6 lg:px-8 pb-8
          transition-all duration-300 ease-in-out
          ${contentClassName}
        `}
          style={{ paddingTop: 'calc(var(--header-height, 5rem) + 2rem)' }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;