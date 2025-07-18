import React from 'react'
import MetricAdmin from '../adminDashBoardMain/adminDashBoardContainer/MetricProps'


const issues = [
    {
        id:1,
        title:"TOTAL ACTIVE USERS",
        balance:10344,
    },
    {
        id:2,
        title:"PENDING VERIFICATION",
        balance: 1234,
    },
    {
        id:3,
        title:"SUSPENDED USERS",
        balance: 10
    },

]
const UserMetric = () => {
  return (
    <div >
        <div>
            <h1 className="font-sanns pt-8 font-medium text-[22px]">User Metric Overview</h1>
        </div>
        <div className='md:flex justify-start md:space-y-0 space-y-2 gap-12 border-b-2 border-dotted py-6'>
        {issues.map((issue) =>(
            <div className="border-l pl-1 first:border-l-0"   key={issue.id}>
                 <MetricAdmin title={issue.title} balance={issue.balance}/>
            </div>

        ))}
        </div>
     
    </div>
  )
}

export default UserMetric
