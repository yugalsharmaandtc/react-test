import React from 'react'

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm">
      <div className="flex items-center space-x-4">
        <span className="text-xl font-bold text-blue-600">Meals</span>
        {/* Add more nav links here if needed */}
      </div>
      
    </nav>
  )
}

export default Navbar