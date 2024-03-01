import React, { Component } from "react";
import { Slider } from "antd";

export class ShowTooltip extends Component {
  render() {
    return <Slider defaultValue={30} tooltip={{ open: true }} />;
  }
}

export default ShowTooltip;
