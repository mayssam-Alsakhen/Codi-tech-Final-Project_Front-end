import { FaUserAlt } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { AiFillEye } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import React, { useEffect } from "react";
export default function Login() {
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
    const togglePassword = document.querySelector("#togglePassword");
    const password = document.querySelector("#id_password");

    togglePassword.addEventListener("click", function (e) {
      const type =
        password.getAttribute("type") === "password" ? "text" : "password";
      password.setAttribute("type", type);
      this.classList.toggle("fa-eye-slash");
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
  return (
    <>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="" className="sign-in-form">
              <h2 className="title">Login</h2>
              <div className="input-field">
                <div className=" w-1/6 mx-4">
                  <FaUserAlt />
                </div>
                <input
                  type="text"
                  name="username"
                  autocomplete="username"
                  placeholder="Username"
                  required="yes"
                />
              </div>
              <div className="input-field">
                <div className=" w-1/6 mx-4">
                  <AiFillLock className=" text-xl" />
                </div>
                <input
                  type="password"
                  name="password"
                  autocomplete="current-password"
                  placeholder="Password"
                  id="id_password"
                  required="yes"
                />
                {/* <div className=' w-1/6' id="togglePassword">< AiFillEye/></div> */}
                <i className="far fa-eye" id="togglePassword"></i>
              </div>
              <input type="submit" value="Sign in" className="btn solid" />
            </form>

            <form action="" className="sign-up-form">
              <h2 className="title">Register</h2>
              <div className="input-field">
                <div className=" w-1/6 mx-4">
                  <FaUserAlt />
                </div>
                <input
                  type="text"
                  name="username"
                  autocomplete="username"
                  placeholder="Username"
                  required="yes"
                />
              </div>
              <div className="input-field">
                <div className=" w-1/6 mx-4">
                  <BsTelephoneFill />
                </div>
                <input
                  type="text"
                  name="phone number"
                  autocomplete="phone number"
                  placeholder="Phone Number"
                  required="yes"
                />
              </div>
              <div className="input-field">
                <div className=" w-1/6 mx-4">
                  <MdEmail className=" text-xl" />
                </div>
                <input
                  type="email"
                  name="email"
                  autocomplete="email"
                  placeholder="Email"
                  required="yes"
                />
              </div>
              <div className="input-field">
                <div className=" w-1/6 mx-4">
                  <ImLocation2 className=" text-xl" />
                </div>
                <input
                  type="text"
                  name="address"
                  autocomplete="address"
                  placeholder="Address"
                  required="yes"
                />
              </div>
              <div className="input-field">
                <div className=" w-1/6 mx-4">
                  <AiFillLock className=" text-xl" />
                </div>
                <input
                  type="password"
                  name="password"
                  autocomplete="current-password"
                  placeholder="Password"
                  id="id_reg"
                  required="yes"
                />
                <i className="far fa-eye" id="toggleReg"></i>
              </div>
              <input
                type="submit"
                value="Register"
                className="btn solid"
              />
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>You don't have an account?</h3>
              <p>Create your account right now to add a post and comments.</p>
              <button className="btn transparent" id="sign-up-btn">
                Register
              </button>
            </div>
            {/* <img src="img/log.svg" className="image" alt=""/> */}
          </div>

          <div className="panel right-panel">
            <div className="content">
              <h3>Already have an account?</h3>
              <p>
                Login to see your posts and post your new comments or posts.
              </p>
              <button className="btn transparent" id="sign-in-btn">
                Sign in
              </button>
            </div>
            {/* <img src="img/register.svg" className="image" alt=""/> */}
          </div>
        </div>
      </div>
    </>
  );
}
