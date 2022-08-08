import { Container, Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { tabTitle } from "../components/tabsTitle";

export default function LoginPage() {
    tabTitle('Login')
    return (
        <>
            <div className="login-page pb-5">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="forms">
                                <h1 className="py-5 mt-0 mt-md-5 mb-3">Login</h1>
                                <Form className="login-form">
                                    <Row className="form-inputs mx-auto py-5">
                                        <Col md={12}>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="pt-2">Username</Form.Label>
                                                <Form.Control type="email" placeholder="Username" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={12}>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Enter password" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={12}>
                                            <Form.Group className="mb-3 text-center py-3" controlId="formBasicCheckbox">
                                                <Link to="">Forgot password?</Link>
                                            </Form.Group>
                                        </Col>
                                        <Col md={12}>
                                            <Button variant="primary" type="submit" className="form-btn">
                                                Let’s Go
                                            </Button>
                                        </Col>  
                                    </Row>
                                    <hr></hr>
                                    <div className="form-inputs mx-auto pt-4 pb-5 text-center register-section px-2">
                                        <h2>New to Gameup?</h2>
                                        <Button variant="primary" type="submit" className="form-btn register-btn my-3 mx-md-auto">
                                            Register for a new account
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}