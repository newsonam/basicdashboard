import React from 'react';
import { BiSearch } from 'react-icons/bi';
import {MdOutlineDashboard } from 'react-icons/md';
import {AiOutlineBell} from 'react-icons/ai';
import {FiSettings} from 'react-icons/fi';
import { MDBIcon } from 'mdb-react-ui-kit';
import { Avatar } from 'antd';
import './Style.css';
function Topbar({title}) {
    return (
        <>
        <div className='top-wrapper'>
         <h6 className='title fw-bold'>{title}</h6> 
          <div className="icons-wrapper">
            <BiSearch className='icon'/>
            <MDBIcon flag='us' />
            <MdOutlineDashboard className='icon'/>
            <div className='position-relative'>
                <AiOutlineBell className='icon'/>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger badge-font">
    4
    </span>
                </div>
            <FiSettings className='icon'/>
            <Avatar src="https://i.pinimg.com/564x/aa/d7/e4/aad7e4ba2930e2ae2d40cf795b6a1891.jpg" />
         </div> 
         </div> 
        </>
    );
}

export default Topbar;