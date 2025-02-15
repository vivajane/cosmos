import React from 'react'
import SideBar from '../sidebar/SideBar'
import Path from './Path'
import UserDashBoardHeader from './UserDashBoardHeader'
import UserChartContainer from './UserChartContainer'
import Notification from './Notification'


const UserDashboard = () => {
  return (
    <div className='flex gap-4 '>
        <div>
        <SideBar/>
        </div>
        <div>
            <UserDashBoardHeader/>
            <Path/>
            <UserChartContainer/>
            <Notification/>
        </div>
      
    </div>
  )
}

export default UserDashboard
