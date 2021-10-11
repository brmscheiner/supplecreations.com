import React from 'react';
import { Link } from 'react-router-dom';

function Header(): JSX.Element {
  return (
    <header style={{ background: 'black', position: 'fixed', color: 'white', width: 200 }}>
      <Link to="/">Home</Link>
      <Link to="/wow">Wow</Link>
      <Link to="/contact">Contact</Link>
    </header>
  )
}

export default Header;
