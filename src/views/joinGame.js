import { Container, Button, Form, Row, Col } from "react-bootstrap";
import PremiumIcon from '../assets/images/icons/premium-icon.png'

export default function JoinGame() {
    return (
        <>
            <div className="registration-page pb-5 form-layouts">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="forms">
                                <h1 className="py-5 mt-5 mb-3">Welcome to GameUp</h1>
                                <Form className="registration-form">
                                    <Row className="form-inputs mx-auto py-5">
                                        <Col md={6}>
                                            <Form.Group className="mb-3 px-md-1 px-3 pt-2" controlId="formBasicEmail">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="text" placeholder="Jane Doe" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3 px-md-1 px-3 pt-2" controlId="formBasicPassword">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" placeholder="" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3 px-md-1 px-3" controlId="formBasicEmail">
                                                <Form.Label>Zip Code</Form.Label>
                                                <Form.Control type="text" placeholder="" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3 px-md-1 px-3" controlId="formBasicPassword">
                                                <Form.Label>Username</Form.Label>
                                                <Form.Control type="text" placeholder="" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3 px-md-1 px-3" controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3 px-md-1 px-3" controlId="formBasicPassword">
                                                <Form.Label>Re-enter Password</Form.Label>
                                                <Form.Control type="password" placeholder="" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3 px-md-1 px-3" controlId="formBasicPassword">
                                                <Form.Label>What are you looking to get out of GameUp?</Form.Label>
                                                <Form.Select aria-label="Default select example">
                                                    <option>-</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3 px-md-1 px-3" controlId="formBasicPassword">
                                                <Form.Label>How did you hear about us?</Form.Label>
                                                <Form.Select aria-label="Default select example">
                                                    <option>-</option>
                                                    <option value="4">One</option>
                                                    <option value="5">Two</option>
                                                    <option value="6">Three</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={12} className="select-plan-section">
                                            <h3 className="text-center py-4">Select your plan:</h3>
                                        </Col>
                                        <Col md={6} sm={12} className="mb-3 px-md-4 px-4 select-plans">
                                            <div className="select-plan-section plan-cards py-5 px-4">
                                                <h2 className="text-center">Standard</h2>
                                                <hr></hr>
                                                <ul>
                                                    <li>Benefit</li>
                                                    <li>Another Benefit</li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col md={6} sm={12} className="mb-3 px-md-4 px-4 select-plans">
                                            <div className="select-plan-section plan-cards py-5 px-4">
                                                <h2 className="text-center"><img src={PremiumIcon} alt="PremiumIcon" className="me-2 mb-2" style={{ maxWidth: '20px', width: '100%' }} />Premium</h2>
                                                <hr></hr>
                                                <ul>
                                                    <li>Benefit</li>
                                                    <li>Another Benefit</li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col md={12}>
                                            <Button variant="primary" type="submit" className="form-btn mt-5 mb-4">
                                                Let’s Go
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}