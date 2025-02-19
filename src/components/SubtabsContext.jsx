// src/SubtabsContext.js
import React, { createContext, useState } from 'react';

export const SubtabsContext = createContext();

export const SubtabsProvider = ({ children }) => {
    const [tabs, setTabs] = useState({
        "workload": {
          "1P_LLM": false,
          "1P_LLM_DS": false,
          "1P_VIT": false,
          "1P_FW": false,
          "1P_UPF": false,
          "1P_POWER": false,
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
          "1P_SYSTEM": false,
          "1P_POWER": false,
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