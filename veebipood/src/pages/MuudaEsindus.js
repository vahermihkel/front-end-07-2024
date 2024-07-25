import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import esindusedJSON from "../data/esindused.json";

function MuudaEsindus() {
  const { index } = useParams();
  const leitud = esindusedJSON[index];
  const esindusRef = useRef();
  const telRef = useRef();
  const aadrRef = useRef();
  const navigate = useNavigate();

 // const leitud = ["Ülemiste", "Vesse", "Kristiine"][1]
 // leitud muutuja sees on nüüd "Vesse"

 // ["Ülemiste", "Vesse", "Kristiine"][1] = "Vasse"
 // arrays on nüüd: ["Ülemiste", "Vasse", "Kristiine"]

  const muuda = () => {
    const uusEsindus = {
      "nimi": esindusRef.current.value, 
      "tel": telRef.current.value, 
      "aadr": aadrRef.current.value
    }
    esindusedJSON[index] = uusEsindus;
    navigate("/halda-esindused")
  }

  return (
    <div>
      <div>Järjekorranumber: {index}</div>
      <label>Esinduse nimi</label> <br />
      <input type="text" ref={esindusRef} defaultValue={leitud.nimi} /> <br />
      <label>Esinduse telefon</label> <br />
      <input type="text" ref={telRef} defaultValue={leitud.tel} /> <br />
      <label>Esinduse aadress</label> <br />
      <input type="text" ref={aadrRef} defaultValue={leitud.aadr} /> <br />
      <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaEsindus