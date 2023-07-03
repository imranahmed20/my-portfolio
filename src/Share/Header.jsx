import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../src/assets/Image/logo-2.png'


const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary sticky-top mb-5">
            <Container>
                <Navbar.Brand className='fs-3 fw-bold'><img className='rounded-circle' src={logo} alt="" /> Imran Ahmed</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className='fw-semibold me-3' href='/#'>HOME</Nav.Link>
                        <Nav.Link className='fw-semibold  me-3' href="/#about">ABOUT</Nav.Link>
                        <Nav.Link className='fw-semibold me-3' href="/#skill">SKILL</Nav.Link>
                        <Nav.Link className='fw-semibold me-3' href="/#projects">PROJECTS</Nav.Link>
                        <Nav.Link className='fw-semibold' href="/#contact">CONTACT </Nav.Link>
                    </Nav>
                    <Form >
                        <Button className='fw-semibold' variant="danger" href='/#contact' >Hire Me</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;