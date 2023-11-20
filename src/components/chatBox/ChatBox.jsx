import React from 'react'
import Profile from "../../assets/profileimage.png";
import {BsThreeDotsVertical,} from 'react-icons/bs'
import SendImage from '../../assets/registration.png'
import ModalImage from "react-modal-image";
import { FaTelegramPlane } from "react-icons/fa";
import { CiCamera } from "react-icons/ci";
import { MdOutlineEmojiEmotions } from "react-icons/md";

const ChatBox = () => {
  return (
    <>
      <div className=" w-[500px] rounded-lg  shadow-box-shadow">
        <div className="flex justify-between border-b-2 border-[rgba(0,0,0,0.25)] items-center py-4">
          <div className="flex ">
            <img src={Profile} alt="" />
            <div className="ml-[14px] mr-12">
              <h2 className="font-semibold text-lg text-black">Swathi</h2>
              <p className="text-[rgba(77,77,77,0.25)]">Dinner?</p>
            </div>
          </div>
          <BsThreeDotsVertical className="text-primary-color"></BsThreeDotsVertical>
        </div>
        <div className="py-4 px-4 h-[600px] overflow-y-scroll">
          {/*  */}
          <div>
            <h6 className="py-3.5 px-12 bg-[#F1F1F1] w-fit text-black text-base font-semibold  rounded-lg">
              Hey There !
            </h6>
            <time className="text-[rgba(0,0,0,0.25)]">Today, 2:01pm</time>
          </div>

          <div className="flex flex-col items-end">
            <h6 className="text-right py-3.5 px-12 bg-primary-color w-fit text-white text-base font-semibold  rounded-lg">
              Hey There !
            </h6>
            <time className="text-[rgba(0,0,0,0.25)]">Today, 2:01pm</time>
            <ModalImage
              className="w-40 mt-10"
              small={SendImage}
              large={SendImage}
            />
          </div>
          <div className="flex flex-col ">
            <ModalImage
              className="w-40 mt-10"
              small={SendImage}
              large={SendImage}
            />
          </div>
        </div>
      <div className=" py-2 px-2">
        <form className="flex items-center">
          <div className=" w-full relative">
            <input type="text" className="bg-[#F1F1F1] border  text-sm rounded-lg  w-full p-2.5 focus:outline-none" required/>
            <CiCamera className=' absolute top-3 right-3 text-[rgba(0,0,0,0.5)] text-xl'/>
            <MdOutlineEmojiEmotions className=' absolute top-3 right-10 text-[rgba(0,0,0,0.5)] text-xl'/>
          </div>
          <button className='p-4 bg-primary-color rounded-xl text-white ml-2'><FaTelegramPlane /></button>
        </form>
      </div>
      </div>
    </>
  );
}

export default ChatBox
