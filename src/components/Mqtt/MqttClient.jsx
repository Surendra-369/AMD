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
    const eventSource = new EventSource("http://10.86.20.178:5002/stream");

    eventSource.onmessage = (event) => {
      try {
        const rawMessage = event?.data;
        console.log(rawMessage, "rawMessage"); // Log to see the raw data

        // Replace single quotes with double quotes to make it valid JSON
        const validJsonMessage = rawMessage.replace(/'/g, '"');
        console.log(validJsonMessage, "validJsonMessage");

        // Now, parse the cleaned message as JSON
        const newMessage = JSON.parse(validJsonMessage)
          console.log(newMessage,"newMessage");
          
        if(typeof newMessage ==='undefined'){
          // setMessages([]);
          console.log("random");
          
        }else{
          setMessages((prevMessages) => {
            // Make a copy of the previous state to update it without mutating
            const updatedMessages = { ...prevMessages };
          
            // Log the newMessage to debug
            console.log(newMessage, "newMessage");
          
            // Loop through each key in newMessage and update the state accordingly
            Object.keys(newMessage).forEach((key) => {
              // If the key already exists, it will update the value, otherwise it will add the new key
              updatedMessages[key] = newMessage[key];
            });
          
            return updatedMessages; // Return the updated state
          });
          
        }
      } catch (error) {
        console.error("Error parsing message:", error);
      }
    };

    return () => {
      eventSource.close();
    };
  }, [setMessages]);
  // console.log("Received Message",messages);
  return (
    <div>
      <h1>Real-time Messages</h1>
      <h2>Received Messages:</h2>
      {/* {messages.length === 0 ? (
        <p>No messages received yet</p>
      ) : (
        <ul>
          {messages?.map((msg, index) => (
            <li key={index}>
              <strong>{msg.topic}</strong>: {msg.payload}
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
};

export default MqttClient;

