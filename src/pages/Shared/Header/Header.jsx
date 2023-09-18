// import React from 'react';
import './Header.css';
import logo from '../../../assets/logo.png';
import moment from 'moment/moment';
import Marquee from 'react-fast-marquee';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Container>
            <div className="text-center">
                <img className="logo" src={logo} alt="photos" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>

            </div>
            <div className='d-flex p-3 bg-info'>
                <Button variant="danger">Latest</Button>
                <Marquee>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mt-5 px-3">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Career</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#features">Profile</Nav.Link>
                        <Nav.Link href="#pricing">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>

    );
};

export default Header;