import React from 'react'

const Button = ({children}) => {
  return (
    <div>
      <button className='bg-bgGray w-full text-sm sm:text-base border-[1px] border-white rounded-md text-white py-2 px-8'>{children}</button>
    </div>
  )
}

export default Button
