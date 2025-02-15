import React from 'react'
import SideBar from '../sidebar/SideBar'
import UserDashBoardHeader from './userDashBoardHeader'
import Path from './Path'


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
