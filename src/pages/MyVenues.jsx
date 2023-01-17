import React, { useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, Container, Row, Col, Pagination } from 'reactstrap';

const MyVenues = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [venuesPerPage] = useState(6);

    const venues = [
        { id: 1, title: 'Venue 1', image: 'https://via.placeholder.com/300x200', link: 'https://www.venue1.com' },
        { id: 2, title: 'Venue 2', image: 'https://via.placeholder.com/300x200', link: 'https://www.venue2.com' },
        { id: 3, title: 'Venue 3', image: 'https://via.placeholder.com/300x200', link: 'https://www.venue3.com' },
        // add more venues here as needed
    ];

    // Get current venues
    const indexOfLastVenue = currentPage * venuesPerPage;
    const indexOfFirstVenue = indexOfLastVenue - venuesPerPage;
    const currentVenues = venues.slice(indexOfFirstVenue, indexOfLastVenue);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Container>
            <h1>My Venues</h1>
            <Row>
                {currentVenues.map(venue => (
                    <Col md={4} key={venue.id}>
                        <Card>
                            <a href={venue.link}>
                                <CardImg top width="100%" src={venue.image} alt={venue.title} />
                            </a>
                            <CardBody>
                                <CardTitle>{venue.title}</CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Pagination
                itemClass='page-item'
                linkClass='page-link'
                itemsCountPerPage={venuesPerPage}
                totalItemsCount={venues.length}
                pageRangeDisplayed={5}
                activePage={currentPage}
                onChange={paginate}
            />
        </Container>
    );
};

export default MyVenues;
