import React, { useEffect, useState } from "react";
import Profile from "../../assets/profileimage.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import SendImage from "../../assets/registration.png";
import ModalImage from "react-modal-image";
import { FaTelegramPlane } from "react-icons/fa";
import { CiCamera } from "react-icons/ci";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { useSelector } from "react-redux";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import moment from "moment";
import { getDownloadURL, getStorage, ref as refs, uploadBytes } from "firebase/storage";

const ChatBox = () => {
  const storage = getStorage();
  const db = getDatabase();
  const [message, setMessage] = useState();
  const data = useSelector((state) => state.userLoginInfo.userInfo);
  const activeChat = useSelector((state) => state.activeChat);

  const [activeMessage, setActiveMessage] = useState([]);
  const handleMessageSend = () => {
    setMessage(message);
    if (activeChat.active.status == "single") {
      set(push(ref(db, "activechat/")), {
        message: message,
        whoSendId: data.uid,
        whoSendName: data.displayName,
        whoRecevierId: activeChat.active.id,
        whoRecevierName: activeChat.active.name,
        date: `${new Date().getFullYear()}-${
          new Date().getMonth() + 1
        }-${new Date().getDate()},${new Date().getHours()}:${new Date().getMinutes()}`,
      });
    } else {
      console.log("sdhfkhsd");
    }
  };
  useEffect(() => {
    const activechatRef = ref(db, "activechat/");
    onValue(activechatRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (
          item.val().whoSendId == data.uid ||
          (item.val().whoRecevierId == activeChat.active.id &&
            item.val().whoRecevierId == data.uid) ||
          item.val().whoSendId == activeChat.active.id
        ) {
          arr.push(item.val());
        }
        // console.log(item.val());
      });
      setActiveMessage(arr);
    });
  }, []);
  const handleImg = (e) => {
    // console.log(e.target.files[0]);
    const storageRef = refs(storage, "some-child");

    uploadBytes(storageRef, e.target.files[0]).then((snapshot) => {
      getDownloadURL(storageRef).then((downloadURL) => {
       set(push(ref(db, "activechat/")), {
        img: downloadURL,
        whoSendId: data.uid,
        whoSendName: data.displayName,
        whoRecevierId: activeChat.active.id,
        whoRecevierName: activeChat.active.name,
        date: `${new Date().getFullYear()}-${
          new Date().getMonth() + 1
        }-${new Date().getDate()},${new Date().getHours()}:${new Date().getMinutes()}`,
      });
      });
    });
  };
  return (
    <>
      <div className=" w-[500px] rounded-lg  shadow-box-shadow">
        <div className="flex justify-between border-b-2 border-[rgba(0,0,0,0.25)] items-center py-4">
          <div className="flex ">
            <img src={Profile} alt="" />
            <div className="ml-[14px] mr-12">
              <h2 className="font-semibold text-lg text-black">
                {activeChat.active.name}
              </h2>
              <p className="text-[rgba(77,77,77,0.25)]">Dinner?</p>
            </div>
          </div>
          <BsThreeDotsVertical className="text-primary-color"></BsThreeDotsVertical>
        </div>

        <div className="py-4 px-4 h-[600px] overflow-y-scroll">
          {/* rechived */}
          {activeMessage.map((item) =>
            item.whoSendId == data.uid ?
            item.message? 
              <div className="flex flex-col items-end p-2">
                <h6 className="text-right py-3.5 px-12 bg-primary-color w-fit text-white text-base font-semibold  rounded-lg">
                  {item.message}
                </h6>
                <time className="text-[rgba(0,0,0,0.25)]">
                  {moment(item.date, "YYYYMMDD hh:mm").fromNow()}
                </time>
              </div>
              :
              <div className="flex justify-end">
              <ModalImage
                className="w-40 mt-10"
                small={item.img}
                large={item.img}
              />
            </div>
            
            : 
            item.message? 
              <div className="p-2">
                <h6 className="py-3.5 px-12 bg-[#F1F1F1] w-fit text-black text-base font-semibold  rounded-lg">
                  {item.message}
                </h6>
                <time className="text-[rgba(0,0,0,0.25)]">
                  {moment(item.date, "YYYYMMDD hh:mm").fromNow()}
                </time>
              </div>:
               <div className="flex ">
               <ModalImage
                 className="w-40 mt-10"
                 small={item.img}
                 large={item.img}
               />
             </div>
            
          )}
         
        </div>

        <div className=" py-2 px-2">
          <div className=" w-full relative flex">
            <input
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              className="bg-[#F1F1F1] border  text-sm rounded-lg  w-full p-2.5 focus:outline-none"
              required
            />
            <label className="absolute top-3 right-28 cursor-pointer">
              <CiCamera className=" text-[rgba(0,0,0,0.5)] text-xl" />
              <input onChange={handleImg} className=" hidden" type="file" />
            </label>
            <MdOutlineEmojiEmotions className=" absolute top-3 right-20 text-[rgba(0,0,0,0.5)] text-xl" />
            <button
              onClick={handleMessageSend}
              className="p-4 bg-primary-color rounded-xl text-white ml-2"
            >
              <FaTelegramPlane />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
