import React, { Component } from "react";
import { Progress } from "antd";

export class CircleMini extends Component {
  render() {
    return (
      <div>
        <Progress className="mr-2" type="circle" percent={30} size={80} />
        <Progress className="mr-2" type="circle" percent={70} size={80} status="exception" />
        <Progress type="circle" percent={100} size={80} />
      </div>
    );
  }
}

export default CircleMini;
