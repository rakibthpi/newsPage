// import React from 'react';
import './Header.css';
import logo from '../../../assets/logo.png';
import moment from 'moment/moment';
import Marquee from 'react-fast-marquee';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container>
            <div className="text-center">
                <Link to={'/'}><img className="logo" src={logo} alt="photos" /></Link>
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>

            </div>
            <div className='d-flex p-3 bg-info'>
                <Button variant="danger">Latest</Button>
                <Marquee>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
        </Container>

    );
};

export default Header;