import React from 'react';
import {Card} from "react-bootstrap";

const LastCard = ({item, refProp}) => {

    return (
        <Card key={item.id} className="mb-3" ref={refProp}>
            <Card.Body>
                <Card.Title>{item.id}) {item.title}</Card.Title>
                <Card.Text>{item.body}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">User ID: {item.userId}</Card.Subtitle>
            </Card.Body>
        </Card>
    );
};

export default LastCard;