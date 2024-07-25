import React, { useState } from 'react'
import teenusedJSON from "../data/teenused.json";

function Teenused() {
  const [teenused, muudaTeenused] = useState(teenusedJSON);

  const sorteeriAZ = () => {
    teenused.sort((a,b) => a.nimetus.localeCompare(b.nimetus));
    muudaTeenused(teenused.slice());
  }

  const sorteeriPakkujaAZ = () => {
    teenused.sort((a,b) => a.teenusepakkuja.localeCompare(b.teenusepakkuja));
    muudaTeenused(teenused.slice());
  }

  const sorteeriHindKasvavalt = () => {
    teenused.sort((a,b) => a.hind - b.hind);
    muudaTeenused(teenused.slice());
  }

  const filtreeriArvutitarkTeenused = () => {
    const vastus = teenused.filter(teenus => teenus.teenusepakkuja === "Arvutitark");
    muudaTeenused(vastus);
  }

  return (
    <div>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriPakkujaAZ}>Sorteeri teenusepakkuja A-Z</button>
      <button onClick={sorteeriHindKasvavalt}>Sorteeri hind kasvavalt</button>
      <button onClick={filtreeriArvutitarkTeenused}>Näita Arvutitark teenuseid</button>
      {teenused.map(teenus => 
        <div>
          {teenus.nimetus} {teenus.hind}€ ({teenus.teenusepakkuja})
        </div>)}
    </div>
  )
}

export default Teenused