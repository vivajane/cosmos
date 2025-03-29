import React from 'react'
import DashBoardsHeader from '../dashboards/DashBoardsHeader'
import bell from '../../assets/bell.png'

const HelpHeader = () => {
  return (
    <div>
      <DashBoardsHeader title="Help & Support" text="We’re here to assist you with your needs" image={bell}/>
    </div>
  )
}

export default HelpHeader
