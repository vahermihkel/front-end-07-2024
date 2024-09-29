import React, { useEffect, useRef, useState } from 'react'
import Payment from '../../components/Payment';

function BookSupplier() {
  const [products, setProducts] = useState([]);
  const searchRef = useRef();
  const [searched, setSearched] = useState("react");
  const [message, setMessage] = useState("");

  // uef --> lühend
  useEffect(() => {
    fetch("https://api.itbook.store/1.0/search/" + searched)
      .then(response => response.json()) // kogu tagastus (metaandmetega)
      .then(json => setProducts(json.books)) // reaalselt mis ma seal lehel brauseris näen
  }, [searched]);

  const searchFromBooks = () => {
    if (searchRef.current.value === "") {
      setProducts([]);
      setMessage("");
      return;
    }
    if (searchRef.current.value.includes(" ")) {
      setMessage("Tühikut ei saa otsingus kasutada");
      return;
    }
    setMessage("");
    setSearched(searchRef.current.value);
  }

  return (
    <div>
      <Payment sum={150} />
      <div>{message}</div>
      <input onChange={() => searchFromBooks()} ref={searchRef} type="text" />
      <div>{products.length} pcs</div>
      {products.map((product, index) =>
        <div key={index}>
          <img style={{width: "75px"}} src={product.image} alt="" />
          <div>{product.isbn13}</div> 
          <div>{product.title}</div> 
          <div>{product.price}€ </div>
    
          <br></br><br></br>
        </div>)}
    </div>
  )
}

export default BookSupplier