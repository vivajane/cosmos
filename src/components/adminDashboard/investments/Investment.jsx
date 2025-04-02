import React from 'react'
import InvestmentHeader from './InvestmentHeader'
import InvestmentMetric from './InvestmentOverview'
import IssueUsers from './InvestmentLinks'
import AdminPagination from '../AdminPagination'



const AdminInvestment = () => {
  return (
    <div className='p-4'>
      <InvestmentHeader/>
      <InvestmentMetric/>
      <IssueUsers/>
      <AdminPagination/>

      
    </div>
  )
}

export default AdminInvestment
