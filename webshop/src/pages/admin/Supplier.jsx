import React, { useEffect, useState } from 'react'
import Payment from '../../components/Payment';

function Supplier() {
  const [products, setProducts] = useState([]);

  // uef --> lühend
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json()) // kogu tagastus (metaandmetega)
      .then(json => setProducts(json)) // reaalselt mis ma seal lehel brauseris näen
  }, []);

  return (
    <div>
      <Payment sum={200} />
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
      {products.map((product, index) =>
        <tr key={index}>
          <td><img style={{width: "75px"}} src={product.image} alt="" /></td>
          <td>{product.id}</td> 
          <td>{product.title}</td> 
          <td>{product.price}€ </td>
          <td>{product.description}</td> 
          <td>{product.category}</td> 
          <td>{product.rating.rate}/{product.rating.count}</td>
    
          {/* <br></br><br></br> */}
        </tr>)}
        </tbody>
        </table>



    </div>
  )
}

export default Supplier