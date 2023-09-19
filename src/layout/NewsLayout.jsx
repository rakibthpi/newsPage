
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import RightNav from "../pages/Shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";
const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row className="py-3">
                    <Col md={9}>
                        <Outlet></Outlet>
                    </Col>
                    <Col md={3}><RightNav></RightNav></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;