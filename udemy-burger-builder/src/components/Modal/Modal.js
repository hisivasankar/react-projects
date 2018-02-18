import React, { Component } from 'react';
import classes from "./Modal.css";

import Aux from '../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    componentWillUpdate() {
        console.log('[Modal] willUpdate');
    }
    shouldComponentUpdate(nextProp, nextState) {
        return this.props.show !== nextProp.show || this.props.children !== nextProp.children;
    }
    render () {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.clicked}/>
                <div className={classes.Modal} style={{
                    transform: this.props.show ? 'translateY(0)'  : 'translateY(-100vh)'
                }}>
                {this.props.children}
                </div>
            </Aux>
        );
    }
}
export default Modal;