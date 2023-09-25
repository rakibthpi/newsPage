// import React from 'react';

import { Col, Container, Row } from "react-bootstrap";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import RightNav from "../pages/Shared/RightNav/RightNav";
import LeftNav from "../pages/Shared/LeftNav/LeftNav";
import { Outlet } from "react-router-dom";
import NavigtionBar from "../pages/Shared/NavigationBar/NavigtionBar";

const Main = () => {
    return (
        <div >
            <Header></Header>
            <NavigtionBar></NavigtionBar>
            <Container>
                <Row className="py-3">
                    <Col md={3}><LeftNav></LeftNav></Col>
                    <Col md={6}>
                        <Outlet></Outlet>
                    </Col>
                    <Col md={3}><RightNav></RightNav></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;