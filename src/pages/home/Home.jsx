import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import Search from '../../components/search/Search';
import { onAuthStateChanged } from 'firebase/auth';
import { getAuth,} from "firebase/auth";
import { userLoginInfo } from '../../slices/userSlice';
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
