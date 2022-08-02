import React from 'react';
import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

function Header(): JSX.Element {
  return (
    <header style={{ position: 'absolute', display: 'flex', flexDirection: 'column' }}>
      <Link to="/"><img src={Logo} style={{ width: 240, height: 240, marginLeft: 20 }} /></Link>
      <Link className="navLink" style={{ marginLeft: 100 }} to="/">HOME</Link>
      <Link className="navLink" style={{ marginLeft: 100 }} to="/work-history">WORK HISTORY</Link>
      <Link className="navLink" style={{ marginLeft: 100 }} to="/about">CONTACT</Link>
    </header>
  )
}

export default Header;
