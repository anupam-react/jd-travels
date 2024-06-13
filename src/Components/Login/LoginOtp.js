import React from "react";
import loginbg from "../../Assets/Login/loginbg.svg";
import Google from "../../Assets/Login/google.svg";
import logo from "../../Assets/logo.svg";
import { FiEdit } from "react-icons/fi";
const LoginOtp = () => {
  return (
    <div className="bg-[#DFDFDF] h-[100vh] flex justify-center items-center pl-5 pr-5">
      <div className="relative">
        <img src={loginbg} alt="" className="z-40" />
        <img
          src={logo}
          alt=""
          className="z-50 absolute top-[10rem] left-[20rem]"
        />
      </div>

      <div className="bg-white h-[800px] flex flex-col justify-around rounded-xl w-[700px] p-5">
        <div>
          <div className="text-[32px] font-semibold text-center">Login</div>
          <hr className=" mt-5" />
        </div>
        <div className="p-5   flex justify-center flex-col items-center gap-5">
          <div>
            <label className="flex items-center gap-1">
              Enter OTP sent to{" "}
              <span className="font-semibold">99999 9999</span>{" "}
              <FiEdit style={{ color: "#FFC10E" }} />
            </label>
            <br />
            <div className="mt-2 flex gap-10">
              <div className="w-[50px] h-[50px] rounded-lg border flex justify-center items-center">
                *
              </div>
              <div className="w-[50px] h-[50px] rounded-lg border flex justify-center items-center">
                *
              </div>
              <div className="w-[50px] h-[50px] rounded-lg border flex justify-center items-center">
                *
              </div>
              <div className="w-[50px] h-[50px] rounded-lg border flex justify-center items-center">
                *
              </div>
              <div className="w-[50px] h-[50px] rounded-lg border flex justify-center items-center">
                *
              </div>
              <div className="w-[50px] h-[50px] rounded-lg border flex justify-center items-center">
                *
              </div>
            </div>
          </div>

          <div className="mt-5">
            <button className="w-[500px] h-[62px] rounded-lg bg-[#FFC10E]">
              Log Me In
            </button>
          </div>
        </div>

        <div className="text-[12px] text-center">
          By proceeding you agree to JD Travels Privacy Policy. User Agreement
          and T&Cs
        </div>
      </div>
    </div>
  );
};

export default LoginOtp;
