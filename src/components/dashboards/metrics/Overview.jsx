import React from 'react'
import MetricsLeft from './MetricsLeft'
import MetricsRight from './MetricsRight'
import MetricsHeader from './MetricsHeader'
import MetricsMain from './MetricsMain'

const Overview = () => {
  return (
    <div className=' px-4'>
      <div>
      <MetricsHeader/>
      </div>
      <div>
      <MetricsMain/>
      </div>
      
    </div>
  )
}

export default Overview
