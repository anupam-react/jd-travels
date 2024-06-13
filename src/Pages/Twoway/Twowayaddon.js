import React from "react";
import gift from "../../Assets/oneway/gift.svg";
import { IoArrowForward } from "react-icons/io5";
import addnew from "../../Assets/Bookingdetail/add-new.svg";
import { LuDot } from "react-icons/lu";
import { Link } from "react-router-dom";
const Twowayaddon = () => {
  return (
    <div className="h-[1800px]">
      <div className="pb-[10rem] relative">
        <div className="h-[215px] bg-[#FFC10E] w-full rounded-3xl pl-20 pt-10 relative">
          <div className="font-bold text-[30px]">Complete your booking</div>
        </div>
        <div className="flex gap-5 justify-center top-[8rem] left-0 right-0 absolute z-20">
          <div className="w-[70%]   rounded-2xl">
            <div className="box-shadow rounded-2xl bg-white  ">
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
              <div className="flex justify-between p-5 items-center">
                <div className="w-[256px] h-[76px]">
                  <div className="flex items-center font-semibold text-[24px] gap-4">
                    jaipur <IoArrowForward />
                    Bengaluru
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
            </div>

            <div className="box-shadow  h-[97px] text-[22px] font-bold flex items-center rounded-2xl mt-5 pl-5 pr-5   ">
              Important Information
            </div>
            <div className="box-shadow  h-[97px] text-[22px] font-bold flex items-center rounded-2xl mt-5 pl-5 pr-5   ">
              Traveller Details
            </div>
            <div className="box-shadow  h-[97px] text-[22px] font-bold flex items-center rounded-2xl mt-5 pl-5 pr-5   ">
              Seats & Meals
            </div>
            <div className="box-shadow rounded-2xl mt-5 bg-white pb-5  ">
              <div className="p-5 text-[22px] font-semibold">Add ons</div>
              <hr />
              <div className="p-5">
                <div className=" flex justify-between">
                  
                  <div className="text-[22px] font-semibold">
                  Excess Baggage
                    </div>
                  <div className="w-[280px] text-left font-semibold">Bangalore - Jaipur</div>
                  <div className="w-[280px] text-left font-semibold">Jaipur - Bangalore</div>
                  </div>
                <div className=" flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div className="w-[100px]">Abhish</div>
                    <div>
                      <select className="w-[280px] h-[42px] border border-[#D9D9D9] rounded-xl">
                        <option>5 KGs @ ₹ 2,750</option>
                        <option>5 KGs @ ₹ 2,750</option>
                        <option>5 KGs @ ₹ 2,750</option>
                      </select>
                    </div>
                    <div>
                      <select className="w-[280px] h-[42px] border border-[#D9D9D9] rounded-xl">
                        <option>5 KGs @ ₹ 2,750</option>
                        <option>5 KGs @ ₹ 2,750</option>
                        <option>5 KGs @ ₹ 2,750</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="w-[100px]">Aastha</div>
                    <div>
                      <select className="w-[280px] h-[42px] border border-[#D9D9D9] rounded-xl">
                        <option>5 KGs @ ₹ 2,750</option>
                        <option>5 KGs @ ₹ 2,750</option>
                        <option>5 KGs @ ₹ 2,750</option>
                      </select>
                    </div>
                    <div>
                      <select className="w-[280px] h-[42px] border border-[#D9D9D9] rounded-xl">
                        <option>5 KGs @ ₹ 2,750</option>
                        <option>5 KGs @ ₹ 2,750</option>
                        <option>5 KGs @ ₹ 2,750</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="w-[100px]">Sai Dev</div>
                    <div>
                      <select className="w-[280px] h-[42px] border border-[#D9D9D9] rounded-xl">
                        <option>5 KGs @ ₹ 2,750</option>
                        <option>5 KGs @ ₹ 2,750</option>
                        <option>5 KGs @ ₹ 2,750</option>
                      </select>
                    </div>
                    <div>
                      <select className="w-[280px] h-[42px] border border-[#D9D9D9] rounded-xl">
                        <option>5 KGs @ ₹ 2,750</option>
                        <option>5 KGs @ ₹ 2,750</option>
                        <option>5 KGs @ ₹ 2,750</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="w-[100px]">Paloma</div>
                    <div>
                      <select className="w-[280px] h-[42px] border border-[#D9D9D9] rounded-xl">
                        <option>5 KGs @ ₹ 2,750</option>
                        <option>5 KGs @ ₹ 2,750</option>
                        <option>5 KGs @ ₹ 2,750</option>
                      </select>
                    </div>
                    <div>
                      <select className="w-[280px] h-[42px] border border-[#D9D9D9] rounded-xl">
                        <option>5 KGs @ ₹ 2,750</option>
                        <option>5 KGs @ ₹ 2,750</option>
                        <option>5 KGs @ ₹ 2,750</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="text-[22px] font-semibold">Wheel Chair</div>
                <div className=" flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div className="w-[100px]">Abhish</div>
                    <div>
                      <select className="w-[280px] h-[42px] border border-[#D9D9D9] rounded-xl">
                        <option>Not required</option>
                      
                      </select>
                    </div>
                    <div>
                      <select className="w-[280px] h-[42px] border border-[#D9D9D9] rounded-xl">
                      <option>Not required</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="w-[100px]">Aastha</div>
                    <div>
                      <select className="w-[280px] h-[42px] border border-[#D9D9D9] rounded-xl">
                      <option>Not required</option>
                      </select>
                    </div>
                    <div>
                      <select className="w-[280px] h-[42px] border border-[#D9D9D9] rounded-xl">
                      <option>Not required</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="w-[100px]">Sai Dev</div>
                    <div>
                      <select className="w-[280px] h-[42px] border border-[#D9D9D9] rounded-xl">
                      <option>Not required</option>
                      </select>
                    </div>
                    <div>
                      <select className="w-[280px] h-[42px] border border-[#D9D9D9] rounded-xl">
                      <option>Not required</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="w-[100px]">Paloma</div>
                    <div>
                      <select className="w-[280px] h-[42px] border border-[#D9D9D9] rounded-xl">
                      <option>Not required</option>
                      </select>
                    </div>
                    <div>
                      <select className="w-[280px] h-[42px] border border-[#D9D9D9] rounded-xl">
                      <option>Not required</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pl-5 pr-5 flex items-center justify-between">
                <div className="text-[22px]  w-[250px] font-semibold">Fast Forward</div>
                <div className="text-[16px] w-[298px] text-[#4F4A3D]">
                  <input type="checkbox" /> Fast Forward at ₹400 per person
                </div>
                <div className="text-[16px] w-[298px] text-[#4F4A3D]">
                  <input type="checkbox" /> Fast Forward at ₹400 per person
                </div>
              </div>
              <div className="pl-5 pr-5  flex justify-between items-center pt-2">
                <div className="text-[22px] w-[250px] font-semibold">Quick Board</div>
                <div className="text-[16px]  w-[298px] text-[#4F4A3D]">
                  <input type="checkbox" /> Quick Board at ₹400 per person
                </div>
                <div className="text-[16px]  w-[298px] text-[#4F4A3D]">
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
              <div className=" ml-5">
                <Link to="/Twowayresult/reviewdetails">
                  <button className="w-[242px] bg-[#FFC10E] flex justify-center items-center rounded-lg h-[61px]">
                    CONFIRM BOOKING
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[22%] flex flex-col gap-5">
            <div className=" bg-[white] box-shadow  h-[370px] rounded-2xl p-2 flex flex-col gap-1">
              <div className="pt-4 font-semibold text-[20px]">Fare summary</div>

              <hr />
              <div className="flex justify-between items-end">
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

              <div className="flex justify-between items-end">
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

              <div className="flex justify-between items-end">
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
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-[#4F4A3D] flex gap-1">
                    {" "}
                    <img src={addnew} alt="" />
                    Add Ons
                  </div>
                  <div className="text-[14px] text-[#4F4A3D] flex gap-1">
                    Fast Forward
                    <span className="text-[#2D9D4C] text-[13px]">REMOVE</span>
                  </div>
                </div>
                <div className="font-semibold">₹ 400</div>
              </div>
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
                    <div className="text-[20px] font-semibold">promo codes</div>
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
  );
};

export default Twowayaddon;
