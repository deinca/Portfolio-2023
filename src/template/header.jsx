import Nav from "../components/nav";
import svg from "../assets/Logo.svg";
import "../index.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="flex flex-center">
      <div className="header-container box-shadow">
        <div className="logo-brand">
          <HashLink smooth to="/">
            <img src={svg} alt="" />
          </HashLink>
        </div>
        <div
          id="burger"
          className="hamburger-menu menu-toggle"
          onClick={handleMenuToggle}
        >
          <span className="burgertop"></span>
          <span className="burgermiddle"></span>
          <span className="burgerbottom"></span>
        </div>
        <Nav isOpen={isMenuOpen} closeNav={handleMenuToggle} />
      </div>
    </header>
  );
}

export default Header;
