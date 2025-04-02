import React from 'react'
import InvestmentHeader from './InvestmentHeader'
import InvestmentMetric from './InvestmentOverview'
import IssueUsers from './InvestmentLinks'
// import AdminPagination from '../AdminPagination'
import Pagination from '../../investments/newprojects/Pagination'



const AdminInvestment = () => {
  return (
    <div className='p-4'>
      <InvestmentHeader/>
      <InvestmentMetric/>
      <IssueUsers/>
      <Pagination/>

      
    </div>
  )
}

export default AdminInvestment
