import React from 'react';
import 'components/Common/Button.css';

const Button = props => {
    return (
        <button className={props.className + ' btn btn-primary'}>{props.instruction}</button>
    )
}

export default Button;