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
    setShow(prev => {
      const newState = {
        ...prev,
        [index]: !prev[index] // Toggle the visibility of the clicked part
      };

      // Check if the section is being shown and set default behavior for certain sections
      if (index === "Workloads") {
        // Set the first workload sub-menu to true by default
        const firstWorkload = workloads[0]; // Assuming workloads is an array          
        handlesubmenu(firstWorkload, firstWorkload.mainKey); // Set the first sub-menu as active
      } else if (index === "SystemProfile") {
        // Set the first item for SystemProfile or any default logic for SystemProfile
        const firstSystemProfile = SystemProfile[0]; // Assuming systemProfiles is an array
        handlesubmenu(firstSystemProfile, firstSystemProfile.mainKey);
      } else if (index === "Economics") {
        // Set the first item for Economics or any default logic for Economics
        const firstEconomics = Economics[0]; // Assuming economics is an array
        handlesubmenu(firstEconomics, firstEconomics.mainKey);
      }

      return newState;
    });
  };


  // const workloads = [
  //   "AI - Model Llama 3.x 1B",
  //   "ML - Vision Transformer",
  //   "Enterprise - Firewall",
  // ];
  const workloads = [
    { mainKey: "workload", key: "1P_LLM_LLAMA", value: "AI - Model Llama 3.x 1B" },
    { mainKey: "workload", key: "1P_VIT", value: "ML - Vision Transformer" },
    { mainKey: "workload", key: "1P_FW", value: "Enterprise - Firewall" },
    { mainKey: "workload", key: "1P_POWER", value: "UPF" },
  ];
  const SystemProfile = [{ mainKey: "systemprofile", key: "system_Metrics", value: "System Metrics" },];

  const Economics = [
    { mainKey: "economics", key: "TCO_Active", value: "TCO(active mgmt)" },
    { mainKey: "economics", key: "TCO_INActive", value: "TCO(inactive mgmt)" },
  ];

  const { tabs, setTabs } = useContext(SubtabsContext);
  const handlesubmenu = (workload, mainTabKey) => {
    setTabs(prevState => {
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
  const logo = "/logo.jpg"
  const amdlogo = "/Amdepiclogo.png"
  return (
    <>
      <div>
        <span style={{ height: "70px", width: "140px", display: "inline-block", paddingLeft: '50px' }}>
          <img src={amdlogo} alt="Amd" style={{ height: "100%", width: "100%" }} />
        </span>
      </div>

      <Card
        // width="100%"
        // height="41px"
        // marginTop="37%"
        width="20em"
        height="4em"
        marginTop="2.4em"
        alignItems="anchor-center"
        background="black"
        style={{
          borderRadius: "10px", // Adjust as needed
          border: "1px solid #0AA3BB",
          backgroundColor: 'rgb(15,15,14)',
          marginLeft: '10px'
        }}
      >
        <p style={{
          fontSize: "18px",
          fontWeight: "400"
        }}>

          Subscribers
        </p>
      </Card>
      <div
        className="sidebar-font"
        style={{ display: "flex", alignItems: "flex-start", marginTop: "1.5em", border: "1px solid #0AA3BB", height: '18em', padding: '6px', borderRadius: '10px' }}
        onClick={() => handleShow("Workloads")}
      >
        {!show["Workloads"] && <Card
          // width="30px"
          // height="140px"
          width="2.5em"
          height="18em"
          alignItems="center"
          border="1px solid white"
          backgroundColor="black !important"
          style={{ transform: show["Workloads"] ? "" : "rotate(-90deg)", }}
        >
          <div style={{
            transform: show["Workloads"] ? "" : "rotate(-90deg)"
            , whiteSpace: "nowrap",
            fontSize: "18px",
            fontWeight: "200"
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
                  handlesubmenu(workload, workload.mainKey); // Passes the full object
                }}
                key={`${workload.key}-${index}`} // Ensures unique key
              >
                <div className="flex-center"
                  style={{
                    backgroundColor: 'rgb(15,15,14)',
                    width: '24em',
                    height: '3em',
                    border: `1px solid ${tabs["workload"][workload.key] ? '#0AA3BB' : 'white'}`,
                    borderRadius: '10px',
                    fontSize: "12px",
                    fontWeight: "200"
                  }}
                >
                  <Card >
                    {workload.value}  {/* Display only the value */}
                  </Card>
                </div>
              </div>
            ))}


          </div> :
          <div
            style={{
              marginLeft: "10px",
              width: "100%",
              display: "flex",
              height: '19em',
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                color: 'white',
                height: "100%", // Ensure it takes up space for centering
                fontSize: '18px',
                fontWeight: '200'
              }}
              onClick={(e) => {
                e.stopPropagation();
                handleShow("Workloads");
              }}
            >
              Workload
            </div>
          </div>
        }
      </div>
      <div
        style={{ display: "flex", alignItems: "flex-start", marginTop: "1.6em", border: "1px solid #0AA3BB", height: '11em', padding: '6px', borderRadius: '10px' }}
        onClick={() => handleShow("SystemProfile")}
      >
        {!show["SystemProfile"] && <Card
          // width="30px"
          // height="140px"
          key={"SystemProfile"}
          width="2em"
          height="11em"
          backgroundColor="black !important"
          border="1px solid white"
          // backgroundColor="rgba(0, 0, 0, 1)"
          alignItems="center"
        >
          <div style={{
            transform: show["SystemProfile"] ? "" : "rotate(-90deg)"
            , whiteSpace: "nowrap",
            fontSize: "18px",
            fontWeight: "200"
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
                <div className="flex-center"
                  style={{
                    width: "24em",
                    height: "13em",
                    border: `1px solid ${tabs["systemprofile"][SystemPro.key] ? '#0AA3BB' : 'white'}`,
                    marginTop: "8px", backgroundColor: "black", borderRadius: '10px',
                    fontSize: "12px",
                    fontWeight: "200"
                  }}>
                  <Card >
                    {SystemPro.value}  {/* Display only the value */}
                  </Card>
                </div>
              </div>
            ))}
          </div> :
          // <div
          //   style={{
          //     display: "flex",
          //     flexDirection: "column",
          //     marginLeft: "10px",
          //     width: "100%",
          //   }}

          // >

          //   <div style={{ }}>
          //     <Card
          //       // width="100%"
          //       // height="30px"
          //       width="16em"
          //       height="7em"
          //       alignItems="center"

          //     >
          //       System Profile
          //     </Card>
          //   </div>

          // </div>
          <div
            style={{
              marginLeft: "10px",
              width: "100%",
              display: "flex",
              height: '11em',
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                color: 'white',
                height: "100%", // Ensure it takes up space for centering
                fontSize: '18px',
                fontWeight: '200'
              }}
              onClick={(e) => {
                e.stopPropagation();
                handleShow("SystemProfile");
              }}
            >
              System Profile
            </div>
          </div>

        }
      </div>
      <div
        style={{ display: "flex", alignItems: "flex-start", marginTop: "25px", height: "10em", padding: "10px", border: "1px solid #0AA3BB", borderRadius: '10px' }}
        onClick={() => handleShow("Economics")}
      >
        {!show["Economics"] && <Card
          // width="30px"
          // height="224px"
          width="2em"
          height="10em"
          backgroundColor="black !important"
          border="1px solid white"
          // backgroundColor="rgba(0, 0, 0, 1)"
          alignItems="center"
        >
          <div style={{
            transform: show["Economics"] ? "" : "rotate(-90deg)"
            , whiteSpace: "nowrap",
            fontSize: "18px",
            fontWeight: "200"

          }}
          >
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
              height: "100%",
              alignItems: "center", // Centers items horizontally
              justifyContent: "space-evenly", // Distributes them evenly
              // gap: "22px", // Adds equal spacing between items
            }}
          >


            {Economics.map((economic, index) => (
              <div style={{ marginTop: index === 0 ? "0" : "22px" }}
                onClick={(e) => {
                  e.stopPropagation()
                  handlesubmenu(economic, economic.mainKey); // Passes the full object
                }}
              >
                <div className="flex-center" style={{
                  width: "24em",
                  height: "4em",
                  border: `1px solid ${tabs["economics"][economic.key] ? '#0AA3BB' : 'white'}`,
                  backgroundColor: "black", borderRadius: '10px',
                  fontSize: "12px",
                  fontWeight: "200"
                }}>


                  <Card >
                    {economic.value}  {/* Display only the value */}
                  </Card>
                </div>
              </div>
            ))}
          </div> :
          //  <div
          //   style={{
          //     display: "flex",
          //     flexDirection: "column",
          //     marginLeft: "10px",

          //     width: "100%",
          //   }}

          // >

          //   <div style={{  }}>
          //     <Card
          //       // width="100%"
          //       // height="30px"
          //       width="15em"
          //       height="15em"
          //       alignItems="center"
          //     >
          //       Economics
          //     </Card>
          //   </div>

          // </div>
          <div
            style={{
              marginLeft: "10px",
              width: "100%",
              display: "flex",
              height: '10em',
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                color: 'white',
                height: "100%", // Ensure it takes up space for centering
                fontSize: '18px',
                fontWeight: '200'
              }}

            >
              Economics
            </div>
          </div>
        }
      </div>
    </>
  );
};

export default Sidebar;



