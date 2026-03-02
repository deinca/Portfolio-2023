import { HashLink } from "react-router-hash-link";
import mailIcon from "../assets/icons/mail-icon.svg";
import phoneIcon from "../assets/icons/call-icon.svg";
import React from "react";


function Nav({ isOpen, closeNav }) {
  return (
    <nav className={`main-navigation ${isOpen ? "open" : ""}`}>
      <ul>
        <li>
          <HashLink smooth to="/#firstSection" onClick={closeNav}>
            Homepage
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/front-end-projecten#firstSection" onClick={closeNav}>
            Front-end Projecten
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/multimedia-projecten#firstSection" onClick={closeNav}>
            Multimedia Projecten
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/meer-over-mij#firstSection" onClick={closeNav}>
            Meer over mij
          </HashLink>
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
