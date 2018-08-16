import React from 'react';
import 'components/Common/Button.css';

const Button = props => {
    return (
        <button disabled={props.disabled} className={props.className + ' btn'}>{props.instruction}</button>
    )
}

export default Button;