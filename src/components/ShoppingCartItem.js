import React from "react";
import { CartContext } from "../contexts/CartContext";

const Item = props => {
    const CartContextObj = React.useContext(CartContext);
    return (
        <div className="shopping-cart_item">
            <img src={props.image} alt={`${props.title} book`} />

            <div>
                <h1>{props.title}</h1>
                <p>Quantity: {props.quantity}</p>
                <p>$ {props.price}</p>
                <button onClick={e => CartContextObj.removeItem(props.id)}>
                    Remove from cart
                </button>
            </div>
        </div>
    );
};

export default Item;
