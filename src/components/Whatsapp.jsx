import React from 'react'
import pic from '../img/Property 1=Default.png'

function Whatsapp() {
  return (
    <div className='flex justify-end py-2'>
    <div className="ml-auto flex items-center">
      {/* Button */}
      <button className="text-white bg-[#025239] w-[216px] lg:w-[216px] h-[41px] rounded-full px-4 font-bold">Know More</button>
      
   
      <div className='w-4'></div> 
      
      {/* Image */}
      <img src={pic} alt="" className='w-12 h-12 rounded-full' />
    </div>
  </div>
  )
}

export default Whatsapp
