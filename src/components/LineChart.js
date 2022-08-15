import React from "react";
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import './Dashboard.css';

import { Line } from "react-chartjs-2";
import {
    Line as LineJS
  
  } from 'chart.js/auto';
  const menu = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        1st menu item
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        2nd menu item
                    </a>
                ),
            },

        ]}
    />
);
 
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Current",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "#ff0000"
    },
    {
      label: "Previous",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#0000ff"
    }
  ]
};

export default function LineChart() {
  return (
    <div className="line-wrapper">
        <div className="top-line-wrapper">
            <h6 className='fw-bold'>User Activity</h6>
            {/* <h6 className="text-font">Weekly</h6> */}
            <Dropdown overlay={menu}>
                    <a onClick={(e) => e.preventDefault()} className="text-dropdown mt-0" >
                        <Space>
                            Weekly
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
        </div>
        <div className="middle-line-wrapper">
            <h6 className="text-font">This Month</h6>
            <h6 className='fw-bold'>16,543</h6>
        </div>
      <Line data={data} height={280}/>
    </div>
  );
}
