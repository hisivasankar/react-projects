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

const BuildControls = () => {
    return (
        <div className={classes.BuildControls}>
            {controls.map(ctrl => {
                return (
                    <BuildControl
                        label={ctrl.label}
                        />
                );     
            })}
        </div>
    )
};

export default BuildControls;