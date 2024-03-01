import React, { Component } from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;

function onChange(dates, dateStrings) {
  console.log("From: ", dates[0], ", to: ", dates[1]);
  console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
}

export class PresettedRanges extends Component {
  render() {
    return (
      <div>
        <RangePicker
          ranges={{
            Today: [dayjs(), dayjs()],
            "This Month": [dayjs().startOf("month"), dayjs().endOf("month")]
          }}
          onChange={onChange}
        />
        <br />
        <RangePicker
          ranges={{
            Today: [dayjs(), dayjs()],
            "This Month": [dayjs().startOf("month"), dayjs().endOf("month")]
          }}
          showTime
          format="YYYY/MM/DD HH:mm:ss"
          onChange={onChange}
        />
      </div>
    );
  }
}

export default PresettedRanges;
