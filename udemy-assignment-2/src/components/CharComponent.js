import React from 'react';

const style = {
    display: "inline-block",
    width: "16px",
    height: "16px",
    textAlign: "center",
    verticalAlign: "middle",
    padding: "10px",
    margin: "10px",
    border: "1px solid grey",
    cursor: "pointer"
};

const charComponent = (props) => {
    return (
        <div style={style} onClick={props.onClick}>{props.letter}</div>
    )
};

export default charComponent;