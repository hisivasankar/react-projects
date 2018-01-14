import React from 'react';

import BuildControl from '../BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [{
    label: 'Salad',
    type: 'salad'
}, {
    label: 'Cheese',
    type: 'cheese'
}, {
    label: 'Meat',
    type: 'meat'
}, {
    label: 'Bacon',
    type: 'bacon'
}];

const BuildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current price: <strong>{props.price.toFixed(2)} BTC</strong></p>
            {controls.map(ctrl => {
                return (
                    <BuildControl
                        key={ctrl.label}
                        label={ctrl.label}
                        added={() => props.added(ctrl.type)}
                        remove={() => props.removed(ctrl.type)}
                        disable={props.disable[ctrl.type]}/>
                );     
            })}
            <button
                className={classes.OrderButton}
                disabled={props.disableOrder}
                onClick={props.onOrder}>ORDER NOW</button>
        </div>
    )
};

export default BuildControls;