import React, {FC, useState} from 'react';
import {NavLink} from "react-router-dom";
import {SIDEBAR_OPTIONS} from "../../utils/constants";
import './index.scss';

type SidebarProps = {};

export const Sidebar: FC<SidebarProps> = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => setIsOpenMenu((isOpen) => !isOpen);

  return (
    <>
      <div className={`hamburger ${isOpenMenu && 'isActive'}`}>
        <div
          className="hamburger__items"
          onClick={toggleMenu}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
      <div className={`sidebar ${isOpenMenu && 'isActive'}`}>
        <nav className="sidebar__content">
          <ul>
            {SIDEBAR_OPTIONS.map(({to, label}, index) => (
              <li key={index}><NavLink to={to} onClick={toggleMenu}>{label}</NavLink></li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

