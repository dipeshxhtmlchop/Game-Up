import React from "react";
import Card from 'react-bootstrap/Card';

export default function Cards(props) {
    return (
        <>
            <Card className="cards-layout">
                <Card.Title><img src={props.cardImage} alt="cards_img" /></Card.Title>
                <Card.Body>
                    <h6>{props.cardTitle}</h6>
                    {props.cardSubTitle != null ?
                        <p className="pt-2">{props.cardSubTitle}</p>
                        :
                        null
                    }
                </Card.Body>
            </Card>
        </>
    )
}