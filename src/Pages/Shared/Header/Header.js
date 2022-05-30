import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
            <Navbar sticky='top' bg="primary"  variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/about">about</Nav.Link>
                        <Nav.Link as={Link} to="/manageservice">ManageService</Nav.Link>
                        <Nav.Link as={Link} to="/addservice">AssService</Nav.Link>
                        <Nav.Link href='/#services'>Services</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
    );
};

export default Header;