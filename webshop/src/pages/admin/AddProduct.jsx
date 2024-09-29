import React, { useEffect, useRef, useState } from 'react'
// import productsFromFile from "../../data/products.json"
// import categoriesFromFile from "../../data/categories.json"
import { useTranslation } from 'react-i18next';
import config from "../../data/config.json";

function AddProduct() {
  const [message, changeMessage] = useState("Add product!")
  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const ratingRef = useRef();
  const imageRef = useRef();
  const {t} = useTranslation();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [idUnique, setIdUnique] = useState(true);

  useEffect(() => {
    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => setProducts(json))
  }, []);

  useEffect(() => {
    fetch(config.categoriesDbUrl)
      .then(res => res.json())
      .then(json => setCategories(json))
  }, []);

  const add = async () => {
    if (idRef.current.value === "") {
     changeMessage (t("message.can-not-be-added-with-empty-id"));
     return;
    } 

    if (titleRef.current.value === "") {
      changeMessage ("Can not be added with empty title!");
      return;
    } 

    if (imageRef.current.value.startsWith("http") === false) {
      changeMessage ("Can not be added with false URL!");
      return;
    } 

    changeMessage("added: " + idRef.current.value);
    const newProduct =  {
      "id": Number(idRef.current.value),
      "title": (titleRef.current.value),
      "price": Number(priceRef.current.value),
      "description": (descriptionRef.current.value),
      "category": (categoryRef.current.value),
      "image": (imageRef.current.value),
      "active": true,
      "rating": {
          "rate": Number(ratingRef.current.value),
          "count": 0
      }
    }
    products.push(newProduct)
    // tegemata: andmebaasi saatmine:
    // PUT käsuga andmebaasi kõik tooted
    await fetch(config.productsDbUrl, {method: "PUT", body: JSON.stringify(products)})
    
    idRef.current.value = "";
    titleRef.current.value = "";
    priceRef.current.value = "";
    descriptionRef.current.value = "";
    categoryRef.current.value = "";
    imageRef.current.value = "http";
    ratingRef.current.value = "";
  }

  // KODUS: ID unikaalsuse kontroll
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

  return (
    <div>
      {idUnique === false && <div>ID is not unique!</div>}
      <div>{message}</div>
      <label>Product ID:</label> <br/>
      <input onChange={checkIdUniqueness} ref={idRef} type="text"/> <br/>
      <label>Product title:</label> <br/>
      <input ref={titleRef} type="text"/><br/>
      <label>Product price:</label> <br/>
      <input ref={priceRef} type="text"/><br/>
      <label>Product description:</label> <br/>
      <input ref={descriptionRef} type="text"/><br/>
      <label>Product category:</label> <br/>
      {/* <input ref={categoryRef} type="text"/><br/> */}
      <select ref={categoryRef}>
        {categories.map(category => <option key={category.name}>{category.name}</option> )}
      </select> <br />
      <label>Product rating:</label> <br/>
      <input ref={ratingRef} type="text"/><br/>
      <label>Product image:</label> <br/>
      <input ref={imageRef} type="text" defaultValue={"http"} /><br/>
      <button disabled={idUnique === false} onClick={add}>Enter</button> <br/>
    </div>
  )
}

export default AddProduct