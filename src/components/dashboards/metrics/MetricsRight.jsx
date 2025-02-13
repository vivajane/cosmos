import React from 'react'

const MetricsRight = () => {
  return (
    <div className='py-3'>
      <h1 className='font-sanns font-semibold text-base'>Recent Activities</h1>
      <p className='font-sanns text-[#00000080] text-[13px] font-normal'>5 new activities today</p>
      <div className='flex gap-4 items-center py-3'>
        <div className='bg-[#FA9E734D] text-[#FA9E73] px-2 py-[2px] rounded-md font-medium text-[13px]'>Today</div>
        <div className='text-[#00000080] font-medium text-[13px]'>Yesterday</div>
        <div className='text-[#00000080] font-medium text-[13px]'>This week</div>
      </div>
    </div>
  )
}

export default MetricsRight
