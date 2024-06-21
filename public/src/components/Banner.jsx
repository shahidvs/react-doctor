import React from 'react'
import pic from '../img/53390dbb55f624c7f66998cc2395fa75.png'


function Banner() {
  return (
    <div className="flex flex-col lg:flex-row bg-gradient-to-r from-[#1A2517] via-[#638D5C] to-[#628C5B]">
    {/* Left side */}
    <div className="w-full lg:w-1/2 lg:mr-12 p-4 lg:p-8 h-auto lg:h-[631px] flex items-center justify-center">
      <div className="space-y-2 text-center lg:text-left">
        <h1 className="text-white text-3xl lg:text-5xl font-semibold">Discover Optimal Sexual </h1>
        <h1 className="text-white text-3xl lg:text-5xl font-semibold"> Health with Dr. Roy</h1>
        <h1 className="text-white text-3xl lg:text-5xl font-semibold">Sexologist Clinic</h1>
        <div className="text-gray-300 py-4 text-lg lg:text-2xl font-medium">
          <p>Kerala's Trusted Unani Medicine Destination Since 1965</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 justify-center lg:justify-start">
          <button className="bg-[#025239] text-white font-bold py-2 px-4 rounded w-full lg:w-[216px] h-[41px]">Book an appointment</button>
          <button className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded w-full lg:w-[122px] h-[41px]">Know More</button>
        </div>
      </div>
    </div>

    {/* Right side (image side) */}
    <div className="w-full lg:w-1/2 h-[400px] lg:h-[631px] flex items-center justify-center overflow-hidden ">
      <img src={pic} alt="Banner Image" className="w-full h-full object-cover" />
     
    </div>
    
  </div>
  
  )
}

export default Banner
