import React, { useState ,useEffect} from "react";
import NewProductForm from './NewProduct';
import './Products.css';

function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/products')
    .then(res => res.json())
    .then(data => setProducts(data))
    .catch(err => console.log(err))
  },[])

  function addProduct(product) {
    fetch('http://localhost:6001/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    .then(res => res.json())
    .then(data => setProducts([...products, data]))
    .catch(err => console.log(err));
  }


  return (
    <div>
      <NewProductForm addProduct={addProduct} />
      <div className="product-list">
        <h2>Product List</h2>
        {products.length === 0 ? (
          <p>No products added yet.</p>
        ) : (
          <ul>
            {products.map((product, index) => (
              <li key={product.id || index}>
                <h3>{product.model}</h3>
                <p><strong>Type:</strong> {product.type}</p>
                <img src={product.image} alt={product.model} style={{ maxWidth: '200px' }} />
                <p>{product.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ProductList;