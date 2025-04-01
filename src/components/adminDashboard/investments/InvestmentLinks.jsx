import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const IssueUsers = () => { 
  return (
    <div className=' py-6'>
        <div className=' border-b inline-flex text-[#00000080] gap-[0.5px]'>
            <div className='border-x rounded-xl px-12  border-t-2 py-2'>
            <NavLink to="investbrk" className={({})} >Investment Breakdown</NavLink>
            </div>
            <div className='border-x rounded-xl px-12  border-t-2 py-2'>
            <NavLink to="finantrans"  >Financial Transactions</NavLink>
            </div>
            
        </div>
      
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default IssueUsers
