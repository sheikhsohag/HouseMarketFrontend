import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
// import { Navbar } from 'react-bootstrap'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Cart from '../pages/Cart'
import SignUp from '../pages/SignUp'
import LogIn from '../pages/LogIn'
import LogOut from '../pages/LogOut'
import ProductDetails from '../pages/ProductDetails'



function Router() {
  return (
    <>

       <BrowserRouter>
           <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/signup' element={<SignUp/>}/>
              <Route path='/login' element={<LogIn/>}/>
              <Route path='/logout' element={<LogOut/>}/>
              <Route path='product/:id' element={<ProductDetails/>}/>
          </Routes>
        
       </BrowserRouter>
    </>
  )
}

export default Router