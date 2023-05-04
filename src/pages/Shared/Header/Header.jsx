import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Header = () => {

    const { user, logOut,photo,name } = useContext(AuthContext);
    console.log(photo,name);

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
                        </Nav>
                        <div>
                            {
                                user ? (<img src={photo} alt="" />) : (<span>x</span>)
                            }

                            {
                                user ?
                                    <Button variant="warning" onClick={handleLogOut} className='fw-bold text-white'>Logout</Button> :
                                    <Link to="/login">
                                        <Button variant="warning" className='fw-bold text-white'>Login</Button>
                                    </Link>
                            }

                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;