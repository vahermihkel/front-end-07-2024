import React, { useState } from 'react'
// import productsInCart from "../../data/cart.json"
import styles from "../../css/Cart.module.css";
import { FaStar } from 'react-icons/fa';
import ParcelMachines from '../../components/ParcelMachines';
import Payment from '../../components/Payment';
import { Button } from '@mui/material';

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])
 

  const emty = () => {
    setCart([])
    localStorage.setItem("cart", JSON.stringify([]));
  }

  const wholeSum = () => {
    let sum = 0
    cart.forEach(cp => sum = sum + cp.toode.price * cp.kogus)
    return sum.toFixed(2);
  }

  const decreaseQuantity = (index) => {
    cart[index].kogus--;
    if (cart[index].kogus === 0) {
      cart.splice(index, 1);
    }
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const increaseQuantity = (index) => {
    cart[index].kogus++;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  
  const remove = (index) => {
    cart.splice(index, 1)
    setCart(cart.slice())
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  return (
    <div>
        <div>Number of items in cart: {cart.length}tk</div>
        <Button variant="outlined" onClick={emty}>Empty the cart</Button>
        
        <div>Whole price: {wholeSum()}.€</div>
        <div className={styles.products}>
          {cart.map((cp, index) =>
          <div className={styles.product} key={index}>
            <img className={styles.image} src={cp.toode.image} alt="" />
            <div className={styles.title}>{cp.toode.title}</div>
            <div className={styles.price}>{cp.toode.price.toFixed(2)} €</div>
            <div className={styles.quantity}>
              <img className={styles.button} onClick={() => decreaseQuantity(index)} src="/minus.png" alt="Decrease button" />
              <div>{cp.kogus} tk</div>
              <img className={styles.button} onClick={() => increaseQuantity(index)} src="/plus.png" alt="" />
            </div>
            <div className={styles.sum}>{(cp.kogus * cp.toode.price).toFixed(2)} €</div>
            <div className={styles.rate}>{cp.toode.rating.rate} <FaStar /> </div>
            <img className={styles.button} onClick={() => remove(index)} src="/remove.png" alt="Deletion button" />
            </div>
          )}
        </div>

        {cart.length === 0 &&
        <div>
          <div>No products to show!</div>
        </div>}

       <ParcelMachines />
       <Payment sum={wholeSum()} />

    </div>
  )
}

export default Cart