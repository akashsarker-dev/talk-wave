import React, { useState } from 'react'
import LoginImage from '/login-field.png'
import {FcGoogle} from 'react-icons/fc'
import {AiOutlineEyeInvisible,AiOutlineEye} from 'react-icons/ai'

const Login = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordShow, setPasswordShow] = useState('false');

  const handleEmail = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setEmailError('');

    // Basic email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailValue)) {
      setEmailError('Please enter a valid email address');
    }
  };
  
  const handleName =(e)=>{
    setName(e.target.value);
    setNameError('')
  }
  const handlePassword =(e)=>{
    setPassword(e.target.value);
    setPasswordError('')
  }
  const handleSubmit = ()=>{
    if(!email){
      setEmailError('Please Enter You Email Address');
    }
    if(!password){
      setPasswordError('Please Enter You Password');
    }
  }
  return (
    <>
    <div className='flex'>
      <div className='w-1/2 mt-[100px] ml-[147px]'>
        <h2 className='text-[#11175D] text-[34px] font-bold font-opensans mb-7'>Login to your account!</h2>
        <button className='font-opensans text-[#03014C] text-sm font-semibold mb-8 flex items-center py-[23px] pl-[29px] pr-[42px] border-[1px] border-[rgba(3,1,76,0.32)] rounded-lg'><FcGoogle className='mr-[9px]'></FcGoogle>Login with Google</button>
        <div>
        <div class="relative">
          <input onChange={handleEmail} type="email" id="email-field" class="font-nunito pt-[26px]   border-b-2  bg-transparent text-xl font-semibold border-1 border-[rgba(17,23,93,0.3)] w-[368px] focus:outline-none peer  " placeholder=" " />

          <label for="email-field" class="font-nunito absolute text-xl font-semibold text-[#11175D]   peer-focus:text-sm duration-300 transform -translate-y-4    bg-white  px-2  peer-focus:text-[rgba(17,23,93,0.7)]    peer-placeholder-shown:top-1/2 peer-focus:top-2  peer-focus:-translate-y-4 left-0
          ">Email Address</label>
        </div>
        {
            emailError && 
            <p className='text-[red]'>{emailError}</p>
          }

        <div class="relative mt-14">
          <input onChange={handlePassword} type={passwordShow ? 'password' : 'text'} id="password" class="font-nunito pt-[26px]   border-b-2  bg-transparent text-xl font-semibold border-1 border-[rgba(17,23,93,0.3)] w-[368px] focus:outline-none peer 
          " placeholder=" " />
          
          <label for="password" class=" font-nunito absolute text-xl font-semibold text-[#11175D]   peer-focus:text-sm duration-300 transform -translate-y-4    bg-white  px-2  peer-focus:text-[rgba(17,23,93,0.7)]    peer-placeholder-shown:top-1/2 peer-focus:top-2  peer-focus:-translate-y-4 left-0  
          ">Password</label>
          
          {
            passwordShow ? <AiOutlineEyeInvisible for="password" onClick={()=> setPasswordShow(!passwordShow)} className='absolute top-6 left-[340px]'/>:
          <AiOutlineEye onClick={()=> setPasswordShow(!passwordShow)} className='absolute top-6 left-[340px]'/>
          }
        </div>
        {
            passwordError && 
            <p className='text-[red]'>{passwordError}</p>
          }
        </div >
        <button onClick={handleSubmit} className='bg-primary-color rounded-lg py-[26px] w-[368px] text-white mb-11 mt-14   text-xl font-semibold nunito cursor-pointer'>Login to Continue</button>
        <p className='text-[#03014C] w-[368px]  text-sm font-normal font-["opensans"]' >Don’t have an account ?<span className='text-[#EA6C00] font-bold'>   Sign Up</span></p>
      </div>

      <div className='w-1/2'>
        <img src={LoginImage} className=' object-cover h-screen  w-full' />


        
        {/* <img className='w-full object-cover h-max bg-[url("../../Images/input-field.png")]' src={LoginImage} alt="" /> */}
      </div>
    </div>
    </>
  )
}

export default Login