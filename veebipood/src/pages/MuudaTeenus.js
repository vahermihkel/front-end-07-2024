import React, {useRef} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import teenusedJSON from "../data/teenused.json"

function MuudaTeenus() {
    const {index} = useParams()
    const leitud = teenusedJSON[index]
    const teenusRef = useRef()
    const hindRef = useRef()
    const pakkujaRef = useRef()
    const navigate = useNavigate()

  // const muuda = () => {
    // const uusTeenus = {
    //   "nimetus": teenusRef.current.value,
    //   "hind": Number(hindRef.current.value),
    //   "teenusepakkuja": pakkujaRef.current.value
    // }
  //   teenusedJSON[index] = uusTeenus;
  //   navigate("/halda-esindused")
  // }

  const muuda = () => {
    const uusTeenus = {
      "nimetus": teenusRef.current.value,
      "hind": hindRef.current.value,
      "teenusepakkuja": pakkujaRef.current.value
    }
    teenusedJSON[index] = uusTeenus;
    navigate("/Halda-teenused")
  }
  return (
    <div>
      <div>URLs olev muutuja : {index}</div>
      <label>Teenuse nimetus</label> <br/>
      <input type="text" ref={teenusRef} defaultValue={leitud.nimetus}/> <br />
      <label>Teenuse hind</label> <br/>
      <input type="text" ref={hindRef} defaultValue={leitud.hind}/> <br />
      <label>Teenuse pakkuja</label> <br/>
      <input type="text" ref={pakkujaRef} defaultValue={leitud.teenusepakkuja}/> <br />
      <button onClick={muuda}>Muuda</button> <br />
    </div>
    )
  }

  export default MuudaTeenus