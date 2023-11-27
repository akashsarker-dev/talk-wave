import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import Friend from '../../components/friend/Friend';
import ChatBox from '../../components/chatBox/ChatBox';

const Message = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [verify, setVerify] = useState(true);
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
    <div>
      <div className='flex'>
      
      <div><Sidebar active='message'></Sidebar></div>
      <div className='flex  sm:ml-[186px] mt-2 gap-x-3 '>
      <div>
       <Friend></Friend>
      </div>
      <div className='h-screen'>
        <ChatBox></ChatBox>
      </div>
      </div>
     </div>
    </div>
  )
}

export default Message
