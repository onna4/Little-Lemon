import React from "react";
import Logo from "../imgicon/icons_assets/Logo.svg";
import hamIcon from '../imgicon/icons_assets/icon _hamburger menu_.svg'
import basket from '../imgicon/icons_assets/basket .svg'
import { useState } from "react"
import { Link } from 'react-router-dom'

function Header() {

const [navMob, setNavMob] = useState(false)

function toggleNavMob () {
  setNavMob(prevNavMob => !prevNavMob)
}

  return (
    <header>
      <div className="flex-header">
        <button className="navButton" onClick={toggleNavMob}>
          <img src={hamIcon} alt="menu icon" className="icon" />
        </button>
        <img src={Logo} alt="Logo" />
        <img src={basket} alt="basket icon" className="icon" />
      </div>
      {navMob && (
        <ul className="navList" onClick={toggleNavMob}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#menu">Menu</a>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <a href="#">Order online</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Header;