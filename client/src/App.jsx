import { React, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Login, {action as loginAction} from '../src/pages/Login'
import './App.css'
import Layout from '../src/pages/Layout'

export default function App() {
  

  return (
    
      <Routes>
        <Route path='/' element={<Layout />}>

          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='login' element={<Login />} action={loginAction} />

        
        </Route>

      </Routes>
    
  )
}


