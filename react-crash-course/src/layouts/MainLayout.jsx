import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Footer from '../components/Footer'

function MainLayout({children}) {
  return (
    <div>
      <Navbar />
      <Search />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout