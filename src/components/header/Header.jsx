import React from 'react'
import './Header.css'
import { Link as LinkScroll } from 'react-scroll'

const Header = () => {
  return (
    <nav className="main_header_container">
      <ul className="header_menu_container">
        <LinkScroll to="#" className="nav_Link">Home</LinkScroll>
        <LinkScroll to="who" className="nav_Link">Who</LinkScroll>
        <LinkScroll to="what" className="nav_Link">What</LinkScroll>
        <LinkScroll to="why" className="nav_Link">Why</LinkScroll>
        <LinkScroll to="how" className="nav_Link">How</LinkScroll>
      </ul>
    </nav>
  )
}

export default Header
