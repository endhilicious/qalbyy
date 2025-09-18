import React from 'react';
import LayoutWrapper from './LayoutWrapper';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  showNavbar?: boolean;
  showSidebar?: boolean;
  surahTitle?: string;
  currentSurahId?: number;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return <LayoutWrapper {...props} />;
};

export default Layout;
