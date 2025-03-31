import React from 'react'
import HeaderIssue from './HeaderIssue'
import UserMetric from './UserMetric'
import IssueUsers from './IssueUsers'

const IssueMPage = () => {
  return (
    <div className='px-4'>
     <HeaderIssue/>
     <UserMetric/>
     <IssueUsers/>
    </div>
  )
}

export default IssueMPage
