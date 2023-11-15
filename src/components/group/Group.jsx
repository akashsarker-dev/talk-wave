import React, { useState, useRef, useEffect } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Profile from '../../assets/profileimage.png';

const Group = () => {
  const [groupCreate, setGroupCreate] = useState(false);
  const groupCreateRef = useRef();

  const handleGroupCreate = () => {
    setGroupCreate(true);
  };

  const closeGroupCreate = () => {
    setGroupCreate(false);
  };

  // const handleClickOutside = (event) => {
  //   if (!groupCreateRef.current.contains(event.target)) {
  //     closeGroupCreate();
  //   }
  // };

  // useEffect(() => {
  //   if (groupCreate) {
  //     document.addEventListener('mousedown', handleClickOutside);
  //   } else {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, [groupCreate]);

  return (
    <div className='shadow-box-shadow rounded-[20px] p-5 h-[330px] w-[427px] '>
      <div className='flex justify-between items-center mb-4'>
        <h3 className='text-xl font-semibold text-black'>Groups List</h3>
        <button onClick={handleGroupCreate} className='bg-primary-color font-poppins p-1 text-white rounded-md'>
          Create Group
        </button>
      </div>
      {groupCreate && (
        <div onClick={closeGroupCreate} className='absolute z-50 top-0 left-0 bg-[#0000006b] h-full w-screen flex justify-center items-center'>
          <div ref={groupCreateRef} className='bg-white p-6 rounded-lg'>
            <h2>Create Group</h2>

            <button onClick={closeGroupCreate} className="bg-red-500 rounded-lg p-4 text-white text-xl font-semibold nunito cursor-pointer mt-4">
              Cancel
            </button>
          </div>
        </div>

        
      )}
    </div>
  );
};

export default Group;
