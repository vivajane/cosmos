import React from 'react'
import DashBoardsHeader from '../../dashboards/DashBoardsHeader'
import bell from "../../../assets/bell.png"

const SettingsHeader = () => {
  return (
    <div className=''>
      <DashBoardsHeader title="Settings" text="Your account settings, all in one place" image={bell}/>
    </div>
  )
}

export default SettingsHeader
