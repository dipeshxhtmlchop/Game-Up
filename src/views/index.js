import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import SlickSlider from "../components/slider";
import { tabTitle } from "../components/tabsTitle";

export default function IndexPage() {
    tabTitle('Home')
    return (
        <>
            <div className="homepage-banner position-relative">
                <div className="home-banner-overlay"></div>
                <Container>
                    <Row>
                        <Col md={12} lg={6} className="text-white text-md-start text-center">
                            <h1>Find the <span className="banner-heading-highlight px-0 px-md-3">right team</span> for your child</h1>
                            <p className="py-3 banner-para">Gameup helps connect you... Leo a tempor, lectus aliquet turpis. Vel eget nibh auctor eget ornare tristique.</p>
                            <Link className="py-2 text-uppercase btn btn-secondary" to="/joingame">Get Started</Link>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row className="pb-md-0 pb-5">
                    <Col md={12} className="pb-5 mb-5 pt-md-0 pt-5">
                        <SlickSlider />
                    </Col>
                </Row>
            </Container>

        </>
    )
}