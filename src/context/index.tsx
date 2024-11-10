"use client"
import { createContext, useState, useContext, ReactNode } from 'react';

interface SidebarContextType {
  openSidebar: boolean;
  toggleSidebar: () => void;
  openMenubar: boolean;
  toggleMenubar: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openMenubar, setOpenMenubar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(prevState => !prevState);
  };
 
  const toggleMenubar = () => {
    setOpenMenubar(prevState => !prevState);
  };

  return (
    <SidebarContext.Provider value={{ openSidebar, toggleSidebar, openMenubar, toggleMenubar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = (): SidebarContextType => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
