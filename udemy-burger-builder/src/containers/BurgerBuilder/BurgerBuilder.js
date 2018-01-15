import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.3,
    bacon: 1.2,
    meat: 1.5,
    cheese: 0.8
}, BREAD_PRICE = 4;


class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: BREAD_PRICE,
        purchasing: false
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

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        });
    }
    purchaseCancelledHandler = () => {
        this.setState({
            purchasing: false
        });
    }

    purchaseContinueHandler = () => {
        alert("Continue purchase!");
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
                <Modal 
                    show={this.state.purchasing} 
                    clicked={this.purchaseCancelledHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice.toFixed(2)}
                        purchaseContinue={this.purchaseContinueHandler}
                        purchaseCancelled={this.purchaseCancelledHandler}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    added={this.ingredientAdded}
                    removed={this.ingredientRemoved}
                    disable={disabledInfo}
                    price={this.state.totalPrice}
                    disableOrder={this.state.totalPrice <= BREAD_PRICE}
                    onOrder={this.purchaseHandler}/>
            </div>
        )
    }
}

export default BurgerBuilder;