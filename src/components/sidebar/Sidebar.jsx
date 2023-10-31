import React, { createRef } from "react";
import { useState } from "react";
import ProfilePic from "../../../public/images/profile.png";
import { getAuth, signOut, updateProfile } from "firebase/auth";

import { FaXmark } from "react-icons/fa6";
import { AiOutlineHome, AiFillMessage, AiOutlineSetting } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { BiSolidCloudUpload } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLoginInfo } from "../../slices/userSlice";
import "cropperjs/dist/cropper.css";
import Cropper from "react-cropper";
import { getDownloadURL, getStorage, ref, uploadString } from "firebase/storage";
import { data } from "autoprefixer";


const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const auth = getAuth();
  const dispatch = useDispatch();
  const [profileUploadModal, setprofileUploadModal] = useState(false);
  // .userLoginInfo.userInfo.photoURL
  const storage = getStorage();
  const dataInfo = useSelector(state => state.userLoginInfo.userInfo);
  console.log(dataInfo,'data');

  const [image, setImage] = useState("");
  const [cropData, setCropData] = useState("");
  const cropperRef = createRef();

  const handleProfileUpload = () => {
    setprofileUploadModal(true);
  };
  const handleCropCancle = () => {
    setprofileUploadModal(false);
  };
 

  const handleSingout = () => {
    console.log("jsjdsd");
    signOut(auth)
      .then(() => {
        dispatch(userLoginInfo(null));
        localStorage.removeItem("userLoginInfo");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleUploadChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };
  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
      const storageRef = ref(storage, auth.currentUser.uid);
     
      const message4 = cropperRef.current?.cropper.getCroppedCanvas().toDataURL();
      uploadString(storageRef, message4, 'data_url').then((snapshot) => {
        console.log('Uploaded a data_url string!');
        getDownloadURL(storageRef).then((downloadURL) => {
          console.log('File available at', downloadURL);
          updateProfile(auth.currentUser,{
            photoURL : downloadURL
          }).then(()=>{
            setprofileUploadModal(false)
            setImage('')
            setCropData('')
          })
        }); 
});
    }
  };

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        class="inline-flex z-50  items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
      >
        <svg
          class="w-6 h-6 bg-red-400"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <sidebar
        class={`${
          open ? "transition-transform -translate-x-full " : "translate-x-0"
        } fixed  top-0 left-0 z-40 h-screen sm:translate-x-0`}
      >
        <div class="h-full px-3 py-4 overflow-y-auto w-[186px] bg-primary-color">
          <div class="flex items-center justify-between sm:justify-center">
            <div className="relative group">
              <img src={dataInfo?.photoURL} className="sm:w-auto w-16 rounded-full" alt="Logo" />
              <div
                onClick={handleProfileUpload}
                className="absolute w-full h-full top-0 left-0 flex justify-center items-center rounded-full opacity-0 group-hover:opacity-100 group-hover:bg-[rgba(0,0,0,0.41)]"
                >
                <BiSolidCloudUpload className="text-2xl text-white"></BiSolidCloudUpload>
              </div>
            </div>
            <FaXmark
              onClick={() => setOpen(!open)}
              class="w-5 h-5  pointer sm:hidden block"
            ></FaXmark>
          </div>
          <h3 className="text-center text-[rgba(255,255,255,0.7)] text-2xl font-bold font-nunito">{dataInfo?.displayName}</h3>
          <ul class="flex flex-col text-5xl mt-[98px] cursor-pointer text-[rgba(255,255,255,0.7)] items-center gap-20">
            <li>
              <AiOutlineHome></AiOutlineHome>
            </li>
            <li>
              <AiFillMessage></AiFillMessage>
            </li>
            <li>
              <IoIosNotifications></IoIosNotifications>
            </li>
            <li>
              <AiOutlineSetting></AiOutlineSetting>
            </li>
            <li>
              <IoLogOutOutline onClick={handleSingout}></IoLogOutOutline>
            </li>
          </ul>
          {profileUploadModal && (
            <div className="absolute top-0 left-0 bg-[#0000006b] h-full w-screen flex justify-center items-center">
              <div className=" bg-primary-color w-1/2 p-10 rounded-md">
                <h2 className="text-center text-[34px] font-bold font-opensans text-white">
                  Upload You Image
                </h2>

                <div className="group relative rounded-full mx-auto w-28 h-28 overflow-hidden">
                  {image ? (
                    <div className="img-preview w-full h-full rounded-full " />
                  ) : (
                    <img
                      src={dataInfo?.photoURL}
                      className="sm:w-auto  mx-auto "
                      alt="Logo"
                    />
                  )}
                </div>

                <input
                  onChange={handleUploadChange}
                  className="mb-5 p-4 "
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                />
                {image && (
                  <Cropper
                    ref={cropperRef}
                    style={{ height: 400, width: "100%" }}
                    zoomTo={0.5}
                    initialAspectRatio={1}
                    preview=".img-preview"
                    src={image}
                    viewMode={1}
                    minCropBoxHeight={10}
                    minCropBoxWidth={10}
                    background={false}
                    responsive={true}
                    autoCropArea={1}
                    checkOrientation={false}
                    guides={true}
                  />
                )}
                <div>
                  <button onClick={getCropData} className="bg-sky-500 rounded-lg p-4 text-white  mt-14   text-xl font-semibold nunito cursor-pointer">
                    Upload
                  </button>

                  <button
                    onClick={handleCropCancle}
                    className="bg-red-500 rounded-lg p-4 text-white  mt-14 ml-5  text-xl font-semibold nunito cursor-pointer"
                  >
                    Cancle
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </sidebar>
    </div>
  );
};

export default Sidebar;
