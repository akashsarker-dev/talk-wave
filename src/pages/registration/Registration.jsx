/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import LoginImage from '/input-field.png'
import { getAuth, createUserWithEmailAndPassword , sendEmailVerification} from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import {AiOutlineEyeInvisible,AiOutlineEye} from 'react-icons/ai'
import { useNavigate } from "react-router-dom";



const Registration = () => {
    document.title = 'Home Page';
    const favicon = document.querySelector("link[rel*='icon']");
    favicon.href = '/favicon-home.ico';

  const auth = getAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [success, setsuccess] = useState('');

  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordShow, setPasswordShow] = useState('false');


  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError('');
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e.target.value)) {
      setEmailError('Please Enter a valid email address');
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
    }else{
       if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
        setEmailError('Please Enter a valid email address');
      }
    }
    if(!name){
      setNameError('Please Enter You Name');
    }
    if(!password){
      setPasswordError('Please Enter You Password');
    }
    if(name && email && password && /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
    createUserWithEmailAndPassword(auth, email, password).then(()=>{
    
    sendEmailVerification(auth.currentUser)
    .then(() => {
      toast.success('please verify you email');
      setEmail('')
      setName('')
      setPassword('')
      setTimeout(() => {
        navigate('/login')
      }, 2000);
    });
  
    }).catch((error) => {
      if(error.code.includes('auth/email-already-in-use'))
      setEmailError('this email is already use');
    });
  }
  return (
    <>
    <div className='flex'>
              <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />

      <div className='w-1/2 mt-[100px] ml-[190px]'>
        <h2 className='text-[#11175D] text-[34px] font-bold font-nunito mb-[13px]'>Get started with easily register</h2>
        <p className='font-nunito text-[rgba(0,0,0,0.5)] text-xl font-normal mb-[62px]'>Free register and you can enjoy it</p>
        <div>
        
        <div class="relative">
          <input onChange={handleEmail} value={email} type="email" id='email-field' className="font-nunito py-[30px] pl-[48px] text-[20px] font-semibold  border-2 rounded-lg  bg-transparent  border-1 border-[rgba(17,23,93,0.3)] w-[368px] focus:outline-none peer " placeholder=" " />

          <label for="email-field" class="font-nunito absolute text-[20px] font-semibold text-[#11175D]   peer-focus:scale-75 peer-placeholder-shown:scale-100 scale-75 duration-300 transform -translate-y-3 bg-white  px-2 peer-focus:px-2 peer-focus:text-[rgba(17,23,93,0.7)]    peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:-translate-y-3  left-12">Email Address</label>
        </div>
        {
            emailError && 
            <p className='text-[red]'>{emailError}</p>
          }
        <div class="relative mt-14">
          <input onChange={handleName} value={name} type="text" id="full-name" class="font-nunito py-[30px] pl-[48px] text-[20px] font-semibold  border-2 rounded-lg  bg-transparent  border-1 border-[rgba(17,23,93,0.3)] w-[368px] focus:outline-none peer " placeholder=" " />

          <label for="full-name" class="font-nunito absolute text-[20px] font-semibold text-[#11175D]   peer-focus:scale-75 peer-placeholder-shown:scale-100 scale-75 duration-300 transform -translate-y-3 bg-white px-2 peer-focus:px-2 peer-focus:text-[rgba(17,23,93,0.7)]    peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:-translate-y-3  left-12">Full name</label>


          

        </div>
          {
            nameError && 
            <p className='text-[red]'>{nameError}</p>
          }

        <div class="relative mt-14">
          <input onChange={handlePassword} value={password} type={passwordShow ? 'password' : 'text'} id="password" class="font-nunito py-[30px] pl-[48px] text-[20px] font-semibold  border-2 rounded-lg  bg-transparent  border-1 border-[rgba(17,23,93,0.3)] w-[368px] focus:outline-none peer " placeholder=" " />

          <label for="password" class="font-nunito absolute text-[20px] font-semibold text-[#11175D]   peer-focus:scale-75 peer-placeholder-shown:scale-100 scale-75 duration-300 transform -translate-y-3 bg-white  px-2 peer-focus:px-2 peer-focus:text-[rgba(17,23,93,0.7)]    peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:-translate-y-3  left-12
          ">Password</label>
          
        {
            passwordShow ? <AiOutlineEyeInvisible for="password" onClick={()=> setPasswordShow(!passwordShow)} className='absolute text-xl top-10 left-[330px]'/>:
          <AiOutlineEye onClick={()=> setPasswordShow(!passwordShow)} className='absolute top-10 text-xl left-[330px]'/>
          }
        </div>
        {
            passwordError && 
            <p className='text-[red]'>{passwordError}</p>
          }
        </div >
        <button onClick={handleSubmit} className='bg-primary-color rounded-[86px] py-5 w-[368px] text-white mb-9 mt-[52px]   text-xl font-semibold nunito cursor-pointer'>Sign up</button>
        <p className='text-[#03014C] w-[368px] text-center text-sm font-normal font-["opensans"]' >Already  have an account ? <Link to='/login' className='text-[#EA6C00] font-bold'>Sign In</Link></p>
      </div>

      <div className='w-1/2'>
        <div className='bg-no-repeat bg-center object-cover h-full w-full' style={{backgroundImage: `url(${LoginImage})`}}>


        </div>
        {/* <img className='w-full object-cover h-max bg-[url("../../Images/input-field.png")]' src={LoginImage} alt="" /> */}
      </div>
    </div>
    </>
  )
}

export default Registration