import React from 'react';

function ProductList({ products }) {
    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product">
                    <div className='product-img'> <img src={product.image} alt={product.name} width={"400px"} height={"500px"} /></div>
                    <div className='product-content'>
                        <h3>{product.name}</h3>
                        <h5><span className='product-name'>Size:</span>{product.size}</h5>
                        <h4><span className='product-name'>Color:</span>{product.color}</h4>
                        <h6><span className='product-name'>Price:</span> Rs.<span style={{color:"red"}}>{product.price}</span></h6>
                        <p><span className='product-name'>Description:</span>{product.description}</p>
                       
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
