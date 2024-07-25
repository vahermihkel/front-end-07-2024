import React from 'react'
import { useParams } from 'react-router-dom'
import esindusedJSON from "../data/esindused.json";

function YksEsindus() {
  const { index } = useParams();
  const leitud = esindusedJSON[index];

  return (
    <div>
      <div>Urls olev muutuja: {index}</div>
      <div>Esinduse nimi: {leitud.nimi}</div>
      <div>Esinduse telefon: {leitud.tel}</div>
      <div>Esinduse aadress: {leitud.aadr}</div>
    </div>
  )
}

export default YksEsindus