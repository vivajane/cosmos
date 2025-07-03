import React from 'react'

const BulkAction = ({setMarkAsResolved, setBulkDelete, setBulkPending, setShowBulk}) => {
  return (
    <div onClick={setShowBulk} className='fixed inset-0 bg-black bg-opacity-90 flex-col right-0 left-0 bottom-0 top-0 flex items-center justify-center'>
      <div className='bg-white p-6 text-[#424242] rounded-lg h-auto space-y-4 text-center w-auto shadow-md absolute'>
        <ul  className='space-y-2 '>
          <li onClick={() => setMarkAsResolved(true)  || setShowBulk(false)} className='pt-2 cursor-pointer border-b'>Mark selected as Resolved</li>
          <li onClick={() => setBulkPending(true) || setShowBulk(false)}  className='border-b cursor-pointer'>Mark selected as Pending</li>
          <li onClick={() => setBulkDelete(true) || setShowBulk(false)} className='border-b cursor-pointer'>Delete selected issue</li>
        </ul>

      </div>
    </div>
  )
}

export default BulkAction
