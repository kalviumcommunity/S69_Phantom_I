import React from 'react'

function Navbar() {
  return (
    <div>
    
      <nav className="fixed top-0 left-0 w-full bg-black text-white p-4 shadow-lg z-50">
        <div className="container mx-5 flex justify-between items-center">
          <h1 className="text-5xl font-bold">Phantom_I</h1>
          <ul className="flex space-x-4 absolute right-10 top-1/2 transform -translate-y-3.5">
          <li><p className="text-white hover:text-cyan-500 px-4 py-2 rounded-sm transition duration-300 transform -translate-y-2.5">About</p></li>
            <li><button className="text-black bg-white border-2 border-white hover:bg-black hover:text-white px-4 py-2 rounded-sm transition duration-300 transform -translate-y-2.5">Log In</button></li>
      <li><button className="text-black bg-white border-2 border-white hover:bg-black hover:text-white px-4 py-2 rounded-sm transition duration-300 transform -translate-y-2.5">Sign up</button></li>
          </ul> 
        </div>
      </nav>
    </div>
  )
}

export default Navbar
