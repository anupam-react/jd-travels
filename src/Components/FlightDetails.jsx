import React, { useState } from "react";
import airindia from "../Assets/oneway/airindia.svg";
const FlightDetails = () => {
  const [selectTab, setSelectTab] = useState(0);
  return (
    <div>
      <div className="text-[14px] flex gap-6 cursor-pointer">
        <p
          onClick={() => setSelectTab(0)}
          className={
            selectTab === 0
              ? "text-[#1D1D1D]  font-semibold bg-[#FFC10E24] border border-[#FFC10E] py-1 px-2 rounded-md"
              : "text-[#1D1D1D] font-[500] bg-[#B6C2D224] py-1 px-2 rounded-md"
          }
        >
          FLIGHT DETAILS
        </p>
        <p
          onClick={() => setSelectTab(1)}
          className={
            selectTab === 1
              ? "text-[#1D1D1D]  font-semibold bg-[#FFC10E24] border border-[#FFC10E] py-1 px-2 rounded-md"
              : "text-[#1D1D1D] font-[500] bg-[#B6C2D224] py-1 px-2 rounded-md"
          }
        >
          FARE SUMMARY
        </p>
        <p
          onClick={() => setSelectTab(2)}
          className={
            selectTab === 2
              ? "text-[#1D1D1D]  font-semibold bg-[#FFC10E24] border border-[#FFC10E] py-1 px-2 rounded-md"
              : "text-[#1D1D1D] font-[500] bg-[#B6C2D224] py-1 px-2 rounded-md"
          }
        >
          CANCELLATION
        </p>
        <p
          onClick={() => setSelectTab(3)}
          className={
            selectTab === 3
              ? "text-[#1D1D1D]  font-semibold bg-[#FFC10E24] border border-[#FFC10E] py-1 px-2 rounded-md"
              : "text-[#1D1D1D] font-[500] bg-[#B6C2D224] py-1 px-2 rounded-md"
          }
        >
          DATE CHANGE
        </p>
      </div>
      {selectTab === 0 && (
        <div className="mt-6 flex gap-4">
          <div className="text-[#1D1D1D] border border-[#4F4A3D3D] rounded-xl p-4">
            <p className=" font-bold text-[18px]">
              Bengaluru to Chandigarh,{" "}
              <span className="text-[12px] font-normal">7 May</span>
            </p>
            <div className="py-4  flex gap-4 items-center">
              <img src={airindia} alt="" className="w-[32px] h-[32px]" />
              <p className="text-[20px] font-semibold">Air India</p>
              <span className="text-[12px] font-normal">E4 23C1</span>
            </div>
            <div className="pb-2 flex justify-between">
              <div>
                <p className=" font-bold text-[20px]">16:30</p>
                <p className="text-[12px] font-normal">Tue, 7 May 2023</p>
              </div>
              <div className="bg-[#FFF6DD] rounded-3xl px-4 py-1">
                <p className="font-[500] text-[14px]">4h 04m</p>
                <p className="text-[#4F4A3D] text-[12px] text-center">Direct</p>
              </div>
              <div>
                <p className=" font-bold text-[20px]">22:30</p>
                <p className="text-[12px] font-normal">Tue, 7 May 2023</p>
              </div>
            </div>
            <div className="pb-4 flex justify-between">
              <div className="text-[12px] ">
                <p>Terminal 1</p>
                <p> Bengaluru, India</p>
              </div>
              <div className="text-[12px] ">
                <p>Terminal 1</p>
                <p> Bengaluru, India</p>
              </div>
            </div>
            <div className="flex justify-between gap-6">
              <div>
                <p className="font-semibold text-[20px] ">Baggage:</p>
                <p className="text-[12px]">2 Adults</p>
              </div>
              <div>
                <p className="font-semibold text-[20px] ">Check In:</p>
                <p className="text-[12px]">15 Kgs (1 piece only)</p>
              </div>
              <div>
                <p className="font-semibold text-[20px] ">Cabin:</p>
                <p className="text-[12px]">7 Kgs (1 piece only)</p>
              </div>
            </div>
          </div>
          <div className="text-[#1D1D1D] border border-[#4F4A3D3D] rounded-xl p-4">
            <p className=" font-bold text-[18px]">
              Bengaluru to Chandigarh,{" "}
              <span className="text-[12px] font-normal">14 May</span>
            </p>
            <div className="py-4  flex gap-4 items-center">
              <img src={airindia} alt="" className="w-[32px] h-[32px]" />
              <p className="text-[20px] font-semibold">Air India</p>
              <span className="text-[12px] font-normal">E4 23C1</span>
            </div>
            <div className="pb-2 flex justify-between">
              <div>
                <p className=" font-bold text-[20px]">16:30</p>
                <p className="text-[12px] font-normal">Tue, 7 May 2023</p>
              </div>
              <div className="bg-[#FFF6DD] rounded-3xl px-4 py-1">
                <p className="font-[500] text-[14px]">4h 04m</p>
                <p className="text-[#4F4A3D] text-[12px] text-center">Direct</p>
              </div>
              <div>
                <p className=" font-bold text-[20px]">22:30</p>
                <p className="text-[12px] font-normal">Tue, 7 May 2023</p>
              </div>
            </div>
            <div className="pb-4 flex justify-between">
              <div className="text-[12px] ">
                <p>Terminal 1</p>
                <p> Bengaluru, India</p>
              </div>
              <div className="text-[12px] ">
                <p>Terminal 1</p>
                <p> Bengaluru, India</p>
              </div>
            </div>
            <div className="flex gap-6 justify-between">
              <div>
                <p className="font-semibold text-[20px] ">Baggage:</p>
                <p className="text-[12px]">2 Adults</p>
              </div>
              <div>
                <p className="font-semibold text-[20px] ">Check In:</p>
                <p className="text-[12px]">15 Kgs (1 piece only)</p>
              </div>
              <div>
                <p className="font-semibold text-[20px] ">Cabin:</p>
                <p className="text-[12px]">7 Kgs (1 piece only)</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {selectTab === 1 && (
        <div className="mt-6 border border-[#4F4A3D3D] rounded-xl p-4 text-[#1D1D1D]">
          <p className="text-[18px] font-bold">Fare Breakup</p>
          <hr className="bg-[#1D1D1D3D] my-6" />
          <div className="flex flex-col gap-4">
            <div className="text-[20px] font-semibold flex gap-14">
              <p>Total</p>
              <p>₹15,122</p>
            </div>
            <div className="text-[12px] flex gap-10">
              <p>Base Fare</p>
              <p className="pl-2">₹12,293</p>
            </div>
            <div className="text-[12px] flex gap-10">
              <p>Surcharges</p>
              <p>₹2,829</p>
            </div>
          </div>
        </div>
      )}
       {selectTab === 2 && (
      <div className="mt-6 border border-[#4F4A3D3D] rounded-xl p-4 text-[#1D1D1D]">
      <div className="flex gap-4 items-center">
              <img src={airindia} alt="" className="w-[32px] h-[32px]" />
              <p className="text-[20px] font-semibold">Bengaluru-Chandigarh</p>
              <span className="text-[12px] font-normal">E4 23C1</span>
            </div>
            <hr className="bg-[#1D1D1D3D] my-2"/>
            <div className="flex justify-between ">
                <div>
                <p className="text-[20px] font-semibold">Time frame</p>
                <p className="text-[12px]">(From Scheduled flight departure)</p>
                </div>
                <div>
                <p className="text-[20px] font-semibold">Airlines Fee + JD Fee</p>
                <p className="text-[12px]">(Per person)</p>

                </div>
            </div>
            <hr className="bg-[#1D1D1D3D] my-2"/>
            <div className="flex justify-between ">
                <p className="text-[16px]">0 hours to 3 hours*</p>
                <p className="text-[16px]">Adult: <span className="font-semibold">Non Refundable</span></p>
                
            </div>
            <hr className="bg-[#1D1D1D3D] my-2"/>
            <div className="flex justify-between ">
                <p className="text-[16px]">3 hours to 4 days*</p>
                <p className="text-[16px]">Adult: <span className="font-semibold">₹3,500 + ₹300</span></p>
                
            </div>
            <hr className="bg-[#1D1D1D3D] my-2"/>
            <div className="flex justify-between ">
                <p className="text-[16px]">4 days to 365 days*</p>
                <p className="text-[16px]">Adult: <span className="font-semibold">₹3,000 + ₹300</span></p>
            </div>
      </div>)}

       {selectTab === 3 && (
      <div className="mt-6 border border-[#4F4A3D3D] rounded-xl p-4 text-[#1D1D1D]">
      <div className="flex gap-4 items-center">
              <img src={airindia} alt="" className="w-[32px] h-[32px]" />
              <p className="text-[20px] font-semibold">Bengaluru-Chandigarh</p>
              <span className="text-[12px] font-normal">E4 23C1</span>
            </div>
            <hr className="bg-[#1D1D1D3D] my-2"/>
            <div className="flex justify-between ">
                <div>
                <p className="text-[20px] font-semibold">Time frame</p>
                <p className="text-[12px]">(From Scheduled flight departure)</p>
                </div>
                <div>
                <p className="text-[20px] font-semibold">Airlines Fee + Fare Difference + JD Fee</p>
                <p className="text-[12px]">(Per person)</p>

                </div>
            </div>
            <hr className="bg-[#1D1D1D3D] my-2"/>
            <div className="flex justify-between">
                <p className="text-[16px]">0 hours to 3 hours*</p>
                <p className="text-[16px]">Adult: <span className="font-semibold">Non Changeable</span></p>
                
            </div>
            <hr className="bg-[#1D1D1D3D] my-2"/>
            <div className="flex justify-between">
                <p className="text-[16px]">3 hours to 4 days*</p>
                <p className="text-[16px]">Adult: <span className="font-semibold">₹3,500 + ₹300 + Fare Difference</span></p>
                
            </div>
            <hr className="bg-[#1D1D1D3D] my-2"/>
            <div className="flex justify-between">
                <p className="text-[16px]">4 days to 365 days*</p>
                <p className="text-[16px]">Adult: <span className="font-semibold">₹3,000 + ₹300 + Fare Difference</span></p>
            </div>
      </div>)}
    </div>
  );
};

export default FlightDetails;
