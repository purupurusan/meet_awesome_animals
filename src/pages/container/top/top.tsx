import React from "react";
import topStyle, { backGroundStyle } from "../../../styles/topStyle";

/* eslint require-jsdoc: 2*/
const TopWrapper: React.FC = () => {
  return (
    <div className="topWrapper" style={backGroundStyle}>
      {topStyle}
    </div>
  );
};

export default TopWrapper;
