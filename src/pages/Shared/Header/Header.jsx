import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <h2 className='fw-bold fs-2 text-warning'>Indian Taste</h2>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features" className='fw-bold fs-5'>Home</Nav.Link>
                            <Nav.Link href="#pricing" className='fw-bold fs-5'>Blog</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets" className='fw-bold fs-5'>Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="warning" className='fw-bold '>Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;