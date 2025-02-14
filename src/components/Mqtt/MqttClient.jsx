import React, { useState, useEffect } from "react";
import mqtt from "mqtt";

const MqttClient = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Create an EventSource to connect to the server
    const eventSource = new EventSource("http://192.168.0.26:5002/stream");
    // const data = fetch("http://192.168.0.26:5000/receive_data");
    eventSource.onmessage = (event) => {
      // const newMessage = JSON.parse(event);
      console.log(event,"newMessage");
      // setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    // Cleanup on component unmount
    return () => {
      eventSource.close();
    };
  }, []);

 
  

  return (
    <div>
      <h1>Real-time Messages</h1>
      <h2>Received Messages:</h2>
      {messages.length === 0 ? (
        <p>No messages received yet</p>
      ) : (
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>
              <strong>{msg.topic}</strong>: {msg.payload}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MqttClient;

// const MqttClient = () => {
//   const [messages, setMessages] = useState([]);
//   const [isConnected, setIsConnected] = useState(false);

//   const brokerAddress = "ws://192.168.1.231:9001"; // Use WebSocket URL for MQTT
//   const topics = [
//     "mi210/llama3.2-1b",
//     "mi210/vit",
//     "turin/llama3.2-1b",
//     "turin/vit"
//   ];

//   useEffect(() => {
//     // Connect to the broker
//     const client = mqtt.connect(brokerAddress);
    
//     // When connected, subscribe to the to  pics
//     client.on("connect", () => {
//       console.log("Connected to MQTT broker");
//       setIsConnected(true);

//       // Subscribe to each topic
//       topics.forEach((topic) => {
//         client.subscribe(topic, (err) => {
//           if (err) {
//             console.log(`Error subscribing to topic ${topic}:`, err);
//           } else {
//             console.log(`Subscribed to topic: ${topic}`);
//           }
//         });
//       });
//     });

//     // When a new message is received
//     client.on("message", (topic, payload) => {
//       const message = {
//         topic,
//         payload: payload.toString()
//       };

//       // Update state with the new message
//       setMessages((prevMessages) => [...prevMessages, message]);
//     });

//     // Clean up on component unmount
//     return () => {
//       client.end();
//       setIsConnected(false);
//     };
//   }, []);

//   return (
//     <div>
//       <h1>MQTT Pub/Sub in React</h1>
//       <p>{isConnected ? "Connected to the broker" : "Connecting..."}</p>

//       <h2>Received Messages:</h2>
//       {messages.length === 0 ? (
//         <p>No messages received yet</p>
//       ) : (
//         <ul>
//           {messages.map((msg, index) => (
//             <li key={index}>
//               <strong>{msg.topic}</strong>: {msg.payload}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default MqttClient;
