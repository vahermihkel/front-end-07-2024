import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function Seaded() {
  const [keel, muudaKeel] = useState(localStorage.getItem("keel") || "ee");
  const aadressRef = useRef();
  const emailRef = useRef();
  const telefonRef = useRef();
  const [aadress, muudaAadress] = useState(localStorage.getItem("aadress"));
  const [email, muudaEmail] = useState(localStorage.getItem("email"));
  const [telefon, muudaTelefon] = useState(localStorage.getItem("telefon"));

  const muudaKeelEE = () => {
    muudaKeel("ee");
    localStorage.setItem("keel", "ee");
  }

  const muudaKeelEN = () => {
    muudaKeel("en");
    localStorage.setItem("keel", "en");
  }

  const muudaKeelRU = () => {
    muudaKeel("ru");
    localStorage.setItem("keel", "ru");
  }

  const sisestaAadress = () => {
    if (aadressRef.current.value.length < 4) {
      toast.error("Aadress on liiga lühike!");
      return;
    }
    if (aadressRef.current.value[0] === aadressRef.current.value[0].toLowerCase()) {
      toast.error("Aadress peab algama suure tähega!");
      return;
    }
    muudaAadress(aadressRef.current.value);
    localStorage.setItem("aadress", aadressRef.current.value);
  }

  const sisestaEmail = () => {
    if (emailRef.current.value.includes("@") === false) {
      toast.error("Kontrolli emaili!");
      return;
    }
    muudaEmail(emailRef.current.value);
    localStorage.setItem("email", emailRef.current.value);
  }

  const sisestaTelefon = () => {
    if (telefonRef.current.value.startsWith("+372") === false) {
      toast.error("Suunakood on vale!");
      return;
    }
    muudaTelefon(telefonRef.current.value);
    localStorage.setItem("telefon", telefonRef.current.value);
  }

  return (
    <div>
      <div>Sisestatud aadress: {aadress}</div>
      <label>Aadress</label>
      <input ref={aadressRef} type="text" />
      <button onClick={sisestaAadress}>Sisesta</button>
      <br /><br />

      <div>Sisestatud email: {email}</div>
      <label>Email</label>
      <input ref={emailRef} type="text" />
      <button onClick={sisestaEmail}>Sisesta</button>
      <br /><br />

      <div>Sisestatud telefon: {telefon}</div>
      <label>Telefon</label>
      <input ref={telefonRef} type="text" />
      <button onClick={sisestaTelefon}>Sisesta</button>
      <br /><br />



      {/* <div>Hetkel aktiivne keel: {keel}</div> */}
      {keel === "ee" && <div>Leht on eesti keelne</div>}
      {keel === "en" && <div>Page is in English</div>}
      {keel === "ru" && <div>Cтpaницa на русском языке</div>}
      <button onClick={muudaKeelEE} className={keel === "ee" ? "aktiivne-keel" : null}>Eesti</button>
      <button onClick={muudaKeelEN} className={keel === "en" ? "aktiivne-keel" : null}>English</button>
      <button onClick={muudaKeelRU} className={keel === "ru" ? "aktiivne-keel" : null}>Pycckii</button>
    
      <ToastContainer />
    </div>
  )
}

export default Seaded