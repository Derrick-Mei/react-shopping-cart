import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

// Contexts
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";

function App() {
    const [products] = useState(data);
    const [cart, setCart] = useState([]);

    const addItem = item => {
        // add the given item to the cart
        setCart([...cart, item]);
    };

    return (
        <ProductContext.Provider value={{ products, addItem }}>
            <CartContext.Provider value={cart}>
                <div className="App">
                    <Navigation />

                    {/* Routes - I chose to use render prop as it is faster*/}
                    <Route exact path="/" render={() => <Products />} />

                    <Route path="/cart" render={() => <ShoppingCart />} />
                </div>
            </CartContext.Provider>
        </ProductContext.Provider>
    );
}

export default App;
