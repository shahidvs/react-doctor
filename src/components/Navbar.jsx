import React, { useState } from 'react'
import img from '../img/image 13.png'
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";


function Navbar() {
  const [showDropdown,setShowDropdown] =useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick =(item)=>{
    setSelectedItem(item);
    setShowDropdown(false);
  }
  return (
    
    <div className='flex justify-between items-center h-25 w-full mx-auto px-8 lg:px-28 text-white bg-[#025239]'>
      <div className="flex items-center">
        <img src={img} alt="" />
        <div className="ml-2">
          <h1 className='text-3xl font-serif'>DR. ROY MEDICAL HALL</h1>
          <p>Sexologist Doctor- Sexologist Clinic <br />Established at 1960</p>
        </div>
      </div>
      {/* Right side */}
      <div className="flex items-center space-x-4 lg:ml-auto">
        <div className="grid grid-cols gap-2">
          <p className="">Clinic timings: 10am to 1pm 2pm to 9pm</p>
          <div className="grid grid-flow-col gap-3 items-center">
            <div><BsTelephone size={24} /></div>123456
            <div><MdOutlineMailOutline size={24} /></div>afir34@gmail
          </div>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder={selectedItem || "Language"}
            className="w-[136px] bg-white rounded-md shadow-md pl-3 p-2 focus:outline-none font-bold"
            readOnly // Make input read-only
            onClick={() => setShowDropdown(!showDropdown)}
          />
          <RiArrowDropDownLine
            size={22}
            color="black"
            onClick={() => setShowDropdown(!showDropdown)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          />
          {showDropdown && (
            <div className="absolute mt-10 bg-white border border-gray-200 rounded-md shadow-md p-2 text-black">
              <ul>
                <li onClick={() => handleClick("English")} className='font-bold text-gray-700 hover:bg-slate-500 hover:text-white'>English</li>
                <li onClick={() => handleClick("Malayalam")} className='font-bold text-gray-700 hover:bg-slate-500 hover:text-white'>Malayalam</li>
                <li onClick={() => handleClick("Hindi")} className='font-bold text-gray-700 hover:bg-slate-500 hover:text-white'>Hindi</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
);
}



export default Navbar
