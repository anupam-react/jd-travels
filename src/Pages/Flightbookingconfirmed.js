import React, { useState } from "react";
import { IoArrowForward } from "react-icons/io5";

import airlinace from "../Assets/Bookingdetail/airlinace.svg";

import information from "../Assets/Bookingdetail/information.svg";

import { LiaGreaterThanSolid } from "react-icons/lia";
import tickmark from "../Assets/Flightbookingconfirmed/tickmark.svg";
import ticket from "../Assets/Flightbookingconfirmed/ticket.svg";
import { RiTimer2Fill } from "react-icons/ri";
import { FaFemale } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import checkbaggage from "../Assets/Flightbookingconfirmed/checkinbagage.svg";
import carryon from "../Assets/Flightbookingconfirmed/carryon.svg";
import sideline from "../Assets/Flightbookingconfirmed/sideline.svg";
import redplane from "../Assets/Flightbookingconfirmed/redplane.svg";
import cancelticket from "../Assets/Flightbookingconfirmed/cancelticket.svg";
import { FaPhoneAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { IoCloseSharp } from "react-icons/io5";
const Flightbookingconfirmed = () => {
  const [CancelAllPgrPopup, setCancelAllPgrPopup] = useState(false);
  return (
    <>
      {CancelAllPgrPopup ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-5xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[600px]   bg-[white] outline-none focus:outline-none">
               
                <div className="flex items-center justify-between p-5  border-blueGray-200 rounded-t">
                  <div className="flex flex-col">
                    <span className="text-2xl font-semibold ">
                    Confirm Cancellation
                    </span>
                    <span>Cancel flights for the selected passengers listed below. </span>
                  </div>
                  <span
                  onClick={() => setCancelAllPgrPopup(false)}
                  className="cursor-pointer flex justify-end "
                >
                  <IoCloseSharp size={30} />
                </span>
                </div>
           
                <div className=" pl-5 flex justify-left flex-col items-left">
                  <ul>

                    <li className="flex gap-2 items-center"> <input type="checkbox" className="accent-[#FFC10E]"/>Abhishek</li>
                    <li className="flex gap-2 items-center"> <input type="checkbox" className="accent-[#FFC10E]"/>Abhishek</li>
                    <li className="flex gap-2 items-center"> <input type="checkbox" className="accent-[#FFC10E]"/>Abhishek</li>
                    <li className="flex gap-2 items-center"> <input type="checkbox" className="accent-[#FFC10E]"/>Abhishek</li>
                  </ul>
                 
                </div>
                <div className="flex justify-end p-5">
                    <button className="w-[193px] h-[47px] rounded-lg bg-[#FFC10E]">
                    Cancel Ticket/s
                    </button>
                  </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <div className="h-[3000px]">
        <div className="relative">
          <div className="h-[215px] bg-[#2D9D4C] w-full rounded-3xl pl-20 pt-10 relative">
            <span className="text-[#EAEAEA] flex items-center">
              My Account <LiaGreaterThanSolid />
              <span className="font-semibold">
                Moustache Hostel Jaipur | Rooms & Dorms
              </span>
            </span>

            <div className="font-bold text-[30px] text-[#EAEAEA]">
              Flight booking Confirmed
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
                      <div className="bg-[#78C8854D] w-[126px] h-[32px] flex justify-center gap-1 font-semibold text-[12px] items-center text-[#2D9D4C]  rounded-lg">
                        <img src={tickmark} alt="" /> Confirmed
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
                      <span className="text-[#4F4A3D]">
                        Web check-in is already done
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
              <div className="box-shadow  rounded-2xl mt-5 pl-5 pr-5   pb-5 ">
                <div className="font-bold text-[22px] pt-5">
                  Important Information
                </div>
                <div className="flex flex-col gap-3 mt-2">
                  <div>
                    <div className="text-[16px] font-bold flex items-center gap-1">
                      <img src={information} alt="" />
                      Custom Combination
                    </div>
                    <div className="mt-2">
                      . Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </div>
                  </div>
                  <div>
                    <div className="text-[16px] font-bold flex items-center gap-1">
                      <img src={information} alt="" />
                      Multi ticket Itinerary
                    </div>
                    <div className="mt-2">
                      . Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </div>
                  </div>

                  <div>
                    <div className="text-[16px] font-bold flex items-center gap-1">
                      <img src={information} alt="" />
                      Baggage Information
                    </div>
                    <div className="mt-2">
                      . Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-shadow  rounded-2xl mt-5 pl-5 pr-5  pt-5  pb-5">
                <div className="font-semibold text-[22px]">Excess Baggage</div>
                <div className="w-[500px] h-[125px] mt-5 bg-[#F5F5F5] flex justify-between items-center pl-5 pr-5 rounded-2xl">
                  <div>
                    <div className="font-semibold text-[24px]">
                      Bangalore - Jaipur
                    </div>
                    <div>
                      Sat 02 Sep 2023 <span> VISTARA </span>
                    </div>
                  </div>
                  <div>
                    <IoIosArrowUp />
                  </div>
                </div>
                <div className="mt-5 flex gap-5 items-center">
                  <div className="flex items-center gap-2">
                    <img src={checkbaggage} alt="" />
                    <div className="flex flex-col">
                      <span className="font-semibold">Check-in baggage</span>
                      <span>15 Kg (1 PC x 15Kg each) per adult</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={carryon} alt="" />

                    <div className="flex flex-col ">
                      <span className="font-semibold">Carry On</span>
                      <span>7 Kgs (1 piece only) per adult </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-shadow  rounded-2xl mt-5 pl-5 pr-5  pt-5  pb-5">
                <div className="font-semibold text-[22px]">
                  Cancellation Policy
                </div>
                <div className="text-[#2D9D4C] text-[14px]">
                  You are eligible for full cancellation with just INR 105.0
                  (per passenger) being charged as airline refund applicable fee
                  if you cancel within 04:28 hrs
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-[500px] h-[125px] mt-5 bg-[#F5F5F5] flex justify-between items-center pl-5 pr-5 rounded-2xl">
                    <div>
                      <div className="font-semibold text-[24px]">
                        Bangalore - Jaipur
                      </div>
                      <div>
                        Sat 02 Sep 2023 <span> VISTARA </span>
                      </div>
                    </div>
                    <div>
                      <IoIosArrowUp />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <button
                      className="h-[62px] bg-[#FFC10E] rounded-xl w-[289px]"
                      onClick={() => setCancelAllPgrPopup(true)}
                    >
                      Cancel All Passengers
                    </button>{" "}
                    <button className="h-[62px] bg-[#FFC10E] rounded-xl w-[289px]">
                      Partial Cancellation
                    </button>{" "}
                  </div>
                </div>

                <div className="flex mt-5 gap-2">
                  <div>
                    <img src={sideline} alt="" />
                  </div>
                  <div>
                    <div className="w-[620px] flex justify-between items-center pl-2 pr-2 h-[90px] rounded-xl bg-[#FFF6DB]">
                      <div className="w-[218px]">
                        <div className="font-semibold text-[16px]">
                          Booking Date - 24 Hr(s) to <br />
                          Departure
                        </div>
                        <div className="text-[#262626] text-[14px]">
                          Till Fri Sep 01 | 10:45:00 IST 2023
                        </div>
                      </div>
                      <div className="w-[308px]">
                        <div className="text-[16px] font-semibold">
                          Cancellation Charges : ₹ 3675.0/Adult
                        </div>
                        <div className="text-[14px]">
                          We will charge an additional ₹ 300.0 per traveller as
                          the JDTravels cancellation fee
                        </div>
                      </div>
                    </div>
                    <div className="w-[620px] flex justify-between mt-5 pl-2 pr-2  rounded-xl ">
                      <div className="w-[242px]">
                        <div className="font-semibold text-[16px]">
                          24 Hr(s) - 2 Hr(s) to Departure
                        </div>
                        <div className="text-[#262626] text-[14px]">
                          Till Fri Sep 02 | 10:45:00 IST 2023
                        </div>
                      </div>
                      <div className="w-[308px]">
                        <div className="text-[16px] font-semibold">
                          Non-Refundable
                        </div>
                        <div className="text-[14px]">
                          The airline does not allow cancellation during this
                          time window.
                        </div>
                      </div>
                    </div>

                    <div className="w-[620px] flex justify-between  pl-2 pr-2 mt-5 rounded-xl ">
                      <div className="w-[242px]">
                        <div className="font-semibold text-[16px]">
                          2 Hr(s) - Departure time
                        </div>
                        <div className="text-[#262626] text-[14px]">
                          Till Fri Sep 02 | 10:45:00 IST 2023
                        </div>
                      </div>
                      <div className="w-[308px]">
                        <div className="text-[16px] font-semibold">
                          Non-Refundable
                        </div>
                        <div className="text-[14px]">
                          The airline does not allow cancellation during this
                          time window.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[700px] mt-5">
                  <li className="list-disc">
                    Airline charges a cancellation fee when you cancel a flight
                    in a particular time window. JD Travels levies a standard
                    300/ticket as a service fee.
                  </li>
                  <li className="list-disc">
                    Some add-ons and fare components charged at the time of
                    booking non refundable. Insurance, donations and convenience
                    fee are non refundable.
                  </li>
                  <li className="list-disc">
                    Cancellation fee for different flights are mentioned below.
                  </li>
                </div>
                <div className="mt-5 flex justify-between">
                  <div className="text-[#D05555] text-[16px] w-[700px] flex items-start justify-start ">
                    <img src={redplane} alt="" className="w-[19px] h-[20px]" />
                    Submit a request if airline cancelled your flight, you
                    cancelled your tickets, or if you are claiming medical or
                    death waiver after booking your flight.
                  </div>
                  <div>
                    <button className="h-[62px] bg-[#FFC10E] rounded-xl w-[289px]">
                      Request Refund
                    </button>
                  </div>
                </div>
              </div>
              <div className="box-shadow  rounded-2xl mt-5 pl-5 pr-5  pt-5  pb-5">
                <div className="font-semibold text-[22px]">Date Change</div>
                <div className="text-[#2D9D4C] text-[14px]">
                  Change your travel date or travel time. Date change charges
                  along with price difference will be payable. Change of sector
                  is not allowed.
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-[500px] h-[125px] mt-5 bg-[#F5F5F5] flex justify-between items-center pl-5 pr-5 rounded-2xl">
                    <div>
                      <div className="font-semibold text-[24px]">
                        Bangalore - Jaipur
                      </div>
                      <div>
                        Sat 02 Sep 2023 <span> VISTARA </span>
                      </div>
                    </div>
                    <div>
                      <IoIosArrowUp />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <button className="h-[62px] bg-[#FFC10E] rounded-xl w-[289px]">
                      Change Travel dates
                    </button>
                  </div>
                </div>

                <div className="flex mt-5 gap-2">
                  <div>
                    <img src={sideline} alt="" />
                  </div>
                  <div>
                    <div className="w-[620px] flex justify-between items-center pl-2 pr-2 h-[90px] rounded-xl bg-[#FFF6DB]">
                      <div className="w-[218px]">
                        <div className="font-semibold text-[16px]">
                          Booking Date - 24 Hr(s) to <br />
                          Departure
                        </div>
                        <div className="text-[#262626] text-[14px]">
                          Till Fri Sep 01 | 10:45:00 IST 2023
                        </div>
                      </div>
                      <div className="w-[308px]">
                        <div className="text-[16px] font-semibold">
                          Date Change Charges : ₹ 3150.0/Adult + Fare Difference
                        </div>
                        <div className="text-[14px]">
                          We will charge an additional ₹ 300.0 per traveller as
                          the JD travel date change fee
                        </div>
                      </div>
                    </div>
                    <div className="w-[620px] flex justify-between mt-5 pl-2 pr-2  rounded-xl ">
                      <div className="w-[242px]">
                        <div className="font-semibold text-[16px]">
                          24 Hr(s) - 2 Hr(s) to Departure
                        </div>
                        <div className="text-[#262626] text-[14px]">
                          Till Fri Sep 02 | 10:45:00 IST 2023
                        </div>
                      </div>
                      <div className="w-[308px]">
                        <div className="text-[16px] font-semibold">
                          Date Change not allowed
                        </div>
                        <div className="text-[14px]">
                          The airline does not allow cancellation during this
                          time window.
                        </div>
                      </div>
                    </div>

                    <div className="w-[620px] flex justify-between  pl-2 pr-2 mt-5 rounded-xl ">
                      <div className="w-[242px]">
                        <div className="font-semibold text-[16px]">
                          2 Hr(s) - Departure time
                        </div>
                        <div className="text-[#262626] text-[14px]">
                          Till Fri Sep 02 | 10:45:00 IST 2023
                        </div>
                      </div>
                      <div className="w-[308px]">
                        <div className="text-[16px] font-semibold">
                          Date Change not allowed
                        </div>
                        <div className="text-[14px]">
                          The airline does not allow cancellation during this
                          time window.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[700px] mt-5">
                  <li className="list-disc">
                    Airline charges a cancellation fee when you cancel a flight
                    in a particular time window. JD Travels levies a standard
                    300/ticket as a service fee.
                  </li>
                  <li className="list-disc">
                    Some add-ons and fare components charged at the time of
                    booking non refundable. Insurance, donations and convenience
                    fee are non refundable.
                  </li>
                  <li className="list-disc">
                    Cancellation fee for different flights are mentioned below.
                  </li>
                </div>
              </div>
            </div>
            <div className="w-[22%] flex flex-col gap-5">
              <div className=" bg-[white] box-shadow   rounded-2xl flex flex-col ">
                <div className="pt-4 font-semibold text-[20px] flex flex-col gap-2 p-5">
                  Change in plans
                  <div className="flex  gap-1">
                    <img src={cancelticket} alt="" />
                    <div className="text-[#2176E3] text-[16px]">
                      Cancel all Tickets
                    </div>
                  </div>
                  <div className="flex  gap-1">
                    <MdDateRange style={{ color: "#2176E3" }} />
                    <div className="text-[#2176E3] text-[16px]">
                      Change travel dates
                    </div>
                  </div>
                  <hr />
                  Submit refund request
                  <div className="flex  gap-1">
                    <img src={cancelticket} alt="" />
                    <div className="text-[#2176E3] text-[16px]">
                      Flight got delayed
                    </div>
                  </div>
                  <div className="flex items-start gap-1">
                    <img src={cancelticket} alt="" />
                    <div className="text-[#2176E3] text-[16px]">
                      Flight got cancelled by the Airline (full-refund)
                    </div>
                  </div>
                  <div className="flex items-start gap-1">
                    <img src={cancelticket} alt="" />
                    <div className="text-[#2176E3] text-[16px]">
                      No-show (Now Refund, Only Taxes Refund)
                    </div>
                  </div>
                  <div className="flex items-start gap-1">
                    <img src={cancelticket} alt="" />
                    <div className="text-[#2176E3] text-[16px]">
                      Refer to other reasons
                    </div>
                  </div>
                  <hr />
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Flightbookingconfirmed;
