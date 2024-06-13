import React from "react";
import { IoArrowForward } from "react-icons/io5";
import airlinace from "../Assets/Bookingdetail/airlinace.svg";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LiaGreaterThanSolid } from "react-icons/lia";
import cancel from "../Assets/Flightbookingconfirmed/cancel.svg";
import ticket from "../Assets/Flightbookingconfirmed/ticket.svg";
import { RiTimer2Fill } from "react-icons/ri";
import { FaFemale } from "react-icons/fa";
import claim from "../Assets/Flightbookingconfirmed/claim.svg";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { IoCheckmarkCircle } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";
const Cancelleddetailflight = () => {
  return (
    <div className="h-[1500px]">
      <div className="relative">
        <div className="h-[215px] bg-[#D05555] w-full rounded-3xl pl-20 pt-10 relative">
          <span className="text-[#EAEAEA] flex items-center">
            My Account <LiaGreaterThanSolid />
            <span className="font-semibold">
              Moustache Hostel Jaipur | Rooms & Dorms
            </span>
          </span>

          <div className="font-bold text-[30px] text-[#EAEAEA]">
            Your Flight has been Cancelled
          </div>
          <div>
            <span className="font-semibold text-[#EAEAEA]">
              NH7206020236026 <span>Booking Id</span>
            </span>
            &nbsp;
            <span className="text-[#EAEAEA]">
              Reference PNR{" "}
              <span className="text-[#EAEAEA] font-semibold">
                0079789302(Room 1)
              </span>
            </span>
          </div>
        </div>
        <div className="flex gap-5 justify-center top-[10rem] left-0 right-0 absolute z-20">
          <div className="w-[70%]">
            <div className="box-shadow rounded-2xl bg-white  pb-5 ">
              <div className="flex p-5 items-start">
                <div className="h-[76px]">
                  <div className="flex items-center font-semibold text-[24px] gap-4">
                    Bengaluru <IoArrowForward />
                    Jaipur
                    <div className="bg-[#D055554D] w-[126px] h-[32px] flex justify-center gap-1 font-semibold text-[12px] items-center text-[#D05555]  rounded-lg">
                      <img src={cancel} alt="" /> Confirmed
                    </div>
                  </div>
                  <span className="text-[14px]">
                    Depart on Sat, 02 Sep 2023 • Nonstop • 3h 10min
                  </span>
                </div>
              </div>
              <div className="pl-5 pr-5">
                <div className="bg-[#F4F4F4] h-[93px] mt-2 rounded-lg flex gap-2 items-center pl-10 pr-2">
                  <img src={ticket} alt="" />
                  <div className="flex flex-col">
                    <span className="text-[#1D1D1D]">
                      Web check-in completed
                    </span>
                    <span className="text-[#D05555]">
                      Web check-in does not exist
                    </span>
                  </div>
                </div>
                <div className="flex  items-center justify-between">
                  <div className="flex items-center gap-1">
                    <img
                      src={airlinace}
                      alt=""
                      className="w-[104px] h-[104px]"
                    />
                    <div>
                      Alliance Air
                      <br /> 9I 831
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">
                      10:45 <span className="text-[#797979]">Sat 02 Sep</span>
                    </div>
                    <div className="font-semibold">Chandigarh - IXC</div>
                    <div className="text-[14px]">Chandigarh Airport</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <RiTimer2Fill />
                    <span className="text-[#4F4A3D]">Sat 02 Sep</span>
                  </div>
                  <div>
                    <div className="font-semibold">
                      10:45 <span className="text-[#797979]">Sat 02 Sep</span>
                    </div>
                    <div className="font-semibold">Bangalore - BLR</div>
                    <div className="text-[14px]">
                      Bengaluru International Airport, Terminal 2
                    </div>
                  </div>
                </div>
                <div className="bg-[#F4F4F4] h-[114px] flex justify-around items-center mt-2 rounded-lg ">
                  <div>
                    <div className="text-[#797979]">TRAVELLER</div>
                    <div className="flex  items-center">
                      <FaFemale />{" "}
                      <span className="font-semibold">Lorem Ipsum </span>{" "}
                      <span className="text-[#797979]">Female</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-[#797979]">PNR</div>
                    <div className="text-[#797979]">J8A4HA</div>
                  </div>
                  <div>
                    <div className="text-[#797979]">E-TICKET</div>
                    <div className="text-[#797979]">228-9655214998</div>
                  </div>
                  <div>
                    <div className="text-[#797979]">SEAT</div>
                    <div className="text-[#797979]">15E</div>
                  </div>
                  <div>
                    <div className="text-[#797979]">MEAL</div>
                    <div className="text-[#797979]">-</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-shadow rounded-2xl bg-white  p-5 mt-5">
              <div className=" flex justify-between">
                <div>
                  <div className="text-[24px] font-semibold">My Requests</div>
                  <div className="text-[14px]">Track issues raised by you</div>
                </div>
                <div>
                  <button className="w-[243px] h-[59px] bg-[#FFC10E] rounded-lg">
                    Share Feedback
                  </button>
                </div>
              </div>
              <div className="flex justify-between mt-5">
                <div>
                  <div className="flex items-center gap-1">
                    <HiOutlineBuildingOffice2 />{" "}
                    <div className="text-[#4F4A3D]">
                      Cancellation request for{" "}
                      <span className="font-semibold">Lorem Ipsum </span>
                    </div>
                  </div>
                  <div className="text-[#4F4A3D] font-normal text-[18px]">
                    Created 10 Feb 22 01:18 PM
                  </div>
                </div>
                <div className="text-[#FFC10E] flex items-center gap-1">
                  <img src={claim} alt="" />
                  Raise a Claim
                </div>
              </div>
            </div>
            <div className="box-shadow rounded-2xl mt-5 bg-white  p-5">
              <div className="font-semibold text-[22px]">Refund Status</div>
              <div className="flex gap-5">
                <div className="text-[#4F4A3D] text-[14px]">
                  Total Refund Processed :{" "}
                  <span className="font-semibold">₹ 1500 </span>
                </div>
                <div className="text-[#4F4A3D] text-[14px]">
                  RRN number :{" "}
                  <span className="font-semibold">204167031774</span>
                </div>
              </div>
              <div className="mt-5 flex items-center">
                <IoCheckmarkCircle style={{ color: "#FFC10E" }} />
                <div className="w-[239px] h-[9px] rounded-xl bg-[#FFC10E33]"></div>
                <IoCheckmarkCircle style={{ color: "#FFC10E" }} />
                <div className="w-[239px] h-[9px] rounded-xl bg-[#FFC10E33]"></div>
                <IoCheckmarkCircle style={{ color: "#FFC10E" }} />
              </div>
              <div className="mt-5 flex gap-14">
                <div className="flex flex-col">
                  <span className="uppercase text-[#4F4A3D] font-semibold">
                    booking cancelled
                  </span>
                  <span className="text-[#4F4A3D]">10 Feb 22, 15:51</span>
                </div>
                <div className="flex flex-col">
                  <span className="uppercase text-[#4F4A3D] font-semibold">
                    refund processed : ₹ 1500
                  </span>
                  <span className="text-[#4F4A3D]">10 Feb 22, 15:51</span>
                </div>
                <div className="flex flex-col">
                  <span className="uppercase text-[#4F4A3D] font-semibold">
                    Refund credited in account
                  </span>
                  <span className="text-[#4F4A3D]">10 Feb 22, 15:51</span>
                </div>
              </div>
            </div>
            <div className="box-shadow rounded-2xl mt-5 bg-white  p-5">
              <div className="font-semibold text-[22px]">
                Cancellation Policy
              </div>
              <div className="text-[#4F4A3D] text-[14px]">
                Your flight has already departed, online cancellation is not
                supported
              </div>
            </div>
            <div className="box-shadow rounded-2xl mt-5 bg-white  p-5">
              <div className="font-semibold text-[22px]">
                Contact Information
              </div>
              <div className="text-[#4F4A3D] text-[14px]">
                Information about primary traveller. Any communication by
                airlines will be sent to these details.
              </div>

              <div className="bg-[#F4F4F4] h-[104px] flex justify-around items-center mt-2 rounded-lg ">
                <div>
                  <div className="text-[#797979]">TRAVELLER</div>
                  <div className="">
                    <span className="font-semibold">Lorem Ipsum </span>{" "}
                  </div>
                </div>
                <div>
                  <div className="text-[#797979]">EMAIL</div>
                  <div className="text-[#797979]">ga@gmail.com</div>
                </div>
                <div>
                  <div className="text-[#797979]">Phone Number</div>
                  <div className="text-[#797979]">+91 9655214998</div>
                </div>
                <div>
                  <div className="text-[#2176E3] font-semibold flex items-center gap-1">
                    <RiSendPlaneFill style={{ color: "#2176E3" }} />
                    Send E-ticket(s)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[22%] flex flex-col gap-5">
            <div className=" bg-[white] box-shadow   rounded-2xl flex flex-col ">
              <div className="pt-4 font-semibold text-[20px] flex flex-col gap-2 p-5">
                Ticket(s)
                <div className="flex items-center  gap-1">
                  <IoMdDownload style={{ color: "#2176E3" }} />
                  <div className="text-[#2176E3] text-[16px]">
                    Download E-ticket(s)
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <TfiEmail style={{ color: "#2176E3" }} />
                  <div className="text-[#2176E3] text-[16px]">
                    Email/ SMS E-Ticket(s)
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[white] box-shadow flex flex-col gap-2  rounded-2xl pt-2 p-5">
              <div className="flex items-center font-semibold gap-1">
                <FaPhoneAlt /> Airline Contact
              </div>
              <hr />
              <div className="flex flex-col gap-2">
                <span>VISTARA</span>
                <span className="font-semibold">9289228888</span>
              </div>
            </div>
            <div className="bg-[white] box-shadow flex flex-col gap-2  rounded-2xl pt-2 p-5">
              <div className="font-semibold">Pricing Breakup</div>
              <hr />
              <div className="flex justify-between text-[14px] ">
                <span>Airline Base Fare</span>
                <span className="text-[#1D1D1D]">₹ 10233</span>
              </div>
              <div className="flex justify-between text-[14px] ">
                <span>Airline Taxes</span>
                <span className="text-[#1D1D1D]">₹ 10233</span>
              </div>
              <div className="flex justify-between text-[14px] ">
                <span>GI Convenience Fee</span>
                <span className="text-[#1D1D1D]">₹ 10233</span>
              </div>
              <div className="flex justify-between text-[14px] ">
                <span>E-Coupon</span>
                <span className="text-[#1D1D1D]">₹ 10233</span>
              </div>
              <hr />
              <div className="flex justify-between text-[14px] ">
                <span>Total Amount</span>
                <span className="text-[#1D1D1D] font-semibold">₹ 10233</span>
              </div>
            </div>

            <div className="bg-[white] box-shadow flex flex-col gap-2  rounded-2xl pt-2 p-5">
              <div className="font-semibold">Paid By</div>
              <hr />
              <div className="flex justify-between ">
                <span>HDFC Bank *****7669</span>
                <span className="text-[#1D1D1D]">₹ 10233</span>
              </div>
            </div>
            <div className="bg-[white] box-shadow flex flex-col gap-2  rounded-2xl pt-2 p-5">
              <div className="font-semibold">Refund Credited To</div>
              <hr />
              <div className="flex justify-between ">
                <span>HDFC Bank *****7669</span>
                <span className="text-[#1D1D1D]">₹ -103</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cancelleddetailflight;
