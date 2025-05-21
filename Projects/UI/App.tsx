 import React from "react";
import ProductCard from "./ProductCard";
import products from "./products.json";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default App;
