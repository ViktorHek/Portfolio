import React from 'react'
import './Header.css'
import { Link as LinkScroll } from 'react-scroll'
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
        <LinkScroll to="#" className="nav_Link" smooth>
          Home
        </LinkScroll>
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
        {/* <LinkScroll to="why" className="nav_Link">Why</LinkScroll> */}
        <LinkScroll to="how" className="nav_Link" smooth={true} duration={1000}>
          How
        </LinkScroll>
      </ul>
    </nav>
  )
}

export default Header
