import React from "react";

import { ProductContext } from "../contexts/ProductContext";

// Components
import Product from "./Product";

const Products = props => {
	// the value returned from value is an obj.
	// Therefore, I can use object destructuring
    const { products, addItem } = React.useContext(ProductContext);
    // console.log("products: ", products)
    return (
        <div className="products-container">
            {products.map(product => (
                <Product
                    key={product.id}
                    product={product}
                    addItem={addItem}
                />
            ))}
        </div>
    );
};

export default Products;
