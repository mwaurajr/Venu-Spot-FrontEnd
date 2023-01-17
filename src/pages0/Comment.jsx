import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';

const Comment = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1 className="text-center">Check out your reviews!</h1>
                </Col>
                <br/>
            </Row>

            <Row className="my-3">
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                    <Card>
                        <CardBody>
                            <CardTitle>Reviews</CardTitle>
                            <CardText>
                                <div>
                                    <h5>John Doe</h5>
                                    <StarRatingComponent name="review-rating" starCount={5} value={4} />
                                    <p>This venue is amazing! The service was great and the location was perfect.</p>
                                </div>
                                <hr />
                                <div>
                                    <h5>Jane Smith</h5>
                                    <StarRatingComponent name="review-rating" starCount={5} value={1} />
                                    <p>I had a terrible experience at this venue. The staff was rude and the food was cold.</p>
                                </div>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Comment;
