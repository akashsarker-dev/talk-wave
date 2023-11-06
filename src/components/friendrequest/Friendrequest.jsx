import React, { useEffect, useState } from 'react'
import {BsThreeDotsVertical,} from 'react-icons/bs'
import Profile from "../../assets/profileimage.png";
import { data } from 'autoprefixer';
import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";
import { useSelector } from 'react-redux';


const Friendrequest = () => {
  const db = getDatabase();
  const [friendRequestList,  setfriendRequestList] = useState([]);

  const data = useSelector(state => state.userLoginInfo.userInfo)

  useEffect(()=>{
    const friendrequest = ref(db, "friendrequest/");
    onValue(friendrequest, (snapshot) => {
      let arr =[];
      snapshot.forEach(item=>{
       if(data.uid === item.val().recevierId){
        arr.push({...item.val(), id:item.key })
       }
      })
      setfriendRequestList(arr)
    });
  },[])
  const handleAccept = (item)=>{
    set(push(ref(db, 'friend/')), {
      ...item
    }).then(()=>{
      remove((ref(db, 'friendrequest/' + item.id)))
    })
  }

  return (
      <div className='shadow-box-shadow rounded-[20px] p-5 h-[330px] w-[427px] '>
      <div className='flex justify-between items-center mb-4'>
        <h3 className='text-xl font-semibold text-black'>Friend  Request</h3>
        <BsThreeDotsVertical className='text-primary-color'></BsThreeDotsVertical>
      </div>
      {
        friendRequestList.map((item)=>(
          <div className='flex border-b-2 border-[rgba(0,0,0,0.25)] py-4'>
        <div className='flex'>
          <img src={Profile} alt="" />
         <div className='ml-[14px] mr-12'>
         <h2 className='font-semibold text-lg text-black'>{item.senderName}</h2>
          <p className='text-[rgb(77,77,77,0.75)]'>Dinner?</p>
         </div>
        </div>
        <button onClick={()=> handleAccept(item)} className='bg-primary-color px-[22px] py-0 block text-xl font-semibold text-white rounded-md'>Accept</button>
      </div>
        ))
      }
      
    </div>
  )
}
export default Friendrequest
