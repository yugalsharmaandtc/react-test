import { useState } from 'react'
import './App.css'
import Cards from './components/cards'
import MainLayout from './layouts/MainLayout'
  

function App() {
  return (
    <MainLayout>


    <Cards img="https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" title="Pasta1" description="This is pasta 1 delicious pasta 1"/>
    <Cards img="https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" title="Pasta2" description="This is pasta 2 delicious pasta 2"/>
  </MainLayout>
  )
}

export default App
