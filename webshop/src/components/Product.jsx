import { Button } from '@mui/material'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {toast} from "react-toastify"

//              props.product
function Product({product}) { // object destructuring

    // const addToCart = () => {
//    const added ={
//     "id" : (productRef.current.value)
//   }
//  productsFromFile[index] = addToCart
//   navigate("cart")
 // }
 const addToCart = (productClicked) => {
  //cart.push(product)
  
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = cart.find(cp => cp.toode.id === productClicked.id)
  if (product !== undefined) {
    // suurendan kogust
    product.kogus++;
  } else {
    // lisan juurde (pushin) kogusega 1
    cart.push({"toode": productClicked, "kogus": 1});
  }
  localStorage.setItem("cart", JSON.stringify(cart));

  toast.success("Added to cart !")
 }

 // LocalStorage-sse ARRAY salvestamiseks
 // 1. peame võtma localStorage-st vana seisu                         ---> localStorage.getItem
 // 1.b kui on tühi localStorage-s, peame tegema, et ei tuleks tühjus ---> || []
 // 2. võtma jutumärgid ära                                           ---> JSON.parse()
 // 3. lisama ühe juurde                                              ---> .push()
 // 4. panema jutumärgid tagasi                                       ---> JSON.stringify()
 // 5. panema localStorage-sse tagasi                                 ---> localStorage.setItem()


  return (
    <div className="product">
      <img className={product.active === true ? "image" : "image-inactive"} src={product.image} alt="" />
      <div className="title">{product.title.length > 47 ? product.title.substring(0,47) + "..." : product.title }</div>
      <div className={product.price < 20 ? "price-lower" : undefined}>{product.price} €</div>
      <div>{product.rating.rate} <FaStar /> </div>

      <Link to={"/product/" + product.id }>
        <Button variant="contained">More details</Button>
      </Link>
      

      <Button variant="outlined" disabled={product.active === false} onClick={()=>addToCart(product)}> Add to cart !</Button> <br/><br/>
    </div>
  )
}

export default Product