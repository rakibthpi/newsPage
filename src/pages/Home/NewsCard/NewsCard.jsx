/* eslint-disable react/prop-types */
// import React from 'react';

import { Card, Image } from "react-bootstrap";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { title, thumbnail_url, details, _id, author, total_view, rating } = news;
    return (
        <div>
            <Card className="mb-4">
                <Card.Header>
                    <div className="leftCard d-flex align-items-center g-3">
                        <Image style={{ width: '30px', marginRight: '10px' }} className="w-4" src={author.img} roundedCircle />
                        <div>
                            <p>{author.name}</p>
                            <span>{author.published_date}</span>
                        </div>
                    </div>
                    <div className="rightCard">

                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title><h3>{title}</h3></Card.Title>
                    <Card.Text>
                        <Card.Img variant="bottom" src={thumbnail_url} />
                        {details.length < 255 ? <>{details}</> : <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Read More</Link></>}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between">
                    <p>
                        <Rating
                            placeholderRating={rating.number}
                            emptySymbol={<AiOutlineStar></AiOutlineStar>}
                            placeholderSymbol={<AiFillStar></AiFillStar>}
                            fullSymbol={<AiFillStar></AiFillStar>}
                        />
                    </p>
                    <p>{total_view}</p>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;