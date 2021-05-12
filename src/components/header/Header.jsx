import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="main_header_container">
      <ul className="header_menu_container">
        <Link to="/" className="nav_link">Home</Link>
        <Link to="/who" className="nav_link">Who</Link>
        <Link to="/what" className="nav_link">What</Link>
        <Link to="/why" className="nav_link">Why</Link>
        <Link to="/how" className="nav_link">How</Link>
      </ul>
    </nav>
  )
}

export default Header
