import React from 'react'
import { Link as LinkRoute } from 'react-router-dom'
import './Header.css'

const HamburgerMenu = () => {
  return (
    <div >
      <ul className="hamburger_menu_container">
        <li>
          <LinkRoute to="/">Home</LinkRoute>
        </li>
        <li>
          <LinkRoute to="/why" className="nav_Link">
            Why
          </LinkRoute>
        </li>
      </ul>
    </div>
  )
}

export default HamburgerMenu
