import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <h1>Blog App</h1>
        <NavLink to="/" className={(navData) => (navData.isActive ? "active" : 'none')} >Home</NavLink>
        <NavLink to="/blogs" className={(navData) => (navData.isActive ? "active" : 'none')}>Blogs</NavLink>
        <NavLink to="/contact" className={(navData) => (navData.isActive ? "active" : 'none')}>Contact</NavLink>

    </div>
  )
}

export default Header