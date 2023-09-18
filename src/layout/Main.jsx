// import React from 'react';

import { Col, Container, Row } from "react-bootstrap";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import RightNav from "../pages/Shared/RightNav/RightNav";
import LeftNav from "../pages/Shared/LeftNav/LeftNav";

const Main = () => {
    return (
        <div >
            <Header></Header>
            <Container>
                <Row className="py-3">
                    <Col md={3}><LeftNav></LeftNav></Col>
                    <Col md={6}>Main content aerea start .....</Col>
                    <Col md={3}><RightNav></RightNav></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;