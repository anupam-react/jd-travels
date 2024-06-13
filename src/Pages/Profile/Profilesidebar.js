import React from "react";

import { FaRegSmile } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";
const Profilesidebar = () => {
  return (
    <div className="w-[320px]  h-[600px] box-shadow pb-10 pt-5 bg-[white] rounded-xl pl-5 pr-5">
      <div>
        <div className="flex flex-col items-center ">
          <div className="w-[113px] h-[113px] bg-[#FFC10E] relative rounded-xl">
            <div className="absolute bottom-0 left-[2.5rem] flex justify-center items-center rounded-t-xl bg-white h-[32px] w-[32px]">
              <MdOutlineEdit width={20} height={20} />
            </div>
          </div>
          <div className="font-semibold text-[28px]">Waldo Smith</div>
          <div className="text-[14px]">PERSONAL PROFILE</div>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <div className="w-[280px] h-[52px] rounded-2xl bg-[#F9EBC3] flex  items-center gap-2 pl-4 text-[18px]">
          <FaRegSmile style={{ color: "#DFAB13" }} /> Profile
        </div>
        <Link to="/Managebooking">
          <div className="w-[280px] h-[52px] rounded-2xl  bg-[#EFEFEF] flex  items-center gap-2 pl-4 text-[18px]">
            <FaRegSmile style={{ color: "#DFAB13" }} /> Manage Bookings
          </div>
        </Link>
        <Link to="/Jdwallet">
          <div className="w-[280px] h-[52px] rounded-2xl bg-[#EFEFEF] flex  items-center gap-2 pl-4 text-[18px]">
            <FaRegSmile style={{ color: "#DFAB13" }} /> JD Wallet-Ledger
          </div>
        </Link>
        <div className="w-[280px] h-[52px] rounded-2xl bg-[#EFEFEF] flex  items-center gap-2 pl-4 text-[18px]">
          <FaRegSmile style={{ color: "#DFAB13" }} /> Add Payment
        </div>
        <Link to="/Gstdetails">
          <div className="w-[280px] h-[52px] rounded-2xl bg-[#EFEFEF] flex  items-center gap-2 pl-4 text-[18px]">
            <FaRegSmile style={{ color: "#DFAB13" }} /> GST Details
          </div>
        </Link>
        <div className="w-[280px] h-[52px] rounded-2xl bg-[#EFEFEF] flex  items-center gap-2 pl-4 text-[18px]">
          <FaRegSmile style={{ color: "#DFAB13" }} /> Logout
        </div>
      </div>
    </div>
  );
};

export default Profilesidebar;
