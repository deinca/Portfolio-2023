import { Link } from "react-router-dom";
import mailIcon from "../assets/icons/mail-icon.svg";
import phoneIcon from "../assets/icons/call-icon.svg";
import React from "react";

function Nav({ isOpen, closeNav }) {
  return (
    <nav className={`main-navigation ${isOpen ? "open" : ""}`}>
      <ul>
        <li>
          <Link to="/" onClick={closeNav}>
            Homepage
          </Link>
        </li>
        <li>
          <Link to="/front-end-projecten" onClick={closeNav}>
            Front-end Projecten
          </Link>
        </li>
        <li>
          <Link to="/multimedia-projecten" onClick={closeNav}>
            Multimedia Projecten
          </Link>
        </li>
        <li>
          <Link to="/meer-over-mij" onClick={closeNav}>
            Meer over mij
          </Link>
        </li>
        <li>
          <a href="#contact" onClick={closeNav}>
            Contact
          </a>
        </li>
        <li>
          <a className="circle-btn" href="mailto:deiverzc@gmail.com">
            <img src={mailIcon} alt="Mail icon" />
            <span className="disapear">Mail</span>
          </a>
        </li>
        <li>
          <a className="circle-btn" href="tel:0640851029">
            <img src={phoneIcon} alt="Mail icon" />
            <span className="disapear">Bel</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
