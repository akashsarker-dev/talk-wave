import React, { useEffect, useState } from 'react'
import {BsThreeDotsVertical,} from 'react-icons/bs'
import Profile from "../../assets/profileimage.png";
import { getDatabase, onValue, push, ref, remove, set } from 'firebase/database';
import { useSelector } from 'react-redux';

const Block = () => {

  const data = useSelector(state => state.userLoginInfo.userInfo);
  const db = getDatabase();
  const [block , setBlock] = useState([]);

  useEffect(()=>{
    const blockRef = ref(db, "block/");
    onValue(blockRef, (snapshot) => {
      let arr =[];
      snapshot.forEach(item=>{
        console.log(item.val(), 'bbbbbbbb');
        if (item.val().blockById == data.uid) {
          arr.push({
             id : item.key,
             block : item.val().block,
             blockId : item.val().blockId
          })
        }else{
          arr.push({
            id : item.key,
            blockBy : item.val().blockBy,
            blockById : item.val().blockById
         })
        }
      
      })
      setBlock(arr)
    });
  },[])
  const handleUnblock = (item)=>{
    console.log(item, 'handleUnblock');
    set(push(ref(db, 'friend/')), {
      senderName: item.block,
      senderId: item.blockId,
      recevierName : data.displayName,
      recevierId : data.uid,
    }).then(()=>{
      remove(ref(db, 'block/' + item.id))
    })
    
  }


  return (
      <div className='shadow-box-shadow rounded-[20px] p-5 h-[330px] w-[427px] '>
      <div className='flex justify-between items-center mb-4'>
        <h3 className='text-xl font-semibold text-black'>Blocked Users</h3>
        <BsThreeDotsVertical className='text-primary-color'></BsThreeDotsVertical>
      </div>
      {
        block.map((item)=>(

      <div className='flex border-b-2 border-[rgba(0,0,0,0.25)] py-4'>
        <div className='flex'>
          <img src={Profile} alt="" />
         <div className='ml-[14px] mr-12'>
         <h2 className='font-semibold text-lg text-black'>{item.block}{item.blockBy}</h2>
          <p className='text-[rgb(77,77,77,0.75)]'>Today, 8:56pm</p>
         </div>
        </div>
        {
          !item.blockById &&
        <button onClick={()=> handleUnblock(item)} className='bg-primary-color px-[22px] py-0 block text-xl font-semibold text-white rounded-md'>unblock</button>
        }
      </div>
        ))
      }
      
    </div>
  )
}
export default Block
