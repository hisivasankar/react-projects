import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";

import axios from "../../axios-order";
import Spinner from "../../components/Spinner/Spinner";

import withErrorHandler from "../../hoc/withErrorHandler";
import Aux from "../../hoc/Auxiliary";

const INGREDIENT_PRICES = {
    salad: 0.3,
    bacon: 1.2,
    meat: 1.5,
    cheese: 0.8
  },
  BREAD_PRICE = 4;

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: BREAD_PRICE,
    purchasing: false,
    loading: false,
    error: null
  };

  componentDidMount = () => {
    axios
      .get("https://react-my-burger-dc331.firebaseio.com/ingredients.json")
      .then(response => {
        this.setState({
          ingredients: response.data
        });
      })
      .catch(error => {
        this.setState({
            error: error
        });
      });
  };

  ingredientAdded = type => {
    let ingredients = { ...this.state.ingredients };

    ingredients[type]++;

    let updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

    this.setState({
      ingredients: ingredients,
      totalPrice: updatedPrice
    });
  };

  ingredientRemoved = type => {
    let ingredients = { ...this.state.ingredients };

    if (ingredients[type] === 0) {
      return;
    }

    ingredients[type]--;

    let updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

    this.setState({
      ingredients: ingredients,
      totalPrice: updatedPrice
    });
  };

  purchaseHandler = () => {
    this.setState({
      purchasing: true
    });
  };
  purchaseCancelledHandler = () => {
    this.setState({
      purchasing: false
    });
  };

  purchaseContinueHandler = () => {
    let orderData = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customerDetails: {
        name: "Sivasankar",
        email: "damn@dude.com",
        deliverMethod: "fastest",
        address: {
          street: "29th street, Ed-Head land",
          country: "Yo!"
        }
      }
    };
    this.setState({
      purchasing: true,
      loading: true
    });
    axios
      .post("/orders", orderData)
      .then(response => {
        this.setState({
          purchasing: false,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          purchasing: false,
          loading: false
        });
      });
  };

  render() {
    let disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;
    if (this.state.ingredients) {
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          price={this.state.totalPrice.toFixed(2)}
          purchaseContinue={this.purchaseContinueHandler}
          purchaseCancelled={this.purchaseCancelledHandler}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    let burger = null;
    if (this.state.ingredients === null) {
      burger = <Spinner />;
    } else {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            added={this.ingredientAdded}
            removed={this.ingredientRemoved}
            disable={disabledInfo}
            price={this.state.totalPrice}
            disableOrder={this.state.totalPrice <= BREAD_PRICE}
            onOrder={this.purchaseHandler}
          />
        </Aux>
      );
    }

    if(this.state.error) {
        burger = <p>Some problem while loading burger ingredients!</p>;
        orderSummary = null;
    }

    return (
      <div>
        <Modal
          show={this.state.purchasing}
          clicked={this.purchaseCancelledHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </div>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
