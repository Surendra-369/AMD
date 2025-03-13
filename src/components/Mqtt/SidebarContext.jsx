import React, { createContext, useState } from 'react';

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [show, setShow] = useState({
    "Workloads": true,
    "SystemProfile": true,
    "Economics": true
  });

   

  return (
    <SidebarContext.Provider value={{ show, setShow }}>
      {children}
    </SidebarContext.Provider>
  );
};