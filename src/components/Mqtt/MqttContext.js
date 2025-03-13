import { createContext, useContext, useState } from "react";

// Create the context
const MqttContext = createContext();

// Custom hook for consuming context
export const useMqtt = () => useContext(MqttContext);

// Context provider component
export const MqttProvider = ({ children }) => {
  const [workloadData, setWorkloadData] = useState({});
  const [systemProfileData, setSystemProfileData] = useState({});
  const [economicsData, setEconomicsData] = useState({});

  return (
    <MqttContext.Provider value={{ workloadData, setWorkloadData ,systemProfileData,setSystemProfileData,economicsData,setEconomicsData}}>
      {children}
    </MqttContext.Provider>
  );
};
