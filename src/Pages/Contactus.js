import React, { useState } from "react";
import mapimg from "../Assets/Contactus/mapimg.svg";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import insta from "../Assets/Contactus/insta.svg";
import facebook from "../Assets/Contactus/facebook.svg";
import linkdin from "../Assets/Contactus/linkdin.svg";
import twitter from "../Assets/Contactus/twitter.svg";
import { IoIosCloseCircle } from "react-icons/io";
import india from "../Assets/Contactus/india.svg";
const Contactus = () => {
  const [Contactusform, setcontactusform] = useState(false);
  return (
    <>
      {Contactusform ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-5xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[600px]   bg-[white] outline-none focus:outline-none">
                <span
                  onClick={() => setcontactusform(false)}
                  className="cursor-pointer flex justify-end pt-5 pr-5"
                >
                  <IoIosCloseCircle size={30} />
                </span>
                <div className="flex items-center justify-center pb-5 border-b border-solid border-blueGray-200 rounded-t">
                  <div className="flex flex-col">
                    <span className="text-2xl text-center font-semibold ">
                      Drop us a query
                    </span>
                    <span>We will get back to you within 24 hours </span>
                  </div>
                </div>
                <hr style={{ color: "#A0A0A0" }} />
                <div className="p-5 flex justify-center flex-col items-center gap-5">
                  <div>
                    <label>Mobile Number</label>
                    <br />
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-[90px] h-[62px] border flex justify-center items-center gap-1 rounded-2xl">
                        <img src={india} alt="" /> +91
                      </div>
                      <input
                        className=" w-[400px] h-[62px] border rounded-2xl placeholder:pl-5"
                        placeholder="999999"
                      />
                    </div>
                  </div>
                  <div>
                    <label>Email address</label>
                    <br />
                    <input
                      className=" mt-2 w-[500px] h-[62px] border rounded-2xl placeholder:pl-5"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <label>How we can help you?</label>
                    <br />
                    <textarea
                      className="w-[500px] mt-2  h-[100px] border rounded-2xl placeholder:pl-5"
                      placeholder="Type a message..."
                    />
                  </div>
                  <div>
                    <button className="w-[500px] h-[62px] rounded-lg bg-[#FFC10E]">
                      Submit query
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div className="flex justify-center flex-col items-center">
        <div className="text-[#FFC10E]">Contactus</div>
        <div className="font-semibold text-[36px]">
          We’d love to hear from you
        </div>
        <div className="text-[#4F4A3D]">
          We are located in <span className="font-semibold"> India</span> and
          functional across the world
        </div>
        <div className="text-[#4F4A3D]">Many more places coming soon..!</div>
        <div className="mt-5">
          <img src={mapimg} alt="" />
        </div>

        <div className="mt-5 flex ">
          <div className="w-[240px] flex flex-col gap-2">
            <div className="flex  flex-col items-center">
              <CiLocationOn size={25} />
              <span className="text-[28px] font-semibold">Find us</span>
            </div>
            <div className="text-[#FFC10E] text-[16px] text-center ">
              We are located here to help
            </div>
            <div className="text-[#4F4A3D] text-center">
              Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
              Bangalore-560016
            </div>
          </div>
          <div className="w-[240px] flex flex-col gap-2">
            <div className="flex  flex-col items-center">
              <CiMail size={25} />
              <span className="text-[28px] font-semibold">Write to us</span>
            </div>
            <div className="text-[#FFC10E] text-[16px] text-center ">
              on any of the given email Ids
            </div>
            <div className="text-[#4F4A3D] text-center">
              jd123@jdtravels.in jd123@jdtravels.in jd123@jdtravels.in
            </div>
          </div>
          <div className="w-[240px] flex flex-col gap-2">
            <div className="flex  flex-col items-center">
              <MdOutlineLocalPhone size={25} />
              <span className="text-[28px] font-semibold">Phone</span>
            </div>
            <div className="text-[#FFC10E] text-[16px] text-center ">
              Give a call to our friendly team
            </div>
            <div className="text-[#4F4A3D] text-center flex flex-col">
              <span>+91 76767 67611</span>
              <span>+91 76767 67611</span>
              <span>+91 76767 67611</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <button
            className="w-[304px] h-[61px] bg-[#FFC10E] font-semibold text-[18px]  rounded-lg flex justify-center items-center"
            onClick={() => setcontactusform(true)}
          >
            have a query? Ask us
          </button>
        </div>
        <div className="mt-5">Follow us, so that you never miss an offer</div>
        <div className="mt-5 flex gap-4 pb-10">
          <img src={insta} alt="" />
          <img src={facebook} alt="" />
          <img src={linkdin} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>
    </>
  );
};

export default Contactus;
