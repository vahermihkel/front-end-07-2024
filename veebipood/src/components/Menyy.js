import React from 'react'
import { Link } from 'react-router-dom'

function Menyy() {
  return (
    <div>
      <Link to="/">
        <img className="pilt" src="https://estonia.ee/wp-content/uploads/nobe_netist_4.jpg" alt="" />
      </Link>

      <Link to="/kinkekaardid">
        <button className="nupp">Kinkekaardid</button>
      </Link>

      <Link to="/lisa-toode">
        <button className="nupp">Toodet lisama</button>
      </Link>

      <Link to="/seaded">
        <button className="nupp">Seaded</button>
      </Link>

      <Link to="/esindused">
        <button className="nupp">Esindused</button>
      </Link>

      <Link to="/ostukorv">
        <button className="nupp">Ostukorv</button>
      </Link>

      <Link to="/hinnad">
        <button className="nupp">Hinnad</button>
      </Link>

      <Link to="/tootajad">
        <button className="nupp">Tootajad</button>
      </Link>

      <Link to="/tooted">
        <button className="nupp">Tooted</button>
      </Link>

      <Link to="/teenused">
        <button className="nupp">Teenused</button>
      </Link>

      <br /><br />

      <Link to="/halda-hinnad">
        <button className="nupp">Halda hindu</button>
      </Link>

      <Link to="/halda-tootajad">
        <button className="nupp">Halda töötajaid</button>
      </Link>

      <Link to="/halda-tooted">
        <button className="nupp">Halda tooteid</button>
      </Link>

      <Link to="/halda-esindused">
        <button className="nupp">Halda esindusi</button>
      </Link>

      <Link to="/halda-teenused">
        <button className="nupp">Halda teenused</button>
      </Link>

      <Link to="/shops">
        <button className="nupp">Shops</button>
      </Link>
    
    </div>
  )
}

export default Menyy