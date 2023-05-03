import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Header = () => {

     const {user} = useContext(AuthContext);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <h2 className='fw-bold fs-2 text-warning'><i>Indian Taste</i></h2>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className=' ,fw-bold fs-5 text-decoration-none text-reset' to='/'>Home</Link>
                            <Link className=' ,fw-bold fs-5 text-decoration-none text-reset' to='/blog'>Blog</Link>
                        </Nav>
                        <Nav>
                            {
                                user && <Nav.Link href="#deets" className='fw-bold fs-5'>profile</Nav.Link>
                            }

                            {
                                user ?
                                    <Button variant="warning" className='fw-bold text-white'>Logout</Button> :
                                    <Link to="/login">
                                        <Button variant="warning" className='fw-bold text-white'>Login</Button>
                                    </Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;