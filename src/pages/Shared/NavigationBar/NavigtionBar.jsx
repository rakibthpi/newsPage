// import React from 'react';

import { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UserProvider } from "../../../provider/AuthProvider";


const NavigtionBar = () => {
    const { user, LogOut } = useContext(UserProvider)
    const navigate = useNavigate();

    const handleLogOut = () => {
        LogOut()
            .then(result => {
                console.log(result);
                navigate('/login')
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mt-5 px-3">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto menu">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/'}>About</Link>
                    <Link to={'/'}>Career</Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#features"></Nav.Link>
                    {
                        user ? <Link onClick={handleLogOut}>logOut</Link> : <Link to={'/login'}>Login</Link>
                    }



                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigtionBar;