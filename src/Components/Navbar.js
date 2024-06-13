import React, { useEffect, useRef, useState } from "react";
import logo from "../Assets/logo.svg";
import { GrLanguage } from "react-icons/gr";
import { IoIosCloseCircle, IoIosNotificationsOutline } from "react-icons/io";
import profile from "../Assets/Navbar/profile.svg";
import { Link } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";

const Navbar = () => {
  const [support, setSupport] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isnotification, setIsnotification] = useState(false);
  const [isLanguage, setisLanguage] = useState(false);

  const popupRef = useRef(null);
  const languageRef = useRef(null);
  const notificationRef = useRef(null);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const togglenotification = () => {
    setIsnotification(!isnotification);
  };
  const togglelanguage = () => {
    setisLanguage(!isLanguage);
  };

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        toggleDropdown();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, toggleDropdown]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        togglelanguage();
      }
    };

    if (isLanguage) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguage, togglelanguage]);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        togglenotification();
      }
    };

    if (isnotification) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isnotification, togglenotification]);






  return (
    <>

      {support ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-5xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[600px]   bg-[white] outline-none focus:outline-none">
                <span
                  onClick={() => setSupport(false)}
                  className="cursor-pointer flex justify-end pt-5 pr-5"
                >
                  <IoIosCloseCircle size={30} />
                </span>
                <div className="flex items-center justify-center pb-5 border-b border-solid border-blueGray-200 rounded-t">
                  <div className="flex flex-col">
                    <span className="text-2xl text-center font-semibold ">
                      Support
                    </span>
                    <span>We will get back to you within 24 hours </span>
                  </div>
                </div>
                <hr style={{ color: "#A0A0A0" }} />
                <div className="p-5 flex justify-center flex-col items-center gap-5">
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
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div className="flex justify-between">
        <Link to="/">
          <div>
            <img src={logo} alt="logo" />
          </div>{" "}
        </Link>

        <div className="flex items-center gap-4">
          <div onClick={() => setSupport(true)} className="cursor-pointer">
            Support
          </div>
          <div
            className="flex gap-2 items-center cursor-pointer"
            onClick={togglelanguage}
          >
            <GrLanguage />
            Language
          </div>
          {isLanguage && (
            <div ref={languageRef} className="absolute top-[5rem] ml-[-100px] w-[333px] h-[149px] p-2 bg-white rounded-md box-shadow flex flex-wrap justify-between z-10">
              <div className="w-[92px] h-[31px] rounded-lg flex gap-1 justify-center items-center hover:bg-[#FFC10E4D]">
                <span className="font-semibold">EN</span> <span>English</span>
              </div>
              <div className="w-[92px] h-[31px] rounded-lg flex gap-1 justify-center items-center hover:bg-[#FFC10E4D]">
                <span className="font-semibold">EN</span> <span>English</span>
              </div>
              <div className="w-[92px] h-[31px] rounded-lg flex gap-1 justify-center items-center hover:bg-[#FFC10E4D]">
                <span className="font-semibold">EN</span> <span>English</span>
              </div>
              <div className="w-[92px] h-[31px] rounded-lg flex gap-1 justify-center items-center hover:bg-[#FFC10E4D]">
                <span className="font-semibold">EN</span> <span>English</span>
              </div>
              <div className="w-[92px] h-[31px] rounded-lg flex gap-1 justify-center items-center hover:bg-[#FFC10E4D]">
                <span className="font-semibold">EN</span> <span>English</span>
              </div>
              <div className="w-[92px] h-[31px] rounded-lg flex gap-1 justify-center items-center hover:bg-[#FFC10E4D]">
                <span className="font-semibold">EN</span> <span>English</span>
              </div>
              <div className="w-[92px] h-[31px] rounded-lg flex gap-1 justify-center items-center hover:bg-[#FFC10E4D]">
                <span className="font-semibold">EN</span> <span>English</span>
              </div>
              <div className="w-[92px] h-[31px] rounded-lg flex gap-1 justify-center items-center hover:bg-[#FFC10E4D]">
                <span className="font-semibold">EN</span> <span>English</span>
              </div>
              <div className="w-[92px] h-[31px] rounded-lg flex gap-1 justify-center items-center hover:bg-[#FFC10E4D]">
                <span className="font-semibold">EN</span> <span>English</span>
              </div>
            </div>
          )}
          <div>
            <IoIosNotificationsOutline
              size={24}
              className="cursor-pointer"
              onClick={togglenotification}
            />
            {isnotification && (
              <div  ref={notificationRef} className="absolute mt-2 ml-[-100px] w-[220px] bg-white rounded-md box-shadow z-10">
                <ul className="flex flex-col gap-2">
                  <li className="p-2 hover:bg-[#A8FF9A2E]  cursor-pointer flex flex-col">
                    <span className="font-semibold text-[14px] uppercase">
                      Blr-Chd
                    </span>

                    <span className="text-[#00000085] text-[10px]">
                      Your trip is booked and your flight is on schedule
                    </span>
                  </li>

                  <li className="p-2 hover:bg-[#A8FF9A2E]  cursor-pointer flex flex-col">
                    <span className="font-semibold text-[14px] uppercase">
                      Blr-Chd
                    </span>
                    <span className="text-[#00000085] text-[10px]">
                      Your trip is booked and your flight is on schedule
                    </span>
                  </li>

                  <li className="p-2 hover:bg-[#A8FF9A2E]  cursor-pointer flex flex-col">
                    <span className="font-semibold text-[14px]">
                      Profile incomplete
                    </span>
                    <span className="text-[#00000085] text-[10px]">
                      Complete your profile for seamless booking and tracking
                    </span>
                  </li>

                  <li className="p-2 text-[12px]  text-[#F00000] cursor-pointer flex justify-end">
                    Clear All
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <img
              src={profile}
              alt="profile"
              className="cursor-pointer"
              onClick={toggleDropdown}
            />
            {isOpen && (
              <div ref={popupRef} className="absolute mt-2 ml-[-100px] w-[220px] bg-white rounded-md box-shadow z-10">
                <ul className="flex flex-col gap-2">
                  <Link to="/profile">
                    <li className="p-2 hover:bg-[#A8FF9A2E]  cursor-pointer flex flex-col">
                      <span className="font-semibold text-[14px]">Profile</span>

                      <span className="text-[#00000085] text-[10px]">
                        Manage your profile, Login details and password
                      </span>
                    </li>
                  </Link>
                  <Link to="/Managebooking">
                    <li className="p-2 hover:bg-[#A8FF9A2E]  cursor-pointer flex flex-col">
                      <span className="font-semibold text-[14px]">
                        Manage Booking
                      </span>
                      <span className="text-[#00000085] text-[10px]">
                        See your bookings, Print E-Ticket, check status, etc
                      </span>
                    </li>
                  </Link>
                  <Link to="/Jdwallet">
                    <li className="p-2 hover:bg-[#A8FF9A2E]  cursor-pointer flex flex-col">
                      <span className="font-semibold text-[14px] flex items-center gap-1">
                        JD Wallet{" "}
                        <div className="w-[36px] h-[25px] bg-[#A8FF9A] flex justify-center items-center rounded-lg">
                          {" "}
                          ₹0
                        </div>
                      </span>
                      <span className="text-[#00000085] text-[10px]">
                        Use your wallet money to avail greater discounts
                      </span>
                    </li>
                  </Link>
                  <li className="p-2 text-[12px] hover:bg-[#A8FF9A2E] text-[#F00000] cursor-pointer flex items-center gap-2">
                    Log out <IoLogOutOutline />
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
