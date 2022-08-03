import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Ball from '../assets/images/player-dash/ball.png'
import Cup from '../assets/images/player-dash/cup.png'
import Court from '../assets/images/player-dash/court.png'
import Cards from '../components/cards'



export default function PlayerDash() {
    const cardsData = [
        {
            title: 'Team Name',
            image: Ball
        },
        {
            title: 'ghfhhnfghnb',
            image: Cup
        },
        {
            title: 'ghfhhnfghnb',
            image: Court
        }
    ];
    return (
        <>
            <div className="py-5 about-page-banner player-dash">
                <Container>
                    <Row>
                        <Col md={12} className="position-relative py-3 query-page">
                            <div className="forms py-3">
                                <h1 className="py-5">Leo’s <span className="text-black">GameUp</span></h1>
                            </div>
                            <div className="lets-find mx-auto d-flex justify-content-center py-5 align-items-center position-absolute">
                                <p className="d-inline-block m-0 me-2">I want to search for a:</p>
                                <Form.Select aria-label="Default select example" className="text-uppercase ms-2">
                                    <option>Player</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                <Button variant="secondary" secondarytype="submit" className="form-btn mt-4 py-2">
                                    Search
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="py-5 my-5 profile-cards">
                <Container>
                    <Row>
                        <Col md={12} className="results-page-description position-relative">
                            <h2 className="text-start">Players</h2>
                        </Col>
                        {cardsData.map((items, idx) => {
                            return (
                                <Col md={3} className="player-dash-cards" key={idx}>
                                    <Cards cardTitle={items.title} cardImage={items.image} />
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="horizontal-bars py-4 mb-4 text-start px-5"><p className="m-0">Cole’s AAU Baller of the Week...</p></div>
                    </Col>
                    <Col md={12}>
                        <div className="horizontal-bars py-4 mb-4 text-start px-5"><p className="m-0">Cole’s AAU Baller of the Week...</p></div>
                    </Col>
                </Row>
            </Container>
            <div className="py-5 my-5 badges-outer">
                <Container>
                    <Row>
                        <Col md={12} className="results-page-description position-relative">
                            <h2 className="text-start">Badges & Awards</h2>
                        </Col>
                        <Col md={12} className="py-3">
                            <h2 className="text-center no-badge py-5">No badges or awards have been added.</h2>
                        </Col>
                        <Col md={12} className="results-page-description position-relative pt-5">
                            <h2 className="text-start">Current info</h2>
                        </Col>
                        <Col md={12} className="current-info py-3">
                            <h2 className="text-start py-5">No badges or awards have been added.</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}