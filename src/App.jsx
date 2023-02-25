import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Service from './components/Service'
import Contact from './components/Contact'
import About from './components/About'
import Career from './components/Career'
import { getDatabase } from './notion'

function App() {
  getDatabase()
  return (
    <div className="App ">

    <div >
      <NavBar/>

       <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/service" element={<Service/>}></Route>
            <Route path="/about" element={<About/>}></Route> 
            <Route path="/careers" element={<Career/>}></Route> 
            <Route path="/contact" element={<Contact/>}></Route> 


        </Routes>
      
      
    </div>
      
    </div>
  )
}

export default App
