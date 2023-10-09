import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';

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
    <div>
      <Sidebar></Sidebar>
    </div>
  )
}

export default Home
