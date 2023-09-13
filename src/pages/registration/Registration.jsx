import React, { useState } from 'react'
import LoginImage from '/input-field.png'

const Registration = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

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
    if(!name){
      setNameError('Please Enter You Name');
    }
    if(!password){
      setPasswordError('Please Enter You Password');
    }
  }
  return (
    <>
    <div className='flex'>
      <div className='w-1/2 mt-[100px] ml-[190px]'>
        <h2 className='text-[#11175D] text-[34px] font-bold font-nunito mb-[13px]'>Get started with easily register</h2>
        <p className='font-nunito text-[rgba(0,0,0,0.5)] text-xl font-normal mb-[62px]'>Free register and you can enjoy it</p>
        <div>
        
        <div class="relative">
          <input onChange={handleEmail} type="email" id="email-field" class="font-nunito text-xl font-semibold py-[26px] pl-[52px]  border-2 rounded-lg  bg-transparent  border-1 border-[rgba(17,23,93,0.3)] w-[368px] focus:outline-none peer " placeholder=" " />

          <label for="email-field" class="font-nunito absolute text-xl font-semibold text-[#11175D]   peer-focus:text-sm duration-300 transform -translate-y-4    bg-white  px-2 peer-focus:px-2 peer-focus:text-[rgba(17,23,93,0.7)]    peer-placeholder-shown:top-1/2 peer-focus:top-2  peer-focus:-translate-y-4 left-[52px]
          ">Email Address</label>
        </div>
        {
            emailError && 
            <p className='text-[red]'>{emailError}</p>
          }
        <div class="relative mt-14">
          <input onChange={handleName} type="text" id="full-name" class="font-nunito py-[26px] pl-[52px] text-xl font-semibold  border-2 rounded-lg  bg-transparent  border-1 border-[rgba(17,23,93,0.3)] w-[368px] focus:outline-none peer " placeholder=" " />

          <label for="full-name" class="font-nunito absolute text-xl font-semibold text-[#11175D]   peer-focus:text-sm duration-300 transform -translate-y-4 bg-white  px-2 peer-focus:px-2 peer-focus:text-[rgba(17,23,93,0.7)]    peer-placeholder-shown:top-1/2 peer-focus:top-2  peer-focus:-translate-y-4 left-[52px]">Full name</label>

        </div>
          {
            nameError && 
            <p className='text-[red]'>{nameError}</p>
          }

        <div class="relative mt-14">
          <input onChange={handlePassword} type="text" id="password" class="font-nunito py-[26px] pl-[52px]  border-2 rounded-lg  bg-transparent text-xl font-semibold border-1 border-[rgba(17,23,93,0.3)] w-[368px] focus:outline-none peer " placeholder=" " />

          <label for="password" class="font-nunito absolute text-xl font-semibold text-[#11175D]   peer-focus:text-sm duration-300 transform -translate-y-4    bg-white  px-2 peer-focus:px-2 peer-focus:text-[rgba(17,23,93,0.7)]    peer-placeholder-shown:top-1/2 peer-focus:top-2  peer-focus:-translate-y-4 left-[52px]
          ">Password</label>
          
        </div>
        {
            passwordError && 
            <p className='text-[red]'>{passwordError}</p>
          }
        </div >
        <button onClick={handleSubmit} className='bg-primary-color rounded-[86px] py-5 w-[368px] text-white mb-9 mt-[52px]   text-xl font-semibold nunito cursor-pointer'>Sign up</button>
        <p className='text-[#03014C] w-[368px] text-center text-sm font-normal font-["opensans"]' >Already  have an account ? <span className='text-[#EA6C00] font-bold'>Sign In</span></p>
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