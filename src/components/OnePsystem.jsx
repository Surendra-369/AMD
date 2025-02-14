import { React, useState, useEffect ,useContext} from "react";
import Card from "./Card";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useVisibility } from "./VisibilityProvider";
import { useMqtt } from "./Mqtt/MqttContext";
import { SubtabsContext } from "./SubtabsContext";

const OnePsystem = () => {

  const getGridStyle = (dataLength) => {
    const baseStyle = {
      display: 'grid',
      gap: '4rem',
      width: '100%',
    };

    switch (dataLength) {
      case 1:
        return {
          ...baseStyle,
          gridTemplateColumns: '1fr',
          justifyItems: 'center',
          marginTop:"4em"
        };
      case 2:
        return {
          ...baseStyle,
          gridTemplateColumns: '1fr 1fr'
        };
      case 3:
        return {
          ...baseStyle,
          gridTemplateColumns: '1fr 1fr 1fr'
        };
      default:
        return {
          ...baseStyle,
          gridTemplateColumns: '1fr 1fr',
          '@media (min-width: 768px)': {
            gridTemplateColumns: '1fr 1fr 1fr 1fr'
          }
        };
    }
  };

  const styles = {
    card: {
      backgroundColor: '#00788E',
      borderRadius: '0.5rem',
      maxWidth: '42rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      height: '15rem',
      marginTop: '0.25rem'
    },
    header: {
      backgroundColor: '#035369',
      color: 'white',
      fontSize: '1.25rem',
      fontWeight: '600',
      padding: '1rem',
      textAlign: 'center',
      marginBottom: '1.25rem'
    },
    contentArea: {
      padding: '0 1.5rem 1.5rem 1.5rem'
    },
    metricContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    metricLabel: {
      color: 'white',
      fontSize: '0.875rem',
      marginBottom: '0.25rem'
    },
    metricValue: {
      color: 'white',
      fontSize: '1.5rem',
      fontWeight: 'bold'
    }
  };
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
  const { tabs, setTabs } = useContext(SubtabsContext);
  console.log("tabs", tabs)
  const workloadDataKeys = {
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
  const { workloadData, messages2P } = useMqtt()
  console.log(workloadData, "workloadData",messages2P);
  function convertToReadableFormat(text) {
    return text
      .split('_')                  // Split the text by underscores
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))  // Capitalize each word
      .join(' ');                  // Join the words with a space
  }
  const [data, setData] = useState(workloadData);
  const updateElement = (newMessage) => {
    setData(newMessage); // Assuming `prev` is an array
  };

  useEffect(() => {
    if (typeof workloadData !== 'undefined')
      updateElement(workloadData)
  }, [workloadData])

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
     
<div style={styles.card}>
      <div style={styles.header}>

        {/* AI: Llama 3.x 1B */}
      </div>
      
      <div style={styles.contentArea}>
       {Object.entries(tabs).map(([category, categoryTabs]) => {
  return Object.entries(categoryTabs).map(([key, isSelected]) => {
    const dataKey = data[key];
    console.log( "key",isSelected ,category , categoryTabs);
    
    if (isSelected && dataKey) {
      const entries = Object.entries(dataKey);
      const gridStyle = getGridStyle(entries.length);
      
      return (
        <div key={key} style={gridStyle}>
          {entries.map(([metricKey, metricValue], index) => (
            <div key={index} style={styles.metricContainer}>
              <span style={styles.metricLabel}>
                {convertToReadableFormat(metricKey)}
              </span>
              <span style={styles.metricValue}>
                {typeof metricValue === 'number' ? metricValue.toFixed(2) : metricValue}
              </span>
            </div>
          ))}
        </div>
      )
    }
    return null
  })
})}

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
 
    </>
  );
};

export default OnePsystem;
