import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    let ingredients = Object.keys(props.ingredients)
                            .reduce((acc, igKey) => {
                                let times = props.ingredients[igKey];
                                var items = Array(times).fill(igKey).map((_, index) => {
                                    return <BurgerIngredient key={igKey + index} type={igKey}/>
                                });
                                return [...acc, ...items];
                            }, []);

    if(ingredients.length === 0) {
        ingredients = <p>Please start adding ingredients!</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {ingredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
};

export default Burger;
