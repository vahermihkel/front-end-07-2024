import React, { useRef, useState } from 'react'
import hinnadJSON from "../data/hinnad.json";
import { Link } from 'react-router-dom';

function HaldaHinnad() {
  const [hinnad, muudaHinnad] = useState(hinnadJSON);
  const hindRef = useRef();

  const kustuta = (jrknr) => {
    hinnadJSON.splice(jrknr, 1);
    muudaHinnad(hinnadJSON.slice());
  }

  const lisa = (hind) => {
    hinnadJSON.push(hind);
    muudaHinnad(hinnadJSON.slice());
  }

  const lisaUus = () => {
    const uusHind = {
      "hind": Number(hindRef.current.value),
      "lisaja": "Pille"
    }
    hinnadJSON.push(uusHind);
    muudaHinnad(hinnadJSON.slice());
  }

  return (
    <div>
      <label>Uus hind</label> <br />
      <input ref={hindRef} type="text" /> <br />
      <button onClick={lisaUus}>Lisa</button> <br />
      <div>Hindade arv: {hinnad.length} tk</div>
      {hinnad.map((hind, jrknr) => 
        <div key={jrknr}>
          <div>{hind.hind}</div>
          <div>{hind.lisaja}</div>
          <button onClick={() => kustuta(jrknr)}>x</button>
          <button onClick={() => lisa(hind)}>Lisa iseennast lõppu juurde</button>
          <Link to={"/muuda-hind/" + jrknr}>
            <button>Muuda</button>
          </Link>
        </div>)}
    </div>
  )
}

export default HaldaHinnad