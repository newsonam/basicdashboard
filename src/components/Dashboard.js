import React from 'react';
import { FaChartPie, FaUserFriends, FaWpforms } from 'react-icons/fa';
import { BsInfoCircle } from 'react-icons/bs';
import { Avatar } from 'antd';
import DoughnutChart from './DoughnutChart';
import LineChart from './LineChart';
import Topbar from './Topbar';
import TopProduct from './TopProduct';
import BarChart from './BarChart';
import ProgressbarSemi from './ProgressbarSemi';
import './Dashboard.css';
function Dashboard(props) {
    return (
        <div className='dashboard-wrapper'>
            <Topbar title='Dashboard' />
            <div className=" row dashboard-left-right-wrapper">
                <div className=" col-sm-8 dashboard-left-wrapper">
                    <div className="top-content-wrapper">
                        <div className="revenue-wrapper">
                            <div className='content'>
                                <span className="pie-icon"><FaChartPie /></span>
                                <div>
                                    <h5 className="text-font">Revenue</h5>
                                   
                                      <h6 className='fw-bold'>$21,456 </h6>   
                                    </div>
                                </div>
                            </div>

                        

                        <div className="order-wrapper">
                            <div className='content'>
                                <span className="order-icon"><FaWpforms /></span>
                                <div>
                                    <h6 className="text-font">Orders</h6>
                                    <h6 className='fw-bold'>5,643</h6>
                                </div>
                            </div>

                        </div>


                        <div className="customer-wrapper">
                            <div className='content'>
                                <span className="user-icon"><FaUserFriends /></span>
                                <div>
                                    <h6 className="text-font">Customers</h6>
                                    <h6 className='fw-bold'>45,254</h6>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="bar-content-wrapper">
                     
                        <div className="bar-left">
                            <h6 className='d-flex flex-row justify-content-start mb-3 fw-bold'>Overview</h6>

                            <div className="content-bar-left1">
                                <h6 className="text-font">This Month</h6>
                                <h6 className='fw-bold'>$24,568 <span class="number">+2.65%</span></h6>
                            </div>
                            <div className="content-bar-left2">
                                <div>
                                    <h6 className="text-font">Orders</h6>
                                    <h6 className='fw-bold'>5,643</h6>
                                </div>
                                <div>
                                    <h6 className="text-font">Sales</h6>
                                    <h6 className='fw-bold'>16,273</h6>
                                </div>
                            </div>
                            <div className="content-bar-left3">
                                <div>
                                    <h6 className="text-font">Order Value</h6>
                                    <h6 className='fw-bold'>12.03%</h6>
                                </div>
                                <div>
                                    <h6 className="text-font">Customers</h6>
                                    <h6 className='fw-bold'>21,456</h6>
                                </div>
                            </div>
                            <div className="content-bar-left4">
                                <div>
                                    <h6 className="text-font">Income</h6>
                                    <h6 className='fw-bold'>$35,652</h6>
                                </div>
                                <div>
                                    <h6 className="text-font">Expenses</h6>
                                    <h6 className='fw-bold'>$12,248</h6>
                                </div>
                            </div>

                        </div>
                        
                        <BarChart />
                    </div>
                    <div className='chart-wrapper'>
                        <LineChart />
                        <DoughnutChart />
                        <TopProduct />
                    </div>



                </div>

                {/* DASHBOARD RIGHT WRAPPER */}
                <div className="col-sm-3 dashboard-right-wrapper">
                    

                        <img className='image-wrapper' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kWo-UNwSdPNjZrrgMhvpnUDBQwCEf0O99PQXm92oVPjJAYs9jpn3Qcb_idI9ds6jyys&usqp=CAU" alt="" />
                       
                        <Avatar size={64} className="profile-wrapper" src="https://i.pinimg.com/564x/aa/d7/e4/aad7e4ba2930e2ae2d40cf795b6a1891.jpg" />

                  
                    <h5 className="fw-bold">Jennifer Bennett</h5>
                    <p className="text-font">Product Designer</p>
                    <div className='d-flex flex-row justify-content-center gap-5 mt-3'>
                        <div>
                            <h6 className='fw-bold'>1269</h6>
                            <h6 className="text-font">Products</h6>
                        </div>
                        <div>
                            <h6 className='fw-bold'>5.2k</h6>
                            <h6 className="text-font">Followers</h6>
                        </div>
                    </div>
                    <hr />
                    <div className='d-flex flex-row justify-content-evenly gap-5'>
                        <h6 className='fw-bold'>Earning</h6>
                        <BsInfoCircle />
                    </div>
                    <ProgressbarSemi/>

                    <div>
                        <h6 className='fw-bold mt-2'>$26,256</h6>
                        <h6 className="text-font">Earning this month</h6>
                        <div className='d-flex flex-row justify-content-center gap-1 mt-3'> <span class="number">+2.65%</span><h6 className="right-text-font">From previous period </h6></div>
                    </div>
                    <hr />
                    <h6 className='d-flex flex-row justify-content-start fw-bold px-2'>Recent Activity</h6>
                    <div className='d-flex flex-row justify-content-start gap-1 mb-3 px-1'><span className="date-wrapper">12 Sep</span> <div className="activity-font">Responded to need "Volunteer Activities" </div></div>
                    <div className='d-flex flex-row justify-content-start gap-1 mb-3 px-1'><span className="date-wrapper">11 Sep</span><div className="activity-font">Everyone realizes would be desirable </div></div>
                    <div className='d-flex flex-row justify-content-start gap-1 px-1'><span className="date-wrapper">10 Sep</span><div className="activity-font">Joined the group "Boardsmanship Forum"</div></div>
                </div>
            </div>
        </div>






    );
}

export default Dashboard;