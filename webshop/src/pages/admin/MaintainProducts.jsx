import React, { useEffect, useRef, useState} from 'react'
import {Link} from "react-router-dom"
// import productsFromFile from "../../data/products.json"
import styles from "../../css/MaintainProducts.module.css"
import config from "../../data/config.json"

// import "../../css/MaintainProducts.css" ---> üle terve rakenduse
// import styles from "../../css/MaintainProducts.css" --> mõjub ainult siin failis

function MaintainProducts() {
  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);

  const searchRef = useRef();

  useEffect(() => {
    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json); 
        setDbProducts(json); 
      })
  }, []);

  const remove = async (product) => {
    const index = dbProducts.findIndex(p => p.id === product.id);
    dbProducts.splice(index, 1);
    await fetch(config.productsDbUrl, {method: "PUT", body: JSON.stringify(dbProducts)})
    searchFromProducts();
  }  

  const searchFromProducts = () => {
    const result = dbProducts.filter(p => 
      p.title.toLowerCase().includes(searchRef.current.value.toLowerCase()) ||
      p.description.toLowerCase().includes(searchRef.current.value.toLowerCase())
    );
    setProducts(result);
  }

  // if (products.length === 0) {
  //   return "Products not found, change your search"
  // }

  return (
    <div>
        <input ref={searchRef} onChange={searchFromProducts} type="text" />
        {/* <button onClick={searchFromProducts}></button> */}
        {products.length} pcs

      {products.length === 0 && <div>Products not found, change your search</div>}

      {products.length > 0 &&
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) =>
            <tr key={index} className={product.active === true ? styles.active: styles.inactive}>
                <td><img style={{width: "75px", height: "75px"}} src={product.image} alt="" /></td>
                <td>{product.id}</td> 
                <td>{product.title}</td> 
                <td>{product.price}€ </td>
                <td>{product.description}</td> 
                <td>{product.category}</td> 
                <td>{product.rating.rate}/{product.rating.count}</td>
                <td>
                  <button onClick={() => remove(product)}>Delete</button>
                  <Link to={"/admin/edit-product/" + product.id} >
                  <button>Change</button>
                  </Link>
                </td>
            </tr>)}
        </tbody>
      </table>}
        
    </div>
  )
}

export default MaintainProducts