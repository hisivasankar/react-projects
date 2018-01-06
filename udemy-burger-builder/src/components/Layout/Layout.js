import React from 'react';
import classes from './Layout.css';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../containers/Burger/Burger';

const Layout = (props) => {
    return (
        <Aux>
            <div> Logo, Navigational Items, Backdrop</div>
            <main className={classes.Content}>
                <Burger/>
            </main>
        </Aux>
    );
}

export default Layout;