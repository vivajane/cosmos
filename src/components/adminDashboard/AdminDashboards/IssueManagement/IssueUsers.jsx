import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const IssueUsers = () => { 
  return (
    <div className=' py-6'>
        <div className=' border-b inline-flex text-[#00000080] gap-[0.5px]'>
            <div className='border-x rounded-xl px-12  border-t-2 py-2'>
            <NavLink to="activeusers" className={({})} >Active Users</NavLink>
            </div>
            <div className='border-x rounded-xl px-12  border-t-2 py-2'>
            <NavLink to="pendingusers"  >Users Verification Pending</NavLink>
            </div>
            <div className='border-x rounded-xl px-12  border-t-2 py-2'>
            <NavLink to="suspendedusers" >Suspended Users</NavLink>
            </div>
        </div>
      
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default IssueUsers
