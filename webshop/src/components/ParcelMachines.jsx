import React, { useEffect, useState } from 'react'

function ParcelMachines() {
  const [parcelmachines, setParcelmachines] = useState([]);

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then(res => res.json())
      .then(json => setParcelmachines(json))
  }, []);

  return (
    <div>
      <select>
        {
          parcelmachines
            .filter(pm => pm.A0_NAME === "EE")
            .map(pm => <option key={pm.NAME}>{pm.NAME}</option>)
        }
        </select>
    </div>
  )
}

export default ParcelMachines