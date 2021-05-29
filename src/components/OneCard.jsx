import React from 'react';
import {Card} from "react-bootstrap";

const OneCard = ({description, size, price,count}) => {

    return (
        <div>
            <div className={"mr-5 mb-5"}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{description}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Размер: {size}</Card.Subtitle>
                        <Card.Text>Цена: {price} руб.</Card.Text>
                        <Card.Subtitle className="mb-2 text-muted">В наличии: {count} шт.</Card.Subtitle>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );

};

export default OneCard;