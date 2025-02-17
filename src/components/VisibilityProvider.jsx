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
   // Add state for tracking selected card globally
   const [selectedCard, setSelectedCard] = useState(null);
  return (
    <VisibilityContext.Provider value={{ show, setShow ,selectedCard, setSelectedCard}}>
      {children}
    </VisibilityContext.Provider>
  );
}

// Custom hook to use the context
export function useVisibility() {
  return useContext(VisibilityContext);
}
