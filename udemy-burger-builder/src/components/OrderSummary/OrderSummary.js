import React from "react";
import Aux from "../../hoc/Auxiliary";
import classes from "./OrderSummary.css";

const OrderSummary = props => {
    const ingredientsSummary = Object.keys(props.ingredients).map(igKey => {
        return (
            <li key={igKey}>
                <span className={classes.OrderSummaryItem}>{igKey}</span>
                : {props.ingredients[igKey]} times
            </li>
        );
    });
    return (
        <Aux>
            <h2>Your order</h2>
            <p>A delicious burger with following ingredients:</p>
            <ul>{ingredientsSummary}</ul>
            <a href="#">Continue to checkout?</a>
        </Aux>
    );
};
export default OrderSummary;
