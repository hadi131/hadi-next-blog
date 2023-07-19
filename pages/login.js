import React, { useState } from "react"
import Link from "next/link"
import {signIn} from 'next-auth/react'
import { toast, Toaster } from "react-hot-toast";
import Router from "next/router";

const login = () => {
  const router = Router
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFetching,setIsfetching] = useState(false)

     
         const submitHandler=async (e)=>{
             e.preventDefault()
             try {
              setIsfetching(true)

              const data = await signIn("credentials",{
                redirect:false,
                email,
                password
                
              })
              console.log(data)

              if(data.error ===null){
                toast.success("User Logged In")
                router.push('/dashboard')
              setIsfetching(false)

              }else{
                toast.error("invalid credentials")
                setIsfetching(false)

              }

             
          
           
             } catch (error) {
            
              setIsfetching(false)

              console.log(error)
             }
         }
return (
  <>
      <Toaster/>

    <div className="register-user-main-div">
      <form action="" onSubmit={submitHandler} >
        <h1>LOGIN</h1>


        <div className="feilds">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}

            name="email"
            value={email}
            id="email"
            placeholder="Enter email address"
          />
        </div>

        <div className="feilds">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
          onChange={(e) => setPassword(e.target.value)}

            id="password"
            placeholder="Enter password"
          />
        </div>

      
        <div className="login-register-btns">
          <button type="submit" className="btn btn2">
            {
              isFetching ? "Loging In...":"LogIn"
            }
          </button>
          {/* <div className="haventRegistered">Haven't Registered Yet? <Link href={'/register'}>Register Now</Link></div> */}
        </div>
      </form>
    </div> 
  </>


  )
}

export default login
