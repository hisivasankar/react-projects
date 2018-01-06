import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    render() {
        return (
            <div>
                <p>Burger Builder</p>
                <Burger/>
                <div>Burger Controls</div>
            </div>
        )
    }
}

export default BurgerBuilder;