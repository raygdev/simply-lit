import { React, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Login from '../src/pages/Login'
import './App.css'
import Layout from './pages/Layout'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
