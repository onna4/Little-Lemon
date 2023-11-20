import React from "react";
import Logo from "../imgicon/icons_assets/Logo.svg";

function Footer() {
  return (
    <footer className="nav footer-nav">
      <img alt="footer-logo" className="footer-logo" src={Logo}></img>
      <nav className="footerNav">
        <h1 className="title">Doormat Navigation</h1>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Reservations</a>
          </li>
          <li>
            <a href="#">Order online</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
      <nav className="footerNav">
        <h1 className="title">Contact</h1>
        <ul>
          <li>
            <a href="#">Address</a>
          </li>
          <li>
            <a href="#">phone number</a>
          </li>
          <li>
            <a href="#">email</a>
          </li>
        </ul>
      </nav>
      <nav className="footerNav">
        <h1 className="title">Social media links</h1>
        <ul>
          <li>
            <a href="#">Address</a>
          </li>
          <li>
            <a href="#">phone number</a>
          </li>
          <li>
            <a href="#">email</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
