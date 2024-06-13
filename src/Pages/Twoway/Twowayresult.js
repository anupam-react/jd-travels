import React, { useState } from "react";

import upward from "../../Assets/oneway/upward.svg";
import departurelogo from "../../Assets/oneway/departurelogo.svg";
import airindia from "../../Assets/oneway/airindia.svg";
import { IoSearch } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";
import upwarddir from "../../Assets/twoway/upwarddirection.svg";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import FlightDetails from "../../Components/FlightDetails";

const Twowayresult = () => {
  const [isopen, setIsOpen] = useState(false)
  return (
    <div className="pt-10">
      <div className="bg-[#D9D9D93D] relative w-full rounded-xl pb-10 mb-10 ">
        <div className="absolute w-full top-[-3rem] px-[5rem]">
          <div className="w-full bg-white shadow-xl rounded-2xl pt-5 p-5">
            <div className="flex mt-5 gap-4 font-[500]">
              <div className="w-[128px] h-[40px] bg-[#B6C2D224]   flex justify-center items-center gap-2 rounded-lg">
                <input type="radio" />
                one way
              </div>

              <div className="w-[128px] h-[40px] bg-[#FFC10E24] text-[#FFC10E]  flex justify-center items-center gap-2 rounded-lg">
                <input type="radio" />
                Round Trip
              </div>
              <div className="w-[128px] h-[40px] bg-[#B6C2D224]  flex justify-center items-center gap-2 rounded-lg">
                <input type="radio" />
                Multi City
              </div>
            </div>
            <div className="mt-5 flex w-[px] justify-around gap-2 items-center">
              <div className="w-[178px] h-[63px]">
                <div className="text-[24px] font-semibold">From</div>
                <div className="text-[16px]">Bangalore <span className="font-semibold">BLR</span></div>
              </div>
              <div className="w-[198px] h-[63px]">
                <div className="text-[24px] font-semibold">To</div>
                <div className="text-[16px]">Chandigarh  <span className="font-semibold">IXH</span></div>
              </div>
              <div className="w-[178px] h-[63px]">
                <div className="text-[24px] font-semibold">Departure</div>
                <div className="text-[16px]">  <span className="font-semibold">7 May</span> 2023</div>
              </div>
              <div className="w-[178px] h-[63px]">
                <div className="text-[24px] font-semibold">Return</div>
                <div className="text-[16px]"><span className="font-semibold">14 May</span> 2023</div>
              </div>

              <div className="w-200px] h-[63px]">
                <div className="text-[24px] font-semibold">Travelers</div>
                <div className="text-[16px]">
                <span className="font-semibold">4 Adult, 2 Children |</span>   Economy{" "}
                </div>
              </div>
              <div className="bg-[#FFC10E] opacity-[32%] h-[40px] w-[40px] flex justify-center items-center rounded-full">
                <IoSearch style={{ color: "white" }} size={20} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex  justify-center gap-5 pt-[15rem]">
          <div className="w-[320px] pb-10 bg-[white] rounded-xl pl-3 pr-3">
            <div className="flex  items-center justify-between pl-5 pr-5 pt-5 pb-2">
              <div className="text-[18px] font-semibold">Filters</div>
              <div className="text-[#EB5757] text-[12px] font-semibold">
                Reset Filter
              </div>
            </div>
            <div className="text-[#0000006B] text-[16px] pl-5">
              9 of 32 Results
            </div>
            <hr className="mt-2" />
            <div className="w-[292px] h-[40px] font-semibold rounded-lg bg-[#EFEFEF] mt-4 flex justify-center items-center">
              <div className="w-[130px] h-[28px] flex justify-center items-center bg-[#FFC10E] rounded-lg">
                Onward
              </div>
              <div className="w-[130px] h-[28px] flex justify-center items-center  rounded-lg">
                Return
              </div>
            </div>
            <div className="flex justify-between items-center mt-5">
              <div className="text-[16px] font-semibold">Stops</div>
              <img src={upward} alt="" />
            </div>

            <div className="mt-2 flex flex-col gap-2">
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <input type="checkbox" className="accent-[#FFC10E]" />
                  Direct flight only
                </div>
                <div>(5)</div>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <input type="checkbox" className="accent-[#FFC10E]" />1 Stop
                </div>
                <div>(5)</div>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <input type="checkbox" className="accent-[#FFC10E]" />2 Stop
                </div>
                <div>(5)</div>
              </div>
            </div>
            <hr className="mt-5" />
            <div className="flex justify-between items-center mt-5">
              <div className="text-[16px] font-semibold">Pricing</div>
              <img src={upward} alt="" />
            </div>

            <div className="mt-2 flex flex-col gap-2">
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <input type="checkbox" className="accent-[#FFC10E]" />
                  Cheapest
                </div>
                <div>(5)</div>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <input type="checkbox" className="accent-[#FFC10E]" />
                  Fastest
                </div>
                <div>(5)</div>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <input type="checkbox" className="accent-[#FFC10E]" />
                  Refundable fares only
                </div>
                <div>(5)</div>
              </div>
            </div>
            <hr className="mt-5" />
            <div className="flex justify-between items-center mt-5">
              <div className="text-[16px] font-semibold">Airlines</div>
              <img src={upward} alt="" />
            </div>

            <div className="mt-2 flex flex-col gap-2">
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <input type="checkbox" className="accent-[#FFC10E]" />
                  Air India
                </div>
                <div>(5)</div>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <input type="checkbox" className="accent-[#FFC10E]" />
                  Indigo
                </div>
                <div>(5)</div>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <input type="checkbox" className="accent-[#FFC10E]" />
                  Air Asia
                </div>
                <div>(5)</div>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <input type="checkbox" className="accent-[#FFC10E]" />
                  Vistara
                </div>
                <div>(5)</div>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <input type="checkbox" className="accent-[#FFC10E]" />
                  Akasa Air
                </div>
                <div>(5)</div>
              </div>
            </div>
            <hr className="mt-5" />
            <div className="flex justify-between items-center mt-5">
              <div className="text-[16px] font-semibold">
                Departure from Bengaluru
              </div>
              <img src={upward} alt="" />
            </div>
            <div className="mt-2 flex gap-2 flex-wrap">
              <div className="w-[78px] h-[60px] bg-[#F6F6F6] rounded-lg flex flex-col justify-center items-center">
                <img src={departurelogo} alt="" />
                <div className="text-[10px]">Before 6 AM</div>
              </div>
              <div className="w-[78px] h-[60px] bg-[#F6F6F6] rounded-lg flex flex-col justify-center items-center">
                <img src={departurelogo} alt="" />
                <div className="text-[10px]">6 AM - 12 PM</div>
              </div>
              <div className="w-[78px] h-[60px] bg-[#F6F6F6] rounded-lg flex flex-col justify-center items-center">
                <img src={departurelogo} alt="" />
                <div className="text-[10px]">6 AM - 12 PM</div>
              </div>
              <div className="w-[78px] h-[60px] bg-[#F6F6F6] rounded-lg flex flex-col justify-center items-center">
                <img src={departurelogo} alt="" />
                <div className="text-[10px]">Before 6 AM</div>
              </div>
            </div>
            <hr className="mt-5" />
            <div className="flex justify-between items-center mt-5">
              <div className="text-[16px] font-semibold">
                Arrival at Chandigarh
              </div>
              <img src={upward} alt="" />
            </div>
            <div className="mt-2 flex gap-2 flex-wrap">
              <div className="w-[78px] h-[60px] bg-[#F6F6F6] rounded-lg flex flex-col justify-center items-center">
                <img src={departurelogo} alt="" />
                <div className="text-[10px]">Before 6 AM</div>
              </div>
              <div className="w-[78px] h-[60px] bg-[#F6F6F6] rounded-lg flex flex-col justify-center items-center">
                <img src={departurelogo} alt="" />
                <div className="text-[10px]">6 AM - 12 PM</div>
              </div>
              <div className="w-[78px] h-[60px] bg-[#F6F6F6] rounded-lg flex flex-col justify-center items-center">
                <img src={departurelogo} alt="" />
                <div className="text-[10px]">6 AM - 12 PM</div>
              </div>
              <div className="w-[78px] h-[60px] bg-[#F6F6F6] rounded-lg flex flex-col justify-center items-center">
                <img src={departurelogo} alt="" />
                <div className="text-[10px]">Before 6 AM</div>
              </div>
            </div>
          </div>
          <div className="w-[70%] ">
            <div className="text-[32px] font-semibold pb-4">
            Flights from Bengaluru to Chandigarh, and back
            </div>

            <div className="flex gap-4">
              <div className="w-[50%] pt-5 pb-5 rounded-xl px-4 bg-[white] justify-center flex flex-col gap-5">
                <div className="flex items-center gap-2">
                  <span className="font-semibold"> Bengaluru</span>{" "}
                  <FaArrowRightLong />{" "}
                  <span className="font-semibold">Chandigarh</span> Tue, 1 Aug
                </div>
                <div className="h-[39px] bg-[#F4F4F4] flex justify-around items-center">
                  <div className="font-[500]">Departure</div>
                  <div className="font-[500]">Duration</div>
                  <div className="font-[500]">Arrival</div>
                  <div className="font-bold flex items-center gap-1">
                    Price <FaArrowUp />
                  </div>
                </div>
              </div>
              <div className="w-[50%] pt-5 pb-5 rounded-xl px-4 bg-[white] justify-center flex flex-col gap-5">
                <div className="flex items-center gap-2">
                  <span className="font-semibold"> Bengaluru</span>{" "}
                  <FaArrowRightLong />{" "}
                  <span className="font-semibold">Chandigarh</span> Tue, 1 Aug
                </div>
                <div className="h-[39px] bg-[#F4F4F4] flex justify-around items-center">
                <div className="font-[500]">Departure</div>
                  <div className="font-[500]">Duration</div>
                  <div className="font-[500]">Arrival</div>
                  <div className="font-bold flex items-center gap-1">
                    Price <FaArrowUp />
                  </div>
                </div>
              </div>
            </div>

            <div className=" flex flex-col">
              <div className="flex gap-4">
                <div className="w-[50%] pt-5 pb-5 rounded-xl px-4 bg-white mt-5">
                  <div className=" flex-col flex items-left gap-1">
                    <div className="flex pl-3 items-center">
                      <img
                        src={airindia}
                        alt=""
                        className="w-[32px] h-[32px]"
                      />
                      <div className="font-semibold text-[14px]">Air India</div>
                    </div>
                  </div>
                  <div className=" flex justify-around items-center">
                    <div className="flex flex-col">
                      <div className="font-semibold text-[20px]">7:00</div>
                      <div className="text-[12px]">Bengaluru</div>
                    </div>

                    <div className="bg-[#FFF6DD] w-[101px] h-[54px] rounded-3xl flex justify-center items-center flex-col">
                      <div className="text-semibold text-[14px] font-[500]">4h 04m</div>
                      <div className="text-[12px] ">Direct</div>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold text-[20px]">13:35</div>
                      <div className="text-[12px]">Bengaluru</div>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold text-[20px]">₹ 7,999</div>
                      <div className="text-[12px]">per traveller</div>
                    </div>
                    <div className="">
                      <input type="radio" />
                    </div>
                  </div>
                </div>
                <div className="w-[50%] pt-5 pb-5 rounded-xl px-4 bg-white mt-5">
                  <div className=" flex-col flex items-left gap-1">
                    <div className="flex pl-3 items-center">
                      <img
                        src={airindia}
                        alt=""
                        className="w-[32px] h-[32px]"
                      />
                      <div className="font-semibold text-[14px]">Air India</div>
                    </div>
                  </div>
                  <div className=" flex justify-around items-center">
                    <div className="flex flex-col">
                      <div className="font-semibold text-[20px]">7:00</div>
                      <div className="text-[12px]">Bengaluru</div>
                    </div>

                    <div className="bg-[#FFF6DD] w-[101px] h-[54px] rounded-3xl flex justify-center items-center flex-col">
                      <div className="text-semibold text-[14px] font-[500]">4h 04m</div>
                      <div className="text-[12px] ">Direct</div>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold text-[20px]">13:35</div>
                      <div className="text-[12px]">Bengaluru</div>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold text-[20px]">₹ 7,999</div>
                      <div className="text-[12px]">per traveller</div>
                    </div>
                    <div className="">
                      <input type="radio" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-[50%] pt-5 pb-5 rounded-xl px-4 bg-white mt-5">
                  <div className=" flex-col flex items-left gap-1">
                    <div className="flex pl-3 items-center">
                      <img
                        src={airindia}
                        alt=""
                        className="w-[32px] h-[32px]"
                      />
                      <div className="font-semibold text-[14px]">Air India</div>
                    </div>
                  </div>
                  <div className=" flex justify-around items-center">
                    <div className="flex flex-col">
                      <div className="font-semibold text-[20px]">7:00</div>
                      <div className="text-[12px]">Bengaluru</div>
                    </div>

                    <div className="bg-[#FFF6DD] w-[101px] h-[54px] rounded-3xl flex justify-center items-center flex-col">
                      <div className="text-semibold text-[14px] font-[500]">4h 04m</div>
                      <div className="text-[12px] ">Direct</div>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold text-[20px]">13:35</div>
                      <div className="text-[12px]">Bengaluru</div>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold text-[20px]">₹ 7,999</div>
                      <div className="text-[12px]">per traveller</div>
                    </div>
                    <div className="">
                      <input type="radio" />
                    </div>
                  </div>
                </div>
                <div className="w-[50%] pt-5 pb-5 rounded-xl px-4 bg-white mt-5">
                  <div className=" flex-col flex items-left gap-1">
                    <div className="flex pl-3 items-center">
                      <img
                        src={airindia}
                        alt=""
                        className="w-[32px] h-[32px]"
                      />
                      <div className="font-semibold text-[14px]">Air India</div>
                    </div>
                  </div>
                  <div className=" flex justify-around items-center">
                    <div className="flex flex-col">
                      <div className="font-semibold text-[20px]">7:00</div>
                      <div className="text-[12px]">Bengaluru</div>
                    </div>

                    <div className="bg-[#FFF6DD] w-[101px] h-[54px] rounded-3xl flex justify-center items-center flex-col">
                      <div className="text-semibold text-[14px] font-[500]">4h 04m</div>
                      <div className="text-[12px] ">Direct</div>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold text-[20px]">13:35</div>
                      <div className="text-[12px]">Bengaluru</div>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold text-[20px]">₹ 7,999</div>
                      <div className="text-[12px]">per traveller</div>
                    </div>
                    <div className="">
                      <input type="radio" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 bg-[#1D1D1D] w-full pt-5 pb-5  flex justify-center items-center gap-5 rounded-2xl">
              <div className="w-[250px] h-[81px] ">
                <div className="flex items-center text-[#D9D9D9] text-[14px]">
                  Departure <LuDot /> Indigo
                </div>
                <div className="flex  gap-5 ">
                  <div className="flex gap-1">
                    <div>
                      <img
                        src={airindia}
                        alt=""
                        className="w-[32px] h-[32px]"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex text-white items-center gap-1 font-semibold">
                        16:30 <FaArrowRightLong /> 22:30
                      </div>
                      <div className="text-[#FFC10E] text-[12px]">
                        Flight Details
                      </div>{" "}
                    </div>
                  </div>
                  <div className="text-[#EFEFEF] font-semibold">₹ 7,999</div>
                </div>
              </div>
              <div className="w-[250px] h-[81px] ">
                <div className="flex items-center text-[#D9D9D9] text-[14px]">
                  Departure <LuDot /> Indigo
                </div>
                <div className="flex  gap-5 ">
                  <div className="flex gap-1">
                    <div>
                      <img
                        src={airindia}
                        alt=""
                        className="w-[32px] h-[32px]"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex text-white items-center gap-1 font-semibold">
                        16:30 <FaArrowRightLong /> 22:30
                      </div>
                      <div className="text-[#FFC10E] text-[12px]">
                        Flight Details
                      </div>{" "}
                    </div>
                  </div>
                  <div className="text-[#EFEFEF] font-semibold">₹ 7,999</div>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <span className="text-[18px] text-[#EFEFEF] font-semibold">
                      ₹ 14,639
                    </span>
                    <span className="text-[12px] text-white">
                      per traveller
                    </span>
                  </div>
                  <div className="text-[#FFC10E] text-[12px]">Fare Details</div>
                </div>
                <div>
                  <Link to="/Twowayresult/bookingresult">
                    <button className="w-[100px] h-[35px] bg-[#FFC10E] rounded-lg">
                      Submit
                    </button>
                  </Link>
                </div>
                <div>
                 {!isopen ? <img src={upwarddir} alt="" className="cursor-pointer" onClick={()=>setIsOpen(true)}/> :<img src='../Vector 17.png' alt="" className="cursor-pointer" onClick={()=>setIsOpen(false)}/> }
                </div>
              </div>
            </div>
              {isopen && 
                <div className="pt-6 pl-4 bg-white">
                <FlightDetails />

                </div>
                }

            <div className=" flex flex-col">
              <div className="flex gap-4">
                <div className="w-[50%] pt-5 pb-5 rounded-xl px-4 bg-white mt-5">
                  <div className=" flex-col flex items-left gap-1">
                    <div className="flex pl-3 items-center">
                      <img
                        src={airindia}
                        alt=""
                        className="w-[32px] h-[32px]"
                      />
                      <div className="font-semibold text-[14px]">Air India</div>
                    </div>
                  </div>
                  <div className=" flex justify-around items-center">
                    <div className="flex flex-col">
                      <div className="font-semibold text-[20px]">7:00</div>
                      <div className="text-[12px]">Bengaluru</div>
                    </div>

                    <div className="bg-[#FFF6DD] w-[101px] h-[54px] rounded-3xl flex justify-center items-center flex-col">
                      <div className="text-semibold text-[14px] font-[500]">4h 04m</div>
                      <div className="text-[12px] ">Direct</div>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold text-[20px]">13:35</div>
                      <div className="text-[12px]">Bengaluru</div>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold text-[20px]">₹ 7,999</div>
                      <div className="text-[12px]">per traveller</div>
                    </div>
                    <div className="">
                      <input type="radio" />
                    </div>
                  </div>
                </div>
                <div className="w-[50%] pt-5 pb-5 rounded-xl px-4 bg-white mt-5">
                  <div className=" flex-col flex items-left gap-1">
                    <div className="flex pl-3 items-center">
                      <img
                        src={airindia}
                        alt=""
                        className="w-[32px] h-[32px]"
                      />
                      <div className="font-semibold text-[14px]">Air India</div>
                    </div>
                  </div>
                  <div className=" flex justify-around items-center">
                    <div className="flex flex-col">
                      <div className="font-semibold text-[20px]">7:00</div>
                      <div className="text-[12px]">Bengaluru</div>
                    </div>

                    <div className="bg-[#FFF6DD] w-[101px] h-[54px] rounded-3xl flex justify-center items-center flex-col">
                      <div className="text-semibold text-[14px] font-[500]">4h 04m</div>
                      <div className="text-[12px] ">Direct</div>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold text-[20px]">13:35</div>
                      <div className="text-[12px]">Bengaluru</div>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold text-[20px]">₹ 7,999</div>
                      <div className="text-[12px]">per traveller</div>
                    </div>
                    <div className="">
                      <input type="radio" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-[50%] pt-5 pb-5 rounded-xl px-4 bg-white mt-5">
                  <div className=" flex-col flex items-left gap-1">
                    <div className="flex pl-3 items-center">
                      <img
                        src={airindia}
                        alt=""
                        className="w-[32px] h-[32px]"
                      />
                      <div className="font-semibold text-[14px]">Air India</div>
                    </div>
                  </div>
                  <div className=" flex justify-around items-center">
                    <div className="flex flex-col">
                      <div className="font-semibold text-[20px]">7:00</div>
                      <div className="text-[12px]">Bengaluru</div>
                    </div>

                    <div className="bg-[#FFF6DD] w-[101px] h-[54px] rounded-3xl flex justify-center items-center flex-col">
                      <div className="text-semibold text-[14px] font-[500]">4h 04m</div>
                      <div className="text-[12px] ">Direct</div>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold text-[20px]">13:35</div>
                      <div className="text-[12px]">Bengaluru</div>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold text-[20px]">₹ 7,999</div>
                      <div className="text-[12px]">per traveller</div>
                    </div>
                    <div className="">
                      <input type="radio" />
                    </div>
                  </div>
                </div>
                <div className="w-[50%] pt-5 pb-5 rounded-xl px-4 bg-white mt-5">
                  <div className=" flex-col flex items-left gap-1">
                    <div className="flex pl-3 items-center">
                      <img
                        src={airindia}
                        alt=""
                        className="w-[32px] h-[32px]"
                      />
                      <div className="font-semibold text-[14px]">Air India</div>
                    </div>
                  </div>
                  <div className=" flex justify-around items-center">
                    <div className="flex flex-col">
                      <div className="font-semibold text-[20px]">7:00</div>
                      <div className="text-[12px]">Bengaluru</div>
                    </div>

                    <div className="bg-[#FFF6DD] w-[101px] h-[54px] rounded-3xl flex justify-center items-center flex-col">
                      <div className="text-semibold text-[14px] font-[500]">4h 04m</div>
                      <div className="text-[12px] ">Direct</div>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold text-[20px]">13:35</div>
                      <div className="text-[12px]">Bengaluru</div>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold text-[20px]">₹ 7,999</div>
                      <div className="text-[12px]">per traveller</div>
                    </div>
                    <div className="">
                      <input type="radio" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Twowayresult;
