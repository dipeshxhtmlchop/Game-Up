import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TeamNotPresentModal from "../components/teamNotPresentModal";

export default function QueryForm() {
    const [teamNotPresentModal, setTeamNotPresentModal] = useState(false)
    return (
        <>
            <div className="query-page-outer">
                <div className="form-layouts py-5 query-page">
                    <Container>
                        <Row>
                            <Col md={12} className="position-relative">
                                <div className="forms py-4">
                                    <h1 className="py-5">Ready to get your <br />baller matched?</h1>
                                </div>
                                <div className="lets-find mx-auto d-flex justify-content-center py-5 align-items-center position-absolute">
                                    <p className="d-inline-block m-0 me-2">Let’s find a</p>
                                    <Form.Select aria-label="Default select example" className="text-uppercase ms-2">
                                        <option>Team</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="form-layouts pb-5 query-page-form mt-5 query-form-layout">
                    <Container>
                        <Row className="mt-5">
                            <Col md={12} className="mt-5">
                                <div className="forms">
                                    <Form className="registration-form mt-5">
                                        <Row className="form-inputs mx-auto py-5">
                                            <Col md={6}>
                                                <Form.Group className="mb-3 px-1 pt-2" controlId="formBasicEmail">
                                                    <Form.Label>Age</Form.Label>
                                                    <Form.Control type="text" placeholder="" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3 px-1 pt-2" controlId="formBasicPassword">
                                                    <Form.Label>Gender</Form.Label>
                                                    <Form.Control type="text" placeholder="" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3 px-1" controlId="formBasicEmail">
                                                    <Form.Label>Zip Code</Form.Label>
                                                    <Form.Control type="text" placeholder="" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3 px-1" controlId="formBasicPassword">
                                                    <Form.Label>Radius</Form.Label>
                                                    <Form.Select aria-label="Default select example" className="text-uppercase">
                                                        <option>select</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3 px-1" controlId="formBasicPassword">
                                                    <Form.Label>Skill Level</Form.Label>
                                                    <Form.Select aria-label="Default select example" className="text-uppercase">
                                                        <option>select</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3 px-1" controlId="formBasicPassword">
                                                    <Form.Label>Goals (check all that apply)</Form.Label>
                                                    <Form.Select aria-label="Default select example" className="text-uppercase">
                                                        <option>-</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3 px-1" controlId="formBasicPassword">
                                                    <Form.Label>Are you currently on a team?</Form.Label>
                                                    <Form className="radio-outer">
                                                        {['radio'].map((type) => (
                                                            <div key={`default-${type}`} className="mb-3">
                                                                <Form.Check
                                                                    type={type}
                                                                    id={`default-${type}`}
                                                                    label="Yes"
                                                                />
                                                                <Form.Check
                                                                    type={type}
                                                                    label="No"
                                                                    id={`default2-${type}`}
                                                                />
                                                            </div>
                                                        ))}
                                                    </Form>
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3 px-1" controlId="formBasicPassword">
                                                    <Form.Label>Current Team</Form.Label>
                                                    <Form.Control type="text" placeholder="Search..." />
                                                </Form.Group>
                                            </Col>
                                            {/* Modal */}
                                            <TeamNotPresentModal modalShow={teamNotPresentModal} />
                                            {/*  */}
                                            <Button variant="primary" type="submit" className="form-btn mt-4" onClick={(e) => { e.preventDefault(); setTeamNotPresentModal(!teamNotPresentModal) }}>
                                                Let’s Go
                                            </Button>
                                        </Row>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}