import React from 'react'
import Home from './pages/Home'
import './App.css'
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'
import Data from './pages/data'
import Signup from './pages/Signup'
import Update from './components/Update'
import Delete from './components/Delete'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/landing' element={<Home/>}></Route>
        {/* <Navbar/> */}
        <Route path='/' element={<Data/>} ></Route>
        {/* <Home/>  */}
        <Route path='/signup' element={<Signup/>} ></Route>
        <Route path='/update/:email' element={<Update/>}></Route>
        <Route path='/delete/:email' element={<Delete/>}></Route>
        </Routes>
      
      </BrowserRouter>
    
  )
}

export default App
