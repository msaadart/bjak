import React from "react";
import Product from "./Product";

const Grocery = ({ products: initialProducts }) => {
    const [products, setProducts] = React.useState(initialProducts);
  
    // Handles voting logic
    const onVote = (dir, index) => {
      const updatedProducts = products.map((product, i) => {
        if (i === index) {
          return { ...product, votes: product.votes + dir };
        }
        return product;
      });
      setProducts(updatedProducts); // Update the state with new vote count
    };
  
    return (
        <div class="flex flex-row min-h-screen justify-center items-center">
      <ul className="list-none">
        {products.map((product, index) => (
          <Product
            key={index}
            product={product}
            onVote={(dir) => onVote(dir, index)} 
          />
        ))}
      </ul>
      </div>
    );
  };

 export default Grocery;