import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Ball from '../assets/images/player-dash/ball.png'
import Cup from '../assets/images/player-dash/cup.png'
import Court from '../assets/images/player-dash/court.png'
import Cards from '../components/cards'
import ForYouIcon from '../assets/images/icons/for-you-icon.svg'
import BadgesIcon from '../assets/images/icons/badges-icon.svg'
import CurrentInfoIcon from '../assets/images/icons/current-info-icon.svg'
import ResultsSlider from "../components/resultsSlider";
import { tabTitle } from "../components/tabsTitle";

export default function PlayerDash() {
    tabTitle('Player Dashboard')
    const cardsData = [
        {
            title: 'Tryout',
            image: Ball
        },
        {
            title: 'Tournament',
            image: Cup
        },
        {
            title: 'Court Availability',
            image: Court
        }
    ];
    return (
        <>
            <div className="pt-md-5 pb-5 pt-0 about-page-banner player-dash">
                <Container>
                    <Row>
                        <Col md={12} className="position-relative pt-3 pb-5 pt-md-3 pb-md-3 query-page">
                            <div className="forms pt-3 pb-5 pt-md-3 pb-md-3">
                                <h1 className="pt-md-5 pt-3 pb-5 px-md-0 px-5">Leo’s <span className="text-black">GameUp</span></h1>
                            </div>
                            <div className="lets-find mx-auto d-flex justify-content-center py-5 align-items-center position-absolute player-dash-search">
                                <p className="d-inline-block m-0 me-lg-2 me-0">I want to search for a:</p>
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
            <div className="py-5 my-5 profile-cards d-lg-block d-none">
                <Container>
                    <Row className="mt-md-0 mt-5 pt-md-0 pt-5">
                        <Col md={12} className="results-page-description position-relative heading-with-icons mt-md-0 mt-5 pt-md-0 pt-5">
                            <img src={ForYouIcon} alt="ForYouIcon" />
                            <h2 className="text-center text-lg-start">for you this week</h2>
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

            <div className="py-5 my-5 profile-cards d-lg-none d-block profile-mobile-slider">
                <Container>
                    <Row className="mt-md-0 mt-5 pt-md-0 pt-5">
                        <Col md={12} className="results-page-description position-relative heading-with-icons mt-md-0 mt-5 pt-md-0 pt-5">
                            <img src={ForYouIcon} alt="ForYouIcon" />
                            <h2 className="text-center text-lg-start">for you this week</h2>
                        </Col>
                        <Col md={12} className="slider-cards">
                            <ResultsSlider cardsData={cardsData} imageAlignment="static" />
                        </Col>
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
                        <Col md={12} className="results-page-description position-relative heading-with-icons">
                            <img src={BadgesIcon} alt="BadgesIcon" />
                            <h2 className="text-center text-lg-start">Badges & Awards</h2>
                        </Col>
                        <Col md={12} className="py-3">
                            <h2 className="text-center no-badge py-5">No badges or awards have been added.</h2>
                        </Col>
                        <Col md={12} className="results-page-description position-relative pt-5 heading-with-icons">
                            <img src={CurrentInfoIcon} alt="CurrentInfoIcon" className="current-info-icon" />
                            <h2 className="text-center text-lg-start">Current info</h2>
                        </Col>
                        <Col md={12} className="current-info py-3">
                            <h2 className="text-start py-5">This is a description...</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}