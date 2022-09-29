import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
// import { Navbar, Container, Nav } from 'react-bootstrap';


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


const Header = () => {
    return (
        <div>
            {/* <>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand className="font-weight-bold" href="/home">Create Profile</Navbar.Brand>
                        <Nav className="ms-auto">
                            <Link className='text-white navItem' to="/home">Home</Link>
                            <Link className='text-white navItem' to="/products">Products</Link>
                            <Link className='text-white navItem' to="/add/products">Add Products</Link>
                            
                        </Nav>
                    </Container>
                </Navbar>
            </> */}
            <>
                {['md'].map((expand) => (   
                    <Navbar key={expand} expand={expand} className="mb-3">
                        <Container>
                            <Navbar.Brand href="#">Profile Card</Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        Profile Card
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        <Link className='navItem' to='/'>Home</Link>
                                        <Link className='navItem' to='/userInfo'>Profiles</Link>
                                        <Link className='navItem' to='/add/products'>Add Profile</Link>
                                    </Nav>

                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}
            </>
        </div>
    );
};

export default Header;