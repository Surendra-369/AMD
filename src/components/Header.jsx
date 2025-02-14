import React from "react";
 
const Header = ()=>{
    const logo = "/logo.png"
    return (
      <div className="header-list">
      <div className="list-items">
        <h1 className="left">
            <img src={logo} alt="Amd" />
        </h1>
        <h1 className="centered">Efficient Performance and Optimization with AMD EPYC™</h1>
      </div>
    </div>
    
    )
}
export default Header
