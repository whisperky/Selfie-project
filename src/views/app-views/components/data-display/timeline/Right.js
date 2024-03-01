import React, { Component } from "react";
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

export class Right extends Component {
  render() {
    return (
      <Timeline
        mode="right"
        items={[
          {
            children: 'Create a services site 2015-09-01',
          },
          {
            children: 'Solve initial network problems 2015-09-01',
          },
          {
            dot: (
              <ClockCircleOutlined
                style={{
                  fontSize: '16px',
                }}
              />
            ),
            color: 'red',
            children: 'Technical testing 2015-09-01',
          },
          {
            children: 'Network problems being solved 2015-09-01',
          },
        ]}
      />
    );
  }
}

export default Right;
