// import React from 'react';

import { useContext } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserProvider } from "../../provider/AuthProvider";

function Login() {
    const { handleSignIn } = useContext(UserProvider)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.url?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log("Email:", email, "password:", password);
        console.log(event)
        handleSignIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from);
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                        <br />
                        <Form.Text className="text-muted">
                            Don &#39;t Already have an account?
                            <Link to={'/register'}>Register</Link>
                        </Form.Text>
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default Login;