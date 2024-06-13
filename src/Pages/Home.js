import React, { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slider1 from "../Assets/Slider/slider1.svg";
import slider2 from "../Assets/Slider/slider2.svg";
import slider3 from "../Assets/Slider/slider3.svg";
import arrow from "../Assets/Home/arrow.svg";
import { IoChevronForwardOutline } from "react-icons/io5";
import destination from "../Assets/Home/destination.svg";
import mumbai from "../Assets/Home/mumbai.svg";
import Kolkata from "../Assets/Home/kolkata.svg";
import Bangluru from "../Assets/Home/bangluru.svg";
import { IoIosArrowForward } from "react-icons/io";
import jdcredit from "../Assets/Home/jdcredit.svg";
import bestguide from "../Assets/Home/bestguide.svg";
import banner from "../Assets/Home/banner.svg";
import airlines from "../Assets/Home/airlines.svg";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const Home = () => {
  const [leavingfrompopup, setLeavingfrompopup] = useState(false);
  const [Headingto, setHeadingto] = useState(false);
  const [travelguest, setTravalguest] = useState(false);

  const [showDatePicker, setShowDatePicker] = useState(false);

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };
  const [selectedDiv, setSelectedDiv] = useState("One way");
  const [choosediv, setChoosediv] = useState("Flight");

  const popupRef = useRef(null);
  const headintToRef = useRef(null);
  const travelguestRef = useRef(null);
  const departuretRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        travelguestRef.current &&
        !travelguestRef.current.contains(event.target)
      ) {
        setTravalguest(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [travelguestRef]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        headintToRef.current &&
        !headintToRef.current.contains(event.target)
      ) {
        setHeadingto(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [headintToRef]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        departuretRef.current &&
        !departuretRef.current.contains(event.target)
      ) {
        setShowDatePicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [departuretRef]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setLeavingfrompopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleLeavingPopup = () => {
    setLeavingfrompopup(!leavingfrompopup);
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, right: "10px", zIndex: 1 }}
        onClick={onClick}
      >
        <span>&#8594;</span>
      </div>
    );
  };

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, left: "10px", zIndex: 1 }}
        onClick={onClick}
      >
        <span>&#8592;</span>
      </div>
    );
  };
  const settings = {
    className: "",
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <div className="relative">
        <Slider {...settings}>
          <div className="relative">
            <img src={slider1} alt="Slide 1" />
            <div class="absolute inset-0 flex  mt-[5rem] ml-20 justify-start h-[150px] leading-[58px]">
              <div class="text-white text-[54px] font-bold ">
                Up <br />
                and above
                <br />
                <div className="text-xl font-thin pt-2">
                  Time to fly where you heart belongs.
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={slider2} alt="Slide 2" />
            <div class="absolute inset-0 flex  mt-[5rem] ml-20 justify-start h-[150px] leading-[58px]">
              <div class="text-white text-[54px] font-bold ">
                Stay <br />
                And Enjoy
                <br />
                <div className="text-xl font-thin pt-2">
                  Time to Relax and unwind your body and mind.
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={slider3} alt="Slide 3" />
            <div class="absolute inset-0 flex  mt-[5rem] ml-20 justify-start h-[150px] leading-[58px]">
              <div class="text-white text-[54px] font-bold ">
                Stay <br />
                And Enjoy
                <br />
                <div className="text-xl font-thin pt-2">
                  Time to fly where you heart belongs.
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <div className="absolute top-[16rem] w-full flex items-center justify-center z-40">
          <div className="w-full mx-[80px] bg-white shadow-xl rounded-2xl pt-5 p-5 Montserrat">
            <div className="flex gap-10">
              <div
                className={`cursor-pointer ${
                  choosediv === "Flight"
                    ? "font-semibold text-[20px]font-semibold text-[20px] underline underline-offset-[1.5rem]"
                    : "font-semibold text-[20px]font-semibold text-[20px] "
                }`}
                onClick={() => setChoosediv("Flight")}
              >
                Flight
              </div>
              <div
                className={`cursor-pointer ${
                  choosediv === "Stay"
                    ? "font-semibold text-[20px]font-semibold text-[20px] underline underline-offset-[1.5rem]"
                    : "font-semibold text-[20px]font-semibold text-[20px]"
                }`}
                onClick={() => setChoosediv("Stay")}
              >
                Stay
              </div>
              <div
                className={`cursor-pointer ${
                  choosediv === "Holiday"
                    ? "font-semibold text-[20px]font-semibold text-[20px] underline underline-offset-[1.5rem]"
                    : "font-semibold text-[20px]font-semibold text-[20px]"
                }`}
                onClick={() => setChoosediv("Holiday")}
              >
                Holiday
              </div>
            </div>
            {/* <hr className="mt-4" /> */}

            {choosediv && (
              <div className="pt-5">
                {choosediv === "Flight" && (
                  <>
                    <div className="flex mt-5 gap-4">
                      <div
                        className={`cursor-pointer ${
                          selectedDiv === "One way"
                            ? "w-[128px] h-[40px] bg-[#FFC10E24] text-[#FFC10E] flex justify-center items-center gap-2 rounded-lg "
                            : "w-[128px] h-[40px] bg-[#B6C2D224] flex justify-center items-center gap-2 rounded-lg"
                        }`}
                        onClick={() => setSelectedDiv("One way")}
                      >
                        <div
                          className="w-[24px] h-[24px] rounded-full border-2 border-[#B6C2D2] bg-white"
                          style={{
                            borderColor:
                              selectedDiv === "One way" ? "white" : "#B6C2D2",
                            backgroundColor:
                              selectedDiv === "One way" ? "#FFC10E" : "white",
                           
                          }}
                        ></div>
                        One way
                      </div>

                      <div
                        className={`cursor-pointer ${
                          selectedDiv === "Round Trip"
                            ? "w-[128px] h-[40px] bg-[#FFC10E24] text-[#FFC10E] flex justify-center items-center gap-2 rounded-lg "
                            : "w-[128px] h-[40px] bg-[#B6C2D224] flex justify-center items-center gap-2 rounded-lg"
                        }`}
                        onClick={() => setSelectedDiv("Round Trip")}
                      >
                        <div
                          className="w-[24px] h-[24px] rounded-full border-2 border-[#B6C2D2] bg-white"
                          style={{
                            borderColor:
                              selectedDiv === "Round Trip"
                                ? "white"
                                : "#B6C2D2",
                            backgroundColor:
                              selectedDiv === "Round Trip"
                                ? "#FFC10E"
                                : "white",
                          }}
                        ></div>
                        Round Trip
                      </div>

                      <div
                        className={`cursor-pointer ${
                          selectedDiv === "Multi City"
                            ? "w-[128px] h-[40px] bg-[#FFC10E24] text-[#FFC10E] flex justify-center items-center gap-2 rounded-lg "
                            : "w-[128px] h-[40px] bg-[#B6C2D224] flex justify-center items-center gap-2 rounded-lg"
                        }`}
                        onClick={() => setSelectedDiv("Multi City")}
                      >
                        <div
                          className="w-[24px] h-[24px] rounded-full border-2 border-[#B6C2D2] bg-white"
                          style={{
                            borderColor:
                              selectedDiv === "Multi City"
                                ? "white"
                                : "#B6C2D2",
                            backgroundColor:
                              selectedDiv === "Multi City"
                                ? "#FFC10E"
                                : "white",
                          }}
                        ></div>
                        Multi City
                      </div>
                    </div>
                    {selectedDiv && (
                      <div>
                        {selectedDiv === "One way" && (
                          <>
                            <div className="mt-5 flex justify-between items-center ">
                              <div className="flex gap-4 items-center">
                                <div
                                  className="w-[178px] h-[63px] cursor-pointer"
                                  onClick={toggleLeavingPopup}
                                >
                                  <div className="text-[24px] font-semibold">
                                    From
                                  </div>
                                  <div className="text-[16px]">
                                    Leaving from?
                                  </div>
                                </div>
                                {leavingfrompopup && (
                                  <div
                                    ref={popupRef}
                                    className="absolute top-2 w-[348px]  p-2 flex flex-col gap-4 rounded-xl bg-white shadow-2xl  z-50"
                                  >
                                    <div>
                                      <div className="text-[24px] font-semibold">
                                        {" "}
                                        From
                                      </div>
                                      <div>Leaving from?</div>
                                    </div>
                                    <hr className="border-[#FFC10E] " />
                                    <div>
                                      <div className="relative ">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                          <span className=" p-2.5 ml-[-3px] rounded-tl rounded-bl text-white">
                                            <FaSearch
                                              style={{ color: "black" }}
                                            />
                                          </span>
                                        </div>
                                        <input
                                          type="text"
                                          className="placeholder: ml-2 block w-[320px] bg-[#FFF6DD] rounded-3xl  py-1.5 pl-10 pr-4 text-gray-900   placeholder:text-gray-400    sm:text-sm sm:leading-6"
                                          placeholder="Enter City Name"
                                        />
                                      </div>
                                      <div className="w-[320px] flex flex-col gap-2 mt-4">
                                        <div className="flex justify-between">
                                          <div className="flex flex-col">
                                            <span className="text-[#FFC10E]">
                                              Detect Current Location
                                            </span>
                                            <span className="text-[#00000085] text-[12px]">
                                              Location Permission Required
                                            </span>
                                          </div>
                                          <div className="flex items-center">
                                            --
                                          </div>
                                        </div>
                                        <div className="flex justify-between">
                                          <div className="flex flex-col">
                                            <span className="">
                                              Chennai, India
                                            </span>
                                            <span className="text-[#00000085] text-[12px]">
                                              Chennai International Airport
                                            </span>
                                          </div>
                                          <div className="">MAA</div>
                                        </div>
                                        <div className="flex justify-between">
                                          <div className="flex flex-col">
                                            <span className="">
                                              Bangalore, India
                                            </span>
                                            <span className="text-[#00000085] text-[12px]">
                                              Chennai International Airport
                                            </span>
                                          </div>
                                          <div className="">MAA</div>
                                        </div>
                                        <div className="flex justify-between">
                                          <div className="flex flex-col">
                                            <span className="">
                                              Bangalore, India
                                            </span>
                                            <span className="text-[#00000085] text-[12px]">
                                              Chennai International Airport
                                            </span>
                                          </div>
                                          <div className="">MAA</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                                <div
                                  className="w-[198px] h-[63px] cursor-pointer"
                                  onClick={() => setHeadingto(true)}
                                >
                                  <div className="text-[24px] font-semibold">
                                    To
                                  </div>
                                  <div className="text-[16px]">
                                    Where are you heading?
                                  </div>
                                </div>
                                {Headingto && (
                                  <div
                                    ref={headintToRef}
                                    className="absolute  top-2 ml-[10rem] w-[348px]  p-2 flex flex-col gap-4 rounded-xl bg-white shadow-2xl  z-50"
                                  >
                                    <div>
                                      <div className="text-[24px] font-semibold">
                                        To
                                      </div>
                                      <div>Where are you heading?</div>
                                    </div>
                                    <hr className="border-[#FFC10E] " />
                                    <div>
                                      <div className="relative ">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                          <span className=" p-2.5 ml-[-3px] rounded-tl rounded-bl text-white">
                                            <FaSearch
                                              style={{ color: "black" }}
                                            />
                                          </span>
                                        </div>
                                        <input
                                          type="text"
                                          className="placeholder: ml-2 block w-[320px] bg-[#FFF6DD] rounded-3xl  py-1.5 pl-10 pr-4 text-gray-900   placeholder:text-gray-400    sm:text-sm sm:leading-6"
                                          placeholder="Enter City Name"
                                        />
                                      </div>
                                      <div className="w-[320px] flex flex-col gap-2 mt-4">
                                        <div className="flex justify-between">
                                          <div className="flex flex-col">
                                            <span className="">
                                              Chennai, India
                                            </span>
                                            <span className="text-[#00000085] text-[12px]">
                                              Chennai International Airport
                                            </span>
                                          </div>
                                          <div className="">MAA</div>
                                        </div>
                                        <div className="flex justify-between">
                                          <div className="flex flex-col">
                                            <span className="">
                                              Bangalore, India
                                            </span>
                                            <span className="text-[#00000085] text-[12px]">
                                              Chennai International Airport
                                            </span>
                                          </div>
                                          <div className="">MAA</div>
                                        </div>
                                        <div className="flex justify-between">
                                          <div className="flex flex-col">
                                            <span className="">
                                              Bangalore, India
                                            </span>
                                            <span className="text-[#00000085] text-[12px]">
                                              Chennai International Airport
                                            </span>
                                          </div>
                                          <div className="">MAA</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                                <div
                                  className="w-[178px] h-[63px]"
                                  onClick={toggleDatePicker}
                                >
                                  <div className="text-[24px] font-semibold">
                                    Departure
                                  </div>
                                  <div className="text-[16px]">Add Date</div>
                                </div>

                                {showDatePicker && (
                                  <div ref={departuretRef} className="absolute  top-2 ml-[25rem]   p-5 flex flex-col gap-4 rounded-xl bg-white shadow-2xl  z-50">
                                    <div className="font-semibold text-[24px]">
                                      Departure
                                    </div>
                                    <hr className="border-[#FFC10E] " />
                                    <Calendar />
                                    {/* <DatePicker
                                      selected={startDate}
                                      onChange={(date) => setStartDate(date)}
                                    /> */}
                                  </div>
                                )}
                                <div
                                  className="w-[178px] cursor-pointer h-[63px]"
                                  onClick={() => setTravalguest(true)}
                                >
                                  <div className="text-[24px] font-semibold">
                                    Travelers
                                  </div>
                                  <div className="text-[16px]">Add Guests</div>
                                </div>
                                {travelguest && (
                                  <div
                                    ref={travelguestRef}
                                    className="absolute  top-2 ml-[30rem]   p-5 flex flex-col gap-4 rounded-xl bg-white shadow-2xl  z-50"
                                  >
                                    <div>
                                      <div className="text-[24px] font-semibold">
                                        Travellers
                                      </div>
                                      <div>Add Guests</div>
                                    </div>
                                    <hr className="border-[#FFC10E] " />
                                    <div className="pl-4 pr-4">
                                      <div>
                                        <div>
                                          <div className="text-[14px] font-semibold">
                                            Adults (12yr+){" "}
                                          </div>
                                          <div className="text-[12px] text-[#00000085]">
                                            On the day of travel
                                          </div>
                                        </div>

                                        <ul className="flex  mt-2">
                                          <li className="bg-[#FFC10E] flex justify-center items-center rounded-full w-[42px] h-[42px]">
                                            1
                                          </li>
                                          <li className="flex justify-center items-center rounded-full w-[42px] h-[42px]">
                                            2
                                          </li>
                                          <li className="flex justify-center items-center rounded-full w-[42px] h-[42px]">
                                            3
                                          </li>
                                          <li className="flex justify-center items-center rounded-full w-[42px] h-[42px]">
                                            4
                                          </li>
                                          <li className="flex justify-center items-center rounded-full w-[42px] h-[42px]">
                                            5
                                          </li>
                                          <li className="flex justify-center items-center rounded-full w-[42px] h-[42px]">
                                            6
                                          </li>
                                          <li className="flex justify-center items-center rounded-full w-[42px] h-[42px]">
                                            7
                                          </li>
                                          <li className="flex justify-center items-center rounded-full w-[42px] h-[42px]">
                                            8
                                          </li>
                                          <li className="flex justify-center items-center rounded-full w-[42px] h-[42px]">
                                            9
                                          </li>
                                          <li className="flex justify-center items-center rounded-full w-[42px] h-[42px]">
                                            9+
                                          </li>
                                        </ul>
                                      </div>

                                      <div className="flex mt-2 gap-2">
                                        <div>
                                          <div>
                                            <div className="text-[14px] font-semibold">
                                              Children (2yr-12yr)
                                            </div>
                                            <div className="text-[12px] text-[#00000085]">
                                              On the day of travel
                                            </div>
                                          </div>

                                          <ul className="flex  mt-2">
                                            <li className="bg-[#FFC10E] flex justify-center items-center rounded-full w-[42px] h-[42px]">
                                              1
                                            </li>
                                            <li className="flex justify-center items-center rounded-full w-[42px] h-[42px]">
                                              2
                                            </li>
                                            <li className="flex justify-center items-center rounded-full w-[42px] h-[42px]">
                                              3
                                            </li>
                                            <li className="flex justify-center items-center rounded-full w-[42px] h-[42px]">
                                              4
                                            </li>
                                            <li className="flex justify-center items-center rounded-full w-[42px] h-[42px]">
                                              5
                                            </li>
                                            <li className="flex justify-center items-center rounded-full w-[42px] h-[42px]">
                                              6
                                            </li>

                                            <li className="flex justify-center items-center rounded-full w-[42px] h-[42px]">
                                              6+
                                            </li>
                                          </ul>
                                        </div>
                                        <div>
                                          <div>
                                            <div className="text-[14px] font-semibold">
                                              Infants (Below 2yr)
                                            </div>
                                            <div className="text-[12px] text-[#00000085]">
                                              On the day of travel
                                            </div>
                                          </div>

                                          <ul className="flex  mt-2">
                                            <li className="bg-[#FFC10E] flex justify-center items-center rounded-full w-[42px] h-[42px]">
                                              1
                                            </li>
                                            <li className="flex justify-center items-center rounded-full w-[42px] h-[42px]">
                                              2
                                            </li>
                                            <li className="flex justify-center items-center rounded-full w-[42px] h-[42px]">
                                              3
                                            </li>
                                            <li className="flex justify-center items-center rounded-full w-[42px] h-[42px]">
                                              4
                                            </li>
                                            <li className="flex justify-center items-center rounded-full w-[42px] h-[42px]">
                                              5
                                            </li>
                                            <li className="flex justify-center items-center rounded-full w-[42px] h-[42px]">
                                              6
                                            </li>

                                            <li className="flex justify-center items-center rounded-full w-[42px] h-[42px]">
                                              6+
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="mt-2">
                                        <div className="font-semibold text-[14px]">
                                          Choose Travel class
                                        </div>
                                        <div className="mt-2 flex gap-2">
                                          <div className="w-[117px] h-[40px] bg-[#B6C2D224] flex justify-center items-center gap-1 rounded-lg">
                                            <div className="w-[24px] h-[24px] border-2 border-[#B6C2D2] rounded-full bg-white"></div>
                                            Economy
                                          </div>
                                          <div className="w-[188px] h-[40px] bg-[#B6C2D224] flex justify-center items-center gap-1 rounded-lg">
                                            <div className="w-[24px] h-[24px] border-2 border-[#B6C2D2] rounded-full bg-white"></div>
                                            Premium Economy
                                          </div>
                                          <div className="w-[117px] h-[40px] bg-[#B6C2D224] flex justify-center items-center gap-1 rounded-lg">
                                            <div className="w-[24px] h-[24px] border-2 border-[#B6C2D2] rounded-full bg-white"></div>
                                            Business
                                          </div>
                                          <div className="w-[122px] h-[40px] bg-[#B6C2D224] flex justify-center items-center gap-1 rounded-lg">
                                            <div className="w-[24px] h-[24px] border-2 border-[#B6C2D2] rounded-full bg-white"></div>
                                            First Class
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div>
                                <Link to="/Onewayresult">
                                  <div className="bg-[#FFC10E] h-[40px] w-[40px] flex justify-center items-center rounded-full">
                                    <IoSearch
                                      style={{ color: "white" }}
                                      size={20}
                                    />
                                  </div>
                                </Link>
                              </div>
                            </div>
                              <div className="mt-8 flex gap-4 ">
                      <div className="flex gap-2">
                        <input type="checkbox" />
                        Direct flight only
                      </div>
                      <div className="flex gap-2 ">
                        <input type="checkbox" />
                        Vistara
                      </div>

                      <div className="flex gap-2 ">
                        <input type="checkbox" />
                        Indigo
                      </div>

                      <div className="flex gap-2 ">
                        <input type="checkbox" />
                        Air Asia
                      </div>
                      <div className="flex gap-2 ">
                        <input type="checkbox" />
                        Air India{" "}
                      </div>
                      <div className="flex gap-2 ">
                        <input type="checkbox" />
                        Spicejet
                      </div>
                    </div>
                          </>
                        )}

                        {selectedDiv === "Round Trip" && (
                          <>
                            <div className="mt-5 flex justify-between items-center">
                              <div
                                className="w-[178px] h-[63px] cursor-pointer"
                                onClick={toggleLeavingPopup}
                              >
                                <div className="text-[24px] font-semibold">
                                  From
                                </div>
                                <div className="text-[16px]">Leaving from?</div>
                              </div>
                              {leavingfrompopup && (
                                <div
                                  ref={popupRef}
                                  className="absolute top-2 w-[348px]  p-2 flex flex-col gap-4 rounded-xl bg-white shadow-2xl  z-50"
                                >
                                  <div>
                                    <div className="text-[24px] font-semibold">
                                      {" "}
                                      From
                                    </div>
                                    <div>Leaving from?</div>
                                  </div>
                                  <hr className="border-[#FFC10E] " />
                                  <div>
                                    <div className="relative ">
                                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <span className=" p-2.5 ml-[-3px] rounded-tl rounded-bl text-white">
                                          <FaSearch
                                            style={{ color: "black" }}
                                          />
                                        </span>
                                      </div>
                                      <input
                                        type="text"
                                        className="placeholder: ml-2 block w-[320px] bg-[#FFF6DD] rounded-3xl  py-1.5 pl-10 pr-4 text-gray-900   placeholder:text-gray-400    sm:text-sm sm:leading-6"
                                        placeholder="Enter City Name"
                                      />
                                    </div>
                                    <div className="w-[320px] flex flex-col gap-2 mt-4">
                                      <div className="flex justify-between">
                                        <div className="flex flex-col">
                                          <span className="text-[#FFC10E]">
                                            Detect Current Location
                                          </span>
                                          <span className="text-[#00000085] text-[12px]">
                                            Location Permission Required
                                          </span>
                                        </div>
                                        <div className="flex items-center">
                                          --
                                        </div>
                                      </div>
                                      <div className="flex justify-between">
                                        <div className="flex flex-col">
                                          <span className="">
                                            Chennai, India
                                          </span>
                                          <span className="text-[#00000085] text-[12px]">
                                            Chennai International Airport
                                          </span>
                                        </div>
                                        <div className="">MAA</div>
                                      </div>
                                      <div className="flex justify-between">
                                        <div className="flex flex-col">
                                          <span className="">
                                            Bangalore, India
                                          </span>
                                          <span className="text-[#00000085] text-[12px]">
                                            Chennai International Airport
                                          </span>
                                        </div>
                                        <div className="">MAA</div>
                                      </div>
                                      <div className="flex justify-between">
                                        <div className="flex flex-col">
                                          <span className="">
                                            Bangalore, India
                                          </span>
                                          <span className="text-[#00000085] text-[12px]">
                                            Chennai International Airport
                                          </span>
                                        </div>
                                        <div className="">MAA</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              <div className="w-[198px] h-[63px]">
                                <div className="text-[24px] font-semibold">
                                  To
                                </div>
                                <div className="text-[16px]">
                                  Where are you heading?
                                </div>
                              </div>
                              <div className="w-[178px] h-[63px]">
                                <div className="text-[24px] font-semibold">
                                  Departure
                                </div>
                                <div className="text-[16px]">Add Date</div>
                              </div>
                              <div className="w-[178px] h-[63px]">
                                <div className="text-[24px] font-semibold">
                                  Return
                                </div>
                                <div className="text-[16px]">Add Date</div>
                              </div>
                              <div className="w-[178px] h-[63px]">
                                <div className="text-[24px] font-semibold">
                                  Travelers
                                </div>
                                <div className="text-[16px]">Add Guests</div>
                              </div>
                              <Link to="/Twowayresult">
                                <div className="bg-[#FFC10E] h-[40px] w-[40px] flex justify-center items-center rounded-full">
                                  <IoSearch
                                    style={{ color: "white" }}
                                    size={20}
                                  />
                                </div>
                              </Link>
                            </div>
                              <div className="mt-8 flex gap-4 ">
                      <div className="flex gap-2">
                        <input type="checkbox" />
                        Direct flight only
                      </div>
                      <div className="flex gap-2 ">
                        <input type="checkbox" />
                        Vistara
                      </div>

                      <div className="flex gap-2 ">
                        <input type="checkbox" />
                        Indigo
                      </div>

                      <div className="flex gap-2 ">
                        <input type="checkbox" />
                        Air Asia
                      </div>
                      <div className="flex gap-2 ">
                        <input type="checkbox" />
                        Air India{" "}
                      </div>
                      <div className="flex gap-2 ">
                        <input type="checkbox" />
                        Spicejet
                      </div>
                    </div>
                          </>
                        )}
                        {selectedDiv === "Multi City" && (
                          <>
                            <div className="mt-5 flex gap-4 items-center">
                              <div
                                className="w-[178px] h-[63px] cursor-pointer"
                                onClick={toggleLeavingPopup}
                              >
                                <div className="text-[24px] font-semibold">
                                  From
                                </div>
                                <div className="text-[16px]">Leaving from?</div>
                              </div>
                              {leavingfrompopup && (
                                <div
                                  ref={popupRef}
                                  className="absolute top-2 w-[348px]  p-2 flex flex-col gap-4 rounded-xl bg-white shadow-2xl  z-50"
                                >
                                  <div>
                                    <div className="text-[24px] font-semibold">
                                      {" "}
                                      From
                                    </div>
                                    <div>Leaving from?</div>
                                  </div>
                                  <hr className="border-[#FFC10E] " />
                                  <div>
                                    <div className="relative ">
                                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <span className=" p-2.5 ml-[-3px] rounded-tl rounded-bl text-white">
                                          <FaSearch
                                            style={{ color: "black" }}
                                          />
                                        </span>
                                      </div>
                                      <input
                                        type="text"
                                        className="placeholder: ml-2 block w-[320px] bg-[#FFF6DD] rounded-3xl  py-1.5 pl-10 pr-4 text-gray-900   placeholder:text-gray-400    sm:text-sm sm:leading-6"
                                        placeholder="Enter City Name"
                                      />
                                    </div>
                                    <div className="w-[320px] flex flex-col gap-2 mt-4">
                                      <div className="flex justify-between">
                                        <div className="flex flex-col">
                                          <span className="text-[#FFC10E]">
                                            Detect Current Location
                                          </span>
                                          <span className="text-[#00000085] text-[12px]">
                                            Location Permission Required
                                          </span>
                                        </div>
                                        <div className="flex items-center">
                                          --
                                        </div>
                                      </div>
                                      <div className="flex justify-between">
                                        <div className="flex flex-col">
                                          <span className="">
                                            Chennai, India
                                          </span>
                                          <span className="text-[#00000085] text-[12px]">
                                            Chennai International Airport
                                          </span>
                                        </div>
                                        <div className="">MAA</div>
                                      </div>
                                      <div className="flex justify-between">
                                        <div className="flex flex-col">
                                          <span className="">
                                            Bangalore, India
                                          </span>
                                          <span className="text-[#00000085] text-[12px]">
                                            Chennai International Airport
                                          </span>
                                        </div>
                                        <div className="">MAA</div>
                                      </div>
                                      <div className="flex justify-between">
                                        <div className="flex flex-col">
                                          <span className="">
                                            Bangalore, India
                                          </span>
                                          <span className="text-[#00000085] text-[12px]">
                                            Chennai International Airport
                                          </span>
                                        </div>
                                        <div className="">MAA</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              <div className="w-[198px] h-[63px]">
                                <div className="text-[24px] font-semibold">
                                  To
                                </div>
                                <div className="text-[16px]">
                                  Where are you heading?
                                </div>
                              </div>
                              <div className="w-[178px] h-[63px]">
                                <div className="text-[24px] font-semibold">
                                  Departure
                                </div>
                                <div className="text-[16px]">Add Date</div>
                              </div>

                              <div className="w-[178px] h-[63px]">
                                <div className="text-[24px] font-semibold">
                                  Travelers
                                </div>
                                <div className="text-[16px]">Add Guests</div>
                              </div>
                            </div>
                            <hr className="mt-5 mb-5" />
                            <div className="flex  justify-between items-center">
                              <div className="flex flex-col gap-2">
                              <div className=" flex justify-between gap-4 items-center">
                                <div
                                  className="w-[178px] h-[63px] cursor-pointer"
                                  onClick={toggleLeavingPopup}
                                >
                                  <div className="text-[24px] font-semibold">
                                    From
                                  </div>
                                  <div className="text-[16px]">
                                    Leaving from?
                                  </div>
                                </div>
                                {leavingfrompopup && (
                                  <div
                                    ref={popupRef}
                                    className="absolute top-2 w-[348px]  p-2 flex flex-col gap-4 rounded-xl bg-white shadow-2xl  z-50"
                                  >
                                    <div>
                                      <div className="text-[24px] font-semibold">
                                        {" "}
                                        From
                                      </div>
                                      <div>Leaving from?</div>
                                    </div>
                                    <hr className="border-[#FFC10E] " />
                                    <div>
                                      <div className="relative ">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                          <span className=" p-2.5 ml-[-3px] rounded-tl rounded-bl text-white">
                                            <FaSearch
                                              style={{ color: "black" }}
                                            />
                                          </span>
                                        </div>
                                        <input
                                          type="text"
                                          className="placeholder: ml-2 block w-[320px] bg-[#FFF6DD] rounded-3xl  py-1.5 pl-10 pr-4 text-gray-900   placeholder:text-gray-400    sm:text-sm sm:leading-6"
                                          placeholder="Enter City Name"
                                        />
                                      </div>
                                      <div className="w-[320px] flex flex-col gap-2 mt-4">
                                        <div className="flex justify-between">
                                          <div className="flex flex-col">
                                            <span className="text-[#FFC10E]">
                                              Detect Current Location
                                            </span>
                                            <span className="text-[#00000085] text-[12px]">
                                              Location Permission Required
                                            </span>
                                          </div>
                                          <div className="flex items-center">
                                            --
                                          </div>
                                        </div>
                                        <div className="flex justify-between">
                                          <div className="flex flex-col">
                                            <span className="">
                                              Chennai, India
                                            </span>
                                            <span className="text-[#00000085] text-[12px]">
                                              Chennai International Airport
                                            </span>
                                          </div>
                                          <div className="">MAA</div>
                                        </div>
                                        <div className="flex justify-between">
                                          <div className="flex flex-col">
                                            <span className="">
                                              Bangalore, India
                                            </span>
                                            <span className="text-[#00000085] text-[12px]">
                                              Chennai International Airport
                                            </span>
                                          </div>
                                          <div className="">MAA</div>
                                        </div>
                                        <div className="flex justify-between">
                                          <div className="flex flex-col">
                                            <span className="">
                                              Bangalore, India
                                            </span>
                                            <span className="text-[#00000085] text-[12px]">
                                              Chennai International Airport
                                            </span>
                                          </div>
                                          <div className="">MAA</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                                <div className="w-[198px]">
                                  <div className="text-[24px] font-semibold">
                                    To
                                  </div>
                                  <div className="text-[16px]">
                                    Where are you heading?
                                  </div>
                                </div>
                                <div className="w-[178px] ">
                                  <div className="text-[24px] font-semibold">
                                    Departure
                                  </div>
                                  <div className="text-[16px]">Add Date</div>
                                </div>
                               
                              </div>
                              <div className="mt-8 flex gap-4 ">
                      <div className="flex gap-2">
                        <input type="checkbox" />
                        Direct flight only
                      </div>
                      <div className="flex gap-2 ">
                        <input type="checkbox" />
                        Vistara
                      </div>

                      <div className="flex gap-2 ">
                        <input type="checkbox" />
                        Indigo
                      </div>

                      <div className="flex gap-2 ">
                        <input type="checkbox" />
                        Air Asia
                      </div>
                      <div className="flex gap-2 ">
                        <input type="checkbox" />
                        Air India{" "}
                      </div>
                      <div className="flex gap-2 ">
                        <input type="checkbox" />
                        Spicejet
                      </div>
                               </div>
                                </div>
                              
                              <div className="flex flex-col justify-end items-end gap-2">
                                <div>
                                  <button className=" text-[#1D1D1D] border border-[#FFC10E] font-bold p-2 rounded-xl flex flex-col items-end justify-end">
                                    +Add <span className="font-[400]">Another City</span>
                                  </button>
                                </div>

                                <Link to="/Milticityresult">
                                  <div className="bg-[#FFC10E] h-[40px] w-[40px] flex justify-center items-center rounded-full">
                                    <IoSearch
                                      style={{ color: "white" }}
                                      size={20}
                                    />
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    )}

                  </>
                )}
                {choosediv === "Stay" && (
                  <>
                    <div>
                      <div className="mt-5 w-full flex justify-between items-center ">
                        <div className="flex w-full justify-between  gap-2 items-center">
                          <div className="w-[178px] h-[63px] cursor-pointer">
                            <div className="text-[24px] font-semibold">
                              Check In
                            </div>
                            <div className="text-[16px]">
                              Where are you visiting
                            </div>
                          </div>

                          <div className="w-[198px] h-[63px]">
                            <div className="text-[24px] font-semibold">
                              Check Out
                            </div>
                            <div className="text-[16px]">
                              When are you leaving
                            </div>
                          </div>
                          <div className="w-[178px] h-[63px]">
                            <div className="text-[24px] font-semibold">
                              Location
                            </div>
                            <div className="text-[16px]">
                              Where are you traveling
                            </div>
                          </div>

                          <div className="w-[150px] h-[63px]">
                            <div className="text-[24px] font-semibold">
                              Price
                            </div>
                            <div className="text-[16px]">₹1200 per day</div>
                          </div>
                          <div className="w-[178px] h-[63px]">
                            <div className="text-[24px] font-semibold">
                              Rooms
                            </div>
                            <div className="text-[16px]">
                              1 Room for 2 people
                            </div>
                          </div>
                          <div className="bg-[#FFC10E] h-[40px] w-[40px] flex justify-center items-center rounded-full">
                            <IoSearch style={{ color: "white" }} size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {choosediv === "Holiday" && (
                  <>
                    <div>
                      <div className="mt-5 flex w-full justify-between items-center ">
                        <div className="flex justify-between w-full gap-2 items-center">
                          <div className="w-[178px] h-[63px] cursor-pointer">
                            <div className="text-[24px] font-semibold">
                              From
                            </div>
                            <div className="text-[16px]">From city</div>
                          </div>

                          <div className="w-[198px] h-[63px]">
                            <div className="text-[24px] font-semibold">To</div>
                            <div className="text-[16px]">To City/Country</div>
                          </div>
                          <div className="w-[178px] h-[63px]">
                            <div className="text-[24px] font-semibold">
                              Select Date
                            </div>
                            <div className="text-[16px]">Departure Date</div>
                          </div>

                          <div className="w-[150px] h-[63px]">
                            <div className="text-[24px] font-semibold">
                              Rooms
                            </div>
                            <div className="text-[16px]">Select Rooms</div>
                          </div>
                          <div className="w-[178px] h-[63px]">
                            <div className="text-[24px] font-semibold">
                              Filters
                            </div>
                            <div className="text-[16px]">
                              Select Filters (Optional)
                            </div>
                          </div>
                          <div className="bg-[#FFC10E] h-[40px] w-[40px] flex justify-center items-center rounded-full">
                            <IoSearch style={{ color: "white" }} size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-[20rem] font-semibold">
        <div>Previous search</div>
        <div className="flex gap-2 mt-5">
          <div className="w-[273px] h-[81px] border border-[#E2E2E2] flex justify-center items-center rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-2">
                <div className="text-[#58595B] flex gap-1 text-[18px]">
                  Bangalore <img src={arrow} alt="" /> Mumbai
                </div>
                <div className="text-[#41CA99] text-[14.17px]">
                  Next flight in 4 hrs
                </div>
              </div>
              <div>
                <IoChevronForwardOutline style={{ color: "#9E9E9E" }} />
              </div>
            </div>
          </div>
          <div className="w-[273px] h-[81px] border border-[#E2E2E2] flex justify-center items-center rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-2">
                <div className="text-[#58595B] flex gap-1 text-[18px]">
                  Bangalore <img src={arrow} alt="" /> Mumbai
                </div>
                <div className="text-[#41CA99] text-[14.17px]">
                  Next flight in 4 hrs
                </div>
              </div>
              <div>
                <IoChevronForwardOutline style={{ color: "#9E9E9E" }} />
              </div>
            </div>
          </div>
          <div className="w-[273px] h-[81px] border border-[#E2E2E2] flex justify-center items-center rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-2">
                <div className="text-[#58595B] flex gap-1 text-[18px]">
                  Bangalore <img src={arrow} alt="" /> Mumbai
                </div>
                <div className="text-[#41CA99] text-[14.17px]">
                  Next flight in 4 hrs
                </div>
              </div>
              <div>
                <IoChevronForwardOutline style={{ color: "#9E9E9E" }} />
              </div>
            </div>
          </div>
          <div className="w-[273px] h-[81px] border border-[#E2E2E2] flex justify-center items-center rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-2">
                <div className="text-[#58595B] flex gap-1 text-[18px]">
                  Bangalore <img src={arrow} alt="" /> Mumbai
                </div>
                <div className="text-[#41CA99] text-[14.17px]">
                  Next flight in 4 hrs
                </div>
              </div>
              <div>
                <IoChevronForwardOutline style={{ color: "#9E9E9E" }} />
              </div>
            </div>
          </div>
          <div className="w-[273px] h-[81px] border border-[#E2E2E2] flex justify-center items-center rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-2">
                <div className="text-[#58595B] flex gap-1 text-[18px]">
                  Bangalore <img src={arrow} alt="" /> Mumbai
                </div>
                <div className="text-[#41CA99] text-[14.17px]">
                  Next flight in 4 hrs
                </div>
              </div>
              <div>
                <IoChevronForwardOutline style={{ color: "#9E9E9E" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 pb-10">
        <div className="flex justify-between">
          <div className="font-semibold">Popular destinations</div>
          <div className="underline flex items-center">
            View all <IoIosArrowForward />
          </div>
        </div>
        <div className="mt-5 flex justify-between gap-4 ">
          <div className="w-[320px] h-[269px] rounded-xl shadow-2xl">
            <img src={destination} alt="" className="h-[174px]" />
            <div className="p-4 pt-2">
              <div className="text-[18px]">Delhi</div>
              <p className="text-[#4F4A3D] text-[13px]">
                Explore the capital city of India, with its rich heritage and
                food
              </p>
            </div>
          </div>
          <div className="w-[320px] h-[269px] rounded-xl shadow-2xl">
            <img src={mumbai} alt="" className="h-[174px]" />
            <div className="p-4 pt-2">
              <div className="text-[18px]">Mumbai</div>
              <p className="text-[#4F4A3D] text-[13px]">
                Explore the capital city of India, with its rich heritage and
                food
              </p>
            </div>
          </div>
          <div className="w-[320px] h-[269px] rounded-xl shadow-2xl">
            <img src={Kolkata} alt="" className="h-[174px]" />
            <div className="p-4 pt-2">
              <div className="text-[18px]">Kolkata</div>
              <p className="text-[#4F4A3D] text-[13px]">
                Explore the capital city of India, with its rich heritage and
                food
              </p>
            </div>
          </div>
          <div className="w-[320px] h-[269px] rounded-xl shadow-2xl">
            <img src={Bangluru} alt="" className="h-[174px]" />
            <div className="p-4 pt-2">
              <div className="text-[18px]">Bangaluru</div>
              <p className="text-[#4F4A3D] text-[13px]">
                Explore the capital city of India, with its rich heritage and
                food
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20 flex gap-[7rem]">
          <div className="w-[250px] h-[202px] flex justify-center items-center flex-col gap-4">
            <div className="w-[117px] h-[100px]">
              <img src={jdcredit} alt="" />
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-[20px] text-center">JD Credits</div>
              <div className="text-[#4F4A3D] text-[16px] text-center">
                Earn Credits as you fly and explore with JD travels
              </div>
            </div>
          </div>
          <div className="w-[250px] h-[202px] flex justify-center items-center flex-col gap-4">
            <div className="w-[117px] h-[100px] flex justify-center">
              <img src={bestguide} alt="" />
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-[20px] text-center">Best Guide</div>
              <div className="text-[#4F4A3D] text-[16px] text-center">
                Experience the best booking guide for your holiday
              </div>
            </div>
          </div>
          <div className="w-[250px] h-[202px] flex justify-center items-center flex-col gap-4">
            <div className="w-[117px] h-[100px]">
              <img src={jdcredit} alt="" />
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-[20px] text-center">JD Credits</div>
              <div className="text-[#4F4A3D] text-[16px] text-center">
                Earn Credits as you fly and explore with JD travels
              </div>
            </div>
          </div>
          <div className="w-[250px] h-[202px] flex justify-center items-center flex-col gap-4">
            <div className="w-[117px] h-[100px] flex justify-center">
              <img src={bestguide} alt="" />
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-[20px] text-center">Best Guide</div>
              <div className="text-[#4F4A3D] text-[16px] text-center">
                Experience the best booking guide for your holiday
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <img src={banner} alt="" />
        </div>
        <div className="mt-5">
          <div className="font-semibold">Popular Airlines</div>
          <div className="mt-5">
            <img src={airlines} alt="" />
          </div>
        </div>
        <div className="mt-5">
          <div className="font-semibold">Flight to Cities</div>
          <div className="mt-5 flex gap-[12rem]  ">
            <div className="flex flex-col gap-4 w-[175px]">
              <div className=" text-[18px]">Flight to New Delhi</div>
              <div className=" text-[18px]">Flight to Kolkata</div>
              <div className=" text-[18px]">Flight to Chennai</div>
            </div>
            <div className="flex flex-col gap-4 w-[175px]">
              <div className=" text-[18px]">Flight to Mumbai</div>
              <div className=" text-[18px]">Flight to Srinagar</div>
              <div className=" text-[18px]">Flight to Pune</div>
            </div>
            <div className="flex flex-col gap-4 w-[175px]">
              <div className=" text-[18px]">Flight to Bangalore</div>
              <div className=" text-[18px]">Flight to Hyderabad</div>
            </div>
            <div className="flex flex-col gap-4 w-[175px]">
              <div className=" text-[18px]">Flight to Goa</div>
              <div className=" text-[18px]">Flight to Patna</div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="font-semibold">Flight to Top Countries</div>
          <div className="mt-5 flex gap-[10rem] w-[1300px]">
            <div className="flex flex-col gap-4">
              <div>Flight to United Arab Emirates</div>
              <div>Flight to Oman</div>
              <div>Flight to Bahrain</div>
            </div>
            <div className="flex flex-col gap-4">
              <div>Flight to Saudi Arabia</div>
              <div>Flight to Thailand</div>
              <div>Flight to Indonesia</div>
            </div>
            <div className="flex flex-col gap-4">
              <div>Flight to Kuwait</div>
              <div>Flight to Canada</div>
              <div>Flight to United Kingdom</div>
            </div>
            <div className="flex flex-col gap-4">
              <div>Flight to Goa</div>
              <div>Flight to United States</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
