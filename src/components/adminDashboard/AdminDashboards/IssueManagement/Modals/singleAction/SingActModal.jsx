import React from 'react'

const SingActModal = ({setShowResolved, setShowSingleFilter}) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center'>
      <div className='bg-white p-6 text-[#424242] rounded-lg h-auto space-y-4 text-center w-44 shadow-md absolute   right-0 bottom-40'>
        <ul className='space-y-2 '>
          <li onClick={() => setShowResolved(true) || setShowSingleFilter(false)} className='pt-2 border-b'>Mark as Resolved</li>
          <li className='border-b'>Mark as Pending</li>
          <li className='border-b'>Delete this issue</li>
        </ul>

      </div>
    </div>
  )
}

export default SingActModal
