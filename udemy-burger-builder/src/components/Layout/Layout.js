import React from 'react';
import classes from './Layout.css';

import Aux from '../../hoc/Auxiliary';
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';

const Layout = (props) => {
    return (
        <Aux>
            <div> Logo, Navigational Items, Backdrop</div>
            <main className={classes.Content}>
                <BurgerBuilder/>
            </main>
        </Aux>
    );
}

export default Layout;