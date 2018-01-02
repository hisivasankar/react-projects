import React from 'react';

const style = {
    width: '50%',
    height: '1rem',
    padding: '10px',
    textAlign: 'center'
};

const userInput = (props) => {
    return (
        <input 
            style={style} placeholder='Type your name here'
            value={props.value}
            onChange={props.changed}/>
    );
};

export default userInput;