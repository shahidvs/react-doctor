import React,{useState} from 'react'

function Secondnav() {
  const [menuOpen, setMenuOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };


  return (
  
    <div className="bg-[#E5EADC] py-4">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Left side (menu items) */}
          <div className="flex items-center space-x-4 ml-4 md:ml-24 ">
            <a href="#" className="text-[#6F6F6E] hover:text-[#00835A] px-3 py-2 rounded-md text-sm font-medium">Contacts</a>
            <a href="#" className="text-[#6F6F6E] hover:text-[#00835A] px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#" className="text-[#6F6F6E] hover:text-[#00835A] px-3 py-2 rounded-md text-sm font-medium">Services</a>
          </div>
          
          {/* Right side (call back and booking) */}
          <div className="flex items-center mr-4 md:mr-24">
            {/* Toggle menu button */}
            <button className="md:hidden text-[#025239] pr-4" onClick={toggleMenu}>
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
            
            {/* Request call back */}
            <p className="hidden md:block text-[#025239] pr-4 underline hover:underline-offset-1">Request call back</p>
            
            {/* Booking button */}
            <button className="hidden md:block bg-[#025239] text-white font-bold py-2 px-4 rounded w-[216px] h-[41px]">Booking</button>
          </div>
        </div>

        {/* Responsive menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 px-4">
    
            <p className="text-[#025239] mt-2 underline hover:underline-offset-1">Request call back</p>
            <button className="bg-[#025239] text-white font-bold mt-2 py-2 px-4 rounded w-full">Booking</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Secondnav
