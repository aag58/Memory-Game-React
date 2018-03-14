import React, {Component} from 'react';
import propTypes from 'prop-types';
import './Card.css';
const Card = (props) => {
    // const {clickfun} = props;
    let style = {};
    if(props.showing){
        style.backgroundColor = props.backgroundColor;
    }
    return(
        <div style = {style} className = "card-container" onClick = {props.clickfun}></div>
    );
}

Card.propTypes = {
    clickfun: propTypes.func.isRequired
}

export default Card;