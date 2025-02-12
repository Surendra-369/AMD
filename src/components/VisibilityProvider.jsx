import { createContext, useContext, useState } from "react";

// Create the context
const VisibilityContext = createContext();

// Create the provider component
export function VisibilityProvider({ children }) {
  const [show, setShow] = useState({
    Workloads: true,
    SystemProfile: true,
    Economics: true,
  });

  return (
    <VisibilityContext.Provider value={{ show, setShow }}>
      {children}
    </VisibilityContext.Provider>
  );
}

// Custom hook to use the context
export function useVisibility() {
  return useContext(VisibilityContext);
}
