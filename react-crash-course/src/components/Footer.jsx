import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-8 border-t text-gray-500 text-sm">
      © {new Date().getFullYear()} Meals. All rights reserved.
    </footer>
  )
}

export default Footer