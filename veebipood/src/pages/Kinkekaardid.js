import React, { useState } from 'react'

function Kinkekaardid() {
  const [summa, muudaSumma] = useState(20);
  const [kogus, muudaKogus] = useState(1);

  return (
    <div>
      <button className={summa === 20 ? "summa-aktiivne" : null} onClick={() => muudaSumma(20)}>20</button>
      <button className={summa === 50 ? "summa-aktiivne" : null} onClick={() => muudaSumma(50)}>50</button>
      <button className={summa === 100 ? "summa-aktiivne" : null} onClick={() => muudaSumma(100)}>100</button>
      <div>Kinkekaart {summa} €</div>
      <div>Muuda kinkekaartide kogust!</div>
      <button disabled={kogus === 1} onClick={() => muudaKogus(kogus - 1)}>-</button>
      <span>{kogus}</span>
      <button onClick={() => muudaKogus(kogus + 1)}>+</button>
    </div>
  )
}

export default Kinkekaardid