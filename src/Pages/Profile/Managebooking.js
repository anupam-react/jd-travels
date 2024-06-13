import React, { useState } from "react";

import Profilesidebar from "./Profilesidebar";
import upcoming from "../../Assets/Managebooking/upcoming.svg";
import Cancelled from "../../Assets/Managebooking/cancelled.svg";
import Completed from "../../Assets/Managebooking/completed.svg";
import Pending from "../../Assets/Managebooking/pending.svg";
import plane from "../../Assets/Managebooking/plane.svg";
import twoway from "../../Assets/Managebooking/twoway.svg";
import { LuDot } from "react-icons/lu";
import { PiCopySimpleLight } from "react-icons/pi";
import flight from "../../Assets/Managebooking/flight.svg";
import hotel from "../../Assets/Managebooking/hotel.svg";
import child from "../../Assets/Managebooking/childhead.svg";
import indigo from "../../Assets/Managebooking/indigofight.svg";
import airasia from "../../Assets/Managebooking/airasia.svg";
import { CiSaveDown2 } from "react-icons/ci";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { FaGreaterThan } from "react-icons/fa6";
import right from "../../Assets/Managebooking/right.svg";
import wrong from "../../Assets/Managebooking/wrong.svg";
import { Link } from "react-router-dom";
const Managebooking = () => {
  const [selectedDiv, setSelectedDiv] = useState("Upcoming");
  return (
    <>
      <div className="pt-10 h-[1500px]">
        <div className="  w-[80%px]  pb-10 mb-10 ">
          <div className="flex  justify-center gap-5 ">
            <Profilesidebar />
            <div className="w-[70%]  box-shadow rounded-xl ">
              <div className="flex gap-2">
                <div
                  className={`cursor-pointer ${
                    selectedDiv === "Upcoming"
                      ? " border-b-2 border-[#FFC10E] w-[200px] h-[72px] gap-2 flex justify-center items-center"
                      : "w-[242px] h-[72px] gap-2 flex justify-center items-center"
                  }`}
                  onClick={() => setSelectedDiv("Upcoming")}
                >
                  <img src={upcoming} alt="" className="w-[29px] h-[29px]" />
                  <span className="font-bold text-[#4F4A3D] text-[24px]">
                    Upcoming
                  </span>
                </div>

                <div
                  className={`cursor-pointer ${
                    selectedDiv === "Cancelled"
                      ? " border-b-2 border-[#FFC10E] w-[242px] h-[72px] gap-2 flex justify-center items-center"
                      : "w-[242px] h-[72px] gap-2 flex justify-center items-center"
                  }`}
                  onClick={() => setSelectedDiv("Cancelled")}
                >
                  <img src={Cancelled} alt="" className="w-[36px] h-[36px]" />
                  <span className="font-semibold text-[#4F4A3D] text-[24px]">
                    Cancelled
                  </span>
                </div>
                <div
                  className={`cursor-pointer ${
                    selectedDiv === "Completed"
                      ? " border-b-2 border-[#FFC10E] w-[242px] h-[72px] gap-2 flex justify-center items-center"
                      : "w-[242px] h-[72px] gap-2 flex justify-center items-center"
                  }`}
                  onClick={() => setSelectedDiv("Completed")}
                >
                  <img src={Completed} alt="" className="w-[36px] h-[36px]" />
                  <span className="font-semibold text-[#4F4A3D] text-[24px]">
                    Completed
                  </span>
                </div>
                <div
                  className={`cursor-pointer ${
                    selectedDiv === "Pending"
                      ? " border-b-2 border-[#FFC10E] w-[242px] h-[72px] gap-2 flex justify-center items-center"
                      : "w-[242px] h-[72px] gap-2 flex justify-center items-center"
                  }`}
                  onClick={() => setSelectedDiv("Pending")}
                >
                  <img src={Pending} alt="" className="w-[36px] h-[36px]" />
                  <span className="font-semibold text-[#4F4A3D] text-[24px]">
                    Pending
                  </span>
                </div>
              </div>
              {selectedDiv && (
                <div>
                  {selectedDiv === "Upcoming" && (
                    <div className="mt-5">
                      <div className="flex flex-col p-5 gap-10">
                        <div className=" box-shadow rounded-xl relative ">
                          <img
                            src={plane}
                            alt=""
                            className="absolute -top-6 left-4"
                          />
                          <div className="flex items-center justify-between p-5 pt-10">
                            <div>
                              <div className="flex gap-1 font-semibold">
                                {" "}
                                Bengaluru
                                <img src={twoway} alt="" /> Jaipur
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="text-[#A1A1A1] text-[14px]">
                                  Completed
                                </span>
                                <LuDot style={{ color: "#A1A1A1" }} />
                                <span className="text-[#A1A1A1] text-[14px]">
                                  Round Trip Flight
                                </span>
                                <LuDot style={{ color: "#A1A1A1" }} />
                                <span className="text-[#A1A1A1] flex items-center gap-1 text-[14px]">
                                  Booking ID - NF2EYUZFZ3EUDTIV8153{" "}
                                  <PiCopySimpleLight />
                                </span>
                              </div>
                            </div>

                            <div>
                              <Link to="/Flightbookingconfirmed">
                                <button className="w-[271px] h-[47px] rounded-xl bg-[#FFC10E]">
                                  View & manage booking
                                </button>
                              </Link>
                            </div>
                          </div>
                          <hr className="" />
                          <div className="p-5">
                            <div>
                              <div className="text-[14px] flex gap-1">
                                <span className="uppercase">
                                  {" "}
                                  Departure flight
                                </span>

                                <span className="text-[#A1A1A1] text-[14px]">
                                  Fri, 11 Feb
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-10 items-center">
                              <div>
                                <span>11, Feb `22 09:50 PM</span>
                                <div>
                                  <span className="font-semibold">BLR </span>-
                                  Bengaluru{" "}
                                  <span className="text-[#EEB615]">
                                    Terminal{" "}
                                  </span>
                                  1
                                </div>
                              </div>
                              <div>
                                <span>11, Feb `22 09:50 PM</span>
                                <div>
                                  <span className="font-semibold">BLR </span>-
                                  Bengaluru{" "}
                                  <span className="text-[#EEB615]">
                                    Terminal{" "}
                                  </span>
                                  2
                                </div>
                              </div>
                              <div className="flex flex-col">
                                <span className="flex items-center gap-1">
                                  {" "}
                                  <img src={flight} alt="" /> Indigo 6E 6273
                                </span>
                                <span className="flex items-center gap-1">
                                  {" "}
                                  <img src={child} alt="" /> Sai prithvi +1
                                </span>
                              </div>
                              <div>
                                <img src={indigo} alt="" />
                              </div>
                            </div>
                            <div className="mt-5">
                              <div className="text-[14px] flex gap-1">
                                <span className="uppercase">
                                  {" "}
                                  Return flight
                                </span>

                                <span className="text-[#A1A1A1] text-[14px]">
                                  Fri, 11 Feb
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-10 items-center">
                              <div>
                                <span>11, Feb `22 09:50 PM</span>
                                <div>
                                  <span className="font-semibold">BLR </span>-
                                  Bengaluru{" "}
                                  <span className="text-[#EEB615]">
                                    Terminal{" "}
                                  </span>
                                  1
                                </div>
                              </div>
                              <div>
                                <span>11, Feb `22 09:50 PM</span>
                                <div>
                                  <span className="font-semibold">BLR </span>-
                                  Bengaluru{" "}
                                  <span className="text-[#EEB615]">
                                    Terminal{" "}
                                  </span>
                                  2
                                </div>
                              </div>
                              <div className="flex flex-col">
                                <span className="flex items-center gap-1">
                                  {" "}
                                  <img src={flight} alt="" /> Indigo 6E 6273
                                </span>
                                <span className="flex items-center gap-1">
                                  {" "}
                                  <img src={child} alt="" /> Sai prithvi +1
                                </span>
                              </div>
                              <div>
                                <img src={airasia} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className=" box-shadow rounded-xl relative ">
                          <img
                            src={plane}
                            alt=""
                            className="absolute -top-6 left-4"
                          />
                          <div className="flex items-center justify-between p-5 pt-10">
                            <div>
                              <div className="flex gap-1 font-semibold">
                                {" "}
                                Bengaluru
                                <img src={twoway} alt="" /> Jaipur
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="text-[#A1A1A1] text-[14px]">
                                  Completed
                                </span>
                                <LuDot style={{ color: "#A1A1A1" }} />
                                <span className="text-[#A1A1A1] text-[14px]">
                                  Round Trip Flight
                                </span>
                                <LuDot style={{ color: "#A1A1A1" }} />
                                <span className="text-[#A1A1A1] flex items-center gap-1 text-[14px]">
                                  Booking ID - NF2EYUZFZ3EUDTIV8153{" "}
                                  <PiCopySimpleLight />
                                </span>
                              </div>
                            </div>

                            <div>
                              <Link to="/Flightbookingconfirmed">
                                <button className="w-[271px] h-[47px] rounded-xl bg-[#FFC10E]">
                                  View & manage booking
                                </button>
                              </Link>
                            </div>
                          </div>
                          <hr className="" />
                          <div className="p-5">
                            <div>
                              <div className="text-[14px] flex gap-1">
                                <span className="uppercase">
                                  {" "}
                                  Departure flight
                                </span>

                                <span className="text-[#A1A1A1] text-[14px]">
                                  Fri, 11 Feb
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-10 items-center">
                              <div>
                                <span>11, Feb `22 09:50 PM</span>
                                <div>
                                  <span className="font-semibold">BLR </span>-
                                  Bengaluru{" "}
                                  <span className="text-[#EEB615]">
                                    Terminal{" "}
                                  </span>
                                  1
                                </div>
                              </div>
                              <div>
                                <span>11, Feb `22 09:50 PM</span>
                                <div>
                                  <span className="font-semibold">BLR </span>-
                                  Bengaluru{" "}
                                  <span className="text-[#EEB615]">
                                    Terminal{" "}
                                  </span>
                                  2
                                </div>
                              </div>
                              <div className="flex flex-col">
                                <span className="flex items-center gap-1">
                                  {" "}
                                  <img src={flight} alt="" /> Indigo 6E 6273
                                </span>
                                <span className="flex items-center gap-1">
                                  {" "}
                                  <img src={child} alt="" /> Sai prithvi +1
                                </span>
                              </div>
                              <div>
                                <img src={indigo} alt="" />
                              </div>
                            </div>
                            <div className="mt-5">
                              <div className="text-[14px] flex gap-1">
                                <span className="uppercase">
                                  {" "}
                                  Return flight
                                </span>

                                <span className="text-[#A1A1A1] text-[14px]">
                                  Fri, 11 Feb
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-10 items-center">
                              <div>
                                <span>11, Feb `22 09:50 PM</span>
                                <div>
                                  <span className="font-semibold">BLR </span>-
                                  Bengaluru{" "}
                                  <span className="text-[#EEB615]">
                                    Terminal{" "}
                                  </span>
                                  1
                                </div>
                              </div>
                              <div>
                                <span>11, Feb `22 09:50 PM</span>
                                <div>
                                  <span className="font-semibold">BLR </span>-
                                  Bengaluru{" "}
                                  <span className="text-[#EEB615]">
                                    Terminal{" "}
                                  </span>
                                  2
                                </div>
                              </div>
                              <div className="flex flex-col">
                                <span className="flex items-center gap-1">
                                  {" "}
                                  <img src={flight} alt="" /> Indigo 6E 6273
                                </span>
                                <span className="flex items-center gap-1">
                                  {" "}
                                  <img src={child} alt="" /> Sai prithvi +1
                                </span>
                              </div>
                              <div>
                                <img src={airasia} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className=" box-shadow rounded-xl relative ">
                          <img
                            src={hotel}
                            alt=""
                            className="absolute -top-6 left-4"
                          />
                          <div className="flex items-center justify-between p-5 pt-10">
                            <div>
                              <div className="flex gap-1 font-semibold">
                                Moustache Hostel Jaipur | Rooms & Dorms
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="text-[#A1A1A1] text-[14px]">
                                  Completed
                                </span>
                                <LuDot style={{ color: "#A1A1A1" }} />
                                <span className="text-[#A1A1A1] text-[14px]">
                                  Round Trip Flight
                                </span>
                                <LuDot style={{ color: "#A1A1A1" }} />
                                <span className="text-[#A1A1A1] flex items-center gap-1 text-[14px]">
                                  Booking ID - NF2EYUZFZ3EUDTIV8153{" "}
                                  <PiCopySimpleLight />
                                </span>
                              </div>
                            </div>

                            <div>
                              <button className="w-[271px] h-[47px] rounded-xl bg-[#FFC10E]">
                                View & manage booking
                              </button>
                            </div>
                          </div>
                          <hr className="" />
                          <div className="p-5">
                            <div className="flex gap-10 items-center">
                              <div className="flex flex-col">
                                <span className="text-[14px]">CHECK-IN</span>
                                <span>11, Feb `22 09:50 PM</span>
                                <span className="text-[#EEB615]">
                                  Check-in from 01:00 PM{" "}
                                </span>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[14px]">CHECK-OUT</span>
                                <span>11, Feb `22 09:50 PM</span>
                                <span className="text-[#EEB615]">
                                  Check-out at 11:00 AM
                                </span>
                              </div>
                              <div className="flex flex-col">
                                &nbsp;
                                <span className="flex items-center gap-1">
                                  {" "}
                                  <HiOutlineBuildingOffice /> 2 Room(s), 2
                                  night(s)
                                </span>
                                <span className="flex items-center gap-1">
                                  {" "}
                                  <img src={child} alt="" /> Sai prithvi +1
                                </span>
                              </div>

                              <div className="flex items-center gap-1">
                                <CiSaveDown2 />{" "}
                                <span className="text-[#FFC10E]">
                                  Download Voucher
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedDiv === "Cancelled" && (
                    <div className="mt-5">
                      <div className="flex flex-col p-5 gap-10">
                        <div className=" box-shadow rounded-xl relative ">
                          <img
                            src={plane}
                            alt=""
                            className="absolute -top-6 left-4"
                          />
                          <div className="flex items-center justify-between p-5 pt-10">
                            <div>
                              <div className="flex gap-1 font-bold">
                                {" "}
                                Bengaluru
                                <img src={twoway} alt="" /> Jaipur
                              </div>
                              <div className="flex items-center ">
                                <span className="text-[#D05555] text-[14px]">
                                  Cancelled on 14 Jul
                                </span>
                                <LuDot style={{ color: "#A1A1A1" }} />
                                <span className="text-[#A1A1A1] text-[14px]">
                                  Round Trip Flight
                                </span>
                                <LuDot style={{ color: "#A1A1A1" }} />
                                <span className="text-[#A1A1A1] flex items-center gap-1 text-[14px]">
                                  Booking ID - NF2EYUZFZ3EUDTIV8153{" "}
                                  <PiCopySimpleLight />
                                </span>
                              </div>
                              <div className="bg-[#FFD8D8] mt-2 text-[#D05555] flex justify-start rounded-lg  items-center pl-2 h-[37px]">
                                Your flight booking has been cancelled.
                              </div>
                            </div>

                            <div>
                              <Link to="/Cancelleddetailflight">
                                <button className="w-[150px] h-[47px] rounded-xl bg-[#FFC10E]">
                                  View
                                </button>
                              </Link>
                            </div>
                          </div>
                          <hr className="" />
                          <div className="p-5">
                            <div className="text-[14px] font-semibold">
                              Sorry, your booking was cancelled, no refund is
                              applicable after deduction.
                            </div>

                            <div className="flex items-center gap-2 mt-2">
                              <img src={right} alt="" />
                              <hr className="w-[390px] border-2" />
                              <img src={wrong} alt="" />
                            </div>

                            <div className="mt-2 flex justify-between w-[550px]">
                              <div className="flex flex-col">
                                <span className="text-[14px]">
                                  Booking cancelled
                                </span>
                                <span>14 Jul, 2022 | 14:15</span>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[14px]">
                                  No refund applicable
                                </span>
                                <span>14 Jul, 2022 | 14:15</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className=" box-shadow rounded-xl relative ">
                          <img
                            src={plane}
                            alt=""
                            className="absolute -top-6 left-4"
                          />
                          <div className="flex items-center justify-between p-5 pt-10">
                            <div>
                              <div className="flex gap-1 font-bold">
                                {" "}
                                Bengaluru
                                <img src={twoway} alt="" /> Jaipur
                              </div>
                              <div className="flex items-center ">
                                <span className="text-[#D05555] text-[14px]">
                                  Cancelled on 14 Jul
                                </span>
                                <LuDot style={{ color: "#A1A1A1" }} />
                                <span className="text-[#A1A1A1] text-[14px]">
                                  Round Trip Flight
                                </span>
                                <LuDot style={{ color: "#A1A1A1" }} />
                                <span className="text-[#A1A1A1] flex items-center gap-1 text-[14px]">
                                  Booking ID - NF2EYUZFZ3EUDTIV8153{" "}
                                  <PiCopySimpleLight />
                                </span>
                              </div>
                              <div className="bg-[#FFD8D8] mt-2 text-[#D05555]  rounded-lg  flex justify-start  items-center pl-2 h-[37px]">
                                Your flight booking has been cancelled.
                              </div>
                            </div>

                            <div>
                              <Link to="/Cancelleddetailflight">
                                <button className="w-[150px] h-[47px] rounded-xl bg-[#FFC10E]">
                                  View
                                </button>
                              </Link>
                            </div>
                          </div>
                          <hr className="" />
                          <div className="p-5">
                            <div className="text-[14px] font-semibold">
                              Sorry, your booking was cancelled, no refund is
                              applicable after deduction.
                            </div>

                            <div className="flex items-center gap-2 mt-2">
                              <img src={right} alt="" />
                              <hr className="w-[390px] border-2" />
                              <img src={wrong} alt="" />
                            </div>

                            <div className="mt-2 flex justify-between w-[550px]">
                              <div className="flex flex-col">
                                <span className="text-[14px]">
                                  Booking cancelled
                                </span>
                                <span>14 Jul, 2022 | 14:15</span>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[14px]">
                                  No refund applicable
                                </span>
                                <span>14 Jul, 2022 | 14:15</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedDiv === "Completed" && (
                    <div className="mt-5">
                      <div className="flex flex-col p-5 gap-10">
                        <div className=" box-shadow rounded-xl relative ">
                          <img
                            src={plane}
                            alt=""
                            className="absolute -top-6 left-4"
                          />
                          <div className="flex items-center justify-between p-5 pt-10">
                            <div>
                              <div className="flex gap-1 font-semibold">
                                {" "}
                                Bengaluru
                                <img src={twoway} alt="" /> Jaipur
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="text-[#A1A1A1] text-[14px]">
                                  Completed
                                </span>
                                <LuDot style={{ color: "#A1A1A1" }} />
                                <span className="text-[#A1A1A1] text-[14px]">
                                  Round Trip Flight
                                </span>
                                <LuDot style={{ color: "#A1A1A1" }} />
                                <span className="text-[#A1A1A1] flex items-center gap-1 text-[14px]">
                                  Booking ID - NF2EYUZFZ3EUDTIV8153{" "}
                                  <PiCopySimpleLight />
                                </span>
                              </div>
                            </div>

                            <div>
                              <Link to="/Fightbookingcompleted">
                                <button className="w-[150px] h-[47px] rounded-xl bg-[#FFC10E]">
                                  View
                                </button>
                              </Link>
                            </div>
                          </div>
                          <hr className="" />
                          <div className="p-5">
                            <div>
                              <div className="text-[14px] flex gap-1">
                                <span className="uppercase">
                                  {" "}
                                  Departure flight
                                </span>

                                <span className="text-[#A1A1A1] text-[14px]">
                                  Fri, 11 Feb
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-10 items-center">
                              <div>
                                <span>11, Feb `22 09:50 PM</span>
                                <div>
                                  <span className="font-semibold">BLR </span>-
                                  Bengaluru{" "}
                                  <span className="text-[#EEB615]">
                                    Terminal{" "}
                                  </span>
                                  1
                                </div>
                              </div>
                              <div>
                                <span>11, Feb `22 09:50 PM</span>
                                <div>
                                  <span className="font-semibold">BLR </span>-
                                  Bengaluru{" "}
                                  <span className="text-[#EEB615]">
                                    Terminal{" "}
                                  </span>
                                  2
                                </div>
                              </div>
                              <div className="flex flex-col">
                                <span className="flex items-center gap-1">
                                  {" "}
                                  <img src={flight} alt="" /> Indigo 6E 6273
                                </span>
                                <span className="flex items-center gap-1">
                                  {" "}
                                  <img src={child} alt="" /> Sai prithvi +1
                                </span>
                              </div>
                              <div>
                                <img src={indigo} alt="" />
                              </div>
                              <div className="flex items-center">
                                <img
                                  src={Cancelled}
                                  alt=""
                                  className="w-[10px] h-[10px]"
                                />
                                <span className="text-[#FFC10E] text-[14px]">
                                  Raise a Claim
                                </span>
                              </div>
                            </div>
                            <div className="mt-5">
                              <div className="text-[14px] flex gap-1">
                                <span className="uppercase">
                                  {" "}
                                  Return flight
                                </span>

                                <span className="text-[#A1A1A1] text-[14px]">
                                  Fri, 11 Feb
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-10 items-center">
                              <div>
                                <span>11, Feb `22 09:50 PM</span>
                                <div>
                                  <span className="font-semibold">BLR </span>-
                                  Bengaluru{" "}
                                  <span className="text-[#EEB615]">
                                    Terminal{" "}
                                  </span>
                                  1
                                </div>
                              </div>
                              <div>
                                <span>11, Feb `22 09:50 PM</span>
                                <div>
                                  <span className="font-semibold">BLR </span>-
                                  Bengaluru{" "}
                                  <span className="text-[#EEB615]">
                                    Terminal{" "}
                                  </span>
                                  2
                                </div>
                              </div>
                              <div className="flex flex-col">
                                <span className="flex items-center gap-1">
                                  {" "}
                                  <img src={flight} alt="" /> Indigo 6E 6273
                                </span>
                                <span className="flex items-center gap-1">
                                  {" "}
                                  <img src={child} alt="" /> Sai prithvi +1
                                </span>
                              </div>
                              <div>
                                <img src={airasia} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedDiv === "Pending" && (
                    <div className="mt-5">
                      <div className="flex flex-col p-5 gap-10">
                        <div className=" box-shadow rounded-xl relative ">
                          <img
                            src={plane}
                            alt=""
                            className="absolute -top-6 left-4"
                          />
                          <div className="flex items-center justify-between p-5 pt-10">
                            <div>
                              <div className="flex gap-1 font-semibold">
                                {" "}
                                Bengaluru
                                <img src={twoway} alt="" /> Jaipur
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="text-[#A1A1A1] text-[14px]">
                                  Completed
                                </span>
                                <LuDot style={{ color: "#A1A1A1" }} />
                                <span className="text-[#A1A1A1] text-[14px]">
                                  Round Trip Flight
                                </span>
                                <LuDot style={{ color: "#A1A1A1" }} />
                                <span className="text-[#A1A1A1] flex items-center gap-1 text-[14px]">
                                  Booking ID - NF2EYUZFZ3EUDTIV8153{" "}
                                  <PiCopySimpleLight />
                                </span>
                              </div>
                            </div>

                            <div>
                              <button className="w-[150px] h-[47px] rounded-xl bg-[#FFC10E]">
                                View
                              </button>
                            </div>
                          </div>
                          <hr className="" />
                          <div className="p-5">
                            <div>
                              <div className="text-[14px] flex gap-1">
                                <span className="uppercase">
                                  {" "}
                                  Departure flight
                                </span>

                                <span className="text-[#A1A1A1] text-[14px]">
                                  Fri, 11 Feb
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-10 items-center">
                              <div>
                                <span>11, Feb `22 09:50 PM</span>
                                <div>
                                  <span className="font-semibold">BLR </span>-
                                  Bengaluru{" "}
                                  <span className="text-[#EEB615]">
                                    Terminal{" "}
                                  </span>
                                  1
                                </div>
                              </div>
                              <div>
                                <span>11, Feb `22 09:50 PM</span>
                                <div>
                                  <span className="font-semibold">BLR </span>-
                                  Bengaluru{" "}
                                  <span className="text-[#EEB615]">
                                    Terminal{" "}
                                  </span>
                                  2
                                </div>
                              </div>
                              <div className="flex flex-col">
                                <span className="flex items-center gap-1">
                                  {" "}
                                  <img src={flight} alt="" /> Indigo 6E 6273
                                </span>
                                <span className="flex items-center gap-1">
                                  {" "}
                                  <img src={child} alt="" /> Sai prithvi +1
                                </span>
                              </div>
                              <div>
                                <img src={indigo} alt="" />
                              </div>
                              <div className="flex items-center">
                                <img
                                  src={Cancelled}
                                  alt=""
                                  className="w-[10px] h-[10px]"
                                />
                                <span className="text-[#FFC10E] text-[14px]">
                                  Raise a Claim
                                </span>
                              </div>
                            </div>
                            <div className="mt-5">
                              <div className="text-[14px] flex gap-1">
                                <span className="uppercase">
                                  {" "}
                                  Return flight
                                </span>

                                <span className="text-[#A1A1A1] text-[14px]">
                                  Fri, 11 Feb
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-10 items-center">
                              <div>
                                <span>11, Feb `22 09:50 PM</span>
                                <div>
                                  <span className="font-semibold">BLR </span>-
                                  Bengaluru{" "}
                                  <span className="text-[#EEB615]">
                                    Terminal{" "}
                                  </span>
                                  1
                                </div>
                              </div>
                              <div>
                                <span>11, Feb `22 09:50 PM</span>
                                <div>
                                  <span className="font-semibold">BLR </span>-
                                  Bengaluru{" "}
                                  <span className="text-[#EEB615]">
                                    Terminal{" "}
                                  </span>
                                  2
                                </div>
                              </div>
                              <div className="flex flex-col">
                                <span className="flex items-center gap-1">
                                  {" "}
                                  <img src={flight} alt="" /> Indigo 6E 6273
                                </span>
                                <span className="flex items-center gap-1">
                                  {" "}
                                  <img src={child} alt="" /> Sai prithvi +1
                                </span>
                              </div>
                              <div>
                                <img src={airasia} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className=" box-shadow rounded-xl relative ">
                          <img
                            src={hotel}
                            alt=""
                            className="absolute -top-6 left-4"
                          />
                          <div className="flex items-center justify-between p-5 pt-10">
                            <div>
                              <div className="flex gap-1 font-semibold">
                                Moustache Hostel Jaipur | Rooms & Dorms
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="text-[#A1A1A1] text-[14px]">
                                  Completed
                                </span>
                                <LuDot style={{ color: "#A1A1A1" }} />
                                <span className="text-[#A1A1A1] text-[14px]">
                                  Round Trip Flight
                                </span>
                                <LuDot style={{ color: "#A1A1A1" }} />
                                <span className="text-[#A1A1A1] flex items-center gap-1 text-[14px]">
                                  Booking ID - NF2EYUZFZ3EUDTIV8153{" "}
                                  <PiCopySimpleLight />
                                </span>
                              </div>
                            </div>

                            <div>
                              <button className="w-[150px] h-[47px] rounded-xl bg-[#FFC10E]">
                                View
                              </button>
                            </div>
                          </div>
                          <hr className="" />
                          <div className="p-5">
                            <div className="flex gap-10 items-center">
                              <div className="flex flex-col">
                                <span className="text-[14px]">CHECK-IN</span>
                                <span>11, Feb `22 09:50 PM</span>
                                <span className="text-[#EEB615]">
                                  Check-in from 01:00 PM{" "}
                                </span>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[14px]">CHECK-OUT</span>
                                <span>11, Feb `22 09:50 PM</span>
                                <span className="text-[#EEB615]">
                                  Check-out at 11:00 AM
                                </span>
                              </div>
                              <div className="flex flex-col">
                                &nbsp;
                                <span className="flex items-center gap-1">
                                  {" "}
                                  <HiOutlineBuildingOffice /> 2 Room(s), 2
                                  night(s)
                                </span>
                                <span className="flex items-center gap-1">
                                  {" "}
                                  <img src={child} alt="" /> Sai prithvi +1
                                </span>
                              </div>

                              <div className="flex items-center gap-1">
                                <CiSaveDown2 />{" "}
                                <span className="text-[#FFC10E]">
                                  Download Voucher
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className=" box-shadow rounded-xl relative ">
                          <img
                            src={plane}
                            alt=""
                            className="absolute -top-6 left-4"
                          />
                          <div className="flex items-center justify-between p-5 pt-10">
                            <div>
                              <div className="flex gap-1 font-semibold">
                                {" "}
                                Bengaluru
                                <img src={twoway} alt="" /> Jaipur
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="text-[#A1A1A1] text-[14px]">
                                  Completed
                                </span>
                                <LuDot style={{ color: "#A1A1A1" }} />
                                <span className="text-[#A1A1A1] text-[14px]">
                                  Round Trip Flight
                                </span>
                                <LuDot style={{ color: "#A1A1A1" }} />
                                <span className="text-[#A1A1A1] flex items-center gap-1 text-[14px]">
                                  Booking ID - NF2EYUZFZ3EUDTIV8153{" "}
                                  <PiCopySimpleLight />
                                </span>
                              </div>
                            </div>

                            <div>
                              <button className="w-[150px] h-[47px] rounded-xl bg-[#FFC10E]">
                                View
                              </button>
                            </div>
                          </div>
                          <hr className="" />
                          <div className="p-5">
                            <div className="flex justify-between">
                              <div className="text-[14px] flex gap-1">
                                <span className="uppercase">
                                  {" "}
                                  Departure flight
                                </span>

                                <span className="text-[#A1A1A1] text-[14px]">
                                  Fri, 11 Feb
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <CiSaveDown2 />{" "}
                                <span className="text-[#FFC10E]">
                                  Download Ticket
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-10 items-center">
                              <div>
                                <span>11, Feb `22 09:50 PM</span>
                                <div>
                                  <span className="font-semibold">BLR </span>-
                                  Bengaluru{" "}
                                  <span className="text-[#EEB615]">
                                    Terminal{" "}
                                  </span>
                                  1
                                </div>
                              </div>
                              <div>
                                <span>11, Feb `22 09:50 PM</span>
                                <div>
                                  <span className="font-semibold">BLR </span>-
                                  Bengaluru{" "}
                                  <span className="text-[#EEB615]">
                                    Terminal{" "}
                                  </span>
                                  2
                                </div>
                              </div>
                              <div className="flex flex-col">
                                <span className="flex items-center gap-1">
                                  {" "}
                                  <img src={flight} alt="" /> Indigo 6E 6273
                                </span>
                                <span className="flex items-center gap-1">
                                  {" "}
                                  <img src={child} alt="" /> Sai prithvi +1
                                </span>
                              </div>
                              <div>
                                <img src={indigo} alt="" />
                              </div>
                            </div>
                            <div className="mt-5">
                              <div className="text-[14px] flex gap-1">
                                <span className="uppercase">
                                  {" "}
                                  Return flight
                                </span>

                                <span className="text-[#A1A1A1] text-[14px]">
                                  Fri, 11 Feb
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-10 items-center">
                              <div>
                                <span>11, Feb `22 09:50 PM</span>
                                <div>
                                  <span className="font-semibold">BLR </span>-
                                  Bengaluru{" "}
                                  <span className="text-[#EEB615]">
                                    Terminal{" "}
                                  </span>
                                  1
                                </div>
                              </div>
                              <div>
                                <span>11, Feb `22 09:50 PM</span>
                                <div>
                                  <span className="font-semibold">BLR </span>-
                                  Bengaluru{" "}
                                  <span className="text-[#EEB615]">
                                    Terminal{" "}
                                  </span>
                                  2
                                </div>
                              </div>
                              <div className="flex flex-col">
                                <span className="flex items-center gap-1">
                                  {" "}
                                  <img src={flight} alt="" /> Indigo 6E 6273
                                </span>
                                <span className="flex items-center gap-1">
                                  {" "}
                                  <img src={child} alt="" /> Sai prithvi +1
                                </span>
                              </div>
                              <div>
                                <img src={airasia} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className=" box-shadow rounded-xl relative ">
                          <img
                            src={hotel}
                            alt=""
                            className="absolute -top-6 left-4"
                          />
                          <div className="flex items-center justify-between p-5 pt-10">
                            <div>
                              <div className="flex gap-1 font-semibold">
                                Moustache Hostel Jaipur | Rooms & Dorms
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="text-[#A1A1A1] text-[14px]">
                                  Completed
                                </span>
                                <LuDot style={{ color: "#A1A1A1" }} />
                                <span className="text-[#A1A1A1] text-[14px]">
                                  Round Trip Flight
                                </span>
                                <LuDot style={{ color: "#A1A1A1" }} />
                                <span className="text-[#A1A1A1] flex items-center gap-1 text-[14px]">
                                  Booking ID - NF2EYUZFZ3EUDTIV8153{" "}
                                  <PiCopySimpleLight />
                                </span>
                              </div>
                            </div>

                            <div>
                              <button className="w-[150px] h-[47px] rounded-xl bg-[#FFC10E]">
                                View
                              </button>
                            </div>
                          </div>
                          <hr className="" />
                          <div className="p-5">
                            <div className="flex gap-10 items-center">
                              <div className="flex flex-col">
                                <span className="text-[14px]">CHECK-IN</span>
                                <span>11, Feb `22 09:50 PM</span>
                                <span className="text-[#EEB615]">
                                  Check-in from 01:00 PM{" "}
                                </span>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[14px]">CHECK-OUT</span>
                                <span>11, Feb `22 09:50 PM</span>
                                <span className="text-[#EEB615]">
                                  Check-out at 11:00 AM
                                </span>
                              </div>
                              <div className="flex flex-col">
                                &nbsp;
                                <span className="flex items-center gap-1">
                                  {" "}
                                  <HiOutlineBuildingOffice /> 2 Room(s), 2
                                  night(s)
                                </span>
                                <span className="flex items-center gap-1">
                                  {" "}
                                  <img src={child} alt="" /> Sai prithvi +1
                                </span>
                              </div>

                              <div className="flex items-center gap-1">
                                <CiSaveDown2 />{" "}
                                <span className="text-[#FFC10E]">
                                  Download Voucher
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center p-5">
            <button className="w-[181px] h-[47px] flex items-center justify-center gap-2 rounded-xl bg-[#FFC10E]">
              Back To Top <FaGreaterThan size={12} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Managebooking;
