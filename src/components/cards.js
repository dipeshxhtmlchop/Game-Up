import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import TravelTeamsModal from "./travelTeamModal";
import { useNavigate } from 'react-router-dom'

export default function Cards(props) {
    const navigate = useNavigate();
    const [modalHandle, setModalHandle] = useState(false)
    const handleModal = () => {
        if (props.noModal !== 'noModal') {
            setModalHandle(!modalHandle)
        } else {
            navigate(`/player-dash`);
        }
    }
    return (
        <>
            <TravelTeamsModal
                modalShow={modalHandle}
                onHide={handleModal}
                cardTitleModal={props.cardTitle}
                cardType={props.cardType}
            />
            <Card className={props.imageAlignment ? `cards-layout ${props.imageAlignment}` : 'cards-layout'} onClick={handleModal}>
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

