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
        <div className='container'>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand className='fs-3 fw-bold' href="#"><img className='rounded-circle' src={logo} alt="" /> Imran Ahmed</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className='fw-semibold fs-5' href="#about">About</Nav.Link>
                            <Nav.Link className='fw-semibold fs-5' href="#skill">Skill</Nav.Link>
                            <Nav.Link className='fw-semibold fs-5' href="#projects">Projects</Nav.Link>
                            <Nav.Link className='fw-semibold fs-5' href="#contact">Contact me</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Button className=' fw-semibold' variant="success">Hire Me</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;