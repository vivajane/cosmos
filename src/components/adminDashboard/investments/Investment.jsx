import React from 'react'
import InvestmentHeader from './InvestmentHeader'
import InvestmentMetric from './InvestmentOverview'
import { Outlet } from 'react-router-dom'




const AdminInvestment = () => {
  return (
    <div className='p-4'>
      <InvestmentHeader/>
      <InvestmentMetric/>
      <Outlet/>
    </div>
  )
}

export default AdminInvestment
