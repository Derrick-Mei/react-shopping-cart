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

// Custom Hooks
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
    const [products] = useState(data);
    const [cart, setCart] = useLocalStorage([]);

    const modifyQuantity = (event, item) => {
        console.log("value: ", event.target.value, "\n Item: ", item);
        const currentCart = cart;
        const inCart = currentCart.find(cartItem => cartItem.id === item.id);
        if (inCart.quantity && event.target.value > 0) {
            const updatedCart = cart.map(cartItem => {
                if (cartItem.id === item.id) {
                    cartItem.quantity = event.target.value;
                    return cartItem;
                }
                return cartItem;
            });
            setCart(updatedCart);
        } else {
            setCart(cart.filter(cartItem => cartItem.id !== item.id));
        }
    };

    const addItem = item => {
        // add the given item to the cart
        const currentCart = cart;
        const inCart = currentCart.filter(cartItem => cartItem.id === item.id);
        if (inCart.length) {
            const updatedCart = cart.map(cartItem => {
                if (cartItem.id === item.id) {
                    cartItem.quantity++;
                    return cartItem;
                }
                return cartItem;
            });
            setCart(updatedCart);
        } else {
            setCart([...cart, item]);
        }
    };

    // const removeItem = id => {
    //     const currentCart = cart;
    //     const inCart = currentCart.find(cartItem => cartItem.id === id);
    //     if (inCart.quantity > 1) {
    //         const updatedCart = cart.map(cartItem => {
    //             if (cartItem.id === id) {
    //                 cartItem.quantity--;
    //                 return cartItem;
    //             }
    //             return cartItem;
    //         });
    //         setCart(updatedCart);
    //     } else {
    //         // setCart([...cart, item]);
    //         setCart(cart.filter(item => item.id !== id));
    //     }
    // };

    const removeAll = id => {
        setCart(cart.filter(item => item.id !== id));
    };

    return (
        <ProductContext.Provider value={{ products, addItem }}>
            <CartContext.Provider
                value={{ cart, removeAll, modifyQuantity }}
            >
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
