import React from "react";

import { CartContext } from "../contexts/CartContext";

// Components
import Item from "./ShoppingCartItem";

const ShoppingCart = props => {
	const CartContextObj = React.useContext(CartContext);
    const getCartTotal = () => {
        return CartContextObj.cart
            .reduce((acc, item) => {
                return acc + item.price * item.quantity;
            }, 0)
            .toFixed(2);
    };

    return (
        <div className="shopping-cart">
            {CartContextObj.cart.map(item => (
                <Item key={item.id} item={item} />
            ))}

            <div className="shopping-cart__checkout">
                <p>Total: ${getCartTotal()}</p>
                <button>Checkout</button>
            </div>
        </div>
    );
};

export default ShoppingCart;
