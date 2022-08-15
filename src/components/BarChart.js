import { Bar } from "react-chartjs-2";
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import './Dashboard.css'; 

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
function BarChart() {
  return (
    <div className="bar-wrapper">
      <div className="d-flex flex-row  justify-content-end ">
      <Dropdown overlay={menu}>
                    <a onClick={(e) => e.preventDefault()} className="text-dropdown mt-0" >
                        <Space>
                            <b>Sort by:</b>Yearly
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
                </div>
      <div style={{ maxWidth: "650px" }}>
        <Bar
          data={{
            // Name of the variables on x-axies for each bar
            labels: ["Feb", "Mar", "Apr", "May","June","July","Aug","Sep","Oct"],
            datasets: [
              {
                // Label for bars
                label: "total count/value",
                // Data or value of your each variable
                data: [20, 25, 18,27,25,29,24,35,32],
                // Color of each bar
                backgroundColor: ["blue", "blue", "blue", "blue"],
                // Border color of each bar
                borderColor: ["aqua", "green", "red", "yellow"],
                borderWidth: 0.5,
              },
            ],
          }}
          // Height of graph
          height={260}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
      </div>
    </div>
  );
}
  
export default BarChart;