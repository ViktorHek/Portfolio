import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          Home
        </Link>
        <Link to="/who">
          Who
        </Link>
        <Link to="/what">
          What
        </Link>
        <Link to="/why">
          why
        </Link>
        <Link to="/how">
          How
        </Link>
      </ul>
    </nav>
  )
}

export default Header
