import React from "react";
import { Container, Row, Col, Button, Badge, Dropdown, DropdownButton } from "react-bootstrap";
import ResultsSlider from '../components/resultsSlider'
import playerOne from '../assets/images/travel-teams/player1.png'
import playerTwo from '../assets/images/travel-teams/player2.png'
import playerThree from '../assets/images/travel-teams/player3.png'
import { tabTitle } from "../components/tabsTitle";
import { Link } from "react-router-dom";
import FilterCross from '../assets/images/icons/filter-cross.svg'

export default function QueryForm() {
    tabTitle('Results')
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
            title: 'Trainer Name',
            sub_title: 'Team info goes here....',
            image: playerOne
        },
        {
            title: 'Trainer Name',
            sub_title: 'First letter default icon',
            image: playerTwo
        },
        {
            title: 'Trainer Name',
            sub_title: 'Team info goes here....',
            image: playerThree
        },
        {
            title: 'Trainer Name',
            sub_title: 'Team info goes here....',
            image: playerOne
        },
        {
            title: 'Trainer Name',
            sub_title: 'Team info goes here....',
            image: playerThree
        },
        {
            title: 'Trainer Name',
            sub_title: 'Team info goes here....',
            image: playerOne
        }
    ];
    return (
        <>
            <div className="form-layouts py-5 results-page">
                <Container>
                    <Row>
                        <Col md={12} className="position-relative">
                            <div className="forms py-2">
                                <h1 className="py-5">For your player in<br />
                                    <span className="text-black">[ZIP CODE]</span></h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col md={12} className="position-relative pt-5 mt-4">
                        <div className="d-flex justify-content-between filter-bar-controls ps-md-4">
                            <Link to="#" className="text-uppercase position-relative">edit search</Link>
                            <Button className="text-uppercase position-relative">Save this search</Button>
                        </div>
                        <div className="filters-section mt-2 d-flex align-items-center">
                            <DropdownButton id="dropdown-basic-button" title="Filters" className="pe-lg-4 pe-0">
                                <Dropdown.Item href="#/action-1">Male</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">10 years old</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Beginner</Dropdown.Item>
                            </DropdownButton>
                            <span className="filter-select-val">Male<Badge bg="" className="pe-0">
                                <img className="pb-1" src={FilterCross} alt="FilterCross" /></Badge>
                            </span>
                            <span className="filter-select-val">10 years old<Badge bg="" className="pe-0">
                                <img className="pb-1" src={FilterCross} alt="FilterCross" /></Badge>
                            </span>
                            <span className="filter-select-val">Beginner<Badge bg="" className="pe-0">
                                <img className="pb-1" src={FilterCross} alt="FilterCross" /></Badge>
                            </span>
                            <span className="filter-select-val">Joining AAU Travel Team<Badge bg="" className="pe-0">
                                <img className="pb-1" src={FilterCross} alt="FilterCross" /></Badge>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="pt-5 my-5">
                <Container>
                    <Row>
                        <Col md={12} className="results-page-description position-relative">
                            <h2 className="text-center text-md-start">Travel Teams</h2>
                        </Col>
                        <Col md={12} className="results-slider-section">
                            <ResultsSlider cardsData={cardsData} cardType="team" />
                        </Col>
                        <Col md={12} className="results-page-description position-relative">
                            <h2 className="text-center text-md-start">Skills Trainers</h2>
                        </Col>
                        <Col md={12} className="results-slider-section">
                            <ResultsSlider cardsData={cardsData2} cardType="trainers" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}