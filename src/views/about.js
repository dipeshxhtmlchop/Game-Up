import { Container, Row, Col, Card } from "react-bootstrap";
import AboutCardImg1 from '../assets/images/about-cards/aboutUs-card1.png'
import AboutCardImg2 from '../assets/images/about-cards/aboutUs-card2.png'
import AboutCardImg3 from '../assets/images/about-cards/aboutUs-card3.png'
import founderImage from '../assets/images/about-cards/founder.png'

export default function About() {
    return (
        <>
            <div className="py-5 about-page-banner">
                <Container>
                    <Row>
                        <Col md={12} className="position-relative py-3">
                            <div className="forms py-3">
                                <h1 className="py-5">About Us</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="py-5 my-5">
                <Container>
                    <Row>
                        <Col className="about-us-description">
                            <p>Where can my child play basketball? From pre-k through high school, positioning your child to play at every level of their development. From classes, to clinics, to one on one specialist training, to beginner teams, to travel teams, to AAU teams at entry level, middle school teams, local and boarding, and beyond.
                            </p>
                            <h6 className="pt-2">Welcome to GameUp.</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row className="p-md-0 px-2">
                    <Col md={4} xs={4} className="about-us-description about-card">
                        <div className="aboutus-cards">
                            <Card style={{ alignItems: 'center', border: 'none' }}>
                                <img className="w-100" src={AboutCardImg1} alt="players_img" />
                            </Card>
                        </div>
                    </Col>
                    <Col md={4} xs={4} className="about-us-description about-card">
                        <div className="aboutus-cards">
                            <Card style={{ alignItems: 'center', border: 'none' }}>
                                <img className="w-100" src={AboutCardImg2} alt="players_img" />
                            </Card>
                        </div>
                    </Col>
                    <Col md={4} xs={4} className="about-us-description about-card">
                        <div className="aboutus-cards">
                            <Card style={{ alignItems: 'center', border: 'none' }}>
                                <img className="w-100" src={AboutCardImg3} alt="players_img" />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="founder-by-section align-items-center">
                    <Col md={2} xs={2} className="me-md-0 me-3">
                        <img src={founderImage} alt="founderImage" />
                    </Col>
                    <Col md={8} xs={8} className="text-start ms-3 pt-2 ps-4 ps-md-0">
                        <h3 className="mb-0 mb-md-2">Founded by</h3>
                        <h2>Crystal McCrary</h2>
                        <p className="d-md-block d-none">Info on Little Ballers, etc.</p>
                    </Col>
                    <Col className="text-start pt-2 d-md-none d-flex">
                        <p>Info on Little Ballers, etc.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}