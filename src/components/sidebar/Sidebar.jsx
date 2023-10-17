import React from 'react'
import { useState } from 'react'
import ProfilePic from '../../../public/images/profile.png'
import { getAuth, signOut } from "firebase/auth";

import {FaXmark} from 'react-icons/fa6'
import {AiOutlineHome, AiFillMessage, AiOutlineSetting} from 'react-icons/ai'
import {IoIosNotifications} from 'react-icons/io'
import {IoLogOutOutline} from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLoginInfo } from '../../slices/userSlice';

const Sidebar = () => {
    const [open ,setOpen] = useState(true)
    const navigate = useNavigate()
    const auth = getAuth();
    const dispatch = useDispatch()

    const handleSingout = () =>{
        console.log('jsjdsd');
        const auth = getAuth();
        signOut(auth).then(() => {
            dispatch(userLoginInfo(null))
            localStorage.removeItem('userLoginInfo')
        navigate('/login')
        }).catch((error) => {
            console.log(error);
    });
    }
    
  return (
    <div>
 
        <button  onClick={()=> setOpen(!open)} class="inline-flex z-50  items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 ">
        <svg class="w-6 h-6 bg-red-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
        
        </button>

        <sidebar  class={`${open ? "transition-transform -translate-x-full " : "translate-x-0"} fixed  top-0 left-0 z-40 h-screen sm:translate-x-0`}>
        <div class="h-full px-3 py-4 overflow-y-auto w-[186px] bg-primary-color">
            <div class="flex items-center justify-between sm:justify-center">
                <img src={ProfilePic} className='sm:w-auto w-16'  alt="Logo" />
                <FaXmark onClick={()=> setOpen(!open)}  class="w-5 h-5  pointer sm:hidden block"></FaXmark>
            </div>
            <ul class="flex flex-col text-5xl mt-[98px] cursor-pointer text-[rgba(255,255,255,0.7)] items-center gap-20">
                <li>
                    <AiOutlineHome></AiOutlineHome>

                </li>
                <li>
                    <AiFillMessage></AiFillMessage>
                </li>
                <li>
                    <IoIosNotifications></IoIosNotifications>
                </li>
                <li>
                    <AiOutlineSetting></AiOutlineSetting>
                </li>
                <li>
                    <IoLogOutOutline onClick={handleSingout}></IoLogOutOutline>
                </li>
            </ul>
        </div>
        </sidebar>
    </div>
  )
}

export default Sidebar
