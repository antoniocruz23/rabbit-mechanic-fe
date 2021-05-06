import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import "./Header.css";
import SubMenu from "./SubMenu";
import AuthService from "../../../services/Auth";

let iconSize = 30;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: var(--black);
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: var(--index-sidebar);
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Header = () => {
  const handleLogout = () => {
    AuthService.logout();
  };

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <header className="header-container">
        <div className="header-left">
          <FaIcons.FaBars
            id="menu-icon"
            size={iconSize}
            onClick={showSidebar}
          />
          <Link to="/home" id="title">
            Rabbit Mechanic
          </Link>
        </div>

        <div className="header-right">
          <nav className="nav">
            <Link onClick={handleLogout} to="/">
              Logout
            </Link>
          </nav>
        </div>
      </header>

      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon to="#">
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          </NavIcon>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default Header;
