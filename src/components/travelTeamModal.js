import Modal from 'react-bootstrap/Modal';
import TeamModalImg from '../assets/images/modal/team-modal-img.png'
import PremiumFeatureSvg from '../assets/images/icons/premium-feature.svg'
import { Col, Row } from 'react-bootstrap';
import TrainerImg from '../assets/images/modal/trainer-img.png'

export default function TravelTeamsModal(props) {
    return (
        <Modal
            show={props.modalShow}
            onHide={props.onHide}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName="travel-team-modal"
        >
            <div className='premium-feature'>
                <h2><img src={PremiumFeatureSvg} alt="PremiumFeatureSvg" />Premium Feature</h2></div>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.cardTitleModal}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.cardType === "team"
                    ?
                    <img src={TeamModalImg} alt="TeamModalImg" className='d-block w-100 team-img' />
                    :
                    <img src={TrainerImg} alt="TrainerImg" className='d-block w-100 trainer-img' />
                }

                <Row>
                    <Col xs={5} className="pt-4 mt-3">
                        <h6>Age Group:</h6>
                    </Col>
                    <Col xs={7} className="pt-4 mt-3">
                        <p>5-12</p>
                    </Col>
                    <Col xs={5} className="pt-2">
                        <h6>Location:</h6>
                    </Col>
                    <Col xs={7} className="pt-2">
                        <p>New York, NY</p>
                    </Col>
                    <Col xs={5} className="pt-2">
                        {props.cardType === "team" ?
                            <h6>Coach:</h6>
                            : <h6>Rate:</h6>
                        }
                    </Col>
                    <Col xs={7} className="pt-2">
                        {props.cardType === "team" ?
                            <p>Jane Doe</p>
                            : <p>$100/hour</p>
                        }
                    </Col>
                    <Col xs={5} className="pt-2">
                        <h6>Hours:</h6>
                    </Col>
                    <Col xs={7} className="pt-2">
                        <p>10am - 6pm</p>
                    </Col>
                    <Col xs={5} className="pt-2">
                        <h6>Level:</h6>
                    </Col>
                    <Col xs={7} className="pt-2">
                        <p>Beginner</p>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
}
