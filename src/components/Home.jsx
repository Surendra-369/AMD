import React from "react";
import Card from "./Card";
import Sidebar from "./Sidebar";
import OnePsystem from "./OnePsystem";
import TwoPsystem from "./TwoPsystem";
import ThreePsystem from "./ThreePsystem";

function Home() {
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
  const data3 = [{}];
  return (
    <div className="container">
      <div className="content-left">
        <div className="header-list">
          <div className="center-content">
            <h3>
              Supporting Heterogeneous Workload demands with AMD EPYC Foundation{" "}
            </h3>
          </div>
        </div>
        <div className="four-parts">
          <div className="part">
            Part 1
            <Sidebar />
          </div>
          <div className="part">
            Part 2
            <OnePsystem />
          </div>
          <div className="part">
            Part 3
            {/* <Card
              width="250px"
              height="60px"
              
            /> */}
            <TwoPsystem/>
          </div>
          <div className="part">
            Part 4
            {/* <Card
              width="250px"
              height="60px"
              
            /> */}
            <ThreePsystem/>
          </div>
        </div>
      </div>
      <div className="content-right">Content 25%</div>
    </div>
  );
}

export default Home;
