import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import playerOne from '../assets/images/travel-teams/player1.png'
import playerTwo from '../assets/images/travel-teams/player2.png'
import playerThree from '../assets/images/travel-teams/player3.png'
import founderImage from '../assets/images/about-cards/founder.png'
import AddCardImg from '../assets/images/about-cards/add-card.png'
import Cards from '../components/cards'


export default function QueryForm() {
    const cardsData = [
        {
            title: 'Team Name',
            sub_title: 'Team info goes here....',
            image: playerOne
        },
        {
            title: 'Team Name with no profile picture',
            sub_title: 'First letter default icon',
            image: playerTwo
        },
        {
            title: 'Team Name',
            sub_title: 'Team info goes here....',
            image: playerThree
        },
        {
            title: 'Team Name',
            sub_title: 'Team info goes here....',
            image: playerOne
        },
        {
            title: 'Team Name',
            sub_title: 'Team info goes here....',
            image: playerThree
        },
        {
            title: 'Team Name',
            sub_title: 'Team info goes here....',
            image: playerOne
        }
    ];
    const cardsData2 = [
        {
            title: 'Team Name',
            sub_title: 'Team info goes here....',
            image: playerOne
        },
        {
            title: 'Team Name with no profile picture',
            sub_title: 'First letter default icon',
            image: playerTwo
        },
        {
            title: 'Team Name',
            sub_title: 'Team info goes here....',
            image: playerThree
        }
    ];
    const cardsData3 = [
        {
            title: 'Team Name',
            sub_title: 'Team info goes here....',
            image: playerOne
        },
        {
            title: 'Team Name with no profile picture',
            sub_title: 'First letter default icon',
            image: playerTwo
        }
    ];
    return (
        <>
            <div className="form-layouts py-5 results-page">
                <Container>
                    <Row className="profile-banner-section align-items-center">
                        <Col md={2} xs={2} className="me-md-0 me-3">
                            <img src={founderImage} alt="founderImage" />
                        </Col>
                        <Col md={8} xs={8} className="text-start ms-3 pt-2 banner-content">
                            <h1>Crystal McCrary</h1>
                            <p className="d-inline-block pe-3">New York, NY.</p>
                            <p className="d-inline-block px-3">@crystal.mccary</p>
                        </Col>
                        <Col className="text-start pt-2 d-md-none d-flex">
                            <p>Info on Little Ballers, etc.</p>
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
                                <Col md={3} className="slider-cards" key={idx}>
                                    <Cards cardTitle={items.title} cardSubTitle={items.sub_title} cardImage={items.image} />
                                </Col>
                            )
                        })}
                        <Col md={3}>
                            <Card className="cards-layout add-new-card">
                                <Card.Title><img src={AddCardImg} alt="cards_img" /></Card.Title>
                                <Card.Body>
                                    <h6>add a player</h6>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="py-5 my-5 profile-cards">
                <Container>
                    <Row>
                        <Col md={12} className="results-page-description position-relative">
                            <h2 className="text-start">recommendations</h2>
                        </Col>
                        <Col md={12} className="results-page-description position-relative">
                            <h4 className="text-start pt-5">Pre-School Programs</h4>
                        </Col>
                        {cardsData2.map((items, idx) => {
                            return (
                                <Col md={3} className="slider-cards" key={idx}>
                                    <Cards cardTitle={items.title} cardSubTitle={items.sub_title} cardImage={items.image} />
                                </Col>
                            )
                        })}
                        <Col md={12} className="results-page-description position-relative">
                            <h4 className="text-start pt-5">Developmental programs</h4>
                        </Col>
                        {cardsData3.map((items, idx) => {
                            return (
                                <Col md={3} className="slider-cards" key={idx}>
                                    <Cards cardTitle={items.title} cardSubTitle={items.sub_title} cardImage={items.image} />
                                </Col>
                            )
                        })}
                        <Col md={12} className="results-page-description position-relative">
                            <h4 className="text-start pt-5">Basketball facilities</h4>
                        </Col>
                        <Col md={12} className="results-page-description position-relative">
                            <h4 className="text-start pt-5">AAU Teams</h4>
                        </Col>
                        <Col md={12} className="results-page-description position-relative">
                            <h4 className="text-start pt-5">Summar camps</h4>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}