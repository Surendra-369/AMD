// import React, { useState, useEffect } from "react";
// import mqtt from "mqtt";

// const MqttClient = () => {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     // Create an EventSource to connect to the server
//     const eventSource = new EventSource("http://192.168.0.26:5002/stream");
//     // const data = fetch("http://192.168.0.26:5000/receive_data");
//     eventSource.onmessage = (event) => {
//       // const newMessage = JSON.parse(event);
//       console.log(event?.data,"newMessage");
//       // setMessages((prevMessages) => [...prevMessages, newMessage]);
//     };

//     // Cleanup on component unmount
//     return () => {
//       eventSource.close();
//     };
//   }, []);

 
  

//   return (
//     <div>
//       <h1>Real-time Messages</h1>
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


import React, { useEffect } from "react";
import { useMqtt } from "./MqttContext";

const MqttClient = () => {
  const { messages, setMessages } = useMqtt();

  useEffect(() => {
    const eventSource = new EventSource("http://192.168.0.26:5002/stream");

    eventSource.onmessage = (event) => {
      try {
        const newMessage = JSON.parse(event.data);
        console.log(newMessage, "Received Message");
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      } catch (error) {
        console.error("Error parsing message:", error);
      }
    };

    return () => {
      eventSource.close();
    };
    
  }, [setMessages]);

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

