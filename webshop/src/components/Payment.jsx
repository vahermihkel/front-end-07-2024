import { Button } from '@mui/material';
import React from 'react'

function Payment(props) {

  const pay = () => {
    const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
    const paymentBody = {
      "account_name": "EUR3D1",
      "nonce": "asdsa3123" + Math.random() * 999999 + new Date(),
      "timestamp": new Date(),
      "amount": props.sum,
      "order_reference": Math.random(),
      "customer_url": "https://mihkel-07-2024.web.app/",
      "api_username": "92ddcfab96e34a5f"
    };
    const paymentHeaders = {
      "Content-Type": "application/json",
      "Authorization": "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA=="
    }

    fetch(url, {method: "POST", body: JSON.stringify(paymentBody), headers: paymentHeaders})
      .then(res => res.json())
      .then(json => window.location.href = json.payment_link)
  }

  return (
    <div>
      <Button variant="contained" onClick={pay}>Maksa</Button>
    </div>
  )
}

export default Payment