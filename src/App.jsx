import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Link, Route, Routes} from 'react-router-dom'
import React from 'react'
import Navbar from './components/Navbar'
import Error from './pages/Error'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Details from './pages/Details'
import Products from './pages/Products'
import Card from './components/Card'



function App() {
 

  return (
    <>
     <Navbar /> 

      <Routes>
<Route path='/' element={<Home />} />
<Route path='/products' element={<Products />} />
<Route path='/contact' element={<Contact />} />
<Route path='/details/:id' element={<Details />} />
<Route path='*' element={<Error />} />



      </Routes>



    </>
  )
}

export default App
