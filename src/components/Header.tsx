import React from 'react';
import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const navLinkStyles = {
  color: 'unset',
  textDecoration: 'none',
  fontFamily: 'Nunito Sans',
  marginLeft: 100
}

function Header(): JSX.Element {
  return (
    <header style={{ position: 'absolute', display: 'flex', flexDirection: 'column' }}>
      <Link to="/"><img src={Logo} style={{ width: 240, height: 240, marginLeft: 20 }} /></Link>
      <Link style={navLinkStyles} to="/">HOME</Link>
      <Link style={navLinkStyles} to="/work-history">WORK HISTORY</Link>
      <Link style={navLinkStyles} to="/about">CONTACT</Link>
    </header>
  )
}

export default Header;
