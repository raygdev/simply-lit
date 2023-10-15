import { React } from 'react'
import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Login, {action as loginAction} from '../src/pages/Login'
import './App.css'
import Layout from '../src/pages/Layout'


  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
  
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='login' element={<Login />} action={loginAction} />
  
  
      </Route>
    )

  ) 

  export default function App() {
  return (
    
      <RouterProvider router={router} />
    
  )
}


