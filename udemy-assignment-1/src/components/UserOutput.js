import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className='user-ouput'>
            <p className='username'>{props.username} says</p>
            <p>{props.children}</p>
        </div>
    );
};

export default userOutput;