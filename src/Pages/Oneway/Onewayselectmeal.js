import React from "react";
import gift from "../../Assets/oneway/gift.svg";
import { IoArrowForward } from "react-icons/io5";
import addnew from "../../Assets/Bookingdetail/add-new.svg";
import { LuDot } from "react-icons/lu";
import images from "../../Assets/oneway/veg.jpeg";
import nonveg from "../../Assets/oneway/nonveg.png";
import { Link } from "react-router-dom";
const Onewayselectmeal = () => {
  return (
    <div className="h-[1500px]">

   
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
          </div>

          <div className="box-shadow  h-[97px] text-[22px] font-bold flex items-center rounded-2xl mt-5 pl-5 pr-5   ">
            Important Information
          </div>
          <div className="box-shadow  h-[97px] text-[22px] font-bold flex items-center rounded-2xl mt-5 pl-5 pr-5   ">
            Traveller Details
          </div>
          <div className="box-shadow rounded-2xl mt-5 bg-white pb-5  ">
            <div className="flex justify-between items-end p-5">
              <div className="flex flex-col gap-2">
                <div className="text-[22px] font-semibold">Seats & Meals</div>
                <div className="flex gap-2">
                  <button className="w-[74px] h-[33px] rounded-lg bg-[#FFC10E24]">
                    Seats
                  </button>
                  <button className="w-[74px] h-[33px] rounded-lg bg-[#B6C2D224]">
                    Meals
                  </button>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="w-[101px] h-[33px] rounded-lg bg-[#FFC10E24]">
                  Sai prithvi
                </button>
                <button className="w-[101px] h-[33px] rounded-lg bg-[#B6C2D224]">
                  Paloma
                </button>
                <button className="w-[101px] h-[33px] rounded-lg bg-[#B6C2D224]">
                  Aastha
                </button>
              </div>
            </div>
            <div className=" p-5  rounded-2xl ml-5 mr-5 mb-5 ">
              <div className=" flex justify-between items-center">
                <div className="w-[256px] h-[76px]">
                  <div className="flex items-center font-semibold text-[20px] gap-4">
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
                <div className=" flex gap-2">
                  <div className="flex gap-1">
                    <input className="" type="checkbox" />
                    Veg
                  </div>
                  <div className="flex gap-1">
                    <input className="" type="checkbox" />
                    Non Veg
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-2">
                <div className="flex justify-between items-center border-b">
                  <div className="flex items-center">
                    <div>
                      <img
                        src={images}
                        alt=""
                        className="w-[100px] h-[100px]"
                      />
                    </div>
                    <div>
                      <div>Unibic Cookies are bursting with flavour and</div>
                      <div className="font-semibold">₹ 234</div>
                    </div>
                  </div>
                  <button className="w-[100px] h-[33px] box-shadow flex justify-center items-center text-blue-500 ">
                    Add
                  </button>
                </div>
                <div className="flex justify-between items-center border-b">
                  <div className="flex items-center">
                    <div>
                      <img
                        src={images}
                        alt=""
                        className="w-[100px] h-[100px]"
                      />
                    </div>
                    <div>
                      <div>Unibic Cookies are bursting with flavour and</div>
                      <div className="font-semibold">₹ 234</div>
                    </div>
                  </div>
                  <button className="w-[100px] h-[33px] box-shadow flex justify-center items-center text-blue-500 ">
                    Add
                  </button>
                </div>
                <div className="flex justify-between items-center border-b">
                  <div className="flex items-center">
                    <div>
                      <img
                        src={images}
                        alt=""
                        className="w-[100px] h-[100px]"
                      />
                    </div>
                    <div>
                      <div>Unibic Cookies are bursting with flavour and</div>
                      <div className="font-semibold">₹ 234</div>
                    </div>
                  </div>
                  <button className="w-[100px] h-[33px] box-shadow flex justify-center items-center text-blue-500 ">
                    Add
                  </button>
                </div>
                <div className="flex justify-between items-center border-b">
                  <div className="flex items-center">
                    <div>
                      <img
                        src={images}
                        alt=""
                        className="w-[100px] h-[100px]"
                      />
                    </div>
                    <div>
                      <div>Unibic Cookies are bursting with flavour and</div>
                      <div className="font-semibold">₹ 234</div>
                    </div>
                  </div>
                  <button className="w-[100px] h-[33px] box-shadow flex justify-center items-center text-blue-500 ">
                    Add
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-5 ml-5">
              <Link to="/Onewayresult/addon">
                <button className="w-[242px] bg-[#FFC10E] flex justify-center items-center rounded-lg h-[61px]">
                  CONTINUE
                </button>
              </Link>
            </div>
          </div>
          <div className="box-shadow  h-[97px] text-[22px] font-bold flex items-center rounded-2xl mt-5 pl-5 pr-5   ">
            Add ons
          </div>
        </div>
        <div className="w-[22%] flex flex-col gap-5">
          <div className=" bg-[white] box-shadow  h-[270px] rounded-2xl p-2 flex flex-col gap-1">
            <div className="pt-4 font-semibold text-[20px]">Fare summary</div>

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

export default Onewayselectmeal;
