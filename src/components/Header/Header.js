import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/pps1.png'
import 'animate.css';
import './index.css'
function Header() {
  return (
    <Navbar className='header-bgm' bg="light" expand="lg" >
      <Navbar.Brand>
        <Link to="/">
          <img src={Logo} alt="Logo" className='logo' /> 
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto text-center">
          <Nav.Item className='animate__animated  animate__slideInRight'>
            <Link className='nav-links' to="/">Home</Link>
          </Nav.Item>
          <Nav.Item className='animate__animated animate__zoomInUp'>
            <Link  className='nav-links' to="/about">About</Link>
          </Nav.Item>
          <Nav.Item className='animate__animated animate__fadeInTopLeft'>
            <Link  className='nav-links' to="/features">Features</Link>
          </Nav.Item>
          <Nav.Item className='animate__animated animate__zoomInDown'>
            <Link  className='nav-links'  to="/contact">Contact</Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
