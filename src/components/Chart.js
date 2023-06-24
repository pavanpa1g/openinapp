import React from 'react'
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import './chart.css'

const data = [
  { label: 'Week 1', Guest: 20, User: 18},
  { label: 'Week 2', Guest: 60, User: 40},
  { label: 'Week 3', Guest: 20, User: 28  },
  { label: 'Week 4', Guest: 56, User: 48 },

];

// { label: 'May', sales: 41, leads: 63 },
// { label: 'June', sales: 47, leads: 71 }

export default function Chart() {
  return (
    <div className="row bg-chart-container">
      <div className="col-md-12 legend-container" >
        <div className='activities-container'>
          <h1 className='activities-text'>Activities</h1>
          <p className='date-para'>May-June 2021</p>
        </div>
        <div  className='dot-container'>
          <div className='guest-dot'>
          </div>
          <p>Guest</p>
        </div>
        <div className='dot-container'>
          <div className='user-dot'>
          </div>
          <p>User</p>
        </div>
      </div>

      <div className="section col-md-6">
        <div className="section-content">
          <ResponsiveContainer width="100%" height={212}>
            <LineChart data={data} margin={{ top: 15, right: 0, bottom: 15, left: -30 }}>
              <Tooltip />
              <XAxis dataKey="label" />
              <YAxis />
              <CartesianGrid stroke="#ccc" />
              {/* strokeDasharray="5 5"  */}
              {/* <Legend/> */}
              <Line type="monotone" dataKey="Guest" stroke="#E9A0A0" />
              <Line type="monotone" dataKey="User" stroke="#9BDD7C" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}