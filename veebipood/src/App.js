//import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Avaleht from './pages/Avaleht';
import Kinkekaardid from './pages/Kinkekaardid';
import LisaToode from './pages/LisaToode';
import Seaded from './pages/Seaded';

function App() {
  return (
    <div className="App">
      <Link to="avaleht">
        <img className="pilt" src="https://estonia.ee/wp-content/uploads/nobe_netist_4.jpg" alt="" />
      </Link>

      <Link to="kinkekaardid">
        <button className="nupp">Kinkekaardid</button>
      </Link>

      <Link to="lisa-toode">
        <button className="nupp">Toodet lisama</button>
      </Link>

      <Link to="seaded">
        <button className="nupp">Seaded</button>
      </Link>

      <Routes>
        <Route path="avaleht" element={ <Avaleht/> } />
        <Route path="kinkekaardid" element={ <Kinkekaardid /> } />
        <Route path="lisa-toode" element={ <LisaToode /> } />
        <Route path="seaded" element={ <Seaded /> } />
      </Routes>

    </div>
  );
}

export default App;
