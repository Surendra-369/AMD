import React from "react";
import Card from "./Card";

const Sidebar = () => {
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
        width="100%"
        height="41px"
        // backgroundColor="rgba(0, 0, 0, 1)"
        color="rgba(0, 0, 0, 1)"
        marginTop="37%"
      />
      <div
        className="sidebar-font"
        style={{ display: "flex", alignItems: "flex-start", marginTop: "30px"}}
      >
        <Card
          width="30px"
          height="140px"
          // backgroundColor="rgba(0, 0, 0, 1)"
          color="rgba(0, 0, 0, 1)"
          alignItems="center"
        >
          <div style={{ transform: "rotate(-90deg)", whiteSpace: "nowrap" }}>
            {"Workloads"}
          </div>
        </Card>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "10px",
             width:"100%"
          }}
        >
          {workloads.map((type, index) => (
            <div style={{ marginTop: index === 0 ? "0" : "22px" }}>
              <Card
                width="100%"
                height="30px"
                // backgroundColor="rgba(0, 0, 0, 1)"
                color="rgba(0, 0, 0, 1)"
                alignItems="center"
                key={index}
              >
                {type}
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{ display: "flex", alignItems: "flex-start", marginTop: "65px" }}
      >
        <Card
          width="30px"
          height="140px"
          // backgroundColor="rgba(0, 0, 0, 1)"
          color="rgba(0, 0, 0, 1)"
          alignItems="center"
        >
          <div style={{ transform: "rotate(-90deg)", whiteSpace: "nowrap" }}>
            {"System Profile"}
          </div>
        </Card>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "10px",
            width:"100%"
          }}
        >
          {SystemProfile.map((type, index) => (
            <div style={{ marginTop: index === 0 ? "0" : "22px" }}>
              <Card
                width="100%"
                height="30px"
                // backgroundColor="rgba(0, 0, 0, 1)"
                color="rgba(0, 0, 0, 1)"
                alignItems="center"
                key={index}
              >
                {type}
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{ display: "flex", alignItems: "flex-start", marginTop: "15px" }}
      >
        <Card
          width="30px"
          height="224px"
          // backgroundColor="rgba(0, 0, 0, 1)"
          color="rgba(0, 0, 0, 1)"
          alignItems="center"
        >
          <div style={{ transform: "rotate(-90deg)", whiteSpace: "nowrap" }}>
            {"Economics"}
          </div>
        </Card>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "10px",
            width:"100%"
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
                width="100%"
                height="30px"
                // backgroundColor="rgba(0, 0, 0, 1)"
                color="rgba(0, 0, 0, 1)"
                alignItems="center"
                key={index}
              >
                {type}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
