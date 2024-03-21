import React from 'react';

function ProductDetails({ product }) {
  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Size: {product.size}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductDetails;
