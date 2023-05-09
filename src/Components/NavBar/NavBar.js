import React, { useState } from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import { links } from "../../data";
import { FaTimes } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [showMenu, isShowMenu] = useState(false);
  return (
    <header>
      <div className="logo_div">
        <Link to="/">
          <h1>Rest</h1>
        </Link>
      </div>

      <nav>
        <ul style={showMenu ? { display: "block" } : { display: "none" }}>
          {links.map(({ name, id, to }) => {
            return (
              <li key={id}>
                <NavLink
                  to={to}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="icon_menu" onClick={() => isShowMenu(!showMenu)}>
          {showMenu ? <FaTimes /> : <AiOutlineMenu />}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
