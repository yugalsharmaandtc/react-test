import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Footer from '../components/Footer'

function MainLayout({children}) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout

// Children prop is used to render the content passed between the opening and closing tags of MainLayout in App.jsx. Chilldren is coming from App.jsx where we are passing the Cards component as children to MainLayout.