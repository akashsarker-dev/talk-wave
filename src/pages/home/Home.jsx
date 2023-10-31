import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import Search from '../../components/search/Search';
import { onAuthStateChanged } from 'firebase/auth';
import { getAuth,} from "firebase/auth";
import { userLoginInfo } from '../../slices/userSlice';
import Group from '../../components/group/Group';
import Friend from '../../components/friend/Friend';
import User from '../../components/user/User';
import Friendrequest from '../../components/friendrequest/Friendrequest';
import Block from '../../components/block/Block';
import MyGroup from '../../components/mygroup/mygroup';
const Home = () => {
  
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const data = useSelector(state => state.userLoginInfo.userInfo);
  useEffect(() => {
    if (!data) {
      navigate('/login');
      setLoading(false);
    } else {
      onAuthStateChanged(auth, (user) => {
        (user.emailVerified && setVerify(true)) || setLoading(false);
        
          dispatch(userLoginInfo(user));
          localStorage.setItem("userLoginInfo", JSON.stringify(user));
      });
    }
  }, [auth, data, dispatch, navigate]);
  return (
    <div className='flex'>
      
     <div><Sidebar></Sidebar></div>
     <div className='flex flex-wrap sm:ml-[186px] mt-2 gap-x-3'>
     <div>
      <Search></Search>
      <Group></Group>
     </div>
      <div><Friend></Friend></div>
      <div><User></User></div>
      <div><Friendrequest></Friendrequest></div>
      <div><MyGroup></MyGroup></div>
      <div><Block></Block></div>
     </div>
    </div>
  )
}

export default Home
