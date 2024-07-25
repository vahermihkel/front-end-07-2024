import React, { useRef, useState } from 'react'
import teenusedJSON from "../data/teenused.json";
import { Link } from 'react-router-dom';

function HaldaTeenused() {
  const [teenused, muudaTeenused] = useState(teenusedJSON);
  const teenusRef = useRef();
  const hindRef = useRef();
  const pakkujaRef = useRef();

  const kustuta = (jrknr) => {
    teenusedJSON.splice(jrknr, 1);
    muudaTeenused(teenusedJSON.slice());
  }

  const lisa = (teenus) => {
    teenusedJSON.push(teenus);
    muudaTeenused(teenusedJSON.slice());
  }

  const lisaUus = () => {
    const uusTeenus = {
      "nimetus": teenusRef.current.value,
      "hind": Number(hindRef.current.value),
      "teenusepakkuja": pakkujaRef.current.value
    }
    teenusedJSON.push(uusTeenus);
    muudaTeenused(teenusedJSON.slice());
  }

  return (
    <div>
      <label>Uus teenus</label> <br />
      <input ref={teenusRef} type="text" /> <br />
      <label>Hind</label> <br />
      <input ref={hindRef} type="text" /> <br />
      <label>Teenusepakkuja</label> <br />
      <input ref={pakkujaRef} type="text" /> <br />
      <button onClick={lisaUus}>Lisa</button>
      <br /><br />
      <div>Teenuste arv: {teenused.length} tk</div>
      {teenused.map((teenus, jrknr) => 
        <div key={jrknr}>
          {teenus.nimetus} {teenus.hind}€ - {teenus.teenusepakkuja}
          <button onClick={() => kustuta(jrknr)}>x</button>
          <button onClick={() => lisa(teenus)}>Lisa juurde</button>
          <Link to={"/muuda-teenus/" + jrknr}>
            <button>Muuda</button>
          </Link>
        </div>)}
    </div>
  )
}

export default HaldaTeenused