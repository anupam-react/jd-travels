import React, { useState } from "react";
import "../../App.css";
import gift from "../../Assets/oneway/gift.svg";
import { IoArrowForward } from "react-icons/io5";
import addnew from "../../Assets/Bookingdetail/add-new.svg";
import { LuDot } from "react-icons/lu";
import plane from "../../Assets/oneway/plane.svg";
import { Link } from "react-router-dom";
import { Popover } from "flowbite-react";
const Seatbookoneway = () => {
  const [hoveredSeat, setHoveredSeat] = useState(null);

  const content = (
    <div className="text-sm text-gray-500 dark:text-gray-400 px-6 py-3">
      <p>Price: <span className="font-bold text-[#1D1D1D]">$3000</span></p>
    </div>
  );


  return (
    <div className="h-[2650px]">
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
              <div className=" p-5 border border-[#F6D246] rounded-2xl ml-5 mr-5 mb-5 ">
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
                  <div className=" h-[27px] flex justify-center text-[14px] items-center text-[#D05555] w-[203px] rounded-lg">
                    Seat Section Pending
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[14px] flex gap-2">
                      <div className="w-[18px] h-[18px] text-[#D05555] bg-[#ADADAD] flex justify-center items-center rounded">
                        x
                      </div>{" "}
                      Occupied
                    </div>
                    <div className="text-[14px] flex gap-2">
                      <div className="w-[18px] h-[18px] text-[9px] border-blue-500  border-2 bg-[#ADADAD] flex justify-center items-center rounded">
                        JD
                      </div>{" "}
                      Selected
                    </div>
                    <div className="text-[14px] flex gap-2">
                      <div className="w-[18px] h-[18px] text-[9px]   text-white bg-[#2D9D4C] flex justify-center items-center rounded">
                        XL
                      </div>{" "}
                      XL Available
                    </div>
                    <div className="text-[14px] flex gap-2">
                      <div className="w-[18px] h-[18px]  text-[9px] text-white bg-[#2D9D4C] flex justify-center items-center rounded">
                        XL
                      </div>{" "}
                      XL Non Reclining
                    </div>
                    <div className="text-[14px] flex gap-2">
                      <div className="w-[18px] h-[18px]  text-[9px] text-white bg-[#FFC10E] flex justify-center items-center rounded"></div>{" "}
                      Available
                    </div>
                    <div className="text-[14px] flex gap-2">
                      <div className="w-[18px] h-[18px]  text-[9px] text-white bg-[#FFC10E] flex justify-center items-center rounded"></div>{" "}
                      Non Reclining
                    </div>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="seatBg relative">
                      <div className="absolute left-[117px] top-[100px]">
                        <div className="flex gap-2">
                          <div>
                            <img src="../../exit_svgrepo.com.png" alt="" />
                            <p className="text-[#1D1D1D] font-bold">Exit</p>
                          </div>
                          <p className="w-[5px] h-[60px] bg-[#8B8B8B] text-[#8B8B8B]">
                            |
                          </p>
                        </div>
                      </div>
                      <div className="absolute right-[135px] top-[100px]">
                        <div className="flex gap-2">
                          <p className="w-[5px] h-[60px] bg-[#8B8B8B] text-[#8B8B8B]">
                            |
                          </p>
                          <div>
                            <img src="../../exit_svgrepo.com (1).png" alt="" />
                            <p className="text-[#1D1D1D] font-bold">Exit</p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute left-[117px] bottom-[300px]">
                        <div className="flex gap-2">
                          <div>
                            <img src="../../exit_svgrepo.com.png" alt="" />
                            <p className="text-[#1D1D1D] font-bold">Exit</p>
                          </div>
                          <p className="w-[5px] h-[60px] bg-[#8B8B8B] text-[#8B8B8B]">
                            |
                          </p>
                        </div>
                      </div>
                      <div className="absolute right-[135px] bottom-[300px]">
                        <div className="flex gap-2">
                          <p className="w-[5px] h-[60px] bg-[#8B8B8B] text-[#8B8B8B]">
                            |
                          </p>
                          <div>
                            <img src="../../exit_svgrepo.com (1).png" alt="" />
                            <p className="text-[#1D1D1D] font-bold">Exit</p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute left-[195px] top-[170px]">
                        <div className="flex gap-4 text-[14px] font-semibold text-[#1D1D1D] mb-2">
                          <div className="flex gap-2">
                            <p className="text-transparent w-[10px]">1</p>
                            <p className="w-[18px]">A</p>
                            <p className="w-[18px]">B</p>
                            <p className="w-[18px]">C</p>
                          </div>
                          <div className="flex gap-2">
                            <p className="w-[18px]">D</p>
                            <p className="w-[18px]">E</p>
                            <p className="w-[18px]">F</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">1</p>
                            <Popover content={content} trigger="hover">
                              <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                                X
                              </p>
                            </Popover>
                            <Popover content={content} trigger="hover">
                              <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            </Popover>
                            <Popover content={content} trigger="hover">
                              <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            </Popover>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <Popover content={content} trigger="hover">
                              <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                                X
                              </p>
                            </Popover>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="w-[10px]">1</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">2</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="w-[10px]">2</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">3</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p>3</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">4</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#2D9D4C] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#2D9D4C] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#2D9D4C] text-white text-[12px] w-[18px] h-[18px] text-center rounded-sm">
                              XL
                            </p>
                            <p className="bg-[#2D9D4C] text-white text-[12px] w-[18px] h-[18px] text-center rounded-sm">
                              XL
                            </p>
                            <p>4</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">5</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p>5</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">6</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p>6</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">7</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p>7</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">8</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p>8</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">9</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#2D9D4C] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#2D9D4C] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#2D9D4C] text-white text-[12px] w-[18px] h-[18px] text-center rounded-sm">
                              XL
                            </p>
                            <p className="bg-[#2D9D4C] text-white text-[12px] w-[18px] h-[18px] text-center rounded-sm">
                              XL
                            </p>
                            <p>9</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">10</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p>10</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">11</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p>11</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">12</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p>12</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">13</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p>13</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">14</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#2D9D4C] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#2D9D4C] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#2D9D4C] text-white text-[12px] w-[18px] h-[18px] text-center rounded-sm">
                              XL
                            </p>
                            <p className="bg-[#2D9D4C] text-white text-[12px] w-[18px] h-[18px] text-center rounded-sm">
                              XL
                            </p>
                            <p>14</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">15</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p>15</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">16</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p>16</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">17</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p>17</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">18</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p>18</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">19</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#2D9D4C] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#2D9D4C] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#2D9D4C] text-white text-[12px] w-[18px] h-[18px] text-center rounded-sm">
                              XL
                            </p>
                            <p className="bg-[#2D9D4C] text-white text-[12px] w-[18px] h-[18px] text-center rounded-sm">
                              XL
                            </p>
                            <p>19</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">20</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p>20</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">21</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p>21</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">22</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p>22</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">23</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p>23</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">24</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#2D9D4C] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#2D9D4C] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#2D9D4C] text-white text-[12px] w-[18px] h-[18px] text-center rounded-sm">
                              XL
                            </p>
                            <p className="bg-[#2D9D4C] text-white text-[12px] w-[18px] h-[18px] text-center rounded-sm">
                              XL
                            </p>
                            <p>24</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">25</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p>25</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">26</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p>26</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">27</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p>27</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">28</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p>28</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">29</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#2D9D4C] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#2D9D4C] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#2D9D4C] text-white text-[12px] w-[18px] h-[18px] text-center rounded-sm">
                              XL
                            </p>
                            <p className="bg-[#2D9D4C] text-white text-[12px] w-[18px] h-[18px] text-center rounded-sm">
                              XL
                            </p>
                            <p>29</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">30</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p>30</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">31</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p>31</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">32</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p>32</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">33</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p>33</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">34</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#2D9D4C] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#2D9D4C] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#2D9D4C] text-white text-[12px] w-[18px] h-[18px] text-center rounded-sm">
                              XL
                            </p>
                            <p className="bg-[#2D9D4C] text-white text-[12px] w-[18px] h-[18px] text-center rounded-sm">
                              XL
                            </p>
                            <p>34</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">35</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p>35</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">36</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p>36</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">37</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p>37</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">38</p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                            <p className="bg-[#FFC10E] w-[18px] h-[18px] text-center rounded-sm font-bold"></p>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p className="bg-[#ADADAD] text-[#D05555] text-[12px] w-[18px] h-[18px] text-center rounded-sm font-bold">
                              X
                            </p>
                            <p>38</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <p className="w-[10px]">39</p>
                            <div>
                              <p className="bg-[#F8D54E] w-[18px] h-[13px] text-center rounded-sm font-bold"></p>
                              <p className="bg-black w-[18px] h-[5px] text-center rounded-sm font-bold"></p>
                            </div>
                            <div>
                              <p className="bg-[#F8D54E] w-[18px] h-[13px] text-center rounded-sm font-bold"></p>
                              <p className="bg-black w-[18px] h-[5px] text-center rounded-sm font-bold"></p>
                            </div>
                            <div>
                              <p className="bg-[#F8D54E] w-[18px] h-[13px] text-center rounded-sm font-bold"></p>
                              <p className="bg-black w-[18px] h-[5px] text-center rounded-sm font-bold"></p>
                            </div>
                          </div>
                          <div className="text-[#1D1D1D] text-[14px] font-[500] flex gap-2">
                            <div>
                              <p className="bg-[#F8D54E] w-[18px] h-[13px] text-center rounded-sm font-bold"></p>
                              <p className="bg-black w-[18px] h-[5px] text-center rounded-sm font-bold"></p>
                            </div>
                            <div>
                              <p className="bg-[#F8D54E] w-[18px] h-[13px] text-center rounded-sm font-bold"></p>
                              <p className="bg-black w-[18px] h-[5px] text-center rounded-sm font-bold"></p>
                            </div>
                            <div>
                              <p className="bg-[#F8D54E] w-[18px] h-[13px] text-center rounded-sm font-bold"></p>
                              <p className="bg-black w-[18px] h-[5px] text-center rounded-sm font-bold"></p>
                            </div>
                            <p>39</p>
                          </div>
                        </div>
                      </div>
                      {hoveredSeat && (
                        <div className="absolute left-0 top-full mt-2 p-2 bg-white border rounded shadow-lg">
                          Price: $50000
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 ml-5">
                <Link to="/Onewayresult/Bookingdetails/Selectmeal">
                  <button className="w-[242px] bg-[#FFC10E] flex justify-center items-center rounded-lg h-[61px]">
                    CONTINUE
                  </button>
                </Link>
              </div>
            </div>
            <div className="box-shadow  h-[97px] text-[22px] font-bold flex items-center rounded-2xl mt-5 mb-5 pl-5 pr-5   ">
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

export default Seatbookoneway;
