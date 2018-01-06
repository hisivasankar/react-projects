import React, {Component} from 'react';
import BurgerIngredient from '../../components/BurgerIngredient/BurgerIngredient';

class Burger extends Component {
    render() {
        return (
            <div>
                <p>I am a live burger</p>
                <BurgerIngredient/>
            </div>
        )
    }
}

export default Burger;