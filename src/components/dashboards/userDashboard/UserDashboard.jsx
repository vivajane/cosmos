import React from 'react'
import SideBar from '../sidebar/SideBar'

import Path from './Path'
import UserDashBoardHeader from './UserDashBoardHeader'


const UserDashboard = () => {
  return (
    <div className='flex gap-4 '>
        <div>
        <SideBar/>
        </div>
        <div>
            <UserDashBoardHeader/>
            <Path/>
        </div>
      
    </div>
  )
}

export default UserDashboard
