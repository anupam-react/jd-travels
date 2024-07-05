import React from "react";
import googleplay from "../Assets/appstore.svg";
import payment from "../Assets/payment.svg";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import appstore from "../Assets/appstore.svg";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="bg-[#000000] font-sans dark:bg-gray-900  ">
      <div class="container p-2  mx-auto">
        <div className="flex justify-between mx-[100px]">
        <div className="flex justify-center mt-10 gap-[150px] flex-1">
          <div>
            <p className="font-semibold text-white  text-xl">Company</p>

            <div class="flex flex-col items-start mt-5 space-y-2">
              <Link to="/Aboutus">
                <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500 ">
                  About JD Travels
                </p>
              </Link>
              <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500 ">
                Careers
              </p>
              <Link to="/Contactus">
                <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500 ">
                  Contact Us
                </p>
              </Link>
              <Link to="/Privacypolicy">
                <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500 ">
                  Policies
                </p>
              </Link>
            </div>
          </div>
          <div>
            <p className="font-semibold text-white  text-xl">Explore</p>

            <div class="flex flex-col items-start mt-5 space-y-2">
              <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500 ">
                Airport Directory
              </p>
              <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500 ">
                Flights Schedules
              </p>
              <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500 ">
                Hotel Chains
              </p>
            </div>
          </div>
          <div>
            <p className="font-semibold text-white  text-xl">Download</p>

            <div class="flex flex-col items-start mt-5 space-y-2">
              <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500 ">
              JD Travels (iOS)
              </p>
              <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500 ">
              JD Travels (Android)
              </p>
             
            </div>
          </div>
      
        </div>

        </div>
<div className="mx-[100px]">

        <hr
          className="my-6 border-gray-200 md:my-8 dark:border-gray-700 
      "
        />

        <div className=" flex items-center text-white pb-4 justify-end gap-5 sm:text-center md:text-center md:text-lg">
          <span className="Montserrat">JD Travels.PVT.LTD</span>
          <div className="flex gap-2">
            <img src="../SM.png" alt="" />
            <img src="../SM (1).png" alt="" />
            <img src="../SM (2).png" alt="" />
            <img src="../SM (3).png" alt="" />
       
          </div>
        </div>
</div>
      </div>
    </footer>
  );
};

export default Footer;
