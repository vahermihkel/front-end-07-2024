import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
//import productsFromFile from "../../data/products.json"
import config from "../../data/config.json"

function SingleProduct() {
  const [products, setProducts] = useState([])
  const {id} = useParams();
  const product = products.find(p => p.id === Number(id));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        setLoading(false);
      })
  }, []);

  if (loading === true) {
    return <div>Loading...</div>
  }

  if (product === undefined) {
    return <div>Product not found</div>
  }

  return (
    <div>
       
        <div>
          <img style={{width: "75px"}} src={product.image} alt="" />
          <div>{product.title}</div>
          <div>{product.price}</div>
          <div>{product.description}</div>
          <div>{product.category}</div>
          <div>{product.rating.rate}/{product.rating.count}</div>
    </div>
  
  </div>
)
  

}

export default SingleProduct