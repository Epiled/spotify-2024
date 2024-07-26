// src/context/DrawerContext.tsx
import React, { createContext, useState, ReactNode, useContext } from 'react';

interface DrawerContextProps {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
}

const defaultState: DrawerContextProps = {
  isDrawerOpen: false,
  toggleDrawer: () => {},
};

export const DrawerContext = createContext<DrawerContextProps>(defaultState);

interface DrawerProviderProps {
  children: ReactNode;
}

export const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => useContext(DrawerContext);
