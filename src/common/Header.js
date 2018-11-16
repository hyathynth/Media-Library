import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <div className="text-center">
    <nav className="navbar navbar-default">
      <NavLink exact to="/" activeClassName="active">Home</NavLink>
      {"|"}
      <Link to="library" sactiveClassName="active">library</Link>
    </nav>
  </div>
);

export default Header;
