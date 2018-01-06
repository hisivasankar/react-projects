import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';

const INGREDIENT_PRICES = {

};


class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 0,
            cheese: 1,
            meat: 1
        },
        totalPrice: 0
    };

    ingredientAdded = (type) => {
        let ingredients = { ...this.state.ingredients };

        ingredients[type]++;

        let updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

        this.setState({
            ingredients: ingredients,
            totalPrice: updatedPrice
        });
    }

    ingredientRemoved = (type) => {
        let ingredients = { ...this.state.ingredients };

        if(ingredients[type] === 0) {
            return;
        }

        ingredients[type]--;

        let updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

        this.setState({
            ingredients: ingredients,
            totalPrice: updatedPrice
        });
    }

    render() {
        let disabledInfo = {
            ...this.state.ingredients
        };

        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <div>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    added={this.ingredientAdded}
                    removed={this.ingredientRemoved}
                    disable={disabledInfo}/>
            </div>
        )
    }
}

export default BurgerBuilder;