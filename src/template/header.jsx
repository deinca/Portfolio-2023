import Nav from "../components/nav";
import svg from "../assets/Logo.svg";
import "../index.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="box-shadow">
      <div className="logo-brand">
        <Link to="/" >
          <img src={svg} alt="" />
        </Link>
      </div>
      <div id="burger" className="hamburger-menu menu-toggle" onClick={handleMenuToggle}>
          <span className="burgertop"></span>
          <span className="burgermiddle"></span>
          <span className="burgerbottom"></span>
        </div>
      <Nav isOpen={isMenuOpen} closeNav={handleMenuToggle}/>
    </header>
  );
}

export default Header;
