import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import TravelTeamsModal from "./travelTeamModal";

export default function Cards(props) {
    const [modalHandle, setModalHandle] = useState(false)
    const handleModal = () => {
        setModalHandle(!modalHandle)
    }
    return (
        <>
            <TravelTeamsModal
                modalShow={modalHandle}
                onHide={handleModal}
                cardTitleModal={props.cardTitle}
                cardType={props.cardType}
            />
            <Card className="cards-layout" onClick={handleModal}>
                <Card.Title><img src={props.cardImage} alt="cards_img" /></Card.Title>
                <Card.Body>
                    <h6>{props.cardTitle}</h6>
                    {props.cardSubTitle &&
                        <p className="pt-2">{props.cardSubTitle}</p>
                    }
                </Card.Body>
            </Card>
        </>
    )
}