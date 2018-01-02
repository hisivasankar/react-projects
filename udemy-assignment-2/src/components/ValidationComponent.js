import React from 'react';
import "./ValidationComponent.css";

const validationComponent = (props) => {
    let className = 'status error',
        text = 'Text is too short';
    if (props.length > 5) {
        className = className.replace('error', 'success');
        text = 'Text long enough';
    }
    return (
        <span className={className}>{text}</span>
    );
};

export default validationComponent;