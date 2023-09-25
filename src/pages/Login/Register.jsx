// import React from 'react';

import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserProvider } from "../../provider/AuthProvider";
import { useContext } from "react";

const Register = () => {

    const { handleSingUp } = useContext(UserProvider)

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const number = form.number.value;
        const email = form.email.value;
        const password = form.password.value;
        handleSingUp(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
            })
            .catch((error) => {
                console.error(error);
            })
        console.log("Name", name, "Numebr", number, "Email", email, "Password", password)
    }
    return (
        <div>
            <Row>

                <Col md={{ span: 4, offset: 4 }}>
                    <h2 className="text-center">Please Register Now</h2>
                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="name" type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="number" type="text" placeholder="Number" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                        <br />
                        <Form.Text className="text-muted">
                            Already have an account?
                            <Link to={'/login'}>Login</Link>
                        </Form.Text>
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Register;