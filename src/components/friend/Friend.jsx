import React from 'react'
import {BsThreeDotsVertical,} from 'react-icons/bs'
import Profile from "../../assets/profileimage.png";


const Friend = () => {
  return (
      <div className='shadow-box-shadow rounded-[20px] p-5 h-[390px] w-[427px] '>
      <div className='flex justify-between items-center mb-4'>
        <h3 className='text-xl font-semibold text-black'>Friend List</h3>
        <BsThreeDotsVertical className='text-primary-color'></BsThreeDotsVertical>
      </div>
      <div className='flex border-b-2 border-[rgba(0,0,0,0.25)] items-center py-4'>
        <div className='flex'>
          <img src={Profile} alt="" />
         <div className='ml-[14px] mr-12'>
         <h2 className='font-semibold text-lg text-black'>Hi Guys, Wassup!</h2>
          <p className='text-[rgb(77,77,77,0.75)]'>Dinner?</p>
         </div>
        </div>
        <p className='text-xs text-[rgba(0,0,0,0.5)]'>Today, 8:56pm</p>
      </div>
      <div className='flex border-b-2 border-[rgba(0,0,0,0.25)] items-center py-4'>
        <div className='flex'>
          <img src={Profile} alt="" />
         <div className='ml-[14px] mr-12'>
         <h2 className='font-semibold text-lg text-black'>Hi Guys, Wassup!</h2>
          <p className='text-[rgb(77,77,77,0.75)]'>Dinner?</p>
         </div>
        </div>
        <p className='text-xs text-[rgba(0,0,0,0.5)]'>Today, 8:56pm</p>
      </div>
      <div className='flex border-b-2 border-[rgba(0,0,0,0.25)] items-center py-4'>
        <div className='flex'>
          <img src={Profile} alt="" />
         <div className='ml-[14px] mr-12'>
         <h2 className='font-semibold text-lg text-black'>Hi Guys, Wassup!</h2>
          <p className='text-[rgb(77,77,77,0.75)]'>Dinner?</p>
         </div>
        </div>
        <p className='text-xs text-[rgba(0,0,0,0.5)]'>Today, 8:56pm</p>
      </div>
    </div>
  )
}

export default Friend
