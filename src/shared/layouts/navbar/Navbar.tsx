import React from 'react';

import styled from '@emotion/styled';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import "./Navbar.scss";

interface NavbarProps {
  // ..
}

const NavbarLayout: React.FC<NavbarProps> = () => {
  return (
    <Navbar className='Navbar-layout'>
      <ContentLogo className='content-logo'>
        <span>RC - Media en vivo</span>
      </ContentLogo>
      <ContentNav>
        <ul className='help'>
          <li>Contacto</li>
          <li>¡Ayuda!</li>
        </ul>
        <HelpOutlineIcon className='icon_help'/>
      </ContentNav>
    </Navbar>
  )
}

export default NavbarLayout

const Navbar = styled('div')`
  width:100%;
  height:80px;
  display: grid;
  align-items: center;
  padding:0 20px;

  grid-template-columns: 300px auto;
  gap:10px;
  background-color: $color-secondary;
  `

// 
const ContentLogo = styled('div')`
  display:flex;
  item-align:center;
  gap:10;

  span{
    font-weight: bold;
    text-transform: uppercase;
  }
  `

// 
const ContentNav = styled('div')`
    width:100%;
    display:flex;
    item-align:center;
    justify-content:flex-end;

    ul{
      display:flex;
      gap:20px;
    }
  `
