import React, { useState } from 'react' 
import {authService} from 'fbase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { async } from '@firebase/util';

function Auth() {
  const [email, setEmail] =useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccoount] =useState(true);

  const onChange = e =>{
    const {target: {name, value}} =e;
    if(name === "email") {
      setEmail(value);
    }else if(name === "password"){
      setPassword(value);
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let data;
      if(newAccount){
        data = await createUserWithEmailAndPassword(authService, email, password)
      }else{
        data = await signInWithEmailAndPassword(authService, email, password)
      }
      console.log(data);
    } catch (error){
      console.log(error);
    }
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="email" placeholder="Email" required 
       name="email" value={email} onChange={onchange}/>
        <input type="password" placeholder="Password" required 
        name="password" value={password} onChange={onchange}/>
        <input type="submit" 
        value={newAccount ? "Create Account" : "Log in"} />
        </form>
    </div>
  )
}

export default Auth