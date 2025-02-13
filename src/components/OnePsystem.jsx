import { React, useState, useEffect } from "react";
import Card from "./Card";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useVisibility } from "./VisibilityProvider";
import { useMqtt } from "./Mqtt/MqttContext";

const OnePsystem = () => {
  const styles = {
    card: {
      backgroundColor: '#115e59',
      borderRadius: '8px',
      maxWidth: '500px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden', // This ensures the header background extends fully
      height:'15em',
      marginTop:'5px'
    },
    header: {
      backgroundColor: '#0d4a44', // Darker shade for header
      color: 'white',
      fontSize: '20px',
      fontWeight: '600',
      padding: '16px',
      textAlign: 'center',
      marginBottom: '20px'
    },
    contentArea: {
      padding: '0 24px 24px 24px'
    },
    metricsGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1px 1fr',
      gap: '10px',
      position: 'relative'
    },
    metric: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      alignItems: 'center',
    },
    metricLabel: {
      color: '#99f6e4',
      fontSize: '14px',
      marginBottom: '4px'
    },
    metricValue: {
      color: 'white',
      fontSize: '24px',
      fontWeight: 'bold'
    },
    verticalDivider: {
      width: '1px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      height: '100%'
    },
    horizontalDivider: {
      height: '1px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      width: '100%',
      gridColumn: '1 / span 3',
      margin: '12px 0'
    },
   
  };
  const styling = {
    card1: {
      backgroundColor: '#115e59',
      borderRadius: '8px',
      maxWidth: '500px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden'
    },
    header1: {
      backgroundColor: '#0d4a44',
      color: 'white',
      fontSize: '20px',
      fontWeight: '600',
      padding: '16px',
      textAlign: 'center',
      marginBottom: '20px'
    },
    contentArea1: {
      padding: '0 24px 24px 24px',
      display: 'flex',           // Added flex display
      justifyContent: 'center',  // Center horizontally
      alignItems: 'center',      // Center vertically
      minHeight: '100px'         // Give some minimum height for vertical centering
    },
    metricsGrid1: {
      display: 'flex',           // Changed to flex for better centering
      justifyContent: 'center',  // Center horizontally
      alignItems: 'center',      // Center vertically
      width: '100%'             // Take full width
    },
    metric1: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    },
    metricLabel1: {
      color: '#99f6e4',
      fontSize: '14px',
      marginBottom: '4px'
    },
    metricValue1: {
      color: 'white',
      fontSize: '24px',
      fontWeight: 'bold'
    }
  };
  // const data = [
  //   {
  //     "Concurrent User": 10,
  //     "Tokens/s": 10,
  //     "Total Latency (ms)": 10,
  //     "TTFT (ms)": 10,
  //   },
  //   {
  //     "Concurrent User": 10,
  //     "Tokens/s": 10,
  //     "Total Latency (ms)": 10,
  //     "TTFT (ms)": 10,
  //   },
  //   {
  //     "Concurrent User": 10,
  //     "Tokens/s": 10,
  //     "Total Latency (ms)": 10,
  //     "TTFT (ms)": 10,
  //   },
  // ];

  //  const two = 
  const data2 = [
    {
      "CPUs": 10,
      "CPU Util": "10",
      "Threads": 10,
      "Mem (GB)": 10,
      "Network (Gb)": 10,
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
  console.log("showwwwwwwwwwww", show)
  const Keys = {
    "concurrent_user": "Concurrent User",
    "token_latency": "Token Latency",
    "tokens_per_sec": "Tokens Per Sec",
    "ttft": "TTFT"
  };

  const temp = [
    {
      "Concurrent Packets": 10,
      "Applied ACL/rules": 10,
      "Latency (ms)": 10,
      "Jitter (ms)": 10,
    },
  ];
  const { messages, setMessage } = useMqtt()
  console.log(messages, "messages");
  function convertToReadableFormat(text) {
    return text
      .split('_')                  // Split the text by underscores
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))  // Capitalize each word
      .join(' ');                  // Join the words with a space
  }
  const [data, setData] = useState(messages);
  const updateElement = (newMessage) => {
    setData(newMessage); // Assuming `prev` is an array
  };

  useEffect(() => {
    if (typeof messages !== 'undefined')
      updateElement(messages)
  }, [messages])

  console.log("data", data)
  return (
    <>
      <Card 
        width="20em"
        height="4em"
        alignItems="center"
        color='rgba(255, 255, 255, 1)'
      >
        1P AMD EPYC™
        <div>
          9575F - (64 cores)
        </div>
      </Card>
      <div className="flex-center column" style={{ width: "20em", height: "3em" }}>
        <div style={{ padding: "10px" }}>(1P - Single System)</div>
        <div>200Gb NIC</div>
      </div>
      <Card
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
      {/* <div style={styles.card}>
      <div style={styles.header}>
        AI: Llama 3.x 1B
      </div>
     
      <div style={styles.contentArea}>
        <div style={styles.metricsGrid}>
          <div style={styles.metric}>
            <span style={styles.metricLabel}>Users</span>
            <span style={styles.metricValue}>---</span>
          </div>
         
          <div style={styles.verticalDivider}></div>
 
          <div style={styles.metric}>
            <span style={styles.metricLabel}>Tokens/s</span>
            <span style={styles.metricValue}>---</span>
          </div>
 
          <div style={styles.horizontalDivider}></div>
 
          <div style={styles.metric}>
            <span style={styles.metricLabel}>Latency (ms)</span>
            <span style={styles.metricValue}>---</span>
          </div>
 
          <div style={styles.verticalDivider}></div>
 
          <div style={styles.metric}>
            <span style={styles.metricLabel}>TTFT (ms)</span>
            <span style={styles.metricValue}>---</span>
          </div>
        </div>
 
     
      </div>
      </div> */}
      <div style={styles.card}>
  <div style={styles.header}>AI: Llama 3.x 1B</div>

  <div style={styles.contentArea}>
    <div style={styles.metricsGrid}>
      {Object.entries(data).map(([metricKey, metricValue], index) => (
        <div key={index} style={styles.metric}>
          <span style={styles.metricLabel}>
            {Keys[metricKey] || convertToReadableFormat(metricKey)}
          </span>
          <span style={styles.metricValue}>
            {typeof metricValue === "object" && metricValue !== null ? (
              Object.entries(metricValue).map(([nestedKey, nestedValue], nestedIndex) => (
                <span key={nestedIndex}>
                  {Keys[nestedKey] || convertToReadableFormat(nestedKey)}: {JSON.stringify(nestedValue)}
                </span>
              ))
            ) : (
              JSON.stringify(metricValue)
            )}
          </span>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* <Card
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
              {temp.map((item, index) => (
                <Card
                  key={index}
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
                marginLeft: "5px",

              }}
            >
              {!show["Workloads"] && data2.map((item, index) => (
                <Card
                  key={index}
                  width="10em"
                  height="19em"
                  alignItems="normal"
                  flexDirection="row"
                  marginTop="5px"
                  border="0.81px solid rgba(255, 255, 255, 1)"
                >
                    

                  <div style={{ marginTop: "10px" }}>
                    <h4> System Metrics</h4>
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
                {index < data3.length - 1 && <hr />} 
              </div>
            ))}

          </div>
        )}

      </Card> */}
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
        {!show["Economics"] ? (
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
        ) : (
          <>
            <div className="flex-center">
              {`$9,085`}
            </div>
          </>
        )}
      </Card>
      <div style={styles.card}>
      <div style={styles.header}>
        AI: Llama 3.x 1B
      </div>
     
      <div style={styles.contentArea}>
        <div style={styles.metricsGrid}>
          <div style={styles.metric}>
            <span style={styles.metricLabel}>Users</span>
            <span style={styles.metricValue}>---</span>
          </div>
         
          <div style={styles.verticalDivider}></div>
 
          <div style={styles.metric}>
            <span style={styles.metricLabel}>Tokens/s</span>
            <span style={styles.metricValue}>---</span>
          </div>
 
          <div style={styles.horizontalDivider}></div>
 
          <div style={styles.metric}>
            <span style={styles.metricLabel}>Latency (ms)</span>
            <span style={styles.metricValue}>---</span>
          </div>
 
          <div style={styles.verticalDivider}></div>
 
          <div style={styles.metric}>
            <span style={styles.metricLabel}>TTFT (ms)</span>
            <span style={styles.metricValue}>---</span>
          </div>
        </div>
 
     
      </div>
    </div>
 
 
 
    <div style={styling.card1}>
      <div style={styling.header1}>
        AI: Llama 3.x 1B
      </div>
     
      <div style={styling.contentArea1}>
        <div style={styling.metricsGrid1}>
          <div style={styling.metric1}>
            <span style={styling.metricLabel1}>Users</span>
            <span style={styling.metricValue1}>---</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default OnePsystem;


// {Object.entries(data).map(([key, value], index) => (
//   <Card
//     key={index}
//     width="20em"
//     height="6em"
//     alignItems="normal"
//     marginTop="5px"
//     border="0.81px solid rgba(255, 255, 255, 1)"
//   >
//     <div
//       style={{
//         flexDirection: "column",
//         justifyContent: "space-between",
//         marginLeft: "10px",
//         marginRight: "10px",
//       }}
//     >
//       {typeof value === 'object' && value !== null ? (
//         Object.entries(value).map(([nestedKey, nestedValue], nestedIndex) => (
//           <div
//             key={nestedIndex}
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               flexWrap: "wrap",
//             }}
//           >
//             <strong>{Keys[nestedKey] || convertToReadableFormat(nestedKey)}:</strong> {JSON.stringify(nestedValue)}
//           </div>
//         ))
//       ) : (
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             flexWrap: "wrap",
//           }}
//         >
//           <strong>{Keys[key] || convertToReadableFormat(key)}:</strong> {JSON.stringify(value)}
//         </div>
//       )}
//     </div>
    
//   </Card>
// ))}