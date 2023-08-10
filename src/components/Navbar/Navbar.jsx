import React, { useState } from "react";
import "./Navbar.css";
import { NavLinkWrapper } from "../../utils/NavLinkWrapper";
import { Link } from "react-router-dom";

const Navbar = () => {
  // set active status for li
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="site_title">
        Mannschaft
      </Link>
      <div className="menu" onClick={() => setShowMenu(!showMenu)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="navbar_ul">
        <ul className={showMenu ? "open" : ""}>
          <NavLinkWrapper to="/news">News</NavLinkWrapper>
          <NavLinkWrapper to="/team">Team</NavLinkWrapper>
          <NavLinkWrapper to="/matches">Matches</NavLinkWrapper>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
