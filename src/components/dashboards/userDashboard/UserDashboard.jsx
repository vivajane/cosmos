import React from 'react'
import SideBar from '../sidebar/SideBar'
import Path from './Path'
import UserDashBoardHeader from './UserDashBoardHeader'
import UserChartContainer from './UserChartContainer'
import Notification from './Notification'
import DashBoardTable from './DashBoardTable'


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
            <DashBoardTable/>
        </div>
      
    </div>
  )
}

export default UserDashboard
