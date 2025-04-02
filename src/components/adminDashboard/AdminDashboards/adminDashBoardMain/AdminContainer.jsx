import React from 'react'
import AdminMetric from './adminDashBoardContainer/AdminMetric'
import AdminInFlow from './adminDashBoardContainer/AdminInFlow'
import AdminGraph from './adminDashBoardContainer/AdminGraph'
import AdminTableOverview from './adminDashBoardContainer/AdminTable'
import AdminUserOverview from './adminDashBoardContainer/AdminUserOverview'
import AdminPagination from '../../AdminPagination'
import Pagination from '../../../investments/newprojects/Pagination'



const AdminContainer = () => {
  return (
    <div>
      
      {/* <AdminMetric/> */}
      <div className='shadow-lg'>
      <AdminInFlow/>
      <AdminGraph/>
      </div>
      <AdminUserOverview/>
      <AdminTableOverview/>
      {/* <AdminPagination/> */}
      <Pagination/>
    
      
    </div>
  )
}

export default AdminContainer
