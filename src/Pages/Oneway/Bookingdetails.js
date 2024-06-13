import React from "react";
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
const Bookingdetails = () => {
  return (
    <div className="h-[2800px]">
      <div className="relative">
        <div className="h-[215px]  w-full rounded-3xl pl-20 pt-10 relative" style={{background: "linear-gradient(270.72deg, #FFC10E 8.92%, #FFD049 79.59%)"}}>
          <div className="font-bold text-[30px] text-[#1D1D1D]">Complete your booking</div>
        </div>
        <div className="flex gap-5 justify-center top-[8rem] left-0 right-0 absolute z-20">
          <div className="w-[70%]">
            <div className="box-shadow rounded-2xl bg-white pb-5 ">
              <div className="flex justify-between p-5">
                <div className="w-[256px] h-[76px]">
                  <div className="flex items-center font-semibold text-[24px] gap-4">
                    Bengaluru <IoArrowForward />
                    Jaipur
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="bg-[#FFC10E4D] text-[14px] font-[500] text-[#1D1D1D] h-[33px] rounded-lg px-2 flex justify-center items-center">
                      Sunday, May 28
                    </div>
                    <div className="flex text-[14px] items-center text-[#4F4A3D]">
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
              <div className="pl-4 pr-4">
                <div className="flex items-center gap-1 font-[500] text-[#1D1D1D]">
                  <img src={indigo} alt="" />
                  <div>IndiGo 6E 861</div>
                  <div className="bg-[#6B6B6B4D] h-[33px] w-[87px] rounded-lg flex justify-center items-center">
                    Economy
                  </div>
                </div>
                <div className="bg-[#F4F4F4] text-[14px] h-[137px] mt-2 rounded-lg flex justify-between items-center pl-2 pr-2">
                  <div className="flex gap-2">
                    <div className="h-[83px] w-[42px] flex flex-col justify-between">
                      <div className="font-bold mr-4">08:00</div>
                      <div className="font-bold mr-4">10:45</div>
                    </div>
                    <div>
                      <img src={distance} alt="" />
                    </div>
                    <div className="flex flex-col gap-3 text-[#1D1D1D] text-[14px]">
                      <div className="font-[500]">
                        <span className="font-bold">Bengaluru</span>{" "}
                        Bengaluru International Airport, Terminal 1
                      </div>
                      <div className="font-[500]">2h 45m</div>
                      <div className="font-[500]">
                        <span className="font-bold">New Delhi .</span>{" "}
                        Indira Gandhi International Airport, Terminal 1
                      </div>
                    </div>
                  </div>
                  <div className="flex h-[83px] gap-4">
                    <div>
                      <div className="text-[#4F4A3D]">Baggage</div>
                      <div className="font-bold">Adult</div>
                    </div>
                    <div>
                      <div className="text-[#4F4A3D]">Check-in</div>
                      <div className="font-bold w-[120px]">
                        15 Kgs
                        <br /> (1 piece only)
                      </div>
                    </div>
                    <div>
                      <div className="text-[#4F4A3D]">Cabin</div>
                      <div className="font-bold w-[120px]">
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
                          <span className="font-semibold">5</span> m Layover in
                          New Delhi
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
                <div className="flex items-center gap-1 text-[#1D1D1D]">
                  <img src={airlinace} alt="" />
                  <div className="font-[500]">Alliance Air 9I 831</div>
                  <div className="bg-[#6B6B6B4D] font-[500] h-[33px] w-[87px] rounded-lg flex justify-center items-center">
                    Economy
                  </div>
                </div>
                <div className="bg-[#F4F4F4] text-[14px] h-[137px] mt-2 rounded-lg flex justify-between items-center pl-2 pr-2">
                  <div className="flex gap-2">
                    <div className="h-[83px] w-[42px] flex flex-col justify-between">
                      <div className="font-bold mr-4">08:00</div>
                      <div className="font-bold mr-4">10:45</div>
                    </div>
                    <div>
                      <img src={distance} alt="" />
                    </div>
                    <div className="flex flex-col gap-3 text-[#1D1D1D] text-[14px]">
                      <div className="font-[500]">
                        <span className="font-bold">Bengaluru</span>{" "}
                        Bengaluru International Airport, Terminal 1
                      </div>
                      <div className="font-[500]">2h 45m</div>
                      <div className="font-[500]">
                        <span className="font-bold">New Delhi .</span>{" "}
                        Indira Gandhi International Airport, Terminal 1
                      </div>
                    </div>
                  </div>
                  <div className="flex h-[83px] gap-4">
                    <div>
                      <div className="text-[#4F4A3D]">Baggage</div>
                      <div className="font-bold">Adult</div>
                    </div>
                    <div>
                      <div className="text-[#4F4A3D]">Check-in</div>
                      <div className="font-bold w-[120px]">
                        15 Kgs
                        <br /> (1 piece only)
                      </div>
                    </div>
                    <div>
                      <div className="text-[#4F4A3D]">Cabin</div>
                      <div className="font-bold w-[120px]">
                        7 Kgs <br />
                        (1 piece only)
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#FFC10E4D] h-[40px] rounded-xl mt-2 text-[#1D1D1D] font-[500] pl-5 gap-2 flex items-center">
                  <img src={luggage} alt="" className="w-[24px] h-[24px]" />
                  If you wish to carry extra luggage, please add the same on the
                  next page
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
                    Mandatory check-list for passengers
                  </div>
                  <div className="mt-2">
                    . Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  </div>
                  <div className="mt-2">
                    . Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  </div>
                  <div className="mt-2">
                    . Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
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
                    State Guidelines
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
            <div className="box-shadow  rounded-2xl mt-5 pl-5 pr-5   pb-5 ">
              <div className="font-bold text-[22px] pt-5">
                Traveller Details
              </div>
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
              <div className="mt-2">
                <div className="flex gap-4">
                  <div>
                    <label>Traveller First Name</label>
                    <br />
                    <input
                      className="h-[57px] w-[225px] rounded-xl border-[#D9D9D9] border placeholder:pl-4"
                      placeholder="First Name"
                    />
                  </div>
                  <div>
                    <label>Traveller Surname</label>
                    <br />
                    <input
                      className="h-[57px] w-[225px] rounded-xl border-[#D9D9D9] border placeholder:pl-4"
                      placeholder="Traveller Surname"
                    />
                  </div>
                  <div>
                    <label>Traveller DOB</label>
                    <br />
                    <input
                      className="h-[57px] w-[225px] rounded-xl border-[#D9D9D9] border placeholder:pl-4"
                      placeholder="dd/mm/yyyy"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label>Gender</label>
                    <br />
                    <div>
                      <button className="h-[33px] bg-[#FFC10E] rounded-lg w-[63px]">
                        Male
                      </button>{" "}
                      <button className="h-[33px] bg-[#B6C2D224] rounded-lg w-[63px]">
                        Female
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mt-2">
                  <div>
                    <label>Infant First Name</label>
                    <br />
                    <input
                      className="h-[57px] w-[225px] rounded-xl border-[#D9D9D9] border placeholder:pl-4"
                      placeholder="Infant First Name"
                    />
                  </div>
                  <div>
                    <label>Infant Surname</label>
                    <br />
                    <input
                      className="h-[57px] w-[225px] rounded-xl border-[#D9D9D9] border placeholder:pl-4"
                      placeholder="Infant Surname"
                    />
                  </div>
                  <div>
                    <label>Traveller DOB</label>
                    <br />
                    <input
                      className="h-[57px] w-[225px] rounded-xl border-[#D9D9D9] border placeholder:pl-4"
                      placeholder="dd/mm/yyyy"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label>Gender</label>
                    <br />
                    <div>
                      <button className="h-[33px] bg-[#FFC10E] rounded-lg w-[63px]">
                        Male
                      </button>{" "}
                      <button className="h-[33px] bg-[#B6C2D224] rounded-lg w-[63px]">
                        Female
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-[#FFC10E4D] h-[40px] rounded-xl mt-2 text-[#1D1D1D] pl-5 gap-2 flex items-center">
                  <input type="checkbox" />
                  <span className="font-semibold">
                    Add these travellers to My Traveller List.
                  </span>
                  You won’t have to fill traveller info on your next visit.
                </div>
                <div className="mt-5 font-semibold">
                  Booking details will be sent to
                </div>
                <div className="flex gap-4 mt-2">
                  <div>
                    <label>Country code</label>
                    <br />
                    <input
                      className="h-[57px] w-[225px] rounded-xl border-[#D9D9D9] border placeholder:pl-4"
                      placeholder="Country code"
                    />
                  </div>
                  <div>
                    <label>Mobile No</label>
                    <br />
                    <input
                      className="h-[57px] w-[225px] rounded-xl border-[#D9D9D9] border placeholder:pl-4"
                      placeholder="Mobile No"
                    />
                  </div>
                  <div>
                    <label>Email</label>
                    <br />
                    <input
                      className="h-[57px] w-[225px] rounded-xl border-[#D9D9D9] border placeholder:pl-4"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="mt-5 font-semibold flex gap-2">
                  <input type="checkbox" />I have a GST number{" "}
                  <span className="text-[green]">(Optional) </span>
                </div>
                <div className="flex gap-4 mt-2">
                  <div>
                    <label>GST Number</label>
                    <br />
                    <input
                      className="h-[57px] w-[225px] rounded-xl border-[#D9D9D9] border placeholder:pl-4"
                      placeholder="GST Number"
                    />
                  </div>
                  <div>
                    <label>GST Name</label>
                    <br />
                    <input
                      className="h-[57px] w-[225px] rounded-xl border-[#D9D9D9] border placeholder:pl-4"
                      placeholder="GST Name"
                    />
                  </div>
                  <div>
                    <label>GST Email ID</label>
                    <br />
                    <input
                      className="h-[57px] w-[225px] rounded-xl border-[#D9D9D9] border placeholder:pl-4"
                      placeholder="GST Email ID"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <Link to="/Onewayresult/Bookingdetails/Seatbookoneway">
                    <button className="w-[242px] bg-[#FFC10E] flex justify-center items-center rounded-lg h-[61px]">
                      CONTINUE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="box-shadow  h-[97px] text-[22px] font-bold flex items-center rounded-2xl mt-5 pl-5 pr-5   ">
              Seats & Meals
            </div>
            <div className="box-shadow  h-[97px] text-[22px] font-bold flex items-center rounded-2xl mt-5 pl-5 pr-5   ">
              Add ons
            </div>
          </div>
          <div className="w-[22%] flex flex-col gap-5">
            <div className=" bg-[white] box-shadow  rounded-2xl px-6 py-4 flex flex-col gap-1">
              <div className="pt-4 font-semibold text-[20px]">FARE SUMMERY</div>

              <hr />
              <div className="flex justify-between text-[14px] my-2">
                <div>
                  <div className="text-[#4F4A3D] flex gap-1 font-[500]">
                    {" "}
                    <img src={addnew} alt="" />
                    Base Fare
                  </div>
                  <div className="text-[14px] text-[#4F4A3D] pt-2">
                    Adult(s) (1 X ₹ 9,071)
                  </div>
                </div>
                <div className="font-semibold">₹ 9,071</div>
              </div>
              <hr />

              <div className="flex justify-between text-[14px]  my-2">
                <div>
                  <div className="text-[#4F4A3D] flex gap-1 font-[500]">
                    {" "}
                    <img src={addnew} alt="" />
                    Taxes and Surcharges
                  </div>
                  <div className="text-[14px] text-[#4F4A3D] pt-2">
                    Airline Taxes and Surcharges
                  </div>
                </div>
                <div className="font-semibold">₹ 9,071</div>
              </div>
              <hr />

              <div className="flex justify-between text-[14px]  my-2">
                <div>
                  <div className="text-[#4F4A3D] flex gap-1 font-[500]">
                    {" "}
                    <img src={addnew} alt="" />
                    Other Services
                  </div>
                  <div className="text-[14px] text-[#4F4A3D] flex gap-1  pt-2">
                    Charity{" "}
                    <span className="text-[#2D9D4C] text-[13px] ml-2">REMOVE</span>
                  </div>
                </div>
                <div className="font-semibold">₹ 9,071</div>
              </div>
              <hr />
              <div className="flex justify-between">
                <div className="text-[#4F4A3D] text-[14px] font-semibold">Total Amount</div>
                <div className="font-semibold">₹ 10, 901</div>
              </div>
            </div>
            <div className=" bg-[white] box-shadow  h-[270px] rounded-2xl p-2  flex flex-col gap-1">
              <div className="pt-4 pl-2">
                <div className="flex flex-col gap-1">
                  <div className="flex">
                    <img src={gift} alt="" />
                    <div className="text-[20px] font-semibold pl-2">PROMO CODES</div>
                  </div>
                  <div className="text-[14px]">Payment Breakup</div>
                </div>
                <div className="mt-1">
                  <input
                    className="h-[50px] w-[225px] rounded-xl placeholder:text-black border-[#D9D9D9] border placeholder:pl-4"
                    placeholder="Enter Here"
                  />
                </div>
                <div className="flex flex-col gap-1 mt-1">
                  <div className="flex gap-1">
                    <input type="radio" />
                    <div className="text-[20px] font-semibold">Type 1</div>
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

export default Bookingdetails;
