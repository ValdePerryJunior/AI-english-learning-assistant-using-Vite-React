import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const sidebarTheme = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Toggle theme function
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};