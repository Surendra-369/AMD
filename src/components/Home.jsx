import React, { useState } from "react";
import Card from "./Card";
import Sidebar from "./Sidebar";
import OnePsystem from "./OnePsystem";
import TwoPsystem from "./TwoPsystem";
import ThreePsystem from "./ThreePsystem";
import Info from "./Info";
import Chart from "./Chart";

function Home() {
  const [show, setShow] = useState(null); // Track visibility for all parts

  // const handleShow = (index) => {
  //   // Check if the clicked part is already visible
  //  const singleElement =  show.every(value => value === true)
  //   if (!singleElement) {
  //     // If it's visible, show all parts again
  //     setShow([true, true, true, true]);
  //   } else {
  //     // If it's not visible, show only the clicked part
  //     const newShow = [false, false, false, false]; // Hide all parts first
  //     newShow[index] = true; // Show the clicked part
  //     setShow(newShow);
  //   }
  // };

const getShow = (val)=>{
  setShow(val)
}
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
  const logo = "/logo.jpg";
  return (
    <div className="container">
      <div className="content-left" style={{ flex: show===null ? "0 0 0%" : "0 0 00%"}}>
        {/* <div className="header-list">
          <div className="center-content">
            <h3>
              Supporting Heterogeneous Workload demands with AMD EPYC Foundation{" "}
            </h3>
          </div>
        </div> */}
        <div className="four-parts">
          
      <div
        className="part"
        // style={{ marginTop: "0px" }}
      >
        {/* <h1 className="left">
          <img src={logo} alt="Amd" />
        </h1> */}
        <Sidebar />
      </div>
      <div
        className="part border"
        
        // style={{ display: show[0] ? 'block' : 'none' }}
        // onClick={() => handleShow(0)}
      >
        <OnePsystem getShow={getShow}/>
      </div>
      {/* <div
        className="part border"
        style={{ display: show[1] ? 'block' : 'none' }}
        onClick={() => handleShow(1)}
      >
        <TwoPsystem />
      </div> */}
      {/* <div
        className="part border"
        style={{ display: show[2] ? 'block' : 'none' }}
        onClick={() => handleShow(2)}
      >
        <ThreePsystem />
      </div> */}
    </div>
      </div>
      <div className="content-right" style={{ flex: show===null ? "0 0 23%" : "0 0 60%"}}>
        <div style={{marginRight:'10px'}}>

        <Info/>
        <Chart/>
        </div>

      </div>
    </div>
  );
}

export default Home;
