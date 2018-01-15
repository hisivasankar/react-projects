import React from 'react';

import classes from './StyledButton.css';

const StyledButton = (props) => {
    let classNames = [classes.Button, classes[props.btnType]].join(' ');
    return (
        <button onClick={props.clicked} className={classNames}>
            {props.children}
        </button>
    );
}

export default StyledButton;