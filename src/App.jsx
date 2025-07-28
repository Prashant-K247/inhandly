import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'
import Scrolltop from './Components/Scrolltop'
import { useState } from 'react'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Taxregime from './Pages/Taxregime'
import './App.css'

function App() {
  const [menuopen,setmenuopen] =useState(false);
  return (
    <Router>
    <div className=' flex flex-col bg-blue-50 min-h-screen'>
      <header className='w-full px-4 py-5 bg-sky-100 '>
        <div className='max-w-7xl mx-auto flex items-center justify-between'>
          <div className=" text-[#233142] font-extrabold text-3xl sm:text-4xl md:text-5xl " >
            <h1>inhandly</h1>
          </div>

          {/* HAMBURGER BUTON */}
          <button className='md:hidden focus:outline-none' onClick={()=>setmenuopen(!menuopen)}>
             <svg className='w-8 h-8 text-gray-700' fill='none' stroke='currentColor'viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path  strokeLinecap='round'  strokeLinejoin='round'  strokeWidth={2}  d={menuopen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}/>
             </svg>
          </button>

          <nav className='hidden md:flex space-x-10 font-sans font-semibold text-gray-700 text-xl'  >
            <NavLink to="/" className={({ isActive }) =>`block px-4 py-2 rounded-xl transition ${isActive ? 'bg-blue-200 text-black font-semibold' : 'text-gray-700 hover:bg-blue-100'}`}>Home</NavLink>
            <NavLink to="/taxregime" className={({isActive})=>`block px-4 py-2 rounded-xl transition ${isActive ? 'bg-blue-200 text-black font-semibold': 'text-gray-700 hover:bg-blue-100'} `} > Tax calculator <span className='text-gray-600 group-hover:text-black '>(FY 2024-25 v/s FY 2025-26)</span></NavLink>
            <NavLink to="/contactus" className={({isActive})=> `block px-4 py-2 rounded-xl transition ${isActive ? 'bg-blue-200 text-black font-semibold': 'text-gray-700 hover:bg-blue-100'}`} >Contact Us</NavLink>
          </nav>
        </div>

        {menuopen && (
          <div className='md:hidden mt-3 px-2 space-y-2 font-semibold text-gray-700 text-lg text-left'>
            
            <NavLink to="/" className={({ isActive }) =>`block px-4 py-2 rounded-xl transition ${isActive ? 'bg-blue-200 text-black font-semibold' : 'text-gray-700 hover:bg-blue-100'}`} onClick={()=> setmenuopen(false)}> <span className="text-xl">•</span>  Home</NavLink>
            <NavLink to="/taxregime" className={({isActive})=>`block px-4 py-2 rounded-xl transition ${isActive ? 'bg-blue-200 text-black font-semibold': 'text-gray-700 hover:bg-blue-100'} `} onClick={()=> setmenuopen(false)} > <span className="text-xl">•</span>Tax calculator (FY 2024-25 v/s FY 2025-26)</NavLink>
            <NavLink to="/contactus" className={({isActive})=> `block px-4 py-2 rounded-xl transition ${isActive ? 'bg-blue-200 text-black font-semibold': 'text-gray-700 hover:bg-blue-100'}`} onClick={()=> setmenuopen(false)} > <span className="text-xl">•</span>  Contact Us</NavLink>
                        
          </div>
        )}
      </header>

      <div className='flex-grow'>
        <Scrolltop/>
        <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/taxregime' element = {<Taxregime/>} />
        <Route path='/contactus' element = {<Contact/>} />
      </Routes>
      </div>
      

      <footer className=' px-4 sm:px-20 flex items-center justify-center font-sans ' >        
        <h2 className='flex items-center justify-center py-5 text-gray-500 ' >©2025. inhandly. All calculations are for illustration purposes only  </h2>
      </footer>
      
    </div>
      
    </Router>
  )
}

export default App
