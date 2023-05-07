import { FaUserAlt } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { useRouter } from 'next/router'
import axios from "axios";
import { BsTelephoneFill } from "react-icons/bs";
import React, { useEffect, useState, useRef } from "react";
import Popup from "../components/Reusable/Popup";
export default function Login() {
  const router = useRouter()
  const [data, setData] = useState({});
  const [user, setUser] = useState ({});
  const [open, setOpen] = useState(false)
  const [reg, setReg] = useState(false)
  const register = useRef();
  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
    
    const toggleReg = document.querySelector("#toggleReg");
    const pass = document.querySelector("#id_reg");

    toggleReg.addEventListener("click", function (e) {
      const type =
        pass.getAttribute("type") === "password" ? "text" : "password";
      pass.setAttribute("type", type);
      this.classList.toggle("fa-eye-slash");
    });
  });

  const submitRegister = async (e) => {
    try {
      e.preventDefault();
      await axios.post("http://localhost:8000/api/register", data);
      console.log('success');
      setReg(true)
    }
     catch (error) {
      console.log(error);
    }
    register.current.reset()
  };

  const submitLogin = async (e) => {
    try {
      e.preventDefault();
      console.log("user",user)
      let response = await axios.post("http://localhost:8000/api/login", user);
      console.log('success login',response);
      if(response.status == 200){
        // let token = response.data.token;
        // console.log("token ",token)

        localStorage.setItem("user_data", response.data.token)
        localStorage.setItem('id' , response.data.user.id )
        localStorage.setItem('name' , response.data.user.name )
        router.push('/')
        //save the token in the local storage
        //then navigate home page
      }
      else{
        //unauthorized
        //popup
        
        
      }
    } catch (error) {
      setOpen(true)
      console.log(error);
    }
    register.current.reset()
  };
  const handleLoginChange = (e) =>{
    setUser((prev) => ({ ...prev, [e.target.name] :e.target.value}));
  }

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form className="sign-in-form" onSubmit={submitLogin}>
              <h2 className="title">Login</h2>
              <div className="input-field">
                <div className=" w-1/6 mx-4">
                  <FaUserAlt />
                </div>
                <input
                  type="text"
                  name="email"
                  autoComplete="username"
                  placeholder="Username"
                  required
                  onChange={handleLoginChange}
                />
              </div>
              <div className="input-field">
                <div className=" w-1/6 mx-4">
                  <AiFillLock className=" text-xl" />
                </div>
                <input
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  placeholder="Password"
                  id="id_password"
                  required
                  onChange={handleLoginChange}
                />
                <i className="far fa-eye" id="togglePassword"></i>
              </div>
              <input type="submit" value="Sign in" className="btn solid" />
            </form>

            <form className="sign-up-form" onSubmit={submitRegister} ref={register}>
              <h2 className="title">Register</h2>
              <div className="input-field">
                <div className=" w-1/6 mx-4">
                  <FaUserAlt />
                </div>
                <input
                  type="text"
                  name="name"
                  autoComplete="username"
                  placeholder="Username"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <div className=" w-1/6 mx-4">
                  <BsTelephoneFill />
                </div>
                <input
                  type="text"
                  name="phone_number"
                  autoComplete="phone number"
                  placeholder="Phone Number"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <div className=" w-1/6 mx-4">
                  <MdEmail className=" text-xl" />
                </div>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Email"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <div className=" w-1/6 mx-4">
                  <ImLocation2 className=" text-xl" />
                </div>
                <input
                  type="text"
                  name="address"
                  autoComplete="address"
                  placeholder="Address"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <div className=" w-1/6 mx-4">
                  <AiFillLock className=" text-xl" />
                </div>
                <input
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  placeholder="Password"
                  id="id_reg"
                  required
                  onChange={handleChange}
                />
                <i className="far fa-eye" id="toggleReg"></i>
              </div>
              <div className="input-field">
                <div className=" w-1/6 mx-4">
                  <AiFillLock className=" text-xl" />
                </div>
                <input
                  type="password"
                  name="password_confirmation"
                  autoComplete="current-password"
                  placeholder="confirm Password"
                  id="id_reg"
                  required
                  onChange={handleChange}
                />
                <i className="far fa-eye" id="toggleReg"></i>
              </div>
              <input type="submit" value="Register" className="btn solid" />
            </form>
          </div>
        </div>

        <div className="panels-container bg-[url('../public/sign.gif')] bg-contain bg-center bg-no-repeat">
          <div className="panel left-panel  ">
            <div className="content ">
              <h3>You don&apos;t have an account?</h3>
              <p>Create your account right now to add a post and comments.</p>
              <button className="btn transparent" id="sign-up-btn">
                Register
              </button>
            </div>
          </div>

          <div className="panel right-panel ">
            <div className="content right-panel">
              <h3>Already have an account?</h3>
              <p>
                Login to see your posts and post your new comments or posts.
              </p>
              <button className="btn transparent" id="sign-in-btn">
                Sign in
              </button>
            </div>
          </div>
        </div>
        <Popup trigger={open} onBlur={() => setOpen(false)}>
        <h1 className=" text-xl mt-11">Email Or Password Are Not Exist. <br/> Please Try Again.</h1>
       </Popup>

       <Popup trigger={reg} onBlur={() =>(router.push('/'), setReg(false))}>
        <h1 className=" text-xl mt-11">yor account was added successfully <br/> Please login to add a post or comments.&#129299;</h1>
       </Popup>

      </div>
    </>
  );
}
