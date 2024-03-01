import React, { Component } from "react";
import { TimePicker } from "antd";
import dayjs from "dayjs";

export class Size extends Component {
  render() {
    return (
      <div>
        <span className="mr-2">
          <TimePicker
            defaultValue={dayjs("12:08:23", "HH:mm:ss")}
            size="large"
          />
        </span>
        <span className="mr-2">
          <TimePicker defaultValue={dayjs("12:08:23", "HH:mm:ss")} />
        </span>
        <span className="mr-2">
          <TimePicker
            defaultValue={dayjs("12:08:23", "HH:mm:ss")}
            size="small"
          />
        </span>
      </div>
    );
  }
}

export default Size;
