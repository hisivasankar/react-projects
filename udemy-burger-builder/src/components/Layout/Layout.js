import React from 'react';
import classes from './Layout.css';

import Aux from '../../hoc/Auxiliary';
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';
import Toolbar from '../Toolbar/Toolbar';

const Layout = (props) => {
    return (
        <Aux>
            <Toolbar />
            <main className={classes.Content}>
                <BurgerBuilder/>
            </main>
        </Aux>
    );
}

export default Layout;