import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import hinnadJSON from "../data/hinnad.json";

// use on Reacti erikood, mille React või Reacti kasutatav moodul on välja mõelnud
//      koodi (JavaScripti) lihtsustamiseks
// Reeglid:
// 1) ei tohi luua funktsiooni sees
// 2) peab importima
// 3) peab algama use'ga
// 4) peavad olema luues sulud järel
// 5) ei tohi luua tingimuslikult (if / else sees)

function MuudaHind() {
  const {index} = useParams();
  const leitud = hinnadJSON[index];
  const hindRef = useRef();
  const navigate = useNavigate(); 

  const muuda = () => {
    const uusHind = {
      "hind": Number(hindRef.current.value),
      "lisaja": "Kalle"
    }
    hinnadJSON[index] = uusHind;
    navigate("/halda-hinnad");
  }

  return (
    <div>
      <div>URLs olev muutuja: {index}</div>
      <label>Hind</label> <br />
      <input type="text" defaultValue={leitud.nimi} ref={hindRef} /> <br />
      <button onClick={muuda}>Muuda</button> <br />
    </div>
  )
}

export default MuudaHind