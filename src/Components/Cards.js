import React, {useState} from 'react';
import {Card} from "react-bootstrap";

const Cards = ({item, lastElemId, refProp}) => {
    let [flag, setFlag] = useState(false)

    if (item.id === lastElemId) {
        setFlag(true)
    }

    return (
        <Card className="mb-3" >
            <Card.Body>
                <Card.Title>{item.id}) {item.title}</Card.Title>
                <Card.Text>{item.body}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">User ID: {item.userId}</Card.Subtitle>
            </Card.Body>
        </Card>
    );
};

export default Cards;