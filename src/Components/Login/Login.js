import loginbg from "../../Assets/Login/loginbg.svg";
import Google from "../../Assets/Login/google.svg";
import logo from "../../Assets/logo.svg";
import { Link } from "react-router-dom";
const Login = () => {
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

      <div className="bg-white h-[800px] flex flex-col justify-around  rounded-xl w-[700px] p-5">
        <div className="text-[32px] font-semibold text-center">Login</div>
        <hr className="" />
        <div className="p-5 mt-20 flex justify-center flex-col items-center gap-5">
          <div>
            <label>Enter Email or Mobile Number</label>
            <br />
            <input
              className=" mt-2 w-[500px] h-[62px] border rounded-2xl placeholder:pl-5"
              placeholder="Enter Email or Mobile Number"
            />
          </div>

          <div className="mt-10">
            <Link to="/LoginOtp">
              <button className="w-[500px] h-[62px] rounded-lg bg-[#FFC10E]">
                Continue
              </button>
            </Link>
          </div>

          <div className="flex items-center mt-5 gap-2">
            <hr className=" w-[150px]" />
            <div>or Login/Signup with</div>
            <hr className=" w-[150px]" />
          </div>
          <div className="mt-10">
            <img src={Google} alt="" />
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

export default Login;
