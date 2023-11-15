
import React, { useState } from "react";
import RegImage from '../../assets/registration.png'
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";


const Registration = () => {
  document.title = "Home Page";
  const favicon = document.querySelector("link[rel*='icon']");
  favicon.href = "/favicon-home.ico";


  const db = getDatabase();

  const auth = getAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [success, setsuccess] = useState("");

  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordShow, setPasswordShow] = useState("false");


  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
    if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e.target.value)
    ) {
      setEmailError("Please Enter a valid email address");
    }
  };

  const handleName = (e) => {
    setName(e.target.value);
    setNameError("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };
  const handleSubmit = () => {
    if (!email) {
      setEmailError("Please Enter You Email Address");
    } else {
      if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
        setEmailError("Please Enter a valid email address");
      }
    }
    if (!name) {
      setNameError("Please Enter You Name");
    }
    if (!password) {
      setPasswordError("Please Enter You Password");
    }
    if (name && email && password && /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/){

      createUserWithEmailAndPassword(auth, email, password, name)
        .then((user) => {
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL : '../../../public/images/profile.png'
          })
          .then(() => {
            toast.success("please verify you email");
            setEmail("");
            setName("");
            setPassword("");
            setTimeout(() => {
              navigate("/login");
            }, 2000);
          }).then(()=>{
            set(ref(db, 'users/' + user.user.uid), {
              username: user.user.displayName,
              email: user.user.email,
            })
          })
        })
        
        .catch((error) => {
          if (error.code.includes("auth/email-already-in-use"))
            setEmailError("this email is already use");
        });
    }
  };
  return (
    <>
      <div className="lg:flex">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <div className="lg:w-1/2  mt-10 lg:ml-[190px] px-1">
          <h2 className="text-[#11175D] text-3xl md:text-[34px] font-bold font-nunito mb-[13px] text-center lg:text-left">
            Get started with easily register
          </h2>
          <p className="font-nunito text-[rgba(0,0,0,0.5)] text-xl font-normal md:mb-10 mb-5 text-center lg:text-left">
            Free register and you can enjoy it
          </p>
          <div className="flex flex-col items-center lg:block  gap-12 lg:gap-0">
            <div class="relative">
              <input
                onChange={handleEmail}
                value={email}
                type="email"
                id="email-field"
                className="font-nunito py-[25px] sm:py-[30px] pl-[48px] text-[20px] font-semibold  border-2 rounded-lg  bg-transparent  border-1 border-[rgba(17,23,93,0.3)] sm:w-[368px] focus:outline-none peer"
                placeholder=" "
              />

              <label
                for="email-field"
                class="font-nunito absolute text-[20px] font-semibold text-[#11175D]   peer-focus:scale-75 peer-placeholder-shown:scale-100 scale-75 duration-300 transform -translate-y-3 bg-white  px-2 peer-focus:px-2 peer-focus:text-[rgba(17,23,93,0.7)]    peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:-translate-y-3  left-12"
              >
                Email Address
              </label>
            </div>
            {emailError && <p className="text-[red]">{emailError}</p>}
            <div class="relative lg:mt-8">
              <input
                onChange={handleName}
                value={name}
                type="text"
                id="full-name"
                class="font-nunito py-[25px] sm:py-[30px] pl-[48px] text-[20px] font-semibold  border-2 rounded-lg  bg-transparent  border-1 border-[rgba(17,23,93,0.3)] sm:w-[368px] focus:outline-none peer "
                placeholder=" "
              />

              <label
                for="full-name"
                class="font-nunito absolute text-[20px] font-semibold text-[#11175D]   peer-focus:scale-75 peer-placeholder-shown:scale-100 scale-75 duration-300 transform -translate-y-3 bg-white px-2 peer-focus:px-2 peer-focus:text-[rgba(17,23,93,0.7)]    peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:-translate-y-3  left-12"
              >
                Full name
              </label>
            </div>
            {nameError && <p className="text-[red]">{nameError}</p>}

            <div class="relative lg:mt-8">
              <input
                onChange={handlePassword}
                value={password}
                type={passwordShow ? "password" : "text"}
                id="password"
                class="font-nunito py-[25px] sm:py-[30px] pl-[48px] text-[20px] font-semibold  border-2 rounded-lg  bg-transparent  border-1 border-[rgba(17,23,93,0.3)] sm:w-[368px] focus:outline-none peer"
                placeholder=" "
              />

              <label
                for="password"
                class="font-nunito absolute text-[20px] font-semibold text-[#11175D]   peer-focus:scale-75 peer-placeholder-shown:scale-100 scale-75 duration-300 transform -translate-y-3 bg-white px-2 peer-focus:px-2 peer-focus:text-[rgba(17,23,93,0.7)]    peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:-translate-y-3  left-12
          "
              >
                Password
              </label>

              {passwordShow ? (
                <AiOutlineEyeInvisible
                  for="password"
                  onClick={() => setPasswordShow(!passwordShow)}
                  className="absolute top-9 text-xl sm:left-[330px] left-72"
                />
              ) : (
                <AiOutlineEye
                  onClick={() => setPasswordShow(!passwordShow)}
                  className="absolute top-9 text-xl sm:left-[330px] left-72 "
                />
              )}
            </div>
            {passwordError && <p className="text-[red]">{passwordError}</p>}
          <button
            onClick={handleSubmit}
            className="bg-primary-color rounded-[86px] py-5 w-[300px] md:w-[368px] text-white my-6 text-xl font-semibold nunito cursor-pointer"
          >
            Sign up
          </button>
          <p className='text-[#03014C] w-[368px] text-center text-sm font-normal font-["opensans"]'>
            Already have an account ?{" "}
            <Link to="/login" className="text-[#EA6C00] font-bold">
              Sign In
            </Link>
          </p>
          </div>
        </div>

        <div className="lg:w-1/2 hidden lg:block" >
          <img src={RegImage}
            className="bg-no-repeat bg-center object-cover hidden lg:block h-screen w-full"
            
          ></img>
          
        </div>
      </div>
    </>
  );
};

export default Registration;
