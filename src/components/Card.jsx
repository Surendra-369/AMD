// import React from "react";
 
// const Card = ({
//   width,
//   height,
//   backgroundColor,
//   marginTop,
//   children,
//   flexDirection,
//   alignItems,
//   color,
//   border,
//   opacity,
//   background,
//   noborder,
//   backgroundImage,
//   backgroundSize,
//   backgroundPosition
// }) => {
//   const cardStyle = {
//     width: width,
//     height: height,
//     backgroundColor: backgroundColor ? backgroundColor: "",
//     marginTop: marginTop ? marginTop : 0,
//     alignItems: alignItems ? alignItems : "flex-start",
//     boxSizing: "border-box",
//     flexDirection: flexDirection ? flexDirection : "column",
//     color:color ? color : "rgba(255, 255, 255, 1)",
//     border: border ? border :  noborder==="true" ? "":"1px solid rgba(0, 0, 0, 1)",
//     opacity:opacity ? opacity : "",
//      background: background || "",
//     backgroundImage: backgroundImage ? backgroundImage : "",
//     backgroundSize:backgroundSize ? backgroundSize : "",
//     backgroundPosition:backgroundPosition ? backgroundPosition : "",

//   };
//   //1px solid rgba(255, 255, 255, 1)
//   //  border="1px solid rgba(0, 0, 0, 1)"
//   return (
//     <div className="card" style={cardStyle}>
//       {/* <h3>ram</h3> */}
//       {children}
//     </div>
//   );
// };
 
// export default Card;

const Card = ({
  width,
  height,
  backgroundColor,
  marginTop,
  children,
  flexDirection,
  alignItems,
  color,
  border,
  opacity,
  background,
  noborder,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  style, // Accept external style props
}) => {
  const cardStyle = {
    width: width,
    height: height,
    backgroundColor: backgroundColor ? backgroundColor : "",
    marginTop: marginTop ? marginTop : 0,
    alignItems: alignItems ? alignItems : "flex-start",
    boxSizing: "border-box",
    flexDirection: flexDirection ? flexDirection : "column",
    color: color ? color : "rgba(255, 255, 255, 1)",
    border: border ? border : noborder === "true" ? "" : "1px solid rgba(0, 0, 0, 1)",
    opacity: opacity ? opacity : "",
    background: background || "",
    // backgroundImage: backgroundImage && backgroundImage,
    // backgroundSize: backgroundSize && backgroundSize ,
    // backgroundPosition: backgroundPosition && backgroundPosition ,
    ...style, // Merge external styles with existing styles
  };

  return (
    <div className="card" style={cardStyle}>
      {children}
    </div>
  );
};

export default Card;
