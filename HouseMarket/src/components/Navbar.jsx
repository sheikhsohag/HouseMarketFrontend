import React from 'react'
import { NavLink } from 'react-router-dom'


function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <NavLink to={'/'} className="navbar-brand">HouseMarket</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <NavLink to={'/'} className="nav-link active">Home
            <span className="visually-hidden">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/cart'} className="nav-link">Cart</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">NewUser?</a>
          <div className="dropdown-menu">
            <NavLink to={'/login'} className="dropdown-item">LogIn</NavLink>
            <NavLink to={'/signup'} className="dropdown-item">SignUp</NavLink>
            <div className="dropdown-divider"></div>
            <NavLink to={'/logout'} className="dropdown-item">LogOut</NavLink>
          </div>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-sm-2" type="search" placeholder="Search"/>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    
    </>
  )
}

export default Navbar
