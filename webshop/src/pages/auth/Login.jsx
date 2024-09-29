import React from 'react'
import { useState, useRef } from 'react'

function Login() {
  const [loggedInn, editLoggedInn] = useState("no")
  const [message] =useState("")
  const userNameRef = useRef()
  const paswordRef = useRef()
  const logIn = () => {

  }

  return (
    <div>
       <div>{message}</div>
      { loggedInn === "no" &&
      <div>
      <label>Username</label><br/>
      <input ref={userNameRef} type="text" /> <br/>
      <label>Pasword</label> <br/>
      <input ref={paswordRef} type="password" /> <br/>
      </div> }
        <br></br>
      { loggedInn === "no" && <button onClick={logIn}>Log In  </button> }
      { loggedInn === "yes" && <button onClick={() => editLoggedInn("no")}>Log out </button> }
    </div>
  )
}

export default Login