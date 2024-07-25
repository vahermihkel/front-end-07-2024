//import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Avaleht from './pages/Avaleht';
import Kinkekaardid from './pages/Kinkekaardid';
import LisaToode from './pages/LisaToode';
import Seaded from './pages/Seaded';
import Esindused from './pages/Esindused';
import Ostukorv from './pages/Ostukorv';
import Menyy from './components/Menyy';
import NotFound from './pages/NotFound';
import { useState } from 'react';
import Hinnad from './pages/Hinnad';
import Tootajad from './pages/Tootajad';
import Tooted from './pages/Tooted';
import HaldaTooted from './pages/HaldaTooted';
import HaldaHinnad from './pages/HaldaHinnad';
import HaldaTootajad from './pages/HaldaTootajad';
import HaldaEsindused from './pages/HaldaEsindused';
import YksEsindus from './pages/YksEsindus';
import YksHind from './pages/YksHind';
import YksToode from './pages/YksToode';
import YksTootaja from './pages/YksTootaja';
import MuudaEsindus from './pages/MuudaEsindus';
import MuudaHind from './pages/MuudaHind';
import MuudaToode from './pages/MuudaToode';
import MuudaTootaja from './pages/MuudaTootaja';
import Teenused from './pages/Teenused';
import HaldaTeenused from './pages/HaldaTeenused';
import YksTeenus from './pages/YksTeenus';
import MuudaTeenus from './pages/MuudaTeenus';
import Shops from './pages/Shops';

function App() {
  const [theme, muudaTheme] = useState(localStorage.getItem("teema") || "light");

  const themeDark = () => {
    muudaTheme("dark");
    localStorage.setItem("teema", "dark");
  }

  const themeLight = () => {
    muudaTheme("light");
    localStorage.setItem("teema", "light");
  }

  return (
    <div className={theme === "dark" ? "App-dark" : "App"}>
      <Menyy />
      {theme === "light" && <button onClick={themeDark}>Dark</button>}
      {theme === "dark" && <button onClick={themeLight}>Light</button>}

      <Routes>
        <Route path="" element={ <Avaleht/> } />
        <Route path="kinkekaardid" element={ <Kinkekaardid /> } />
        <Route path="lisa-toode" element={ <LisaToode /> } />
        <Route path="seaded" element={ <Seaded /> } />
        <Route path="esindused" element={ <Esindused /> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
        <Route path="hinnad" element={ <Hinnad /> } />
        <Route path="tootajad" element={ <Tootajad /> } />
        <Route path="tooted" element={ <Tooted /> } />

        <Route path="halda-tooted" element={ <HaldaTooted /> } />
        <Route path="halda-hinnad" element={ <HaldaHinnad /> } />
        <Route path="halda-tootajad" element={ <HaldaTootajad /> } />
        <Route path="halda-esindused" element={ <HaldaEsindused /> } />

        <Route path="esindus/:index" element={ <YksEsindus /> } />
        <Route path="hind/:index" element={ <YksHind /> } />
        <Route path="toode" element={ <YksToode /> } />
        <Route path="tootaja" element={ <YksTootaja /> } />

        <Route path="muuda-esindus/:index" element={ <MuudaEsindus /> } />
        <Route path="muuda-hind/:index" element={ <MuudaHind /> } />
        <Route path="muuda-toode/:index" element={ <MuudaToode /> } />
        <Route path="muuda-tootaja/:index" element={ <MuudaTootaja /> } />

        <Route path="teenused" element={ <Teenused /> } />
        <Route path="halda-teenused" element={ <HaldaTeenused /> } />
        <Route path="teenus/:index" element={ <YksTeenus /> } />
        <Route path="muuda-teenus/:index" element={ <MuudaTeenus /> } />

        <Route path="shops" element={ <Shops /> } />

        <Route path="*" element={ <NotFound /> } />
      </Routes>

    </div>
  );
}

export default App;

