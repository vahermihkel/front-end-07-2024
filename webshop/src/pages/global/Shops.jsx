import React,{ useState } from 'react'
import Map from '../../components/Map';

function Shops() {
  const [coordinaates, setCoordinates] = useState({lngLat: [59.4378, 24.7574], zoom: 11});
  
  // useEffect --> võta andmebaasist

  return (
    <div>
       <button onClick={() => setCoordinates({lngLat: [58.9239, 25.6108], zoom: 7})}>Kõik poed</button>
    <button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>Kõik Tallinna poed</button>

    <button onClick={() => setCoordinates({lngLat: [59.4231, 24.7991], zoom: 13})}>Ülemiste</button>
    <button onClick={() => setCoordinates({lngLat: [59.4277, 24.7193], zoom: 13})}>Kristiine</button>
    <button onClick={() => setCoordinates({lngLat: [58.3779, 26.7308], zoom: 13})}>Tasku</button>

    {/* {shops.map(shop => 
      <button onClick={() => setCoordinates({lngLat: [longitude, latitude], zoom: 13})}>Helsinki</button>
      )} */}

    <Map mapCoordinaates={coordinaates}  />
    </div>
  )
}

export default Shops