// import React from 'react';

import { Col, Container, Row } from "react-bootstrap";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col md={3}>Left site area start ....</Col>
                    <Col md={6}>Main content aerea start .....</Col>
                    <Col md={3}>Right site area ......</Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;