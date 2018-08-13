import React from 'react';
import './Card.css';

const Card = props => {
    return (
        <div onClick={props.click} className="Card">
            <h3>{props.race}</h3>
        </div>
    )
}

export default Card;