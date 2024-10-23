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
import ActivateAccount from '../pages/activateAccount'
import CustomerDashboard from '../pages/CustomerDashboard'
import EditProfile from '../pages/EditProfile'
import Profile from '../components/profile'
import ResetPassword from '../pages/ResetPassword'
import DeleteAccount from '../pages/DeleteAccount'



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
              <Route path="/activate/:uidb64/:token" element={<ActivateAccount />} />
              <Route path='/customer/dashboard' element={<CustomerDashboard/>}/>
              <Route path='/edit/profile' element={<EditProfile/>}/>
              <Route path='/user/profile' element={<Profile/>}/>
              <Route path='/user/reset/password' element={<ResetPassword/>}/>
              <Route path='/user/account/delete' element={<DeleteAccount/>}/>
          </Routes>
        
       </BrowserRouter>
    </>
  )
}

export default Router
