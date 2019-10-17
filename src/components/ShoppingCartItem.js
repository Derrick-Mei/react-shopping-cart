import React from "react";
import { CartContext } from "../contexts/CartContext";

const Item = props => {
    const CartContextObj = React.useContext(CartContext);
    return (
        <div className="shopping-cart_item">
            <img src={props.item.image} alt={`${props.item.title} book`} />

            <div>
                <h1>{props.item.title}</h1>
                <p>
                    <label>
                        Quantity :
                        <input
                            label="Quantity"
                            type="number"
                            value={props.item.quantity}
                            onChange={e =>
                                CartContextObj.modifyQuantity(e, props.item)
                            }
                        ></input>
                    </label>
                </p>
                <p>$ {props.item.price}</p>
                <button onClick={e => CartContextObj.removeAll(props.item.id)}>
                    Remove from cart
                </button>
            </div>
        </div>
    );
};

export default Item;
