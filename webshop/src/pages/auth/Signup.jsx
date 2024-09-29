import React, { useRef, useState } from 'react'

function Signup() {
  const[signUp] = useState("no")
  const[message] = useState("")
  const userNameRef = useRef()
  const paswordRef = useRef()
  const repPaswordRef = useRef()
  const nameRef = useRef()
  const lastNameRef = useRef()
  const numRef = useRef()
  const mailRef = useRef()

  const signup = () => {

  }

  return (
    <div>
      <div>{message}</div>
      { signUp === "no" &&
      <div>
         <label>Username</label><br/>
         <input ref={userNameRef} type="text" /> <br/>
         <label>Pasword</label><br/>
         <input ref={paswordRef} type="pasword" /> <br/>
         <label>Repeat pasword</label><br/>
         <input ref={repPaswordRef} type="repeat-pasword" /> <br/>
         <label>First name</label><br/>
         <input ref={nameRef} type="first-name" /> <br/>
         <label>Last name</label><br/>
         <input ref={lastNameRef} type="last-name" /> <br/>
         <label>Telephone number</label><br/>
         <input ref={numRef} type="telephone-number" /> <br/>
         <label>E-mail</label><br/>
         <input ref={mailRef} type="e-mail" /> <br/>
         </div>}
        <br></br>
         {signUp === "no" && <button onClick={signup}>Sign up</button>}

        
        
        
    </div>
  )
}

export default Signup