import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Data from './pages/data'
import Signup from './pages/Signup'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/landing' element={<Home/>}></Route>
        {/* <Navbar/> */}
        <Route path='/' element={<Data/>} ></Route>
        {/* <Home/>  */}
        <Route path='/signup' element={<Signup/>} ></Route>
        </Routes>
      
      </BrowserRouter>
    
  )
}

export default App
