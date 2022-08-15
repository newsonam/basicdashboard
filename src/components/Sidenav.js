import React,{useState} from 'react';
import { FaBars,FaUserAlt,FaWpforms,FaCoins,FaDatabase } from 'react-icons/fa';
import {MdOutlineDashboard } from 'react-icons/md';
import {AiOutlineCalendar,AiOutlineFileText,AiOutlineMail } from 'react-icons/ai';
 import {BsChatDots } from 'react-icons/bs';
import {TbFileInvoice } from 'react-icons/tb';
import {BsBagDash } from 'react-icons/bs';
 import {BiCubeAlt } from 'react-icons/bi';
import {Link} from "react-router-dom";
import './Style.css';


function Sidenav(props) {
    const [inactive,setInactive]=useState(false);
    return (
        <div className={`side-menu ${inactive ? "inactive":" "}`}>
            <div className="top-section">
            <span onClick={()=>setInactive(!inactive)}><FaBars className='icon-bar'  /></span>
            </div>
            <div className="main-menu">
            <h6 className='menu-heading'>MENU</h6>

            <ul className='menu-list'>
                
                   <Link to="/" className='dashboard-link'><MdOutlineDashboard/><span className='link-text'> Dashboards</span></Link> 
               
               <h6 className='application-heading'>APPLICATIONS</h6>
              
                   <Link to="/" className='dashboard-link'><AiOutlineCalendar/><span className='link-text'>Calendar</span></Link> 
              

              <div className='d-flex flex-row justify-content-center gap-8'>
                   <Link to="/" className='dashboard-link'><BsChatDots/><span className='link-text'> Chat </span></Link> 
                   <span class="badge text-danger badge-text"><span className='link-text'>Hot</span></span>
                   </div>
             
                   <Link to="/" className='dashboard-link'><TbFileInvoice/> <span className='link-text'>File Manager</span></Link> 
              
                
            
                   <Link to="/" className='dashboard-link'><MdOutlineDashboard/><span className='link-text'>E-commerce</span></Link> 
               

              
                   <Link to="/" className='dashboard-link'><AiOutlineMail/> <span className='link-text'>Email</span></Link> 
              

              
                   <Link to="/" className='dashboard-link'><TbFileInvoice/> <span className='link-text'>Invoices</span></Link> 
              

              
                   <Link to="/" className='dashboard-link'><BsBagDash/><span className='link-text'> Projects </span></Link> 
                   <Link to="/" className='dashboard-link'><BsBagDash/><span className='link-text'> Contacts </span></Link>


                <h6 className='layout-heading mb-3'>LAYOUTS</h6>

                <h6 className='pages-heading mb-3'>PAGES</h6>

                
                <div className='d-flex '>
                   <Link to="/" className='dashboard-link'><FaUserAlt/><span className='link-text'>Authentication</span></Link> 
                 </div>

                   <Link to="/" className='dashboard-link'><BiCubeAlt/><span className='link-text'> Utility</span></Link> 
               
                   
               

                <h6 className='component-heading'>COMPONENTS</h6>
             
                   <Link to="/" className='dashboard-link'><FaDatabase/><span className='link-text'> UI Elements</span></Link> 
               
                   <Link to="/" className='dashboard-link'><FaWpforms/><span className='link-text'> Forms</span></Link> 
             

            </ul>
            </div>
        </div>
    );
}

export default Sidenav;