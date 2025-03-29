import React from 'react'

const DirectContactLink = () => {
  return (
    <div className='p-4 space-y-2'>
    <h1 className='text-[#000000] font-sanns font-semibold text-xl'>Contact Medium</h1>
    <form action="">
     

      <div>
        <label className='font-normal text-base text-[#1E1E1EBF]' htmlFor="fname">Speak to  Us Directly</label>
        <input  placeholder='  2349124913781'
          className="border w-full py-2 rounded-md my-1"
          type="text"
          name="fname"
          id="fname"
        />
      </div>
      <div>
        <label className='font-normal text-base text-[#1E1E1EBF]' htmlFor="fname">Reach us via email</label>
        <input
        placeholder='  Companyemail@email.com'
          className="border w-full py-2 rounded-md my-1"
          type="text"
          name="fname"
          id="fname"
        />
      </div>
    </form>
  </div>
  )
}

export default DirectContactLink
