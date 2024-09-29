import React, { useState } from 'react'
import tootedJSON from "../data/tooted.json"
import ostukorvJSON from "../data/ostukorv.json"
//lisa ostukorvi lehele üks juurde
//iga toote juurde "lisa ostukorvi" nupp
 
function Tooted() {
  const [toode, muudaToode] = useState(tootedJSON)
 
  const originaali = () => {
    muudaToode(tootedJSON)
  }
 
  const sorteeriAZ = () =>{
      toode.sort(); 
      muudaToode(toode.slice());
  }
 
  const sorteeriZA = () => {
    toode.sort();
    toode.reverse();
    muudaToode(toode.slice());
  }
 
  const sorteeriKasvavalt = () => {
    toode.sort((a, b) => a.length - b.length)
    muudaToode(toode.slice())
  }
 
  const sorteeriKahanevalt = () => {
    toode.sort((a, b) => b.length - a.length)
    muudaToode(toode.slice())
 }

  const lisaOstukorvi = (toode) => {
    ostukorvJSON.push(toode);
  }
 
  return (
    <div>
      <div>Toodete arv: {toode.length}tk</div>
      <button onClick={originaali}>Tagasi originaali</button>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
      {toode.map(toode => <div key={toode}>
        {toode}
        <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>
        </div>)}
    </div>
  )
}
 
export default Tooted
