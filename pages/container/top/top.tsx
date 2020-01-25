import React, {Component} from 'react';
import topStyle, {backGroundStyle} from '../../../static/topStyle';

/* eslint require-jsdoc: 2*/
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
