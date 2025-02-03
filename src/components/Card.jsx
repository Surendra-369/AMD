import React from "react";

const Card = ({
  width,
  height,
  backgroundColor,
  marginTop,
  children,
  flexDirection,
  alignItems,
  color
}) => {
  const cardStyle = {
    width: width,
    height: height,
    backgroundColor: backgroundColor,
    marginTop: marginTop ? marginTop : 0,
    alignItems: alignItems ? alignItems : "flex-start",
    boxSizing: "border-box",
    flexDirection: flexDirection ? flexDirection : "column",
    color:color ? color :""
  };
  return (
    <div className="card" style={cardStyle}>
      {/* <h3>ram</h3> */}
      {children}
    </div>
  );
};

export default Card;
