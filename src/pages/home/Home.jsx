import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

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
      <h1>Home Page</h1>
    </div>
  )
}

export default Home
