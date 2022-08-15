import React, { Component } from "react";
 
import SemiCircleProgressBar from "react-progressbar-semicircle";
 
export default class ProgressbarSemi extends Component {
  render() {
    return <SemiCircleProgressBar percentage={76} showPercentValue stroke="blue" diameter={100}   />;
  }
}