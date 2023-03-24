import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import playerOne from '../assets/images/travel-teams/player1.png'
import playerTwo from '../assets/images/travel-teams/player2.png'
import playerThree from '../assets/images/travel-teams/player3.png'
import founderImage from '../assets/images/about-cards/founder.png'
import AddCardImg from '../assets/images/about-cards/add-card.png'
import Cards from '../components/cards'
import PlayersIcon from '../assets/images/icons/players-icon.svg'
import RecommendationIcon from '../assets/images/icons/recommendation-icon.svg'
import LocationIcon from '../assets/images/icons/location-icon.svg'
import ResultsSlider from "../components/resultsSlider";
import MakeRecommendationModal from "../components/makeRecommendationModal";
import { tabTitle } from "../components/tabsTitle";


export default function QueryForm() {
    tabTitle('User Profile')
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
    const [modalRecommendation, setModalRecommendation] = useState(false)
    return (
        <>
            <div className="form-layouts pt-0 pt-md-5 pb-5 results-page">
                <Container className="py-1">
                    <Row className="profile-banner-section align-items-center py-5">
                        <Col xs={12} md={2} className="me-md-0 me-0">
                            <img src={founderImage} alt="founderImage" />
                        </Col>
                        <Col xs={12} md={8} className="text-center text-md-start ms-md-3 ms-0 pt-2 banner-content">
                            <h1 className="pb-0 pb-md-3">Crystal McCrary</h1>
                            <div className="pt-4 location-details position-relative">
                                <img src={LocationIcon} alt="LocationIcon" className="position-absolute" />
                                <p className="d-inline-block pe-3 location-ny">New York, NY.</p>
                                <p className="d-inline-block px-3 location-url">@crystal.mccary</p>
                            </div>
                        </Col>
                    </Row>
                    {/* Modal */}
                    <MakeRecommendationModal modalShow={modalRecommendation} onHide={() => setModalRecommendation(!modalRecommendation)} />
                    {/*  */}
                    <Row className="position-relative">
                        <Col>
                            <span className="make-recommendation d-flex align-items-center justify-content-center py-3" onClick={() => setModalRecommendation(!modalRecommendation)}>
                                <img src={RecommendationIcon} alt="RecommendationIcon" />
                                <p className="m-0">Make a recommendation</p></span>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="py-5 my-5 profile-cards d-lg-block d-none">
                <Container>
                    <Row>
                        <Col md={12} className="results-page-description position-relative heading-with-icons">
                            <img src={PlayersIcon} alt="PlayersIcon" />
                            <h2 className="text-start">Players</h2>
                        </Col>
                        {cardsData.map((items, idx) => {
                            return (
                                <Col md={3} className="slider-cards" key={idx}>
                                    <Cards cardTitle={items.title} cardSubTitle={items.sub_title} cardImage={items.image} noModal="noModal" />
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

            <div className="py-5 mt-5 mb-0 mb-md-5 profile-cards d-lg-none d-block profile-mobile-slider">
                <Container>
                    <Row>
                        <Col md={12} className="results-page-description position-relative heading-with-icons">
                            <img className="pb-3 pb-lg-0" src={PlayersIcon} alt="PlayersIcon" />
                            <h2 className="text-center text-lg-start">Players</h2>
                        </Col>
                        <Col md={12} className="slider-cards">
                            <ResultsSlider cardsData={cardsData} />
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="py-5 my-5 profile-cards d-lg-block d-none">
                <Container>
                    <Row>
                        <Col md={12} className="results-page-description position-relative heading-with-icons">
                            <img src={RecommendationIcon} alt="RecommendationIcon" />
                            <h2 className="text-center text-lg-start">recommendations</h2>
                        </Col>
                        <Col md={12} className="results-page-description position-relative">
                            <h4 className="text-center text-lg-start pt-5">Pre-School Programs</h4>
                        </Col>
                        {cardsData2.map((items, idx) => {
                            return (
                                <Col md={3} className="slider-cards" key={idx}>
                                    <Cards cardTitle={items.title} cardSubTitle={items.sub_title} cardImage={items.image} noModal="noModal" />
                                </Col>
                            )
                        })}
                        <Col md={12} className="results-page-description position-relative">
                            <h4 className="text-center text-lg-start pt-5">Developmental programs</h4>
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

            <div className="py-5 mb-5 mt-0 mt-md-5 profile-cards d-lg-none d-block profile-mobile-slider">
                <Container>
                    <Row>
                        <Col md={12} className="results-page-description position-relative heading-with-icons">
                            <img className="pb-3 pb-lg-0" src={RecommendationIcon} alt="RecommendationIcon" />
                            <h2 className="text-center text-lg-start">recommendations</h2>
                        </Col>
                        <Col md={12} className="results-page-description position-relative">
                            <h4 className="text-center text-lg-start pt-5">Pre-School Programs</h4>
                        </Col>
                        <Col md={12} className="slider-cards">
                            <ResultsSlider cardsData={cardsData} />
                        </Col>
                        <Col md={12} className="results-page-description position-relative">
                            <h4 className="text-center text-lg-start pt-5">Developmental programs</h4>
                        </Col>
                        <Col md={12} className="slider-cards">
                            <ResultsSlider cardsData={cardsData} />
                        </Col>
                        <Col md={12} className="results-page-description position-relative">
                            <h4 className="text-center text-lg-start pt-5">Basketball facilities</h4>
                        </Col>
                        <Col md={12} className="results-page-description position-relative">
                            <h4 className="text-center text-lg-start pt-5">AAU Teams</h4>
                        </Col>
                        <Col md={12} className="results-page-description position-relative">
                            <h4 className="text-center text-lg-start pt-5">Summar camps</h4>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}