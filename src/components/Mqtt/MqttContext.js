import { createContext, useContext, useState } from "react";

// Create the context
const MqttContext = createContext();

// Custom hook for consuming context
export const useMqtt = () => useContext(MqttContext);

// Context provider component
export const MqttProvider = ({ children }) => {
  const [messages, setMessages] = useState({});

  return (
    <MqttContext.Provider value={{ messages, setMessages }}>
      {children}
    </MqttContext.Provider>
  );
};
