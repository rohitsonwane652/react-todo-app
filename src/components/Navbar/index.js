import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,Img
} from './NavbarElements';

const Navbar = ()=> {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <Img src={require('./todo-logo.png')} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/' >
            TODO
          </NavLink>
          <NavLink to='/signin' >
            Log In
          </NavLink>
          <NavLink to='/signup' >
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='#'>Log Out</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;