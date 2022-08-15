import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import {FaEllipsisH } from 'react-icons/fa';

  const data = {
    labels: ['Completed','Pending','Cancel'],
    datasets: [
        {
            label: 'Attendance for Week 1',
            data: [60,30,10],
            borderColor: ['rgba(255,206,86,0.2)'],
            backgroundColor: ['rgba(54,162,235,1)',
            'rgba(232,99,132,1)',
            'rgba(232,211,6,1)',
            'rgba(255,159,64,1)',
            'rgba(153,102,255,1)' ],
            pointBackgroundColor: 'rgba(255,206,86,0.2)',
        }

    ]
}

const options = {
    plugins: {
        title: {
           
            font: {
                size:20
            },
            padding:{
                top:50,
               
            },
            responsive:true,
            animation:{
                animateScale: true,
                           }
        }
    }

}
function DoughnutChart() {
    
    return (
        <div className='doughnut-wrapper'>
            <div className="d-flex flex-row justify-content-between p-2 order">
                <h6 className='fw-bold p-3'>Order Stats</h6>
               < FaEllipsisH/>
               
            </div>
            <Doughnut data={data} options={options} />
        </div>
    );
}

export default DoughnutChart;