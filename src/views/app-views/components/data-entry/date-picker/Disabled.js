import React, { Component } from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";

const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = "YYYY-MM-DD";

export class Disabled extends Component {
  render() {
    return (
      <div>
        <DatePicker defaultValue={dayjs("2015-06-06", dateFormat)} disabled />
        <br />
        <MonthPicker defaultValue={dayjs("2015-06", "YYYY-MM")} disabled />
        <br />
        <RangePicker
          defaultValue={[
            dayjs("2015-06-06", dateFormat),
            dayjs("2015-06-06", dateFormat)
          ]}
          disabled
        />
      </div>
    );
  }
}

export default Disabled;
