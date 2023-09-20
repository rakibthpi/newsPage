// import React from 'react';

import { Button, Card, Col, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import first from '../../../assets/1.png';
import second from '../../../assets/2.png';
import third from '../../../assets/3.png';

function News() {
    const news = useLoaderData();
    console.log("rakib", news)
    const { title, thumbnail_url, details, category_id } = news;
    return (
        <div>
            <Card className="p-2">
                <Card.Body>
                    <Card.Title className="fs-1 py-3">{title}</Card.Title>
                    <Card.Text>
                        <Card.Img variant="top" src={thumbnail_url} />
                        <p className="py-4">{details}</p>
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button className="fs-3" variant="primary">All news in this category</Button>
                    </Link>
                </Card.Body>
            </Card>
            <Row xs={1} md={2} lg={3} className="g-4 mt-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={first} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={second} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={third} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default News;