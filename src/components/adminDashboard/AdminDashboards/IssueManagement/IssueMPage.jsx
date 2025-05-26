import React from 'react'
import HeaderIssue from './HeaderIssue'
import UserMetric from './UserMetric'
import IssueUsers from './IssueUsers'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const IssueMPage = () => {
 
  return (
    <div className='px-4'>
     <HeaderIssue/>
     <UserMetric/>
     {/* <IssueUsers/> */}
     <Outlet/>
    </div>
  )
}

export default IssueMPage
