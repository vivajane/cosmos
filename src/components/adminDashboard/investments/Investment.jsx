import React from 'react'
import InvestmentHeader from './InvestmentHeader'
import InvestmentMetric from './InvestmentOverview'
import IssueUsers from './InvestmentLinks'

const AdminInvestment = () => {
  return (
    <div className='p-4'>
      <InvestmentHeader/>
      <InvestmentMetric/>
      <IssueUsers/>

      
    </div>
  )
}

export default AdminInvestment
