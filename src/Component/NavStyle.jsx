import React from 'react';
import { NavLink } from 'react-router';

const NavStyle = ({to,children}) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `font-bold ${isActive ? 'text-blue-700 border-b-2 ' : ''}`
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};

export default NavStyle;