import React from 'react';
import './Card.css';

const Card = props => {
    return (
        <div onClick={props.click} className="Card" dataurl={props.dataurl}>
            <h3>{props.title}</h3>
        </div>
    )
}

export default Card;