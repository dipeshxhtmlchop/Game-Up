import Modal from 'react-bootstrap/Modal';
import { Container, Col, Row, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export default function TeamNotPresentModal(props) {
    return (
        <Modal
            show={props.modalShow}
            onHide={props.onHide}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName="make-recommendation-modal"
        >
            <Modal.Header closeButton>
                <Container>
                    <Row className="">
                        <Col md={12} className="">
                            <div className="forms">
                                <Form className="registration-form5">
                                    <Row className="form-inputs mx-auto py-5">
                                        <h1 className="text-uppercase">We don’t have the team on our roster. Please fill out some more information.</h1>
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Modal.Header>
            <Modal.Body className="pt-0">
                <div className="form-layouts pb-5 query-page-form query-form-layout">
                    <Container>
                        <Row className="">
                            <Col md={12} className="">
                                <div className="forms">
                                    <Form className="registration-form5">
                                        <Row className="form-inputs mx-auto py-b">
                                            <Col md={6}>
                                                <Form.Group className="mb-3 px-1" controlId="formBasicPassword">
                                                    <Form.Label>Name</Form.Label>
                                                    <Form.Control type="text" placeholder="" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3 px-1" controlId="formBasicEmail">
                                                    <Form.Label>Age Group</Form.Label>
                                                    <Form.Select aria-label="Default select example" className="text-uppercase">
                                                        <option></option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3 px-1" controlId="formBasicPassword">
                                                    <Form.Label>Location</Form.Label>
                                                    <Form.Control type="text" placeholder="" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3 px-1" controlId="formBasicPassword">
                                                    <Form.Label>Level</Form.Label>
                                                    <Form.Select aria-label="Default select example" className="text-uppercase">
                                                        <option></option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col md={12}>
                                                <Form.Group className="mb-3 px-1 modal-input-w-100" controlId="formBasicPassword">
                                                    <Form.Label>Review</Form.Label>
                                                    <Form.Control
                                                        as="textarea"
                                                        style={{ height: '100px' }}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Button variant="primary" type="submit" className="form-btn mt-4">
                                                Submit
                                            </Button>
                                        </Row>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Modal.Body>
        </Modal>
    );
}
