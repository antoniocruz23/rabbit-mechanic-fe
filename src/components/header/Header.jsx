import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as HiIcons from "react-icons/hi";
import { SidebarData } from "./SidebarData"
import "./Header.css";

let iconSize = 30; 

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <header className="header-container">
        <div className="header-left">
          <HiIcons.HiMenu id="menu-icon" size={iconSize} onClick={showSidebar}/>
          <h1 id="title">Rabbit Mechanic</h1>
        </div>

        <div className="header-right">
          <nav className="nav">
            <Link to="/main">Profile</Link>
            <Link to="/">Logout</Link>
          </nav>
        </div>
      </header>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bar">
              <AiIcons.AiOutlineClose id="sidebar-icon" size={iconSize}/>
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Header;