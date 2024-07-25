import React, { useRef, useState } from 'react'
import esindusedJSON from "../data/esindused.json";
import { Link } from 'react-router-dom';

function HaldaEsindused() {
  const [esindused, muudaEsindused] = useState(esindusedJSON);
  const esindusRef = useRef();
  const telRef = useRef();
  const aadrRef = useRef();
  const [sonum, muudaSonum] = useState("");

  const kustuta = (jrknr) => {
    esindusedJSON.splice(jrknr, 1);
    muudaEsindused(esindusedJSON.slice());
  }

  const lisa = (esindus) => {
    esindusedJSON.push(esindus);
    muudaEsindused(esindusedJSON.slice());
  }

  const lisaUus = () => {
    const uusEsindus = {
      "nimi": esindusRef.current.value, 
      "tel": telRef.current.value, 
      "aadr": aadrRef.current.value
    }
    esindusedJSON.push(uusEsindus);
    muudaEsindused(esindusedJSON.slice());
  }

  const kontrolli = () => {
    if (esindusRef.current.value[0] === undefined) {
      muudaSonum("");
      return;
    }
    if (esindusRef.current.value[0] === esindusRef.current.value[0].toLowerCase()) {
      muudaSonum("Esinduse nimi algab väikse tähega!");
      return;
    }
    if (telRef.current.value.startsWith("+372") === false) {
      muudaSonum("Telefon peab algama suunakoodiga");
      return;
    }
    muudaSonum("");
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Uus esindus</label> <br />
      <input onChange={kontrolli} ref={esindusRef} type="text" /> <br />
      <label>Telefoninumber</label> <br />
      <input onChange={kontrolli} ref={telRef} type="text" /> <br />
      <label>Aadress</label> <br />
      <input ref={aadrRef} type="text" /> <br />
      <button onClick={lisaUus}>Lisa</button> <br />
      <br /><br />
      <div>Esinduste arv: {esindused.length} tk</div>
      {esindused.map((esindus, jrknr) => 
        <div key={jrknr}>
          <div><b> {esindus.nimi} </b></div>
          <div>{esindus.tel}</div>
          <div>{esindus.aadr}</div>
          <button onClick={() => kustuta(jrknr)}>x</button>
          <button onClick={() => lisa(esindus)}>Lisa juurde</button>
          <Link to={"/muuda-esindus/" + jrknr}>
            <button>Muuda</button>
          </Link>
        </div>)}
    </div>
  )
}

export default HaldaEsindused