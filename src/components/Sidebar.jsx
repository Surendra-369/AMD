import React, { useContext, useState } from "react";
import Card from "./Card";
import { useVisibility } from "./VisibilityProvider";
import { SubtabsContext, SubtabsProvider } from "./SubtabsContext";


const Sidebar = () => {
  // const [show, setShow] = useState({
  //   "Workloads":true,
  //   "SystemProfile":true,
  //   "Economics":true
  // }); // Track visibility for all parts

  const { show, setShow } = useVisibility();
  const handleShow = (index) => {

    setShow(prev => ({
      ...prev, // Spread the previous state to maintain other values
      [index]: !prev[index] // Toggle the visibility of the clicked part
    }));
  };

  // const workloads = [
  //   "AI - Model Llama 3.x 1B",
  //   "ML - Vision Transformer",
  //   "Enterprise - Firewall",
  // ];
  const workloads = [
    { mainKey:"workload", key: "1P_LLM_LLAMA", value: "AI - Model Llama 3.x 1B" },
    { mainKey:"workload", key: "1P_VIT", value: "ML - Vision Transformer" },
    { mainKey:"workload", key: "1P_FW", value: "Enterprise - Firewall" },
  ];
  const SystemProfile = [{mainKey:"systemprofile", key: "system_Metrics", value: "System Metrics" },];

  const Economics = [
    "Watts w Active Mgt / 1k Subscriber / Yr",
    "Watts w/o Active Mgt / 1k Subscriber / Yr",
    "TCO w Active Mgt / 1k Subscriber / Yr",
    "TCO w/o Active Mgt / 1k Subscriber / Yr",
    "Total Watts/h saved a week **",
    "TCO Savings ",
  ];

  //   const [subtabs, setSubtabs] = useState({
  //     "1P_LLM_LLAME":false,
  // "1P_LLM_DS":false,
  // "1P_VIT": false,
  // "1P_FW":false,
  // "1P_POWER":false,
  // "2P_LLM_LLAME":false, 
  // "2P_LLM_DS":false,
  // "2P_VIT": false,
  // "2P_FW":false,
  // "2P_POWER":false,
  // "4PC_LLM_LLAME":false,
  // "4PC_LLM_DS":false,
  // "4PC_VIT": false,
  // "4PC_FW":false,
  // "4PC_POWER":false

  //   });
  // tabs, setTabs
  const { tabs, setTabs} = useContext(SubtabsContext);
  const handlesubmenu = (workload, mainTabKey) => {

    setTabs(prevState => {
      // First, make a deep copy of the state
      const updatedTabs = JSON.parse(JSON.stringify(prevState));
      
      // Check if the mainTabKey exists
      console.log(updatedTabs,"updatedTabs");
      
      if (mainTabKey in updatedTabs) {
        console.log("Found mainTabKey in tabs:", updatedTabs[mainTabKey]);
        
        // Get all keys in the mainTabKey section
        const subtabKeys = Object.keys(updatedTabs[mainTabKey]);
        
        // Set all subtabs to false
        subtabKeys.forEach(key => {
          updatedTabs[mainTabKey][key] = false;
        });
        
        // Set the clicked subtab to true
        updatedTabs[mainTabKey][workload.key] = true;
        
      }
      
      return updatedTabs;
    });
  };
  return (
    <>
      <Card
        // width="100%"
        // height="41px"
        // marginTop="37%"
        width="16em"
        height="2em"
        marginTop="8.3em"
        alignItems="anchor-center"
      >
        Subscribers
      </Card>
      <div
        className="sidebar-font"
        style={{ display: "flex", alignItems: "flex-start", marginTop: "30px", height: "12em" }}
        onClick={() => handleShow("Workloads")}
      >
        {!show["Workloads"] && <Card
          // width="30px"
          // height="140px"
          width="2em"
          height="15em"
          alignItems="center"
          style={{ transform: show["Workloads"] ? "" : "rotate(-90deg)" }}
        >
          <div style={{
            transform: show["Workloads"] ? "" : "rotate(-90deg)"
            , whiteSpace: "nowrap"
          }}>
            {"Workloads"}
          </div>
        </Card>}

        {!show["Workloads"] ?
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
              width: "100%",
            }}
          >
            {workloads.map((workload, index) => (
              <div
                style={{ marginTop: index === 0 ? "0" : "22px" }}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering handleShow
                  handlesubmenu(workload,workload.mainKey); // Passes the full object
                }}
                key={`${workload.key}-${index}`} // Ensures unique key
              >
                <Card width="18em" height="2.5em" alignItems="center">
                  {workload.value}  {/* Display only the value */}
                </Card>
              </div>
            ))}


          </div> :
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
              width: "100%",
            }}

          >

            <div style={{ marginTop: "22px" }}
              onClick={(e) => { e.stopPropagation(); handleShow("Workloads") }}>
              <Card
                // width="100%"
                // height="30px"
                width="18em"
                height="2.5em"
                alignItems="center"

              >
                Workload
              </Card>
            </div>

          </div>}
      </div>
      {<div
        style={{ display: "flex", alignItems: "flex-start", marginTop: "65px", height: "8em" }}
        onClick={() => handleShow("SystemProfile")}
      >
        {!show["SystemProfile"] && <Card
          // width="30px"
          // height="140px"
          key={"SystemProfile"}
          width="2em"
          height="8.5em"
          // backgroundColor="rgba(0, 0, 0, 1)"
          alignItems="center"
        >
          <div style={{
            transform: show["SystemProfile"] ? "" : "rotate(-90deg)"
            , whiteSpace: "nowrap"
          }}>
            {"System Profile"}
          </div>
        </Card>}

        {!show["SystemProfile"] ?
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
              width: "100%",
            }}
          >
            {SystemProfile.map((SystemPro, index) => (
              <div style={{ marginTop: index === 0 ? "0" : "22px" }}
                onClick={(e) => {
                e.stopPropagation()
                handlesubmenu(SystemPro, SystemPro.mainKey); // Passes the full object
                }}>
                {/* <Card
                  // width="100%"
                  // height="30px"
                  width="13.5em"
                  height="2em"
                  alignItems="center"
                  key={index}

                >
                  {type}
                </Card> */}
                <Card width="18em" height="2.5em" alignItems="center">
                  {SystemPro.value}  {/* Display only the value */}
                </Card>
              </div>
            ))}
          </div> : <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
              width: "100%",
            }}

          >

            <div style={{ marginTop: "22px" }}>
              <Card
                // width="100%"
                // height="30px"
                width="16em"
                height="2.5em"
                alignItems="center"

              >
                System Profile
              </Card>
            </div>

          </div>}
      </div>}
      <div
        style={{ display: "flex", alignItems: "flex-start", marginTop: "20px", height: "15em" }}
        onClick={() => handleShow("Economics")}
      >
        {!show["Economics"] && <Card
          // width="30px"
          // height="224px"
          width="2em"
          height="15em"
          // backgroundColor="rgba(0, 0, 0, 1)"
          alignItems="center"
        >
          <div style={{
            transform: show["Economics"] ? "" : "rotate(-90deg)"
            , whiteSpace: "nowrap"
          }}>
            {"Economics"}
          </div>
        </Card>}

        {!show["Economics"] ?
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
              width: "100%",
            }}
          >

            {Economics.map((type, index) => (
              <div
                style={{
                  marginTop: index === 0 ? "0" : "10px",
                  fontSize: "11px",
                }}
              >
                <Card
                  // width="100%"
                  // height="30px"
                  width="20em"
                  height="3em"
                  // backgroundColor="rgba(0, 0, 0, 1)"
                  alignItems="center"
                  key={index}
                >
                  {type}
                </Card>
              </div>
            ))}
          </div> : <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",

              width: "100%",
            }}

          >

            <div style={{ marginTop: "22px", marginLeft: '5px' }}>
              <Card
                // width="100%"
                // height="30px"
                width="15em"
                height="2.5em"
                alignItems="center"
              >
                Economics
              </Card>
            </div>

          </div>}
      </div>
    </>
  );
};

export default Sidebar;



