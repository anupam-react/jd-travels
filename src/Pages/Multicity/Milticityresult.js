import upward from "../../Assets/oneway/upward.svg";
import departurelogo from "../../Assets/oneway/departurelogo.svg";
import airindia from "../../Assets/oneway/airindia.svg";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
const Milticityresult = () => {
  return (
    <div className="pt-10">
      <div className="bg-[#D9D9D93D] relative w-[80%px] rounded-xl pb-10 mb-10 ">
      <div className="absolute w-full top-[-3rem] px-[5rem]">
          <div className="w-full bg-white shadow-xl rounded-2xl pt-5 p-5">
            <div className="flex mt-5 gap-4">
              <div className="w-[128px] h-[40px] bg-[#B6C2D224] flex justify-center items-center gap-2 rounded-lg">
                <input type="radio" />
                one way
              </div>

              <div className="w-[128px] h-[40px] bg-[#B6C2D224]  flex justify-center items-center gap-2 rounded-lg">
                <input type="radio" />
                Round Trip
              </div>
              <div className="w-[128px] h-[40px] bg-[#FFC10E24] text-[#FFC10E]  flex justify-center items-center gap-2 rounded-lg">
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
            <div className="px-3 h-[40px] font-semibold rounded-lg bg-[#EFEFEF] mt-4 flex justify-center items-center">
              <div className="w-[130px] h-[28px] flex justify-center items-center bg-[#FFC10E] rounded-lg">
              BLR-IXC
              </div>
              <div className="w-[130px] h-[28px] flex justify-center items-center  rounded-lg">
              IXC-DEL
              </div>
              <div className="w-[130px] h-[28px] flex justify-center items-center  rounded-lg">
              DEL-BOX
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
            <div className="rounded-3xl bg-white">
              <div className="flex justify-between p-5 items-center">
                <div>
                  <span className="text-[12px]">Multiple Airlines</span>
                  <div className="text-[20px] font-semibold">
                    AirAsia, IndiGo, SpiceJet
                  </div>
                </div>
                <div className="bg-[#FFF6DD] w-[137px] h-[36px] flex justify-center items-center rounded-3xl">
                  56h 20m
                </div>
                <div className="flex gap-2">
                  <div className="flex flex-col">
                    <span className="text-[20px] font-semibold">₹ 47,999</span>
                    <span className="text-[12px]">per traveller</span>
                  </div>
                  <Link to="/Milticity/bookingdetails">
                    <div className="w-[144px] h-[36px] text-[16px] border border-[#FFC10E] flex justify-center items-center font-semibold bg-[#EFEFEF] rounded-3xl">
                    View Prices <FaChevronDown color="black" />
                    </div>
                  </Link>
                </div>
              </div>
              <hr className="p-5" />
              <div>
                <div className="flex pl-5 gap-2 font-semibold">
                  {" "}
                  <span className="font-[500] text-[#4F4A3D]">Trip 1</span>New Delhi to
                  Bengaluru | Mon, 19 Jun
                </div>
                <div className="w-full h-[103px]   flex justify-around items-center">
                  <div className="w-[133px] h-[45px] flex items-center gap-1">
                    <div>
                      <img
                        src={airindia}
                        alt=""
                        className="w-[32px] h-[32px]"
                      />
                    </div>
                      <div className="font-semibold text-[18px] ml-2">Air India</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-[20px]">13:35</div>
                    <div className="text-[14px]">Bengaluru</div>
                  </div>
                  <div className=" border-[#DEDEDE] border w-[272px] h-[52px] rounded-3xl flex justify-center items-center flex-col">
                    <div className="font-semibold text-[14px]">4h 04m</div>
                    <div className="text-[12px] text-[#EB5757]">
                      1 Stop via Pune - Dabolim Airport
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-[20px]">13:35</div>
                    <div className="text-[14px]">Bengaluru</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex pl-5 gap-2 font-semibold">
                  {" "}
                  <span className="font-[500] text-[#4F4A3D]">Trip 2</span>Bengaluru to Bangkok | Thu, 22 Jun
                </div>
                <div className="w-full h-[103px]   flex justify-around items-center">
                  <div className="w-[133px] h-[45px] flex items-center gap-1">
                    <div>
                      <img
                        src={airindia}
                        alt=""
                        className="w-[32px] h-[32px]"
                      />
                    </div>
                      <div className="font-semibold text-[18px] ml-2">Air India</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-[20px]">13:35</div>
                    <div className="text-[14px]">Bengaluru</div>
                  </div>
                  <div className=" border-[#DEDEDE] border w-[272px] h-[52px] rounded-3xl flex justify-center items-center flex-col">
                    <div className="font-semibold text-[14px]">4h 04m</div>
                    <div className="text-[12px] text-[#EB5757]">
                      1 Stop via Pune - Dabolim Airport
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-[20px]">13:35</div>
                    <div className="text-[14px]">Bengaluru</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex pl-5 gap-2 font-semibold">
                  {" "}
                  <span className="font-[500] text-[#4F4A3D]">Trip 3</span>Bangkok to Mumbai | Wed, 28 Jun
                </div>
                <div className="w-full h-[103px]   flex justify-around items-center">
                  <div className="w-[133px] h-[45px] flex items-center gap-1">
                    <div>
                      <img
                        src={airindia}
                        alt=""
                        className="w-[32px] h-[32px]"
                      />
                    </div>
                      <div className="font-semibold text-[18px] ml-2">Air India</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-[20px]">13:35</div>
                    <div className="text-[14px]">Bengaluru</div>
                  </div>
                  <div className=" border-[#DEDEDE] border w-[272px] h-[52px] rounded-3xl flex justify-center items-center flex-col">
                    <div className="font-semibold text-[14px]">4h 04m</div>
                    <div className="text-[12px] text-[#EB5757]">
                      1 Stop via Pune - Dabolim Airport
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-[20px]">13:35</div>
                    <div className="text-[14px]">Bengaluru</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex pl-5 gap-2 font-semibold">
                  {" "}
                  <span className="font-[500] text-[#4F4A3D]">Trip 4</span>Mumbai to New Delhi | Wed, 5 Jul
                </div>
                <div className="w-full h-[103px]   flex justify-around items-center">
                  <div className="w-[133px] h-[45px] flex items-center gap-1">
                    <div>
                      <img
                        src={airindia}
                        alt=""
                        className="w-[32px] h-[32px]"
                      />
                    </div>
                      <div className="font-semibold text-[18px] ml-2">Air India</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-[20px]">13:35</div>
                    <div className="text-[14px]">Bengaluru</div>
                  </div>
                  <div className=" border-[#DEDEDE] border w-[272px] h-[52px] rounded-3xl flex justify-center items-center flex-col">
                    <div className="font-semibold text-[14px]">4h 04m</div>
                    <div className="text-[12px] text-[#EB5757]">
                      1 Stop via Pune - Dabolim Airport
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-[20px]">13:35</div>
                    <div className="text-[14px]">Bengaluru</div>
                  </div>
                </div>
              </div>
             
              <hr className="py-2" />
              <div className="flex justify-between pl-5 pr-5 pb-5">
                <div className="text-[#2D9D4C] underline text-[16px] flex items-center">
                  Partially Refundable <FaChevronDown />
                </div>
                <div className=" flex underline text-[16px] items-center">
                  Flight Details <FaChevronDown />
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-white mt-6">
              <div className="flex justify-between p-5 items-center">
                <div>
                  <span className="text-[12px]">Multiple Airlines</span>
                  <div className="text-[20px] font-semibold">
                    AirAsia, IndiGo, SpiceJet
                  </div>
                </div>
                <div className="bg-[#FFF6DD] w-[137px] h-[36px] flex justify-center items-center rounded-3xl">
                  56h 20m
                </div>
                <div className="flex gap-2">
                  <div className="flex flex-col">
                    <span className="text-[20px] font-semibold">₹ 47,999</span>
                    <span className="text-[12px]">per traveller</span>
                  </div>
                  <Link to="/Milticity/bookingdetails">
                    <div className="w-[144px] h-[36px] text-[16px] border border-[#FFC10E] flex justify-center items-center font-semibold bg-[#EFEFEF] rounded-3xl">
                    View Prices <FaChevronDown color="black" />
                    </div>
                  </Link>
                </div>
              </div>
              <hr className="p-5" />
              <div>
                <div className="flex pl-5 gap-2 font-semibold">
                  {" "}
                  <span className="font-[500] text-[#4F4A3D]">Trip 1</span>New Delhi to
                  Bengaluru | Mon, 19 Jun
                </div>
                <div className="w-full h-[103px]   flex justify-around items-center">
                  <div className="w-[133px] h-[45px] flex items-center gap-1">
                    <div>
                      <img
                        src={airindia}
                        alt=""
                        className="w-[32px] h-[32px]"
                      />
                    </div>
                      <div className="font-semibold text-[18px] ml-2">Air India</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-[20px]">13:35</div>
                    <div className="text-[14px]">Bengaluru</div>
                  </div>
                  <div className=" border-[#DEDEDE] border w-[272px] h-[52px] rounded-3xl flex justify-center items-center flex-col">
                    <div className="font-semibold text-[14px]">4h 04m</div>
                    <div className="text-[12px] text-[#EB5757]">
                      1 Stop via Pune - Dabolim Airport
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-[20px]">13:35</div>
                    <div className="text-[14px]">Bengaluru</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex pl-5 gap-2 font-semibold">
                  {" "}
                  <span className="font-[500] text-[#4F4A3D]">Trip 2</span>Bengaluru to Bangkok | Thu, 22 Jun
                </div>
                <div className="w-full h-[103px]   flex justify-around items-center">
                  <div className="w-[133px] h-[45px] flex items-center gap-1">
                    <div>
                      <img
                        src={airindia}
                        alt=""
                        className="w-[32px] h-[32px]"
                      />
                    </div>
                      <div className="font-semibold text-[18px] ml-2">Air India</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-[20px]">13:35</div>
                    <div className="text-[14px]">Bengaluru</div>
                  </div>
                  <div className=" border-[#DEDEDE] border w-[272px] h-[52px] rounded-3xl flex justify-center items-center flex-col">
                    <div className="font-semibold text-[14px]">4h 04m</div>
                    <div className="text-[12px] text-[#EB5757]">
                      1 Stop via Pune - Dabolim Airport
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-[20px]">13:35</div>
                    <div className="text-[14px]">Bengaluru</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex pl-5 gap-2 font-semibold">
                  {" "}
                  <span className="font-[500] text-[#4F4A3D]">Trip 3</span>Bangkok to Mumbai | Wed, 28 Jun
                </div>
                <div className="w-full h-[103px]   flex justify-around items-center">
                  <div className="w-[133px] h-[45px] flex items-center gap-1">
                    <div>
                      <img
                        src={airindia}
                        alt=""
                        className="w-[32px] h-[32px]"
                      />
                    </div>
                      <div className="font-semibold text-[18px] ml-2">Air India</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-[20px]">13:35</div>
                    <div className="text-[14px]">Bengaluru</div>
                  </div>
                  <div className=" border-[#DEDEDE] border w-[272px] h-[52px] rounded-3xl flex justify-center items-center flex-col">
                    <div className="font-semibold text-[14px]">4h 04m</div>
                    <div className="text-[12px] text-[#EB5757]">
                      1 Stop via Pune - Dabolim Airport
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-[20px]">13:35</div>
                    <div className="text-[14px]">Bengaluru</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex pl-5 gap-2 font-semibold">
                  {" "}
                  <span className="font-[500] text-[#4F4A3D]">Trip 4</span>Mumbai to New Delhi | Wed, 5 Jul
                </div>
                <div className="w-full h-[103px]   flex justify-around items-center">
                  <div className="w-[133px] h-[45px] flex items-center gap-1">
                    <div>
                      <img
                        src={airindia}
                        alt=""
                        className="w-[32px] h-[32px]"
                      />
                    </div>
                      <div className="font-semibold text-[18px] ml-2">Air India</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-[20px]">13:35</div>
                    <div className="text-[14px]">Bengaluru</div>
                  </div>
                  <div className=" border-[#DEDEDE] border w-[272px] h-[52px] rounded-3xl flex justify-center items-center flex-col">
                    <div className="font-semibold text-[14px]">4h 04m</div>
                    <div className="text-[12px] text-[#EB5757]">
                      1 Stop via Pune - Dabolim Airport
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-[20px]">13:35</div>
                    <div className="text-[14px]">Bengaluru</div>
                  </div>
                </div>
              </div>
             
              <hr className="py-2" />
              <div className="flex justify-between pl-5 pr-5 pb-5">
                <div className="text-[#2D9D4C] underline text-[16px] flex items-center">
                  Partially Refundable <FaChevronDown />
                </div>
                <div className=" flex underline text-[16px] items-center">
                  Flight Details <FaChevronDown />
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-white mt-6">
              <div className="flex justify-between p-5 items-center">
                <div>
                  <span className="text-[12px]">Multiple Airlines</span>
                  <div className="text-[20px] font-semibold">
                    AirAsia, IndiGo, SpiceJet
                  </div>
                </div>
                <div className="bg-[#FFF6DD] w-[137px] h-[36px] flex justify-center items-center rounded-3xl">
                  56h 20m
                </div>
                <div className="flex gap-2">
                  <div className="flex flex-col">
                    <span className="text-[20px] font-semibold">₹ 47,999</span>
                    <span className="text-[12px]">per traveller</span>
                  </div>
                  <Link to="/Milticity/bookingdetails">
                    <div className="w-[144px] h-[36px] text-[16px] border border-[#FFC10E] flex justify-center items-center font-semibold bg-[#EFEFEF] rounded-3xl">
                    View Prices <FaChevronDown color="black" />
                    </div>
                  </Link>
                </div>
              </div>
              <hr className="p-5" />
              <div>
                <div className="flex pl-5 gap-2 font-semibold">
                  {" "}
                  <span className="font-[500] text-[#4F4A3D]">Trip 1</span>New Delhi to
                  Bengaluru | Mon, 19 Jun
                </div>
                <div className="w-full h-[103px]   flex justify-around items-center">
                  <div className="w-[133px] h-[45px] flex items-center gap-1">
                    <div>
                      <img
                        src={airindia}
                        alt=""
                        className="w-[32px] h-[32px]"
                      />
                    </div>
                      <div className="font-semibold text-[18px] ml-2">Air India</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-[20px]">13:35</div>
                    <div className="text-[14px]">Bengaluru</div>
                  </div>
                  <div className=" border-[#DEDEDE] border w-[272px] h-[52px] rounded-3xl flex justify-center items-center flex-col">
                    <div className="font-semibold text-[14px]">4h 04m</div>
                    <div className="text-[12px] text-[#EB5757]">
                      1 Stop via Pune - Dabolim Airport
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-[20px]">13:35</div>
                    <div className="text-[14px]">Bengaluru</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex pl-5 gap-2 font-semibold">
                  {" "}
                  <span className="font-[500] text-[#4F4A3D]">Trip 2</span>Bengaluru to Bangkok | Thu, 22 Jun
                </div>
                <div className="w-full h-[103px]   flex justify-around items-center">
                  <div className="w-[133px] h-[45px] flex items-center gap-1">
                    <div>
                      <img
                        src={airindia}
                        alt=""
                        className="w-[32px] h-[32px]"
                      />
                    </div>
                      <div className="font-semibold text-[18px] ml-2">Air India</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-[20px]">13:35</div>
                    <div className="text-[14px]">Bengaluru</div>
                  </div>
                  <div className=" border-[#DEDEDE] border w-[272px] h-[52px] rounded-3xl flex justify-center items-center flex-col">
                    <div className="font-semibold text-[14px]">4h 04m</div>
                    <div className="text-[12px] text-[#EB5757]">
                      1 Stop via Pune - Dabolim Airport
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-[20px]">13:35</div>
                    <div className="text-[14px]">Bengaluru</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex pl-5 gap-2 font-semibold">
                  {" "}
                  <span className="font-[500] text-[#4F4A3D]">Trip 3</span>Bangkok to Mumbai | Wed, 28 Jun
                </div>
                <div className="w-full h-[103px]   flex justify-around items-center">
                  <div className="w-[133px] h-[45px] flex items-center gap-1">
                    <div>
                      <img
                        src={airindia}
                        alt=""
                        className="w-[32px] h-[32px]"
                      />
                    </div>
                      <div className="font-semibold text-[18px] ml-2">Air India</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-[20px]">13:35</div>
                    <div className="text-[14px]">Bengaluru</div>
                  </div>
                  <div className=" border-[#DEDEDE] border w-[272px] h-[52px] rounded-3xl flex justify-center items-center flex-col">
                    <div className="font-semibold text-[14px]">4h 04m</div>
                    <div className="text-[12px] text-[#EB5757]">
                      1 Stop via Pune - Dabolim Airport
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-[20px]">13:35</div>
                    <div className="text-[14px]">Bengaluru</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex pl-5 gap-2 font-semibold">
                  {" "}
                  <span className="font-[500] text-[#4F4A3D]">Trip 4</span>Mumbai to New Delhi | Wed, 5 Jul
                </div>
                <div className="w-full h-[103px]   flex justify-around items-center">
                  <div className="w-[133px] h-[45px] flex items-center gap-1">
                    <div>
                      <img
                        src={airindia}
                        alt=""
                        className="w-[32px] h-[32px]"
                      />
                    </div>
                      <div className="font-semibold text-[18px] ml-2">Air India</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-[20px]">13:35</div>
                    <div className="text-[14px]">Bengaluru</div>
                  </div>
                  <div className=" border-[#DEDEDE] border w-[272px] h-[52px] rounded-3xl flex justify-center items-center flex-col">
                    <div className="font-semibold text-[14px]">4h 04m</div>
                    <div className="text-[12px] text-[#EB5757]">
                      1 Stop via Pune - Dabolim Airport
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-[20px]">13:35</div>
                    <div className="text-[14px]">Bengaluru</div>
                  </div>
                </div>
              </div>
             
              <hr className="py-2" />
              <div className="flex justify-between pl-5 pr-5 pb-5">
                <div className="text-[#2D9D4C] underline text-[16px] flex items-center">
                  Partially Refundable <FaChevronDown />
                </div>
                <div className=" flex underline text-[16px] items-center">
                  Flight Details <FaChevronDown />
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milticityresult;
