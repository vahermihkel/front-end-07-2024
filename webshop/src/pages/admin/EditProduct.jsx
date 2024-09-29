import React, {useEffect, useRef, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import productsFromFile from "../../data/products.json"
import config from "../../data/config.json"

// EditProduct lehel:
// Kategooriate andmebaasist võtmine ja välja kuvamine

function EditProduct() {
  const {id} = useParams();         //     18   === "18"
  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const ratingRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();
  const [idUnique, setIdUnique] = useState(true);
  const [products, setProducts] = useState([])
  const found = products.find(p => p.id === Number(id));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        setLoading(false);
      })
  }, []);
  
  const edit = async () => {
    const index = products.findIndex(p => p.id === Number(id));
    products[index] =  {
        "id": Number(idRef.current.value),
        "title": (titleRef.current.value),
        "price": Number(priceRef.current.value),
        "description": (descriptionRef.current.value),
        "category": (categoryRef.current.value),
        "image": found.image,
        "active": activeRef.current.checked, // boolean ja HTMLs checkbox
        "rating": {
            "rate": Number(ratingRef.current.value),
            "count": Number(found.rating.count)
        }
    }
    await fetch(config.productsDbUrl, {method: "PUT", body: JSON.stringify(products)})
    navigate("/admin/maintain-products")
  }

  const checkIdUniqueness = () => {
    const product = products.find(p => p.id === Number(idRef.current.value));
    if (product === undefined) {
      // kellelgil teisel pole
      setIdUnique(true);
    } else {
      // kellelgi on, sest leidis toote kellel on selline ID
      setIdUnique(false);
    }
  }

  if (loading === true) {
    return <div>Loading...</div>
  }

  if (found === undefined) {
    return <div>Product not found</div>
  }

  return (
    <div>
        {idUnique === false && <div>ID is not unique!</div>}
        <label>Product ID:</label> <br/>
        <input onChange={checkIdUniqueness} type="text" ref={idRef} defaultValue={found.id}/><br/>
        <label>Product title:</label> <br/>
        <input type="text" ref={titleRef} defaultValue={found.title}/><br/>
        <label>Product price:</label> <br/>
        <input type="text" ref={priceRef} defaultValue={found.price}/><br/>
        <label>Product description:</label> <br/>
        <input type="text" ref={descriptionRef} defaultValue={found.description}/><br/>
        <label>Product category:</label> <br/>
        <input type="text" ref={categoryRef} defaultValue={found.category}/><br/>
        <label>Product rating:</label> <br/>
        <input type="text" ref={ratingRef} defaultValue={found.rating.rate}/><br/>
        <label>Product active:</label> <br/>
        <input type="checkbox" ref={activeRef} defaultChecked={found.active}/><br/>
        <button disabled={idUnique === false} onClick={edit}>Change</button>
    </div>
  )
}

export default EditProduct