import React, { useEffect, useState } from 'react'
import {BsThreeDotsVertical,} from 'react-icons/bs'
import Profile from "../../assets/profileimage.png";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { data } from 'autoprefixer';
import { useSelector } from 'react-redux';

const User = () => {
  const [userData,  setUserData] = useState([]);
  const [friendRequestData,  setfriendRequestData] = useState([]);
  const [friendList,  setfriendList] = useState([]);
  const db = getDatabase();
  const data = useSelector(state => state.userLoginInfo.userInfo)

  useEffect(()=>{
    const userLists = ref(db, "users/");
    onValue(userLists, (snapshot) => {
      let arr =[];
      snapshot.forEach(item=>{
        if (item.key != data.uid) {
          arr.push({ ...item.val(), userId: item.key });
        }
      })
      setUserData(arr)
    });
  },[])
  const handleRequest =(item)=>{
    console.log();
    set(push(ref(db, "friendrequest/")), {
      senderName: data.displayName,
      senderId: data.uid,
      recevierName: item.username,
      recevierId: item.userId,
    });
}
  useEffect(()=>{
    const friendrequest = ref(db, "friendrequest/");
    onValue(friendrequest, (snapshot) => {
      let arr =[];
      snapshot.forEach(item=>{
        arr.push(item.val().recevierId+item.val().senderId);
      })
      setfriendRequestData(arr)
    });
  },[]) 
  
  useEffect(()=>{
    const friend = ref(db, "friend/");
    onValue(friend, (snapshot) => {
      let arr =[];
      snapshot.forEach(item=>{
        arr.push(item.val().recevierId+item.val().senderId);
      })
      setfriendList(arr)
    });
  },[])

  return (
      <div className='shadow-box-shadow rounded-[20px] p-5 h-[390px] w-[427px] '>
      <div className='flex justify-between items-center mb-4'>
        <h3 className='text-xl font-semibold text-black'>User List</h3>
        <BsThreeDotsVertical className='text-primary-color'></BsThreeDotsVertical>
      </div>
        {
          userData.map((item)=>(

      <div className='flex border-b-2 border-[rgba(0,0,0,0.25)] py-4'>
        <div className='flex'>
          <img src={Profile} alt="" />
         <div className='ml-[14px] mr-12'>
         <h2 className='font-semibold text-lg text-black'>{item.username}</h2>
          <p className='text-[rgb(77,77,77,0.75)]'>Today, 8:56pm</p>
         </div>
        </div>
        {
          friendList.includes(item.userId+data.uid) || friendList.includes(data.uid+item.userId)?
          <button  className='bg-primary-color px-[22px] py-0 block text-xl font-semibold text-white rounded-md'>friend</button>
          :
          friendRequestData.includes(item.userId+data.uid) || friendRequestData.includes(data.uid+item.userId) ?
              <button className='bg-primary-color px-[22px] py-0 block text-xl font-semibold text-white rounded-md'>-</button>
              :
              <button onClick={()=> handleRequest(item)} className='bg-primary-color px-[22px] py-0 block text-xl font-semibold text-white rounded-md'>+</button>
        }
            
          </div>


          ))
        }

    </div>
  )
}

export default User
