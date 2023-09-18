// import React from 'react';
import { Button, ListGroup } from "react-bootstrap";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";

const RightNav = () => {
    return (
        <div className="right_main">
            <div className="login">
                <h3 className="pb-2">Login With</h3>
                <Button variant="outline-primary " className="w-100"><FaGoogle /> Login with Google</Button>
                <Button variant="outline-secondary" className="w-100"><FaGithub /> Login with Github</Button>
            </div>
            <div className="login">
                <h3 className="pt-5 pb-2 ">Login With</h3>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>

        </div>
    );
};

export default RightNav;