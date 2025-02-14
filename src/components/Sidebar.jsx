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
    { mainKey:"economics", key: "TCO_Active", value: "TCO(active mgmt)" },
    { mainKey:"economics", key: "TCO_INActive", value: "TCO(inactive mgmt)" },
  ];

  const { tabs, setTabs} = useContext(SubtabsContext);
  const handlesubmenu = (workload, mainTabKey) => {

    setTabs(prevState => {
      // First, make a deep copy of the state
      const updatedTabs = JSON.parse(JSON.stringify(prevState));
      

      if (mainTabKey in updatedTabs) {
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
        width="20em"
        height="2em"
        marginTop="8.3em"
        alignItems="anchor-center"
        style={{
          borderRadius: "10px", // Adjust as needed
          border: "2px solid white",
        }}
      >
        Subscribers
      </Card>
      <div
        className="sidebar-font"
        style={{ display: "flex", alignItems: "flex-start", marginTop:"3em", }}
        onClick={() => handleShow("Workloads")}
      >
        {!show["Workloads"] && <Card
          // width="30px"
          // height="140px"
          width="2.5em"
          height="14em"
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
                <Card width="24em" height="3.5em" alignItems="center">
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
                width="20em"
                height="15em"
                alignItems="center"

              >
                Workload
              </Card>
            </div>

          </div>}
      </div>
      <div
        style={{ display: "flex", alignItems: "center", marginTop: "5em",  }}
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
                <Card width="18em" height="8em" alignItems="center">
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
                height="15em"
                alignItems="center"

              >
                System Profile
              </Card>
            </div>

          </div>}
      </div>
      <div
        style={{ display: "flex", alignItems: "flex-start", marginTop: "20px",  }}
        onClick={() => handleShow("Economics")}
      >
        {!show["Economics"] && <Card
          // width="30px"
          // height="224px"
          width="2em"
          height="10em"
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

            {/* {Economics.map((type, index) => (
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
            ))} */}
            {Economics.map((economic, index) => (
              <div style={{ marginTop: index === 0 ? "0" : "22px" }}
                onClick={(e) => {
                e.stopPropagation()
                handlesubmenu(economic, economic.mainKey); // Passes the full object
                }}>
                <Card width="18em" height="4em" alignItems="center">
                  {economic.value}  {/* Display only the value */}
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
                height="15em"
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



