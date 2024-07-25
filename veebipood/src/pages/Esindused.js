import React, { useState } from 'react'
import esindusedJSON from "../data/esindused.json";
import { Link } from 'react-router-dom';

function Esindused() {
  // HTMLi muudab ilma URLi muutumiseta AINULT useState
  const [linn, muudaLinn] = useState("Tallinn");
  const [esindused, muudaEsindused] = useState(esindusedJSON);

  const originaali = () => {
    muudaEsindused(esindusedJSON);
  }

  const sorteeriAZ = () => {
    esindused.sort((a,b) => a.nimi.localeCompare(b.nimi));
    muudaEsindused(esindused.slice());
  }

  const sorteeriZA = () => {
    esindused.sort((a,b) => b.nimi.localeCompare(a.nimi));
    muudaEsindused(esindused.slice());
  }

  const sorteeriTahtedeArvKasv = () => {
    esindused.sort((a,b) => a.nimi.length - b.nimi.length);
    muudaEsindused(esindused.slice());
  }

  const sorteeriTahtedeArvKah = () => {
    esindused.sort((a,b) => b.nimi.length - a.nimi.length);
    muudaEsindused(esindused.slice());
  }

  const sorteeriKolmasTahtAZ = () => {
    esindused.sort((a,b) => a.nimi[2].localeCompare(b.nimi[2]));
    muudaEsindused(esindused.slice());
  }

  const filtreeriEgaLoppevad = () => {
    const vastus = esindused.filter(e => e.nimi.endsWith("e"));
    muudaEsindused(vastus);
  }

  const filtreeri9Tahelised = () => {
    const vastus = esindused.filter(e => e.nimi.length === 9);
    muudaEsindused(vastus);
  }

  const filtreeriVah7Tahtelised = () => {
    const vastus = esindused.filter(e => e.nimi.length >= 7);
    muudaEsindused(vastus);
  }

  const filtreeriIsLyhenditSisaldavad = () => {
    const vastus = esindused.filter(e => e.nimi.includes("is"));
    muudaEsindused(vastus);
  }

  const filtreeriKolmasTahtI = () => {
    const vastus = esindused.filter(e => e.nimi[2] === "i");
    muudaEsindused(vastus);
  }

  const arvutaKokku = () => {
    let summa = 0;
    esindused.forEach(esindus => summa = summa + esindus.nimi.length);
    return summa;
  }

  return (
    <div>
      <div>Tallinna esinduste tähtede arv: {arvutaKokku()}</div>
      <div>Tallinna esinduste arv: {esindused.length}</div>
      <div>Hetkel aktiivne linn: {linn}</div>
      <button className={linn === "Tallinn" ? "linn-aktiivne" : null} onClick={() => muudaLinn("Tallinn")}>Tallinn</button>
      <button className={linn === "Tartu" ? "linn-aktiivne" : null} onClick={() => muudaLinn("Tartu")}>Tartu</button>
      <button className={linn === "Narva" ? "linn-aktiivne" : null} onClick={() => muudaLinn("Narva")}>Narva</button>
      <button className={linn === "Pärnu" ? "linn-aktiivne" : null} onClick={() => muudaLinn("Pärnu")}>Pärnu</button>

      { linn === "Tallinn" &&
      <div>
        <button onClick={originaali}>Originaali</button>
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={sorteeriTahtedeArvKasv}>Sorteeri tähed kasvavalt</button>
        <button onClick={sorteeriTahtedeArvKah}>Sorteeri tähed kahanevalt</button>
        <button onClick={sorteeriKolmasTahtAZ}>Sorteeri kolmas täht A-Z</button>

        <button onClick={filtreeriEgaLoppevad}>Filtreeri E'ga lõppevad</button>
        <button onClick={filtreeri9Tahelised}>Filtreeri 9 tähelised</button>
        <button onClick={filtreeriVah7Tahtelised}>Filtreeri vähemalt 7 tähelised</button>
        <button onClick={filtreeriIsLyhenditSisaldavad}>Filtreeri 'is' lühendit sisaldavad</button>
        <button onClick={filtreeriKolmasTahtI}>Filtreeri kellel kolmas täht 'i'</button>

        {esindused.map((esindus, i) => 
          <div key={i}>
            {esindus.nimi} - {esindus.tel} / {esindus.aadr}
            <Link to={"/esindus/" + i}>
              <button>Vaata detailsemalt</button>
            </Link>
          </div>)}
      </div>}

      {linn === "Tartu" &&
      <div>
        <div>Raatuse</div>
        <div>Lõunakeskus</div>
      </div>}

      {linn === "Narva" && <div>Fama</div>}

      {linn === "Pärnu" && <div>Port Artur 2</div>}
    </div>
  )
}

export default Esindused