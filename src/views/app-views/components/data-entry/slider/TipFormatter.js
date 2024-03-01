import { Slider } from 'antd';
import React from 'react';
const formatter = (value) => `${value}%`;
const TipFormatter = () => (
  <>
    <Slider
      tooltip={{
        formatter,
      }}
    />
    <Slider
      tooltip={{
        formatter: null,
      }}
    />
  </>
);
export default TipFormatter;
