import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import Search from '../../components/search/Search';

const Home = () => {
  const navigate = useNavigate()
  const data = useSelector(state => state.userLoginInfo.userInfo);
  console.log(data);
  useEffect(()=>{
    if(!data){
      navigate('/login')
    }
  })
  return (
    <div className='flex'>
      
     <div><Sidebar></Sidebar></div>
     <div className='flex flex-wrap sm:ml-[186px] mt-2'>
     <div className='w-[427px] h-10 '>
      <Search></Search>
     </div>
      <div className='w-[427px] bg-red-400 h-10'></div>
      <div className='w-[427px] bg-slate-400 h-10'></div>
     </div>
    </div>
  )
}

export default Home
