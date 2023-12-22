import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

     const login= async()=>{
        try{
          const responce= await axios.post('https://dummyjson.com/auth/login',{
            username:email,
            password:password
          })

          
          if(responce){
            alert('Login SuccessFully!')
            localStorage.setItem('user',JSON.stringify(responce?.data?.token))
            window.location.href='/'

          }
        }catch(err){
          console.log(err.message)
          alert('Login Fail')
        }
       
     }

  return (
   <>
   <h1>Login</h1>
<form>
  <div className="row">
    <label htmlFor="email">Email</label>
    <input 
    type="email" 
    name="email" 
    value={email}  
    placeHolder="Enter UserId" 
    onChange={(e)=>{setEmail(e.target.value)}}
    />
  </div>
  <div className="row">
    <label htmlFor="password">Password</label>
    <input 
    type="password" 
    name="password" 
    placeHolder='Enter-Password'
    value={password}
    onChange={(e) =>{setPassword(e.target.value)}}
    />
  </div>
  <button type="button" onClick={login} >Login</button>
</form>
   </>
  )
}

export default Login
