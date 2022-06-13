import React,{ useState } from "react";

import "font-awesome/css/font-awesome.min.css";

import "./Auth.css";
const Login = () => {
  const [isPwsVisible, setIsPwdVisible]=useState(false)
  const InvisibleSvg = (
    <svg
    onClick={()=>{setIsPwdVisible(true)}}
      class="h-6 w-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
      ></path>
    </svg>
  );
  const visibleSvg = (
    <svg
     onClick={()=>{setIsPwdVisible(false)}}
      class="h-6 w-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      ></path>
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      ></path>
    </svg>
  );
  return (
    <React.Fragment>
      <section className="container ">
        <div className="flex justify-center items-center mt-12">
          <form className="form_card">
            <div className="card_header">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"
                ></path>
              </svg>
              <h1 className="form_heading">Login</h1>
            </div>

            <div className="field">
              <label className="form_label" htmlFor="username">
                Eamil
              </label>
              <input
                className="form_input"
                name="Eamil"
                type="text"
                placeholder="Eamil"
              />
            </div>
            <div className="field">
              <label className="form_label" htmlFor="password">
                Password
              </label>

              <div>
                <input
                  className="form_input"
                  name="user_password"
                  type={isPwsVisible?"text":"password"}
                  placeholder="Password"
                />
                <div className="flex justify-end relative bottom-7 h-0 cursor-pointer">
                  {isPwsVisible?visibleSvg:InvisibleSvg}
                </div>
              </div>
            </div>

            <div className="field">
              <button className="auth_btn">Login</button>
            </div>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Login;
