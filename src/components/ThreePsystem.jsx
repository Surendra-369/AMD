import React from "react";
import Card from "./Card";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useVisibility } from "./VisibilityProvider";

const ThreePsystem = () => {
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
      const { show, setShow } = useVisibility();
      console.log("showwwwwwwwwwww11",show)
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
          2 x 2P AMD EPYC™ 
          <div>

          9575F + GPU - (256 cores)
          </div>
        </Card>
      <div className="flex-center column" style={{width:"20em",height:"3em" }}>
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
        flexDirection="row"
        >
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
              border= "0.81px solid rgba(255, 255, 255, 1)"
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
          {data2.map((item, index) => (
            <Card
              key={index}
              // width="120px"
              // height="189px"
              width="10em"
              height="19em"
              alignItems="normal"
              flexDirection="row"
              marginTop="5px"
                border= "0.81px solid rgba(255, 255, 255, 1)"
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
      </Card>

      <Card 
        // width="100%" 
        // height="124px" 
        width="20em" 
        height="8em" 
        marginTop="20px" 
        alignItems="normal"
        >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Card 
            // width="320px" 
            // height="30px"
            width="19em" 
            height="2em"
            border= "0.81px solid rgba(255, 255, 255, 1)"
            >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              {60}
            </div>
          </Card>
          <Card 
            // width="320px" 
            // height="30px"
            width="19em" 
            height="2em"
            border= "0.81px solid rgba(255, 255, 255, 1)"
            >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              {"zero"}
            </div>
          </Card>
          <Card 
            // width="320px" 
            // height="30px"
            width="19em" 
            height="2em"
            border= "0.81px solid rgba(255, 255, 255, 1)"
            >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              {"825W"}
            </div>
          </Card>
        </div>
      </Card>
      <Card 
        // width="100%" 
        // height="146px" 
        width="20em" 
        height="10em" 
        marginTop="20px" 
        alignItems="normal">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width:"100%",
            gap: "5px",
          }}
        >
          <Card 
            // width="320px" 
            // height="30px"
            width="19em" 
            height="2em"
            border= "0.81px solid rgba(255, 255, 255, 1)"
            >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              {"575 w - 825w"}
            </div>
          </Card>
          <Card 
            // width="320px" 
            // height="30px"
            width="19em" 
            height="2em"
            border= "0.81px solid rgba(255, 255, 255, 1)"
            >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              {"825w"}
            </div>
          </Card>
          <Card 
            // width="320px" 
            // height="30px"
            width="19em" 
            height="2em"
            border= "0.81px solid rgba(255, 255, 255, 1)"
            >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              {"$9,085"}
            </div>
          </Card>
          <Card 
            // width="320px" 
            // height="30px"
            width="19em" 
            height="2em"
            border= "0.81px solid rgba(255, 255, 255, 1)"
            >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              {"$12,130"}
            </div>
          </Card>
        </div>
      </Card>
      <Card 
        // width="100%" 
        // height="75px"
      width="20em" 
        height="5em"
         marginTop="20px" 
         alignItems="normal">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <Card 
            // width="320px" 
            // height="30px"
            width="19em" 
            height="2em"
            border= "0.81px solid rgba(255, 255, 255, 1)"
            >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              {}
            </div>
          </Card>
          <Card 
            // width="320px" 
            // height="30px"
            width="19em" 
            height="2em"
            border= "0.81px solid rgba(255, 255, 255, 1)"
            >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              {}
            </div>
          </Card>
        </div>
      </Card>
    </>
      );
    };

export default ThreePsystem;
