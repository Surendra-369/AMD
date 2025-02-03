import React from "react";
import Card from "./Card";

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
      return (
        <>
          <Card width="100%" height="60px" />
          <div className="flex-center column">
            <div style={{ padding: "10px" }}>(1P - Single System)</div>
            <div>200Gb NIC</div>
          </div>
          <Card width="100%" height="30px" marginTop="20px" />
          <Card width="100%" height="200px" marginTop="20px" flexDirection="row">
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
              width="200px"
              height="60px"
              alignItems="normal"
              marginTop="5px"
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
              width="120px"
              height="189px"
              alignItems="normal"
              flexDirection="row"
              marginTop="5px"
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
    
          <Card width="100%" height="124px" marginTop="20px" alignItems="normal">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Card width="320px" height="30px">
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
              <Card width="320px" height="30px">
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
              <Card width="320px" height="30px">
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
          <Card width="100%" height="146px" marginTop="20px" alignItems="normal">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <Card width="320px" height="30px">
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
              <Card width="320px" height="30px">
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
              <Card width="320px" height="30px">
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
              <Card width="320px" height="30px">
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
          <Card width="100%" height="75px" marginTop="20px" alignItems="normal">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <Card width="320px" height="30px">
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
              <Card width="320px" height="30px">
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

export default TwoPsystem;
