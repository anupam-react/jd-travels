import React, { useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
import indigo from "../../Assets/Bookingdetail/indigoimage.svg";
import distance from "../../Assets/Bookingdetail/distance.svg";
import changeterminal from "../../Assets/Bookingdetail/changeterminal.svg";
import airlinace from "../../Assets/Bookingdetail/airlinace.svg";
import luggage from "../../Assets/Bookingdetail/luggage.svg";
import information from "../../Assets/Bookingdetail/information.svg";
import avatar from "../../Assets/Bookingdetail/avatar.svg";
import addnew from "../../Assets/Bookingdetail/add-new.svg";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import gift from "../../Assets/oneway/gift.svg";
import { Link } from "react-router-dom";
import { IoIosCloseCircle, IoIosNotificationsOutline } from "react-icons/io";
const Multicityreviewdetails = () => {
  const [edittraveller, setEdittravelle] = useState(false);
  return (
    <>
      {edittraveller ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-5xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[800px]   bg-[white] outline-none focus:outline-none">
                <div className="flex justify-between items-center p-5">
                  <div>
                    <div className="text-[28px] font-semibold">
                      Edit traveller - Abhishek
                    </div>
                    <div className="text-[#4F4A3D] text-[14px]">
                      Edit traveller details
                    </div>
                  </div>
                  <div>
                    {" "}
                    <span
                      onClick={() => setEdittravelle(false)}
                      className="cursor-pointer flex justify-end"
                    >
                      <IoIosCloseCircle size={30} />
                    </span>
                  </div>
                </div>

                <div className=" flex justify-center flex-col items-center gap-2">
                  <div className="flex gap-2">
                    <div>
                      <label>Given Name</label>
                      <br />
                      <input
                        className=" mt-2 w-[375px] h-[57px] border rounded-2xl placeholder:pl-5"
                        placeholder="Given Name"
                      />
                    </div>
                    <div>
                      <label>Surname</label>
                      <br />
                      <input
                        className=" mt-2 w-[375px] h-[57px] border rounded-2xl placeholder:pl-5"
                        placeholder="Enter surname"
                      />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div>
                      <label>DOB (dd-mm-yyyy)</label>
                      <br />
                      <input
                        className=" mt-2 w-[375px] h-[57px] placeholder:pl-5 px-3 py-2 border rounded-2xl"
                        type="date"
                      />
                    </div>
                    <div>
                      <label>Place of Birth</label>
                      <br />
                      <input
                        className=" mt-2 w-[375px] h-[57px]  border rounded-2xl placeholder:pl-5"
                        placeholder="Enter Place of Birth"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <label>Passport Number</label>
                      <br />
                      <input
                        className=" mt-2 w-[375px] h-[57px] border rounded-2xl placeholder:pl-5"
                        placeholder="Enter Passport Number"
                      />
                    </div>
                    <div>
                      <label>Passport Date of expiry</label>
                      <br />
                      <input
                        className=" mt-2 w-[375px] h-[57px] placeholder:pl-5 px-3 py-2 border rounded-2xl "
                        type="date"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end pt-5 pr-5">
                  <button className="bg-[#EFEFEF] h-[41px] w-[130px] rounded-3xl flex justify-center items-center">
                    + Add more
                  </button>
                </div>
                <div className="flex items-center gap-2 pl-5 pr-5">
                  <div>
                    <label>Frequent Fliers</label>
                    <br />
                    <select className=" mt-2 w-[250px] h-[57px] border rounded-2xl placeholder:pl-5">
                      <option>Select Airline</option>
                    </select>
                  </div>
                  <div>
                    <label></label>
                    <br />
                    <input
                      className=" mt-2 w-[500px] h-[57px] placeholder:pl-5 px-3 py-2 border rounded-2xl "
                      placeholder="Add Flier number"
                    />
                  </div>
                </div>
                <div className="pl-5 pr-5 mt-2">
                  <label>Seat Preference</label>
                  <br />
                  <select className=" mt-2 w-full h-[57px] border rounded-2xl placeholder:pl-5">
                    <option>Select Seat Preference</option>
                  </select>
                </div>
                <div className=" flex justify-end p-5">
                  <button className="w-[133px] h-[47px] rounded-lg bg-[#FFC10E]">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <div className="h-[4800px]">
        <div className="pb-[10rem] relative">
          <div className="h-[215px] bg-[#FFC10E] w-full rounded-3xl pl-20 pt-10 relative">
            <div className="font-bold text-[30px]">Review Details</div>
          </div>
          <div className="flex gap-5 justify-center top-[8rem] left-0 right-0 absolute z-20">
            <div className="w-[70%]">
              <div className="box-shadow rounded-2xl bg-white  pb-5 ">
                <div className="flex justify-between p-5 items-center">
                  <div className="w-[256px] h-[76px]">
                    <div className="flex items-center font-semibold text-[24px] gap-4">
                      Bengaluru <IoArrowForward />
                      Jaipur
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-[#FFC10E4D] h-[33px] rounded-xl w-[131px] flex justify-center items-center">
                        Sunday, May 28
                      </div>
                      <div className="flex text-[14px] items-center">
                        1 Stop
                        <LuDot />
                        14h 0m
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#2D9D4C] h-[27px] flex justify-center text-[12px] items-center text-white w-[203px] rounded-lg">
                    CANCELLATION FEES APPLY
                  </div>
                </div>
                <div className="pl-5 pr-5">
                  <div className="flex items-center gap-1">
                    <img src={indigo} alt="" />
                    <div>IndiGo 6E 861</div>
                    <div className="bg-[#6B6B6B4D] h-[33px] w-[87px] rounded-lg flex justify-center items-center">
                      Economy
                    </div>
                  </div>
                  <div className="bg-[#F4F4F4] h-[137px] mt-2 rounded-lg flex justify-between items-center pl-2 pr-2">
                    <div className="flex gap-2">
                      <div className="h-[83px] w-[42px] flex flex-col justify-between">
                        <div className="font-semibold">08:00</div>
                        <div className="font-semibold">10:45</div>
                      </div>
                      <div>
                        <img src={distance} alt="" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <div>
                          <span className="font-semibold">Bengaluru</span>{" "}
                          International Airport, Terminal 1
                        </div>
                        <div>2h 45m</div>
                        <div>
                          <span className="font-semibold">New Delhi .</span>{" "}
                          International Airport, Terminal 1
                        </div>
                      </div>
                    </div>
                    <div className="flex h-[83px] gap-4">
                      <div>
                        <div>Baggage</div>
                        <div className="font-semibold">Adult</div>
                      </div>
                      <div>
                        <div>Check-in</div>
                        <div className="font-semibold w-[120px]">
                          15 Kgs
                          <br /> (1 piece only)
                        </div>
                      </div>
                      <div>
                        <div>Cabin</div>
                        <div className="font-semibold w-[120px]">
                          7 Kgs <br />
                          (1 piece only)
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-2">
                    <div className="flex gap-2">
                      <div className="h-[83px] w-[42px]">
                        {/* <div className="font-semibold">08:00</div>
                  <div className="font-semibold">10:45</div> */}
                      </div>
                      <div>
                        <img src={changeterminal} alt="" />
                      </div>
                      <div className="flex flex-col gap-2 h-[122px] justify-between">
                        <div>
                          <span className="text-[#FFC10E] font-semibold">
                            Change of Terminal
                          </span>
                          <div>
                            Change of planes{" "}
                            <span className="font-semibold">10 </span> h{" "}
                            <span className="font-semibold">5</span> m Layover
                            in New Delhi
                          </div>
                        </div>

                        <div>
                          <span className="text-[#FFC10E] font-semibold">
                            Self Transfer at New Delhi
                          </span>
                          <div>
                            You must collect and check in your baggage again
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={airlinace} alt="" />
                    <div>Alliance Air 9I 831</div>
                    <div className="bg-[#6B6B6B4D] h-[33px] w-[87px] rounded-lg flex justify-center items-center">
                      Economy
                    </div>
                  </div>
                  <div className="bg-[#F4F4F4] h-[137px] mt-2 rounded-lg flex justify-between items-center pl-2 pr-2">
                    <div className="flex gap-2">
                      <div className="h-[83px] w-[42px] flex flex-col justify-between">
                        <div className="font-semibold">08:00</div>
                        <div className="font-semibold">10:45</div>
                      </div>
                      <div>
                        <img src={distance} alt="" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <div>
                          <span className="font-semibold">Bengaluru</span>{" "}
                          International Airport, Terminal 1
                        </div>
                        <div>2h 45m</div>
                        <div>
                          <span className="font-semibold">New Delhi .</span>{" "}
                          International Airport, Terminal 1
                        </div>
                      </div>
                    </div>
                    <div className="flex h-[83px] gap-4">
                      <div>
                        <div>Baggage</div>
                        <div className="font-semibold">Adult</div>
                      </div>
                      <div>
                        <div>Check-in</div>
                        <div className="font-semibold w-[120px]">
                          15 Kgs
                          <br /> (1 piece only)
                        </div>
                      </div>
                      <div>
                        <div>Cabin</div>
                        <div className="font-semibold w-[120px]">
                          7 Kgs <br />
                          (1 piece only)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#FFC10E4D] h-[40px] rounded-xl mt-2 text-[#1D1D1D] pl-5 gap-2 flex items-center">
                    <img src={luggage} alt="" className="w-[24px] h-[24px]" />
                    If you wish to carry extra luggage, please add the same on
                    the next page
                  </div>
                </div>
              </div>
              <div className="box-shadow rounded-2xl bg-white mt-5  pb-5 ">
                <div className="flex justify-between p-5 items-center">
                  <div className="w-[256px] h-[76px]">
                    <div className="flex items-center font-semibold text-[24px] gap-4">
                      Bengaluru <IoArrowForward />
                      Jaipur
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-[#FFC10E4D] h-[33px] rounded-xl w-[131px] flex justify-center items-center">
                        Sunday, May 28
                      </div>
                      <div className="flex text-[14px] items-center">
                        1 Stop
                        <LuDot />
                        14h 0m
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#2D9D4C] h-[27px] flex justify-center text-[12px] items-center text-white w-[203px] rounded-lg">
                    CANCELLATION FEES APPLY
                  </div>
                </div>
                <div className="pl-5 pr-5">
                  <div className="flex items-center gap-1">
                    <img src={indigo} alt="" />
                    <div>IndiGo 6E 861</div>
                    <div className="bg-[#6B6B6B4D] h-[33px] w-[87px] rounded-lg flex justify-center items-center">
                      Economy
                    </div>
                  </div>
                  <div className="bg-[#F4F4F4] h-[137px] mt-2 rounded-lg flex justify-between items-center pl-2 pr-2">
                    <div className="flex gap-2">
                      <div className="h-[83px] w-[42px] flex flex-col justify-between">
                        <div className="font-semibold">08:00</div>
                        <div className="font-semibold">10:45</div>
                      </div>
                      <div>
                        <img src={distance} alt="" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <div>
                          <span className="font-semibold">Bengaluru</span>{" "}
                          International Airport, Terminal 1
                        </div>
                        <div>2h 45m</div>
                        <div>
                          <span className="font-semibold">New Delhi .</span>{" "}
                          International Airport, Terminal 1
                        </div>
                      </div>
                    </div>
                    <div className="flex h-[83px] gap-4">
                      <div>
                        <div>Baggage</div>
                        <div className="font-semibold">Adult</div>
                      </div>
                      <div>
                        <div>Check-in</div>
                        <div className="font-semibold w-[120px]">
                          15 Kgs
                          <br /> (1 piece only)
                        </div>
                      </div>
                      <div>
                        <div>Cabin</div>
                        <div className="font-semibold w-[120px]">
                          7 Kgs <br />
                          (1 piece only)
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-2">
                    <div className="flex gap-2">
                      <div className="h-[83px] w-[42px]">
                        {/* <div className="font-semibold">08:00</div>
                  <div className="font-semibold">10:45</div> */}
                      </div>
                      <div>
                        <img src={changeterminal} alt="" />
                      </div>
                      <div className="flex flex-col gap-2 h-[122px] justify-between">
                        <div>
                          <span className="text-[#FFC10E] font-semibold">
                            Change of Terminal
                          </span>
                          <div>
                            Change of planes{" "}
                            <span className="font-semibold">10 </span> h{" "}
                            <span className="font-semibold">5</span> m Layover
                            in New Delhi
                          </div>
                        </div>

                        <div>
                          <span className="text-[#FFC10E] font-semibold">
                            Self Transfer at New Delhi
                          </span>
                          <div>
                            You must collect and check in your baggage again
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={airlinace} alt="" />
                    <div>Alliance Air 9I 831</div>
                    <div className="bg-[#6B6B6B4D] h-[33px] w-[87px] rounded-lg flex justify-center items-center">
                      Economy
                    </div>
                  </div>
                  <div className="bg-[#F4F4F4] h-[137px] mt-2 rounded-lg flex justify-between items-center pl-2 pr-2">
                    <div className="flex gap-2">
                      <div className="h-[83px] w-[42px] flex flex-col justify-between">
                        <div className="font-semibold">08:00</div>
                        <div className="font-semibold">10:45</div>
                      </div>
                      <div>
                        <img src={distance} alt="" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <div>
                          <span className="font-semibold">Bengaluru</span>{" "}
                          International Airport, Terminal 1
                        </div>
                        <div>2h 45m</div>
                        <div>
                          <span className="font-semibold">New Delhi .</span>{" "}
                          International Airport, Terminal 1
                        </div>
                      </div>
                    </div>
                    <div className="flex h-[83px] gap-4">
                      <div>
                        <div>Baggage</div>
                        <div className="font-semibold">Adult</div>
                      </div>
                      <div>
                        <div>Check-in</div>
                        <div className="font-semibold w-[120px]">
                          15 Kgs
                          <br /> (1 piece only)
                        </div>
                      </div>
                      <div>
                        <div>Cabin</div>
                        <div className="font-semibold w-[120px]">
                          7 Kgs <br />
                          (1 piece only)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#FFC10E4D] h-[40px] rounded-xl mt-2 text-[#1D1D1D] pl-5 gap-2 flex items-center">
                    <img src={luggage} alt="" className="w-[24px] h-[24px]" />
                    If you wish to carry extra luggage, please add the same on
                    the next page
                  </div>
                </div>
              </div>
              <div className="box-shadow rounded-2xl bg-white mt-5  pb-5 ">
                <div className="flex justify-between p-5 items-center">
                  <div className="w-[256px] h-[76px]">
                    <div className="flex items-center font-semibold text-[24px] gap-4">
                      Bengaluru <IoArrowForward />
                      Jaipur
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-[#FFC10E4D] h-[33px] rounded-xl w-[131px] flex justify-center items-center">
                        Sunday, May 28
                      </div>
                      <div className="flex text-[14px] items-center">
                        1 Stop
                        <LuDot />
                        14h 0m
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#2D9D4C] h-[27px] flex justify-center text-[12px] items-center text-white w-[203px] rounded-lg">
                    CANCELLATION FEES APPLY
                  </div>
                </div>
                <div className="pl-5 pr-5">
                  <div className="flex items-center gap-1">
                    <img src={indigo} alt="" />
                    <div>IndiGo 6E 861</div>
                    <div className="bg-[#6B6B6B4D] h-[33px] w-[87px] rounded-lg flex justify-center items-center">
                      Economy
                    </div>
                  </div>
                  <div className="bg-[#F4F4F4] h-[137px] mt-2 rounded-lg flex justify-between items-center pl-2 pr-2">
                    <div className="flex gap-2">
                      <div className="h-[83px] w-[42px] flex flex-col justify-between">
                        <div className="font-semibold">08:00</div>
                        <div className="font-semibold">10:45</div>
                      </div>
                      <div>
                        <img src={distance} alt="" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <div>
                          <span className="font-semibold">Bengaluru</span>{" "}
                          International Airport, Terminal 1
                        </div>
                        <div>2h 45m</div>
                        <div>
                          <span className="font-semibold">New Delhi .</span>{" "}
                          International Airport, Terminal 1
                        </div>
                      </div>
                    </div>
                    <div className="flex h-[83px] gap-4">
                      <div>
                        <div>Baggage</div>
                        <div className="font-semibold">Adult</div>
                      </div>
                      <div>
                        <div>Check-in</div>
                        <div className="font-semibold w-[120px]">
                          15 Kgs
                          <br /> (1 piece only)
                        </div>
                      </div>
                      <div>
                        <div>Cabin</div>
                        <div className="font-semibold w-[120px]">
                          7 Kgs <br />
                          (1 piece only)
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-2">
                    <div className="flex gap-2">
                      <div className="h-[83px] w-[42px]">
                        {/* <div className="font-semibold">08:00</div>
                  <div className="font-semibold">10:45</div> */}
                      </div>
                      <div>
                        <img src={changeterminal} alt="" />
                      </div>
                      <div className="flex flex-col gap-2 h-[122px] justify-between">
                        <div>
                          <span className="text-[#FFC10E] font-semibold">
                            Change of Terminal
                          </span>
                          <div>
                            Change of planes{" "}
                            <span className="font-semibold">10 </span> h{" "}
                            <span className="font-semibold">5</span> m Layover
                            in New Delhi
                          </div>
                        </div>

                        <div>
                          <span className="text-[#FFC10E] font-semibold">
                            Self Transfer at New Delhi
                          </span>
                          <div>
                            You must collect and check in your baggage again
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={airlinace} alt="" />
                    <div>Alliance Air 9I 831</div>
                    <div className="bg-[#6B6B6B4D] h-[33px] w-[87px] rounded-lg flex justify-center items-center">
                      Economy
                    </div>
                  </div>
                  <div className="bg-[#F4F4F4] h-[137px] mt-2 rounded-lg flex justify-between items-center pl-2 pr-2">
                    <div className="flex gap-2">
                      <div className="h-[83px] w-[42px] flex flex-col justify-between">
                        <div className="font-semibold">08:00</div>
                        <div className="font-semibold">10:45</div>
                      </div>
                      <div>
                        <img src={distance} alt="" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <div>
                          <span className="font-semibold">Bengaluru</span>{" "}
                          International Airport, Terminal 1
                        </div>
                        <div>2h 45m</div>
                        <div>
                          <span className="font-semibold">New Delhi .</span>{" "}
                          International Airport, Terminal 1
                        </div>
                      </div>
                    </div>
                    <div className="flex h-[83px] gap-4">
                      <div>
                        <div>Baggage</div>
                        <div className="font-semibold">Adult</div>
                      </div>
                      <div>
                        <div>Check-in</div>
                        <div className="font-semibold w-[120px]">
                          15 Kgs
                          <br /> (1 piece only)
                        </div>
                      </div>
                      <div>
                        <div>Cabin</div>
                        <div className="font-semibold w-[120px]">
                          7 Kgs <br />
                          (1 piece only)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#FFC10E4D] h-[40px] rounded-xl mt-2 text-[#1D1D1D] pl-5 gap-2 flex items-center">
                    <img src={luggage} alt="" className="w-[24px] h-[24px]" />
                    If you wish to carry extra luggage, please add the same on
                    the next page
                  </div>
                </div>
              </div>
              <div className="box-shadow rounded-2xl bg-white mt-5  pb-5 ">
                <div className="flex justify-between p-5 items-center">
                  <div className="w-[256px] h-[76px]">
                    <div className="flex items-center font-semibold text-[24px] gap-4">
                      Bengaluru <IoArrowForward />
                      Jaipur
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-[#FFC10E4D] h-[33px] rounded-xl w-[131px] flex justify-center items-center">
                        Sunday, May 28
                      </div>
                      <div className="flex text-[14px] items-center">
                        1 Stop
                        <LuDot />
                        14h 0m
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#2D9D4C] h-[27px] flex justify-center text-[12px] items-center text-white w-[203px] rounded-lg">
                    CANCELLATION FEES APPLY
                  </div>
                </div>
                <div className="pl-5 pr-5">
                  <div className="flex items-center gap-1">
                    <img src={indigo} alt="" />
                    <div>IndiGo 6E 861</div>
                    <div className="bg-[#6B6B6B4D] h-[33px] w-[87px] rounded-lg flex justify-center items-center">
                      Economy
                    </div>
                  </div>
                  <div className="bg-[#F4F4F4] h-[137px] mt-2 rounded-lg flex justify-between items-center pl-2 pr-2">
                    <div className="flex gap-2">
                      <div className="h-[83px] w-[42px] flex flex-col justify-between">
                        <div className="font-semibold">08:00</div>
                        <div className="font-semibold">10:45</div>
                      </div>
                      <div>
                        <img src={distance} alt="" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <div>
                          <span className="font-semibold">Bengaluru</span>{" "}
                          International Airport, Terminal 1
                        </div>
                        <div>2h 45m</div>
                        <div>
                          <span className="font-semibold">New Delhi .</span>{" "}
                          International Airport, Terminal 1
                        </div>
                      </div>
                    </div>
                    <div className="flex h-[83px] gap-4">
                      <div>
                        <div>Baggage</div>
                        <div className="font-semibold">Adult</div>
                      </div>
                      <div>
                        <div>Check-in</div>
                        <div className="font-semibold w-[120px]">
                          15 Kgs
                          <br /> (1 piece only)
                        </div>
                      </div>
                      <div>
                        <div>Cabin</div>
                        <div className="font-semibold w-[120px]">
                          7 Kgs <br />
                          (1 piece only)
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-2">
                    <div className="flex gap-2">
                      <div className="h-[83px] w-[42px]">
                        {/* <div className="font-semibold">08:00</div>
                  <div className="font-semibold">10:45</div> */}
                      </div>
                      <div>
                        <img src={changeterminal} alt="" />
                      </div>
                      <div className="flex flex-col gap-2 h-[122px] justify-between">
                        <div>
                          <span className="text-[#FFC10E] font-semibold">
                            Change of Terminal
                          </span>
                          <div>
                            Change of planes{" "}
                            <span className="font-semibold">10 </span> h{" "}
                            <span className="font-semibold">5</span> m Layover
                            in New Delhi
                          </div>
                        </div>

                        <div>
                          <span className="text-[#FFC10E] font-semibold">
                            Self Transfer at New Delhi
                          </span>
                          <div>
                            You must collect and check in your baggage again
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={airlinace} alt="" />
                    <div>Alliance Air 9I 831</div>
                    <div className="bg-[#6B6B6B4D] h-[33px] w-[87px] rounded-lg flex justify-center items-center">
                      Economy
                    </div>
                  </div>
                  <div className="bg-[#F4F4F4] h-[137px] mt-2 rounded-lg flex justify-between items-center pl-2 pr-2">
                    <div className="flex gap-2">
                      <div className="h-[83px] w-[42px] flex flex-col justify-between">
                        <div className="font-semibold">08:00</div>
                        <div className="font-semibold">10:45</div>
                      </div>
                      <div>
                        <img src={distance} alt="" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <div>
                          <span className="font-semibold">Bengaluru</span>{" "}
                          International Airport, Terminal 1
                        </div>
                        <div>2h 45m</div>
                        <div>
                          <span className="font-semibold">New Delhi .</span>{" "}
                          International Airport, Terminal 1
                        </div>
                      </div>
                    </div>
                    <div className="flex h-[83px] gap-4">
                      <div>
                        <div>Baggage</div>
                        <div className="font-semibold">Adult</div>
                      </div>
                      <div>
                        <div>Check-in</div>
                        <div className="font-semibold w-[120px]">
                          15 Kgs
                          <br /> (1 piece only)
                        </div>
                      </div>
                      <div>
                        <div>Cabin</div>
                        <div className="font-semibold w-[120px]">
                          7 Kgs <br />
                          (1 piece only)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#FFC10E4D] h-[40px] rounded-xl mt-2 text-[#1D1D1D] pl-5 gap-2 flex items-center">
                    <img src={luggage} alt="" className="w-[24px] h-[24px]" />
                    If you wish to carry extra luggage, please add the same on
                    the next page
                  </div>
                </div>
              </div>
              <div className="box-shadow rounded-2xl bg-white mt-5  pb-5 ">
                <div className="text-[22px] font-semibold p-5">
                  Traveller Details
                </div>
                <div className="pl-5 pr-5">
                  <div className="flex gap-2 items-center">
                    <div className="flex font-semibold">
                      <img src={avatar} alt="" />
                      ADULT (12 yrs+):
                    </div>
                    <div>Abhishek, Sai Dev</div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="font-semibold">ADULT (12 yrs+):</div>
                    <div>Abhishek, Sai Dev</div>
                  </div>
                  <div className="mt-2 h-[49px] bg-[#FFC10E4D] flex  items-center gap-1 pl-5">
                    <input type="checkbox" />
                    <div>
                      <span className="font-semibold">
                        Add these travellers to My Traveller List.
                      </span>
                      You won’t have to fill traveller info on your next visit.
                    </div>
                  </div>
                  <div className="mt-5 font-semibold text-[16px]">
                    Booking details will be sent to:
                  </div>
                  <div className="mt-5 flex flex-col gap-2">
                    <div className="flex">
                      <div className="w-[114px] h-[20px]">Country code:</div>
                      <div className="w-[150px] h-[20px]">India (91)</div>
                    </div>
                    <div className="flex">
                      <div className="w-[114px] h-[20px]">Mobile No:</div>
                      <div className="w-[150px] h-[20px]">8483829892</div>
                    </div>
                    <div className="flex">
                      <div className="w-[114px] h-[20px]"> Email:</div>
                      <div className="w-[150px] h-[20px]"> abc@email.com</div>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-col gap-2">
                    <div className="flex">
                      <div className="w-[114px] h-[20px]">GST Number:</div>
                      <div className="w-[150px] h-[20px]">XXXXXXXXXXX</div>
                    </div>
                    <div className="flex">
                      <div className="w-[114px] h-[20px]">GST Name:</div>
                      <div className="w-[150px] h-[20px]">Abcd</div>
                    </div>
                    <div className="flex">
                      <div className="w-[114px] h-[20px]"> GST Email ID:</div>
                      <div className="w-[150px] h-[20px]"> abc@email.com</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-shadow  rounded-2xl mt-5 pl-5 pr-5   pb-5 ">
                <div className="font-bold text-[22px] pt-5">Seats & Meals</div>
                <div className="flex items-center gap-2 mt-5">
                  <img src={avatar} alt="" />{" "}
                  <span className="font-semibold">ADULT (12 yrs+)</span>
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <div className="flex justify-between border rounded-2xl h-[52px] items-center pl-2 pr-2">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="accent-[#FFC10E]" />
                      Abhishek
                    </div>
                    <div className="flex gap-2">
                      <MdEdit onClick={() => setEdittravelle(true)} />
                      <MdDelete />
                    </div>
                  </div>
                  <div className="flex justify-between border rounded-2xl h-[52px] items-center pl-2 pr-2">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="accent-[#FFC10E]" />
                      Abhishek
                    </div>
                    <div className="flex gap-2">
                      <MdEdit />
                      <MdDelete />
                    </div>
                  </div>
                  <div className="flex justify-between border rounded-2xl h-[52px] items-center pl-2 pr-2">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="accent-[#FFC10E]" />
                      Abhishek
                    </div>
                    <div className="flex gap-2">
                      <MdEdit />
                      <MdDelete />
                    </div>
                  </div>
                  <div className="flex justify-between border rounded-2xl h-[52px] items-center pl-2 pr-2">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="accent-[#FFC10E]" />
                      Abhishek
                    </div>
                    <div className="flex gap-2">
                      <MdEdit />
                      <MdDelete />
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <span className="font-bold text-[22px] ">Meals</span>
                  <div className="flex gap-2">
                    <div>
                      <div className="w-[346px] h-[91px] flex justify-between items-center pl-2 pr-2 border rounded-3xl">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center text-[24px] font-semibold gap-2">
                            Bengaluru <IoArrowForward /> Jaipur
                          </div>
                          <div className="text-[#4F4A3D] text-[16px]">
                            1 Meal(s) Selected
                          </div>
                        </div>
                        <div>
                          <MdEdit />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="w-[346px] h-[91px] flex justify-between items-center pl-2 pr-2 border rounded-3xl">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center text-[24px] font-semibold gap-2">
                            Jaipur <IoArrowForward /> Bangaluru
                          </div>
                          <div className="text-[#4F4A3D] text-[16px]">
                            1 Meal(s) Selected
                          </div>
                        </div>
                        <div>
                          <MdEdit />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="box-shadow rounded-2xl mt-5 bg-white pb-5  ">
                <div className="p-5 text-[22px] font-semibold">Add ons</div>
                <hr />
                <div className="p-5">
                  <div className="text-[22px] font-semibold">
                    Excess Baggage
                  </div>
                  <div className="w-[554px] flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div>Abhishek</div>
                      <div>
                        <div>5 KGs @ ₹ 2,750</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>Aastha</div>
                      <div>
                        <div>10 KGs @ ₹ 2,750</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>Sai Dev</div>
                      <div>
                        <div>15 KGs @ ₹ 2,750</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>Paloma</div>
                      <div>
                        <div>20 KGs @ ₹ 2,750</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pl-5 pb-5 ">
                  <div className="text-[22px] font-semibold">Wheel Chair</div>
                  <div className="w-[554px] flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div>Abhishek</div>
                      <div>Not Required</div>
                    </div>
                  </div>
                </div>
                <div className="pl-5">
                  <div className="text-[22px] font-semibold">Fast Forward</div>
                  <div className="text-[16px] text-[#4F4A3D]">
                    <input type="checkbox" /> Fast Forward at ₹400 per person
                  </div>
                </div>
                <div className="pl-5 pt-2">
                  <div className="text-[22px] font-semibold">Quick Board</div>
                  <div className="text-[16px] text-[#4F4A3D]">
                    <input type="checkbox" /> Quick Board at ₹400 per person
                  </div>
                </div>
                <hr className="mt-5" />
                <div className="p-5 text-[16px]">
                  By clicking on the Confirm button below to proceed with the
                  booking, I confirm that i have read and I accept the{" "}
                  <span className="text-[#FFC10E] font-semibold">
                    {" "}
                    Fare Rules
                  </span>
                  , the{" "}
                  <span className="text-[#FFC10E] font-semibold">
                    Privacy Policy
                  </span>{" "}
                  ,the{" "}
                  <span className="text-[#FFC10E] font-semibold">
                    User Agreement
                  </span>{" "}
                  and{" "}
                  <span className="text-[#FFC10E] font-semibold">
                    Terms of service
                  </span>{" "}
                  of JD Travels.
                </div>
                <div className=" ml-5 flex gap-2">
                  <button className="w-[200px] border flex-col flex justify-center items-center rounded-lg h-[61px]">
                    Edit
                  </button>
                  <button className="w-[200px] border  gap-1 flex justify-center items-center rounded-lg h-[61px]">
                    Pay Via <span className=" font-semibold"> JD Wallet</span>
                  </button>
                  <button className="w-[317px] bg-[#FFC10E] flex-col flex justify-center items-center rounded-lg h-[61px]">
                    <span className="text-[18px] font-semibold">
                      {" "}
                      Other Payment Options
                    </span>
                    <span className="text-[14px]">
                      Credit Card, Debit Card, UPI, Netbanking
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[22%] flex flex-col gap-5">
              <div className=" bg-[white] box-shadow  h-[270px] rounded-2xl p-2 flex flex-col gap-1">
                <div className="pt-4 font-semibold text-[20px]">
                  Fare summary
                </div>

                <hr />
                <div className="flex justify-between">
                  <div>
                    <div className="text-[#4F4A3D] flex gap-1">
                      {" "}
                      <img src={addnew} alt="" />
                      Base Fare
                    </div>
                    <div className="text-[14px] text-[#4F4A3D]">
                      Adult(s) (1 X ₹ 9,071)
                    </div>
                  </div>
                  <div className="font-semibold">₹ 9,071</div>
                </div>
                <hr />

                <div className="flex justify-between">
                  <div>
                    <div className="text-[#4F4A3D] flex gap-1">
                      {" "}
                      <img src={addnew} alt="" />
                      Taxes and Surcharges
                    </div>
                    <div className="text-[14px] text-[#4F4A3D]">
                      Airline Taxes and Surcharges
                    </div>
                  </div>
                  <div className="font-semibold">₹ 9,071</div>
                </div>
                <hr />

                <div className="flex justify-between">
                  <div>
                    <div className="text-[#4F4A3D] flex gap-1">
                      {" "}
                      <img src={addnew} alt="" />
                      Other Services
                    </div>
                    <div className="text-[14px] text-[#4F4A3D] flex gap-1">
                      Charity{" "}
                      <span className="text-[#2D9D4C] text-[13px]">REMOVE</span>
                    </div>
                  </div>
                  <div className="font-semibold">₹ 9,071</div>
                </div>
                <hr />
                <div className="flex justify-between">
                  <div>Total Amount</div>
                  <div className="font-semibold">₹ 10, 901</div>
                </div>
              </div>
              <div className=" bg-[white] box-shadow  h-[270px] rounded-2xl p-2  flex flex-col gap-1">
                <div className="pt-4 pl-2">
                  <div className="flex flex-col gap-1">
                    <div className="flex">
                      <img src={gift} alt="" />
                      <div className="text-[20px] font-semibold">
                        promo codes
                      </div>
                    </div>
                    <div className="text-[14px]">Payment Breakup</div>
                  </div>
                  <div className="mt-1">
                    <input
                      className="h-[57px] w-[225px] rounded-xl border-[#D9D9D9] border placeholder:pl-4"
                      placeholder="Enter Here"
                    />
                  </div>
                  <div className="flex flex-col gap-1 mt-1">
                    <div className="flex gap-1">
                      <input type="radio" />
                      <div className="text-[20px]">Type 1</div>
                    </div>
                    <div className="text-[14px] w-[225px]">
                      Use this coupon for dummy promo code
                    </div>
                    <div className="text-[#2D9D4C] text-[14px]">
                      Terms & Conditions
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Multicityreviewdetails;
