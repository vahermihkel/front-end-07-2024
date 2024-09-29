import React, {useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import shopsFromFile from "../../data/shops.json"

// lisada andmebaasi

function MaintainShops() {
  const [shops, editShops] = useState(shopsFromFile)
    
    const nameRef = useRef()
    const adressRef = useRef()
    const telRef = useRef()

    const remove = (index) => {
      shopsFromFile.splice(index)
      editShops(shopsFromFile.slice())
  }
 
  const add = (shop) => {
      shopsFromFile.push(shop)
      editShops(shopsFromFile.slice())
    }

    const addNew = () => {
      const newShop = {
        "name" : nameRef.current.value,
         "adress": adressRef.current.value, 
         "telephone": telRef.current.value
        }
      shopsFromFile.push(newShop)
      editShops(shopsFromFile.slice())
    }

  return (
    <div>
        <label>New Shop</label><br/>
        <input ref={nameRef} type="text" /><br/>
        <label>Adress</label><br/>
        <input ref={adressRef} type="text" /><br/>
        <label>Telephone</label><br/>
        <input ref={telRef} type="text" /><br/>
        <button onClick={addNew}>Add</button>
        <br></br>
        {shops.map((shop, index) =>
             <div key={index}>
               <div><b>{shop.name}</b></div>
               <div> {shop.adress}</div>
               <div> {shop.tel}</div>
                <button onClick={() => remove(index)}>Remove</button>
                <button onClick={() => add(shop)}>Add one</button>
                <Link to={"/shops/" + index} >
                <button>Change</button>
                </Link>
             </div>)}
    </div>
  )
}

export default MaintainShops