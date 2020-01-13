import React, { Component } from 'react';
//import Calendar from './calendar';
import topStyle, { backGroundStyle } from '../../../static/topStyle';


class TopWrapper extends Component {

  render() {
    return (
      <div className="topWrapper" style={backGroundStyle}>
        {/* <Calendar /> */}
        {topStyle}
      </div>
    );
  }
}

export default TopWrapper;
