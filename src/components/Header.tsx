import React from 'react';
import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isNarrowScreen: boolean;
}

const navLinkStyles = {
  color: 'unset',
  textDecoration: 'none',
  fontFamily: 'Nunito Sans',
  marginLeft: 100
}

function Header(props: HeaderProps): JSX.Element {
  const { isNarrowScreen } = props;

  if (isNarrowScreen) return <div>
    <div>Hamburger</div>
    <div style={{ display: 'flex', justifyContent: 'center', maxWidth: 320 }}>
      <Link to="/"><img src={Logo} style={{ width: 240, height: 240 }} /></Link>
    </div>
  </div>;

  return (
    <header style={{ display: 'flex', flexDirection: 'column', margin: '24px 20px 0 0' }}>
      <Link to="/"><img src={Logo} style={{ width: 240, height: 240, marginLeft: 20 }} /></Link>
      <Link style={navLinkStyles} to="/">HOME</Link>
      <Link style={navLinkStyles} to="/work-history">WORK HISTORY</Link>
      <Link style={navLinkStyles} to="/about">CONTACT</Link>
    </header>
  )
}

export default Header;
