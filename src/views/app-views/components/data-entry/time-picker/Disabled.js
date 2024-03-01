import React, { Component } from "react";
import { TimePicker } from "antd";
import dayjs from "dayjs";

export class Disabled extends Component {
  render() {
    return (
      <TimePicker defaultValue={dayjs("12:08:23", "HH:mm:ss")} disabled />
    );
  }
}

export default Disabled;
