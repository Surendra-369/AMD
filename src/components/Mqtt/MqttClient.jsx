

import React, { useContext, useEffect } from "react";
import { useMqtt } from "./MqttContext";
import { SubtabsContext } from "../SubtabsContext";

const MqttClient = () => {
  const {tabs, setTabs } = useContext(SubtabsContext)
  const { workloadData, setWorkloadData, systemProfileData, setSystemProfileData,economicsData, setEconomicsData } = useMqtt();
  console.log(workloadData,"workloadData",systemProfileData)
  useEffect(() => {
    const eventSource = new EventSource("http://192.168.0.26:5002/stream");
  
    eventSource.onmessage = (event) => {
      try {
        const rawMessage = event?.data;
        const validJsonMessage = rawMessage.replace(/'/g, '"');
        const newMessage = JSON.parse(validJsonMessage);
        
        if (typeof newMessage === 'undefined') {
          console.log("Undefined message received");
          return;
        }
  
        // Create separate objects for each category
        const workloadUpdates = {};
        const systemProfileUpdates = {};
        const economicsUpdates = {};
  
        // Process each key in the new message
        Object.entries(newMessage).forEach(([key, value]) => {
          // Check against the tabs structure to categorize the data
          if (tabs.workload.hasOwnProperty(key)) {
            workloadUpdates[key] = value;
          } 
          else if (tabs.systemprofile.hasOwnProperty(key)) {
            systemProfileUpdates[key] = value;
          }
          else if (tabs.economics.hasOwnProperty(key)) {
            economicsUpdates[key] = value;
          }
        });
  
        // Update states only if there are updates for that category
        if (Object.keys(workloadUpdates).length > 0) {
          setWorkloadData(prevData => ({
            ...prevData,
            ...workloadUpdates
          }));
        }
  
        if (Object.keys(systemProfileUpdates).length > 0) {
          setSystemProfileData(prevData => ({
            ...prevData,
            ...systemProfileUpdates
          }));
        }
  
        if (Object.keys(economicsUpdates).length > 0) {
          setEconomicsData(prevData => ({
            ...prevData,
            ...economicsUpdates
          }));
        }
  
      } catch (error) {
        console.error("Error processing message:", error);
      }
    };
  
    return () => {
      eventSource.close();
    };
  }, []); 
  // console.log("Received Message",messages);
  return (
    <>
    </>
  );
};

export default MqttClient;

