import React, { useEffect, useState } from 'react'
import {BsThreeDotsVertical,BsSearch} from 'react-icons/bs'
import Profile from "../../assets/profileimage.png";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { data } from 'autoprefixer';
import { useSelector } from 'react-redux';

const User = () => {
  const [userData,  setUserData] = useState([]);
  const [friendRequestData,  setfriendRequestData] = useState([]);
  const [friendList,  setfriendList] = useState([]);
  const [blockList,  setblockList] = useState([]);
  const [searchData,  setsearchData] = useState([]);

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


   useEffect(()=>{
    const blockRef = ref(db, "block/");
    onValue(blockRef, (snapshot) => {
      let arr =[];
      snapshot.forEach(item=>{
        arr.push(item.val().blockId+item.val().blockById);
      })
      setblockList(arr)
    });
  },[]) 

  

  const handleSearch = (e)=>{
    let arr = []
    if(e.target.value.lenght == 0){
      setUserData([])
    }else{
      userData.filter((item)=>{
        // console.log(item.username.toLowerCase().includes(e.target.value.toLowerCase()));
        if(item.username.toLowerCase().includes(e.target.value.toLowerCase())){
          arr.push(item)
          setsearchData(arr)
        }
      })
    }
    
  }

  return (
      <div className='shadow-box-shadow rounded-[20px] p-5 h-[390px] w-[427px]   overflow-scroll '>

        <div class="shadow-box-shadow rounded-[20px]">
          <div class="relative  w-full">
            <div class="absolute top-2/4 right-3 grid w-5 -translate-y-2/4 place-items-center text-blue-gray-500 text-primary-color">
              <BsThreeDotsVertical></BsThreeDotsVertical>
            </div>
            <div class="absolute top-2/4 left-3 grid  w-5 -translate-y-2/4 place-items-center text-blue-gray-500">
              <BsSearch></BsSearch>
            </div>
            <input onChange={handleSearch}
              class="font-nunito h-[60px] shadow-[box-shadow] px-10 text-base font-semibold rounded-lg  bg-transparent   border-[rgba(17,23,93,0.3)] w-full focus:outline-none peer "
              placeholder=" Search"
            />
          </div>
        </div>

      <div className='flex justify-between items-center mt-4 mb-4'>
        <h3 className='text-xl font-semibold text-black'>User List</h3>
        <BsThreeDotsVertical className='text-primary-color'></BsThreeDotsVertical>
      </div>
      {
        searchData.length > 0 ?
        searchData.map((item)=>(

          <div className='flex justify-around border-b-2 border-[rgba(0,0,0,0.25)] py-4'>
            <div className='flex '>
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
              blockList.includes(item.userId+data.uid) || blockList.includes(data.uid+item.userId)?
              <button  className='bg-primary-color px-[22px] py-0 block text-xl font-semibold text-white rounded-md'>block</button>
              :
              
              friendRequestData.includes(item.userId+data.uid) || friendRequestData.includes(data.uid+item.userId) ?
                  <button className='bg-primary-color px-[22px] py-0 block text-xl font-semibold text-white rounded-md'>-</button>
                  :
                  <button onClick={()=> handleRequest(item)} className='bg-primary-color px-[22px] py-0 block text-xl font-semibold text-white rounded-md'>+</button>
            }
                
              </div>
    
    
              ))
        :
        
          userData.map((item)=>(

      <div className='flex justify-around border-b-2 border-[rgba(0,0,0,0.25)] py-4'>
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
          blockList.includes(item.userId+data.uid) || blockList.includes(data.uid+item.userId)?
          <button  className='bg-primary-color px-[22px] py-0 block text-xl font-semibold text-white rounded-md'>block</button>
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
