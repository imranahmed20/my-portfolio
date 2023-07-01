import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../src/assets/Image/logo.png'


const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#" className='fs-4 fw-semibold '> <img className='rounded-circle me-2' src={logo} alt="" />Imran Ahmed</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#My Skill">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;