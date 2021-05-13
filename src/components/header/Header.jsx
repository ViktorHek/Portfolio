import React, { useState } from 'react'
import './Header.css'
import { Link as LinkScroll } from 'react-scroll'
import { Link as LinkRoute } from 'react-router-dom'
import { animateScroll } from 'react-scroll'
// import HamburgerMenu from './HamburgerMenu'

const Header = () => {
  const [isClicked, setIsClicked] = useState(false)

  const hamburgerToggle = () => setIsClicked(!isClicked)
  const closeHamburger = () => setIsClicked(false)

  return (
    <nav className="main_header_container">
      <LinkRoute to="/">
        <img
          src="/images/doodle_kodak_right.png"
          alt="Home"
          className="header_img"
          onClick={() => animateScroll.scrollToTop()}
        />
      </LinkRoute>
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
        <LinkScroll to="how" className="nav_Link" smooth={true} duration={1000}>
          How
        </LinkScroll>
      </ul>
      <div
        className={
          isClicked ? 'hamburger_menu_container_active' : 'hamburger_container'
        }
        onClick={hamburgerToggle}
      >
        {isClicked ? (
          <>
            <div className="Xit_icon_container">
              <img
                src="images/Xit.png"
                alt="Exit"
                onClick={closeHamburger}
                className="Xit_icon"
              />
            </div>
            <ul className="hamburger_menu_container">
              <img src="/images/web_affichbild.jpg" alt=" " className="hamburger_background"/>
              <li>
                <LinkRoute to="/" className="hamburger_link">
                  Home
                </LinkRoute>
              </li>
              <li>
                <LinkRoute to="/why" className="hamburger_link">
                  Why
                </LinkRoute>
              </li>
            </ul>
          </>
        ) : (
          <img
            src="images/hamburger_menu_border_new.png"
            alt="Menu"
            className="hamburger_img"
          />
        )}
      </div>
    </nav>
  )
}

export default Header
