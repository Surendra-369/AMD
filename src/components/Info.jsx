
import React from 'react';
import Card from './Card';
import { useVisibility } from "./VisibilityProvider";
import { useMqtt } from "./Mqtt/MqttContext";

const Info = () => {
  const { selectedCard } = useVisibility();
  console.log(selectedCard, "selectedCard");
  const { workloadData, systemProfileData, economicsData } = useMqtt();

  const styles = {
    container: {
      padding: "20px", // Increased padding
      color: "white",
      fontFamily: "Arial, sans-serif",
      height: "100%", // Keep the height as 25em to use full card space
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between", // To add space between sections
    },
    title: {
      fontSize: "22px", // Increased text size
      fontWeight: "bold",
      marginBottom: "16px", // More space after the title
    },
    subtitle: {
      fontSize: "16px", // Increased text size
      marginBottom: "20px", // More gap below the subtitle
    },
    sectionTitle: {
      fontSize: "18px", // Increased text size
      fontWeight: "bold",
      marginTop: "20px", // Increased gap before the section title
    },
    list: {
      paddingLeft: "20px",
      fontSize: "16px", // Increased text size for list
      marginTop: "10px", // Added gap above the list
    },
    listItem: {
      marginBottom: "10px", // More space between list items
    },
    footer: {
      fontSize: "16px", // Increased text size
      fontWeight: "bold",
      marginTop: "24px", // More space before the footer
    },
    details: {
      fontSize: "16px", // Increased text size for details
      marginBottom: "12px", // Added gap between details
    },
    cost: {
      fontSize: "18px", // Increased text size for cost
      fontWeight: "bold",
      marginTop: "16px", // Added gap before cost
    },
    savings: {
      fontSize: "20px", // Increased text size for savings
      fontWeight: "bold",
      marginTop: "12px", // More gap above savings
    },
  };

  return (
    <Card
      height="30em" // Keep the original height of 25em for the card
      alignItems="normal"
      background={
        selectedCard === null
          ? "linear-gradient(to right, #00BAD4, #007C91)"
          : selectedCard === 0
          ? "linear-gradient(to right, #00B1CA, #000F13)"
          : selectedCard === 1
          ? "linear-gradient(to right, #007487, #000C0F)"
          : "linear-gradient(to right, #00303C, #000405)"
      }
    >
      {selectedCard !== null ? (
        <div style={styles.container}>
          <div style={styles.title}>EPYC Private Cloud - Late Day</div>
          <div style={styles.subtitle}>
            One system can support the Cell Site 48% of the time
          </div>
          <div style={styles.sectionTitle}>Operational cost savings are generated through:</div>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              Consolidation of workloads on the base system through K8 dynamic workload placement and workload affinity
            </li>
            <li style={styles.listItem}>
              EPYC systems are put into low power state to minimize power draw in conjunction with K8 Power Manager APIs
            </li>
            <li style={styles.listItem}>
              Telco predictive load models bring the systems online before the demand rises
            </li>
          </ul>
          <div style={styles.footer}>
            Total cost of operations are minimized, sustainability goals met all on a common EPYC platform.
          </div>
        </div>
      ) : (
        <div
          style={{
            ...styles.container,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={styles.title}>EPYC Private Cloud</div>
          <div style={styles.details}>70 - 450 Tokens</div>
          <div style={styles.details}>1,100 - 5,500 Inferences</div>
          <div style={styles.details}>18k - 105k ACL calls</div>
          <div style={styles.cost}>EPYC Operational TCO</div>
          <div style={styles.savings}>$28,000 Savings</div>
        </div>
      )}
    </Card>
  );
};

export default Info;
