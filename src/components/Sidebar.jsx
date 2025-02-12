import React, { useState } from "react";
import Card from "./Card";
import { useVisibility } from "./VisibilityProvider";

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

  const workloads = [
    "AI - Model Llama 3.x 1B",
    "ML - Vision Transformer",
    "Enterprise - Firewall",
  ];

  const SystemProfile = ["CPU in use", "Accelerator", "Watts"];

  const Economics = [
    "Watts w Active Mgt / 1k Subscriber / Yr",
    "Watts w/o Active Mgt / 1k Subscriber / Yr",
    "TCO w Active Mgt / 1k Subscriber / Yr",
    "TCO w/o Active Mgt / 1k Subscriber / Yr",
    "Total Watts/h saved a week **",
    "TCO Savings ",
  ];
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
        onClick={()=>handleShow("Workloads")}
      >
       {!show["Workloads"] && <Card
          // width="30px"
          // height="140px"
          width="2em"
          height="15em"
          alignItems="center"
          style={{ transform: show["Workloads"] ? "" : "rotate(-90deg)" }}
        >
          <div style={{ transform: show["Workloads"] ? "" : "rotate(-90deg)"
            , whiteSpace: "nowrap" }}>
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
          {workloads.map((type, index) => (
            <div style={{ marginTop: index === 0 ? "0" : "22px" }}>
              <Card
                // width="100%"
                // height="30px"
                width="18em"
                height="2.5em"
                alignItems="center"
                key={index}
                onClick={(e) => e.stopPropagation()}
              >
                {type}
              </Card>
            </div>
          ))}
        </div>:
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "10px",
            width: "100%",
          }}
          
        >
         
            <div style={{ marginTop:  "22px" }}>
              <Card
                // width="100%"
                // height="30px"
                width="18em"
                height="2.5em"
                alignItems="center"
                
              >
               Workloads
              </Card>
            </div>
          
        </div>}
      </div>
      {<div
        style={{ display: "flex", alignItems: "flex-start", marginTop: "65px",height: "8em" }}
        onClick={()=>handleShow("SystemProfile")}
      >
       { !show["SystemProfile"] &&<Card
          // width="30px"
          // height="140px"
          width="2em"
          height="8.5em"
          // backgroundColor="rgba(0, 0, 0, 1)"
          alignItems="center"
        >
          <div style={{ transform: show["SystemProfile"] ? "" : "rotate(-90deg)"
, whiteSpace: "nowrap" }}>
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
          {SystemProfile.map((type, index) => (
            <div style={{ marginTop: index === 0 ? "0" : "22px" }}
            onClick={(e) => e.stopPropagation()}>
              <Card
                // width="100%"
                // height="30px"
                width="13.5em"
                height="2em"
                // backgroundColor="rgba(0, 0, 0, 1)"
                alignItems="center"
                key={index}
              
              >
                {type}
              </Card>
            </div>
          ))}
        </div>:<div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "10px",
            width: "100%",
          }}
       
        >
         
            <div style={{ marginTop:  "22px" }}>
              <Card
                // width="100%"
                // height="30px"
                width="18em"
                height="2.5em"
                alignItems="center"
                
              >
               System Profile
              </Card>
            </div>
          
        </div>}
      </div>}
      <div
        style={{ display: "flex", alignItems: "flex-start", marginTop: "20px",height: "15em" }}
        onClick={()=>handleShow("Economics")}
      >
       { !show["Economics"] && <Card
          // width="30px"
          // height="224px"
          width="2em"
          height="15em"
          // backgroundColor="rgba(0, 0, 0, 1)"
          alignItems="center"
        >
          <div style={{ transform: show["Economics"] ? "" : "rotate(-90deg)"
, whiteSpace: "nowrap" }}>
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
        { true ? <>
        {Economics.map((type, index) => (
            <div
              style={{
                marginTop: index === 0 ? "0" : "10px",
                fontSize: "11px",
              }}
              onClick={(e) => e.stopPropagation()}
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
          ))}</>:<Card
                // width="100%"
                // height="30px"
                width="18em"
                height="2.5em"
                alignItems="center"
                
              >
              Economics
              </Card>}
        </div>:<div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "10px",

            width: "100%",
          }}
         
        >
         
            <div style={{ marginTop:  "22px" }}>
              <Card
                // width="100%"
                // height="30px"
                width="18em"
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




