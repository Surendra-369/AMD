import React from "react";
import Card from "./Card";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useVisibility } from "./VisibilityProvider";

const TwoPsystem = () => {
  const data = [
    {
      "Concurrent User": 10,
      "Tokens/s": 10,
      "Total Latency (ms)": 10,
      "TTFT (ms)": 10,
    },
    {
      "Concurrent User": 10,
      "Tokens/s": 10,
      "Total Latency (ms)": 10,
      "TTFT (ms)": 10,
    },
    {
      "Concurrent User": 10,
      "Tokens/s": 10,
      "Total Latency (ms)": 10,
      "TTFT (ms)": 10,
    },
  ];
  const data2 = [
    {
      "Concurrent User": 10,
      "Tokens/s": 10,
      "Total Latency (ms)": 10,
      "TTFT (ms)": 10,
    },
  ];
  const data3 = [
    { key: "Token/s", value: 10 },
    { key: "Inference/s", value: 10 },
    { key: "ACL/rules", value: 10 }
  ];
  const data4 = [
    { value: 60 },
    { value: "zero" },
    { value: "825W" },
  ];
  const data5 = [
    { value: "575 w - 825w" },
    { value: "825w" },
    { value: "$9,085" },
    { value: "$12,130" },
    { value: "$1130" },
    { value: "$120" },
  ];
  const { show, setShow } = useVisibility();
  console.log("showwwwwwwwwwww22",show)
  return (
    <>
      <Card
        // width="100%"
        // height="60px"
        width="20em"
        height="4em"
        // flexDirection="column"
        alignItems="center"
      >
        2P AMD EPYC™
        <div>9575F - (128 cores)</div>
      </Card>
      <div
        className="flex-center column"
        style={{ width: "20em", height: "3em" }}
      >
        <div style={{ padding: "10px" }}>(1P - Single System)</div>
        <div>200Gb NIC</div>
      </div>
      <Card
        // width="100%"
        // height="30px"
        width="20em"
        height="2em"
        marginTop="20px"
        alignItems="normal"
      >
        <div className="flex-spaceBetween">
          <div style={{ textAlign: "center", flex: 1 }}>1000 - 1800</div>
          <div style={{ marginRight: "10px" }}>
            <Icon icon="iconamoon:profile-bold" />
          </div>
        </div>
      </Card>
      <Card
        // width="100%" 
        // height="200px" 
        width="20em"
        height="12.6em"
        marginTop="20px"
        flexDirection={!show["Workloads"] ? "row" : ""}
        alignItems={!show["Workloads"] ? "" : "normal"}
      >
        {!show["Workloads"] ? (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                fontSize: "10px",
                marginLeft: "5px",
              }}
            >
              {data.map((item, index) => (
                <Card
                  key={index}
                  // width="200px"
                  // height="60px"
                  width="20em"
                  height="6em"
                  alignItems="normal"
                  marginTop="5px"
                  border="0.81px solid rgba(255, 255, 255, 1)"
                >
                  <div
                    style={{
                      flexDirection: "column",
                      justifyContent: "space-between",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                  >
                    {Object.entries(item).map(([key, value]) => (
                      <div
                        key={key}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          flexWrap: "wrap",
                        }}
                      >
                        <strong>{key}:</strong> {value}
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                fontSize: "10px",
                // gap:"5px",
                marginLeft: "5px",

              }}
            >
              {!show["Workloads"] && data2.map((item, index) => (
                <Card
                  key={index}
                  // width="120px"
                  // height="189px"
                  width="10em"
                  height="19em"
                  alignItems="normal"
                  flexDirection="row"
                  marginTop="5px"
                  border="0.81px solid rgba(255, 255, 255, 1)"
                >
                  <div style={{ marginTop: "10px" }}>
                    {Object.entries(item).map(([key, value]) => (
                      <div
                        key={key}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          flexWrap: "wrap",
                        }}
                      >
                        <strong>{key}:</strong> {value}
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {data3.map((item, index) => (
              <div key={index}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                  <span>{item.key}:</span>
                  <span>{item.value}</span>
                </div>
                {index < data3.length - 1 && <hr />} {/* Adding horizontal line between rows */}
              </div>
            ))}

          </div>
        )}

      </Card>
      <Card
        // width="100%" 
        // height="124px" 
        width="20em"
        height="8em"
        marginTop="20px"
        alignItems="normal"
      >
        {!show["SystemProfile"] ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {data4.map((item, index) => (
              <Card
                key={index}
                width="19em"
                height="2em"
                border="0.81px solid rgba(255, 255, 255, 1)"
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  {item.value}
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <>
            <div className="flex-center">
                  {`100 W`}
            </div>
          </>
        )}
      </Card>
      <Card
        // width="100%" 
        // height="146px" 
        width="20em"
        height="15em"
        marginTop="20px"
        alignItems="normal">
          {!show["Economics"] ?(
       <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    gap: "5px",
  }}
>
  {data5.map((item, index) => (
    <Card
      key={index}
      width="19em"
      height="2em"
      border="0.81px solid rgba(255, 255, 255, 1)"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {item.value}
      </div>
    </Card>
  ))}
</div>
):(
  <>
  <div className="flex-center">
      {`$9,085`}
  </div>
  </>
)} 
      </Card>
    </>
  );
};

export default TwoPsystem;
