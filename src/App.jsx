import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { useState } from 'react'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Taxregime from './Pages/Taxregime'
import './App.css'

function App() {
  return (
    <Router>
    <div className=' flex flex-col bg-blue-50 min-h-screen'>
      <header className='w-full flex items-center justify-between px-15 py-5 bg-sky-100 '>
        <div className=" flex text-[#233142] font-extrabold text-5xl font- " >
          <h1>inhandly</h1>
        </div>

        <nav className='flex justify-end items-center space-x-10  font-sans font-semibold text-gray-700 text-xl'  >
          <Link to="/" className='hover:text-black transition' >Home</Link>
          <Link to="/taxregime" className='group transition text-gray-700 hover:text-black' >Tax calculator <span className='text-gray-600 group-hover:text-black '>(FY 2024-25 v/s FY 2025-26)</span></Link>
          <Link to="/contactus" className='hover:text-black transition' >Contact Us</Link>
        </nav>
      </header>

      <div className='flex-grow'>
        <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/taxregime' element = {<Taxregime/>} />
        <Route path='/contactus' element = {<Contact/>} />
      </Routes>
      </div>
      

      <footer className=' flex items-center justify-center font-sans ' >        
        <h2 className='flex items-center justify-center py-5 text-gray-500 ' >©2025. inhandly. All calculations are for illustration purposes only  </h2>
      </footer>
      
    </div>
      
    </Router>
  )
}

export default App
