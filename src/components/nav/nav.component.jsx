import React from 'react';
import './nav.component.scss';
import { Navbar, Nav } from 'react-bootstrap';

const NavComponent = () => {
    return (
        <Navbar expand="lg" sticky="top">
            <Navbar.Brand className="navbar-brand" href="/">AB</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#education">Educación</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#experience">Experiencia</Nav.Link>
                    <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="#contact">Contacto</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
}
 
export default NavComponent;
