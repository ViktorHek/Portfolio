import React from 'react'
import './Header.css'
import { Link as LinkScroll } from 'react-scroll'
import {Link as LinkRoute} from 'react-router-dom'
import { animateScroll } from 'react-scroll'

const Header = () => {
  return (
    <nav className="main_header_container">
      <img
        src="/images/doodle_kodak_right.png"
        alt="Home"
        className="header_img"
        onClick={() => animateScroll.scrollToTop()}
      />
      <ul className="header_menu_container">
        <LinkRoute to="/" className="nav_Link">
          Home
        </LinkRoute>
        <LinkScroll
          to="what"
          className="nav_Link"
          smooth={true}
          duration={1000}
        >
          What
        </LinkScroll>
        <LinkScroll to="who" className="nav_Link" smooth={true} duration={1000}>
          Who
        </LinkScroll>
        <LinkRoute to="/why" className="nav_Link">Why</LinkRoute>
        <LinkScroll to="how" className="nav_Link" smooth={true} duration={1000}>
          How
        </LinkScroll>
      </ul>
    </nav>
  )
}

export default Header
