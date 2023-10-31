import React from 'react'
import {BsThreeDotsVertical,} from 'react-icons/bs'
import Profile from "../../assets/profileimage.png";

const Block = () => {
  return (
      <div className='shadow-box-shadow rounded-[20px] p-5 h-[330px] w-[427px] '>
      <div className='flex justify-between items-center mb-4'>
        <h3 className='text-xl font-semibold text-black'>Blocked Users</h3>
        <BsThreeDotsVertical className='text-primary-color'></BsThreeDotsVertical>
      </div>
      <div className='flex border-b-2 border-[rgba(0,0,0,0.25)] py-4'>
        <div className='flex'>
          <img src={Profile} alt="" />
         <div className='ml-[14px] mr-12'>
         <h2 className='font-semibold text-lg text-black'>Hi Guys, Wassup!</h2>
          <p className='text-[rgb(77,77,77,0.75)]'>Today, 8:56pm</p>
         </div>
        </div>
        <button className='bg-primary-color px-[22px] py-0 block text-xl font-semibold text-white rounded-md'>unblock</button>
      </div>
      <div className='flex border-b-2 border-[rgba(0,0,0,0.25)] py-4'>
        <div className='flex'>
          <img src={Profile} alt="" />
         <div className='ml-[14px] mr-12'>
         <h2 className='font-semibold text-lg text-black'>Hi Guys, Wassup!</h2>
          <p className='text-[rgb(77,77,77,0.75)]'>Today, 8:56pm</p>
         </div>
        </div>
        <button className='bg-primary-color px-[22px] py-0 block text-xl font-semibold text-white rounded-md'>unblock</button>
      </div>
      <div className='flex border-b-2 border-[rgba(0,0,0,0.25)] py-4'>
        <div className='flex'>
          <img src={Profile} alt="" />
         <div className='ml-[14px] mr-12'>
         <h2 className='font-semibold text-lg text-black'>Hi Guys, Wassup!</h2>
          <p className='text-[rgb(77,77,77,0.75)]'>Today, 8:56pm</p>
         </div>
        </div>
        <button className='bg-primary-color px-[22px] py-0 block text-xl font-semibold text-white rounded-md'>unblock</button>
      </div>
    </div>
  )
}
export default Block
