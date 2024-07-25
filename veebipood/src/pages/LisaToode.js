import React, { useRef, useState } from 'react'

function LisaToode() {
  const [sonum, muudaSonum] = useState("Lisa toode!");
  const nimiRef = useRef();

  // function lisa() {

  // }

  const lisa = () => {
    // if (nimiRef.current.value === "") {
    //   muudaSonum("Tühja nimetusega ei saa toodet lisada!");
    // } else {
    //   muudaSonum("Sisestatud: " + nimiRef.current.value);
    // }

    if (nimiRef.current.value === "") {
      muudaSonum("Tühja nimetusega ei saa toodet lisada!");
      return; // lõpetab funktsiooni mis onClickiga käivitus
    } 
    
    muudaSonum("Sisestatud: " + nimiRef.current.value);
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Toote nimi</label> <br />
      <input ref={nimiRef} type="text" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />
    </div>
  )
}

export default LisaToode