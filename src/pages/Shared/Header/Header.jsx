import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <h2 className='fw-bold fs-2 text-warning'><i>Indian Taste</i></h2>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <span className='mx-auto fw-bold fs-5 text-decoration-none text-reset px-4'><NavLink to="/" className={({ isActive }) => isActive ? "text-warning" : ""} >Home </NavLink></span>
                            <span className=' mx-auto fw-bold fs-5 text-decoration-none text-reset px-4'><NavLink to={'/blog'} className={({ isActive }) => isActive ? "text-warning" : ""} >Blog  </NavLink></span>
                            <span className=' mx-auto fw-bold fs-5 text-decoration-none text-reset'><NavLink to={'/about'} className={({ isActive }) => isActive ? "text-warning" : ""} >About  </NavLink></span>

                            {/* <Link className='mx-auto fw-bold fs-5 text-decoration-none text-reset px-4' to='/'>Home</Link>
                            <Link className=' mx-auto fw-bold fs-5 text-decoration-none text-reset' to='/blog'>Blog</Link> */}
                        </Nav>

                        <Nav>
                            {
                                user && <Nav.Link href="#deets" className='fw-bold fs-5'>Profile</Nav.Link>
                            }

                            {
                                user ?
                                    <Button variant="warning" onClick={handleLogOut} className='fw-bold text-white'>Logout</Button> :
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