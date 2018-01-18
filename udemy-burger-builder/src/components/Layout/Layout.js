import React, { Component } from 'react';
import classes from './Layout.css';

import Aux from '../../hoc/Auxiliary';
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';
import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';


class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    showSideDrawerHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }

    drawerToggleHandler = () => {
        this.setState( prevState => ({showSideDrawer: !prevState.showSideDrawer}));
    }

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.drawerToggleHandler}/>
                <SideDrawer show={this.state.showSideDrawer} stateChange={this.showSideDrawerHandler}/>
                <main className={classes.Content}>
                    <BurgerBuilder/>
                </main>
            </Aux>
        )
    }
}

export default Layout;