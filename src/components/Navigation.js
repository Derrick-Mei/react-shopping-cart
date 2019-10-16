import React from "react";
import { NavLink } from "react-router-dom";

import { CartContext } from "../contexts/CartContext";

const Navigation = props => {
    return (
		// Context API using render prop and not useContext hook
        <CartContext.Consumer>
            {obj => (
                <div className="navigation">
                    <NavLink to="/">Products</NavLink>
                    <NavLink to="/cart">
                        Cart <span>{obj.cart.reduce((acc, item) => {
                return acc + item.quantity;
            }, 0)}</span>
                    </NavLink>
                </div>
            )}
        </CartContext.Consumer>
    );
};

export default Navigation;
