import React from 'react';
import products from '../data/products';

const ProductList = () => (
  <section className="products">
    <h2>Featured Products</h2>
    <div className="product-grid">
      {products.map((product, index) => (
        <div className="product-card" key={index}>
          <img src={product.image} alt={product.name} />
          <div className="product-info">
            <h4>{product.name}</h4>
            <p>{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ProductList;
