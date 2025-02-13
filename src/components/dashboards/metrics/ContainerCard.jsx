import React from 'react'
import Card from './Cards'
import RoiGrowth from './RoiGrowth'
import Graph from './Graph'
import ProjectOverview from './ProjectOverview'

const ContainerCard = () => {
  return (
    <div>
      <Card/>
      <div className='shadow-lg'>
      <RoiGrowth/>
      <Graph/>
      </div>
      <ProjectOverview/>
    </div>
  )
}

export default ContainerCard
