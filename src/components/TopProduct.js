import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
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

function TopProduct(props) {
    return (
        <div className='top-product'>
            <div className="d-flex flex-row  justify-content-between top-heading">
                <h6 className='fw-bold'>Top Product</h6>
                {/* <h6 className="text-font">Monthly</h6> */}
                

                <Dropdown overlay={menu}>
                    <a href="!#" onClick={(e) => e.preventDefault()} className="text-dropdown mt-0" >
                        <Space>
                            Monthly
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
             
            </div>
            <div className='d-flex flex-row justify-content-start gap-3'>
                <span className="pie-icon">#1</span>
                <div className="content1">
                    <h6 className="text-font">Polo blue t-shirt</h6>
                    <h6>$ 25.4</h6>
                </div>
            </div>
            <div className='d-flex flex-row justify-content-start gap-3'>
                <span className="pie-icon">#2</span>
                <div className="content1">
                    <h6 className="text-font">Hoodie for men</h6>
                    <h6>$ 25.4</h6>
                </div>
            </div>
            <div className='d-flex flex-row justify-content-start gap-3'>
                <span className="pie-icon">#3</span>
                <div className="content1">
                    <h6 className="text-font">Red color cap</h6>
                    <h6>$ 25.4</h6>
                </div>
            </div>
            <div className='d-flex flex-row justify-content-start gap-3'>
                <span className="pie-icon">#4</span>
                <div className="content1">
                    <h6 className="text-font">Pocket t-shirt</h6>
                    <h6>$ 25.4</h6>
                </div>
            </div>

        </div>
    );
}

export default TopProduct;