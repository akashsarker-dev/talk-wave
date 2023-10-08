import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const Resetpassword = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const[email, setEmail]= useState('')
  const handleResetPassword = ()=>{

    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });   

  }
  return (
    <div className='w-full h-screen bg-blue-600 flex justify-center flex-col items-center'>

        <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 -mt-6 mb-4 grid h-20 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-blue-400 to-blue-500 bg-clip-border text-white shadow-lg shadow-pink-500/40">
            <h3 className="block font-sans text-xl font-semibold leading-snug tracking-normal  antialiased">
            Reset password?
            </h3>
        </div>
        <div className="flex flex-col gap-4 p-6">
        <div class="relative">
          <input onChange={(e)=> setEmail(e.target.value)}  type="email" id="full-name" class="font-nunito text-sm w-full py-3  text-[20px] font-semibold  border-2 rounded-lg  bg-transparent  border-1 border-[rgba(17,23,93,0.3)]  focus:outline-none peer " placeholder=" " />

          <label for="full-name" class="font-nunito absolute text-[16px] font-semibold text-[#11175D]   peer-focus:scale-75 peer-placeholder-shown:scale-100 scale-75 duration-300 transform -translate-y-3 bg-white px-2 peer-focus:px-2 peer-focus:text-[rgba(17,23,93,0.7)]    peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:-translate-y-3  left-5">Email</label>


          

        </div>
           
            
        </div>
        <div className="p-6 pt-0">
            <button onClick={handleResetPassword}
            className="block w-full select-none rounded-lg bg-gradient-to-tr from-blue-600 to-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
            >
            Reset Password
            </button>
            <Link to='/login'
            className="block mt-8 w-full select-none rounded-lg bg-gradient-to-tr from-blue-600 to-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
            >
            Back to login
            </Link>
            
        </div>
        </div>
      
    </div>
  )
}

export default Resetpassword
