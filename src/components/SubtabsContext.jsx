// src/SubtabsContext.js
import React, { createContext, useState } from 'react';

export const SubtabsContext = createContext();

export const SubtabsProvider = ({ children }) => {
    const [tabs, setTabs] = useState({
        "workload": {
          "1P_LLM_LLAMA": false,
          "1P_LLM_DS": false,
          "1P_VIT": false,
          "1P_FW": false,
          "1P_POWER": false,
          "1P_CPU": false,
          "2P_LLM_LLAME": false,
          "2P_LLM_DS": false,
          "2P_VIT": false,
          "2P_FW": false,
          "2P_POWER": false,
          "4PC_LLM_LLAME": false,
          "4PC_LLM_DS": false,
          "4PC_VIT": false,
          "4PC_FW": false,
          "4PC_POWER": false,
        },
        "systemprofile": {
          "system_Metrics": false,
        },
        "economics": {
          "TCO_INActive": false,
          "TCO_Active": false,
        },
      });

    return (
        <SubtabsContext.Provider value={{ tabs, setTabs }}>
            {children}
        </SubtabsContext.Provider>
    );
};