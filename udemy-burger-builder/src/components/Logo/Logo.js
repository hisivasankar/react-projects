import React from 'react';
import classes from './Logo.css';
import logo from '../../assets/burger-logo.png';

const Logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={logo} alt="MyBurger"/>
        </div>
    );
}
export default Logo;