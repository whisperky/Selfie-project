import React, { Component } from "react";
import { TimePicker } from "antd";
import dayjs from "dayjs";

const format = "HH:mm";

export class HideColumn extends Component {
  render() {
    return (
      <TimePicker defaultValue={dayjs("12:08", format)} format={format} />
    );
  }
}

export default HideColumn;
