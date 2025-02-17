import { React, useState, useEffect, useContext } from "react";
import Card from "./Card";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useVisibility } from "./VisibilityProvider";
import { useMqtt } from "./Mqtt/MqttContext";
import { SubtabsContext } from "./SubtabsContext";

const OnePsystem = ({ getShow }) => {

  // // Add state for tracking selected card
  // const [selectedCard, setSelectedCard] = useState(null);

  // Keep all your existing constants and hooks
  const { show, setShow, selectedCard, setSelectedCard } = useVisibility();
  console.log(selectedCard, "ghj")
  // const handleCardClick = (index) => {
  //   if (selectedCard === index) {
  //     // If clicking the same card, show all cards
  //     setSelectedCard(null);
  //   } else {
  //     // Show only the clicked card
  //     setSelectedCard(index);
  //   }
  // };
  const handleCardClick = (index) => {
    setSelectedCard((prev) => (prev === index ? null : index)); // Toggle selected card state
  };



  useEffect(() => {
    getShow(selectedCard);
  }, [selectedCard])
  console.log(selectedCard, "selectedCard");

  const styling = {

    // Add cursor pointer style for clickable cards
    clickableCard: {
      cursor: 'pointer',
      transition: 'transform 0.2s',
      ':hover': {
        transform: 'scale(1.02)'
      }
    },
    containerStyle: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      gap: '10px',
      // padding: '20px',
      width: '100%',
      overflowX: 'auto'
    },
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

  const getGridStyle = (dataLength) => {
    const baseStyle = {
      display: 'grid',
      gap: '2rem',
      width: '100%',
    };

    switch (dataLength) {
      case 1:
        return {
          ...baseStyle,
          gridTemplateColumns: '1fr',
          justifyItems: 'center',
          marginTop: "4em"
        };
      case 2:
        return {
          ...baseStyle,
          gridTemplateColumns: '1fr 1fr',

        };
      case 3:
        return {
          ...baseStyle,
          gridTemplateColumns: '1fr 1fr 1fr',
        };

      default:
        return {
          ...baseStyle,
          gridTemplateColumns: '1fr 1fr',
          '@media (min-width: 768px)': {
            gridTemplateColumns: '1fr 1fr 1fr 1fr'
          },
        };
    }
  };

  const styles = {
    card: {
      // backgroundColor: '#00788E',
      borderRadius: '0.5rem',
      // opacity:"0.3",
      maxWidth: '42em',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      height: '15em',
      marginTop: '1em'
    },
    header: {
      // backgroundColor: '#035369',

      color: 'white',
      fontSize: '1.25em',
      fontWeight: '600',
      padding: '0.5em',
      textAlign: 'center',
      marginBottom: '1.25em'
    },
    contentArea: {
      padding: '0 1.5em 1.5em 1.5em'
    },
    metricContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    metricLabel: {
      color: 'white',
      fontSize: "20px",
      fontWeight: "200",
      marginBottom: '0.25em'
    },
    metricValue: {
      color: 'white',
      fontSize: "25px",
      fontWeight: "400",
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
    { value: "CPU Util" },
    { value: "Memory" },
    { value: "Power" },
  ];
  const data5 = [
    { value: "TCO Savings" },

  ];


  const { tabs, setTabs } = useContext(SubtabsContext);
  console.log("tabs", tabs)
  const workloadDataKeys = {
    "concurrent_user": "Users",
    "token_latency": "Latency (ms)",
    "tokens_per_sec": "Tokens/S",
    "ttft": "TTFT(ms)",
    "samples_per_sec": "Samples/S",
    "": "ACL Rules/s",
    "": "Throughput",
  };
  const systemProfileDataKeys = {
    "": "CPU Util",
    "": "Memory",
    "": "Network",
    "": "Power",
  }
  const temp = [
    {
      "Concurrent Packets": 10,
      "Applied ACL/rules": 10,
      "Latency (ms)": 10,
      "Jitter (ms)": 10,
    },
  ];
  const emptyWorkload = [
    "Users",
    "Latency (ms)",
    "Tokens/S",
    "TTFT(ms)",
  ]
  const emptySystemProfile = [
    "CPU Utilization",
    "Power",
  ]
  const emptyShowSystemProfile=[
    "CPU Util",
    "Memory",
    "Network",
    "Power",
  ]
  const emptyEconmics = [
    "TCO Saving"
  ]

  const { workloadData, messages2P } = useMqtt()
  console.log(workloadData, "workloadData", messages2P);
  const [hoveredCards, setHoveredCards] = useState({
    0: false,
    1: false,
    2: false
  });
  const handleCardHover = (index, ishover) => {

    setHoveredCards(prev => ({
      ...prev,
      [index]: ishover
    }));
  };
  function convertToReadableFormat(text) {
    return text
      .split('_')                  // Split the text by underscores
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))  // Capitalize each word
      .join(' ');                  // Join the words with a space
  }
  const [data, setData] = useState(workloadData);
  const updateElement = (newMessage) => {
    setData(newMessage);
  };

  useEffect(() => {
    if (typeof workloadData !== 'undefined')
      updateElement(workloadData)
  }, [workloadData]);

  function convertToReadableFormat(text) {
    return text
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  const titles = [
    { key: "1p", value: "1P AMD EPYC™\n9575F - (64 cores)" },
    { key: "2p", value: "2P AMD EPYC™\n9575F - (128 cores)" },
    { key: "2*2p", value: "4P AMD EPYC™\n9575F - (256 cores)" }
  ];

  const subtitle = [
    { key: "1p", value: "1P AMD EPYC™" },
    { key: "2p", value: "2P AMD EPYC™" },
    { key: "2*2p", value: "4P AMD EPYC™" }
  ];

  const userList = [
    { key: "1p", value: "1200-1300" },
    { key: "2p", value: "1200-1900" },
    { key: "2*2p", value: "1300-1700" }
  ];
  const subHeaderTitle = {
    "1P_LLM_LLAMA": {
      value: "AI: Llama 3.x 1B",

    },
    "1P_VIT": {
      value: "ML: Vision Transformer",

    },
    "1P_FW": {
      value: "Enterprise: Firewall",

    },
    "1P_POWER": {
      value: "UPF",

    },
  };
  // Function to get appropriate workload data based on card index
  const getWorkloadData = (index) => {
    switch (index) {
      case 0: // 1P system
        return {
          "1P_LLM_LLAMA": workloadData["1P_LLM_LLAMA"] || {},
          "1P_VIT": workloadData["1P_VIT"] || {}
        };
      case 1: // 2P system
        return {
          "1P_LLM_LLAMA": workloadData["2P_LLM_LLAMA"] || {},
          "1P_VIT": workloadData["2P_VIT"] || {}
        };
      case 2: // 4P system
        return {
          "1P_LLM_LLAMA": workloadData["4P_LLM_LLAMA"] || {},
          "1P_VIT": workloadData["4P_VIT"] || {}
        };
      default:
        return {};
    }
  };
  const activeKey = Object.keys(tabs?.workload || {}).find((key) => tabs.workload[key]);
  // Create a SingleCard component that contains your existing card structure
  const SingleCard = ({ index }) => {
    const titleData = titles[index];
    const subtitleData = subtitle[index];
    const userListData = userList[index];
    const cardWorkloadData = getWorkloadData(index);

    // Only render if no card is selected or this is the selected card
    if (selectedCard !== null && selectedCard !== index) {
      return null;
    }

    return (
      <div style={{
        minWidth: '20em',
        background: "rgba(0, 0, 0, 0.32)",
        borderRadius: "15px",
        padding: '10px',
        border: `0.1px solid ${hoveredCards[index] ? "#0AA3BB" : "transparent"}`, // Set transparent border by default

      }}
        onClick={() => handleCardClick(index)}
      // onMouseEnter={() => handleCardHover(index, true)}  
      // onMouseLeave={() => handleCardHover(index, false)}
      >
        {/* Title Card */}
        <Card
          width="20em"
          height="4em"
          alignItems="center"
          color='rgba(255, 255, 255, 1)'
        >
          {titleData.value.split('\n').map((line, i) => (
            <div key={i} style={{ fontSize: '20px', fontWeight: '500' }}>{line}</div>
          ))}
        </Card>

        {/* Subtitle */}
        {/* <div className="flex-center column" style={{ width: "20em", height: "3em" }}>
          <div style={{ padding: "10px" }}>({subtitleData.value})</div>
          <div>200Gb NIC</div>
        </div> */}

        {/* User Count Card */}
        <Card
          width="20em"
          height="4em"
          marginTop="20px"
          alignItems="normal"
          noborder="true"
        >
          <div className="flex-spaceBetween" style={{
            border: '1px solid black',
            borderRadius: "10px", background:
              index === 0
                ? "linear-gradient(to right, #00B1CA, #000F13)"
                : index === 1
                  ? "linear-gradient(to right, #007487, #000C0F)"
                  : "linear-gradient(to right, #00303C, #000405)",
          }}>
            <div
              style={{
                textAlign: "center",
                flex: 1,
                height: "3em",
                display: "flex", // Use flexbox to align items
                justifyContent: "center", // Center items horizontally
                alignItems: "center", // Center items vertically
                fontSize: "20px",
                fontWeight: "200"
              }}
            >
              {userListData.value}
            </div>
            <div style={{ marginRight: "10px", display: "flex", alignItems: "center" }}>
              <Icon icon="line-md:account" height="25px" width="25px" />
            </div>
          </div>

        </Card>

        {/* Workload Data Card */}
        <div style={{
          ...styles.card,
          background: index === 0 ? 'linear-gradient(to right, #00B1CA, #000F13)' : (index === 1 ? 'linear-gradient(to right, #007487, #000C0F)' : 'linear-gradient(to right, #00303C, #000405)')

        }}>
          {!show["Workloads"] && <div style={{
            ...styles.header,

            background: "linear-gradient(90deg, #005B69 0%, #002B32 100%)",
            fontSize: "20px",
            fontWeight: "300"
          }}
          >

            {activeKey && subHeaderTitle?.[activeKey]?.value && (
              <div

              >{subHeaderTitle[activeKey].value}</div>
            )}
          </div>}
          <div style={{
            ...styles.contentArea,
            background: index === 0
              ? 'linear-gradient(to right, #00B1CA, #000F13)'
              : (index === 1
                ? 'linear-gradient(to right, #007487, #000C0F)'
                : 'linear-gradient(to right, #00303C, #000405)')


          }}>
            {!show["Workloads"] ? (
              Object.entries(tabs).map(([category, categoryTabs]) =>
                Object.entries(categoryTabs).map(([key, isSelected]) => {
                  if (!isSelected) return null;

                  const workloadKey = key.toUpperCase();
                  const dataKey = cardWorkloadData[workloadKey];

                  console.log(dataKey, "dataKey", workloadKey, cardWorkloadData);

                  if (!dataKey) return null;

                  const entries = Object.entries(dataKey);
                  const gridStyle = getGridStyle(entries.length);

                  return (
                    <div key={key} style={gridStyle}>
                      {entries.map(([metricKey, metricValue], idx) => {
                        // Get the title from workloadDataKeys, or use the metricKey if no match is found
                        const title = workloadDataKeys[metricKey];

                        return (
                          <div key={idx} style={styles.metricContainer}>
                            <span style={styles.metricLabel}>{title}</span>
                            <span style={styles.metricValue}>
                              {typeof metricValue === "number" ? metricValue.toFixed(2) : metricValue}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  );
                })
              )
            ) : (
              <div style={{ ...getGridStyle(emptyWorkload.length), marginTop: '30px' }}>
                {emptyWorkload.map((title, idx) => (
                  <div key={idx} style={styles.metricContainer}>
                    <span style={styles.metricLabel}>{title}</span>
                    <span style={styles.metricValue}>- - -</span>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>

        {/* System Profile Card */}
        <div style={{
  ...styles.card,
  background: index === 0 ? 'linear-gradient(to right, #00B1CA, #000F13)' 
    : (index === 1 ? 'linear-gradient(to right, #007487, #000C0F)' 
    : 'linear-gradient(to right, #00303C, #000405)')
}}>
  <div style={{
    ...styles.contentArea,
    background: index === 0 
      ? 'linear-gradient(to right, #00B1CA, #000F13)' 
      : (index === 1 
        ? 'linear-gradient(to right, #007487, #000C0F)' 
        : 'linear-gradient(to right, #00303C, #000405)')
  }}>
    {!show["SystemProfile"] ? (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
      }}>
        {/* Kept the commented code as is */}
        {/* {data4.map((item, idx) => (
          <Card
            key={idx}
            width="19em"
            height="3em"
            border="0.81px solid rgba(255, 255, 255, 1)"
          >
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}>
              {item.value}
            </div>
          </Card>
        ))} */}
        
        {Object.entries(tabs).map(([category, categoryTabs]) =>
          Object.entries(categoryTabs).map(([key, isSelected]) => {
            if (!isSelected) return null;

            const workloadKey = key.toUpperCase();
            const dataKey = null;

            console.log(dataKey, "dataKey", workloadKey, cardWorkloadData);

            if (!dataKey) {
              // If dataKey is missing, show emptySystemProfile
              return (
                <div key={key} style={{...getGridStyle(emptySystemProfile.length-1)}}>
                  {emptySystemProfile.map((title, idx) => (
                    <div key={idx} style={styles.metricContainer}>
                      <span style={styles.metricLabel}>{title}</span>
                      <span style={styles.metricValue}>- - -</span>
                    </div>
                  ))}
                </div>
              );
            }

            const entries = Object.entries(dataKey);
            const gridStyle = getGridStyle(entries.length);

            return (
              <div key={key} style={gridStyle}>
                {entries.map(([metricKey, metricValue], idx) => {
                  const title = workloadDataKeys[metricKey];

                  return (
                    <div key={idx} style={styles.metricContainer}>
                      <span style={styles.metricLabel}>{title}</span>
                      <span style={styles.metricValue}>
                        {typeof metricValue === "number" ? metricValue.toFixed(2) : metricValue}
                      </span>
                    </div>
                  );
                })}
              </div>
            );
          })
        )}
      </div>
    ) : (
      <div className="flex-center">
        <div style={{ ...getGridStyle(emptySystemProfile.length-1), marginTop: '30px' }}>
          {emptySystemProfile.map((title, idx) => (
            <div key={idx} style={styles.metricContainer}>
              <span style={styles.metricLabel}>{title}</span>
              <span style={styles.metricValue}>- - -</span>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
</div>


        {/* Economics Card */}

        {/* fontSize= 35px and fontWeight:400 */}
        <Card
          width="20em"
          height="11em"
          marginTop="20px"
          alignItems="normal"
          background={index === 0
            ? "linear-gradient(to right, #00B1CA, #000F13)"
            : index === 1
              ? "linear-gradient(to right, #007487, #000C0F)"
              : "linear-gradient(to right, #00303C, #000405)"
          }
        >
          {!show["Economics"] ? (
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
              gap: "5px",

            }}>
              {data5.map((item, idx) => (
                <Card
                  key={idx}
                  width="19em"
                  height="2em"
                  border="0.81px solid rgba(255, 255, 255, 1)"
                >
                  <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}>
                    {item.value}
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="flex-center">
              <div style={{ ...getGridStyle(emptyEconmics.length), marginTop: '30px' }}>
                {emptyEconmics.map((title, idx) => (
                  <div key={idx} style={styles.metricContainer}>
                    <span style={styles.metricLabel}>{title}</span>
                    <span style={styles.metricValue}>- - -</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Card>
      </div>
    );
  };
  return (
    <div style={styling.containerStyle}>
      {[0, 1, 2].map((index) => (
        <SingleCard key={index} index={index} />
      ))}
    </div>
  );
};

export default OnePsystem;