import React from "react";
import Aux from "../../hoc/Auxiliary";
import StyledButton from '../StyledButton/StyledButton';
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
            <p><strong>Total price: {props.price}</strong></p>
            <p>Continue to checkout?</p>
            <StyledButton
                btnType='Danger'
                clicked={props.purchaseCancelled}>
                Cancel
            </StyledButton>
            <StyledButton
                btnType='Success'
                clicked={props.purchaseContinue}>
                Continue
            </StyledButton>
        </Aux>
    );
};
export default OrderSummary;
