import React, { useState } from 'react'
import hinnadJSON from "../data/hinnad.json";
import { Link } from 'react-router-dom';

// Array võimalused:
// [].splice() ---> kustutamine. esimene nr mitmendat (alates 0st), teine nr mitu tk
// [].sort() ---> sorteerib sisu. kui täidan sulud, siis selle järgi
// [].map() ---> iga elemendi osas teeme HTMLi lõigu
// [].length ---> array pikkus (elementide arv)
// [].filter() ---> array elementide mingi tingimuse järgi alles jätmine

function Hinnad() {
  const [hinnad, muudaHinnad] = useState(hinnadJSON);

  const originaali = () => {
    muudaHinnad(hinnadJSON);
  }

  const sorteeriAZ = () => {
    hinnad.sort((a, b) => a.hind.toString().localeCompare(b.hind.toString())); 
    muudaHinnad(hinnad.slice());
  }

  const sorteeriZA = () => {
    hinnad.sort((a, b) => b.hind.toString().localeCompare(a.hind.toString())); 
    muudaHinnad(hinnad.slice());
  }

  const sorteeriKasvavalt = () => {
    hinnad.sort((a, b) => a.hind - b.hind); 
    muudaHinnad(hinnad.slice());
  }

  const sorteeriKahanevalt = () => {
    hinnad.sort((a, b) => b.hind - a.hind); 
    muudaHinnad(hinnad.slice());
  }

  const filtreeriSuuremadKui100 = () => {
    const vastus = hinnad.filter(hind => hind.hind > 100);
    muudaHinnad(vastus);
  }

  const filtreeriVaiksemadKui50 = () => {
    const vastus = hinnad.filter(hind => hind.hind < 50);
    muudaHinnad(vastus);
  }

  const arvutaKokku = () => {
    let summa = 0;
    // summa = summa + 323;
    // summa = summa + 62;
    // summa = summa + 65;
    // summa = summa + 5;
    hinnad.forEach(hind => summa = summa + hind.hind);
    return summa;
  }


  return (
    <div>
      <div>Hindade kogusumma: {arvutaKokku()}</div>
      <div>Hindade arv: {hinnad.length} tk</div>
      <button onClick={originaali}>Tagasi originaali</button>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
      <br /><br />
      <button onClick={filtreeriSuuremadKui100}>Filtreeri üle 100</button>
      <button onClick={filtreeriVaiksemadKui50}>Filtreeri alla 50</button>
      {hinnad.map((hind, i) => 
        <div key={i}>
          {hind.hind} ({hind.lisaja})
          <Link to={"/hind/" + i}>
            <button>Vt detailsemalt</button>
          </Link>
        </div>)}
    </div>
  )
}

export default Hinnad