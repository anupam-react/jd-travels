import React from "react";
import profile from "../../Assets/Profile/profile.svg";
import { FaRegSmile } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Profilesidebar from "./Profilesidebar";
const Profile = () => {
  return (
    <div className="pt-10 h-[2000px]">
      <div className="  w-[80%px]  pb-10 mb-10 ">
        <div className="flex  justify-center gap-5 ">
          <Profilesidebar />
          <div className="w-[70%] h-[900px] ">
            <div className="box-shadow  rounded-xl p-5">
              <div>
                <div className="text-[32px] font-semibold">Profile</div>
                <div className="text-[#4F4A3D] text-[14px]">
                  Make booking process faster by giving us the necessary
                  information.
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <div>
                    <label>Title</label>
                    <br />
                    <input
                      className=" mt-2 w-[420px] h-[57px] placeholder:pl-5 px-3 py-2 border rounded-2xl "
                      placeholder="Mr/Mrs"
                    />
                  </div>
                  <div>
                    <label>Full Name</label>
                    <br />
                    <input
                      className=" mt-2 w-[420px] h-[57px] placeholder:pl-5 px-3 py-2 border rounded-2xl "
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div>
                    <label>Gender</label>
                    <br />
                    <input
                      className=" mt-2 w-[420px] h-[57px] placeholder:pl-5 px-3 py-2 border rounded-2xl "
                      placeholder="Gender"
                    />
                  </div>
                  <div>
                    <label>Birthday</label>
                    <br />
                    <input
                      className=" mt-2 w-[420px] h-[57px] placeholder:pl-5 px-3 py-2 border rounded-2xl "
                      type="date"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div>
                    <label>Address</label>
                    <br />
                    <textarea
                      className=" mt-2 w-[850px] h-[100px] placeholder:pl-5 px-3 py-2 border rounded-2xl "
                      placeholder="Address"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div>
                    <label>Pin Code</label>
                    <br />
                    <input
                      className=" mt-2 w-[420px] h-[57px] placeholder:pl-5 px-3 py-2 border rounded-2xl "
                      placeholder="Pin Code"
                    />
                  </div>
                  <div>
                    <label>State</label>
                    <br />
                    <input
                      className=" mt-2 w-[420px] h-[57px] placeholder:pl-5 px-3 py-2 border rounded-2xl "
                      placeholder="State"
                    />
                  </div>
                </div>
                <div>
                  <label>Country</label>
                  <br />
                  <select className="w-[850px] h-[57px] border rounded-2xl">
                    <option></option>
                  </select>
                </div>
                <div className="flex mt-5 gap-5">
                  <div>
                    Seat preference
                    <div className="flex gap-2 mt-2">
                      <div className="flex gap-2 font-semibold">
                        {" "}
                        <input type="radio" /> Window seat
                      </div>
                      <div className="flex gap-2 ">
                        {" "}
                        <input type="radio" /> Aisle seat
                      </div>
                    </div>
                  </div>
                  <div>
                    Meal preference
                    <div className="flex gap-2 mt-2">
                      <div className="flex gap-2 font-semibold">
                        {" "}
                        <input type="radio" /> Veg Meal
                      </div>
                      <div className="flex gap-2 ">
                        {" "}
                        <input type="radio" /> Non-Veg Meal
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <label>Referral ID</label>
                  <br />
                  <input
                    className=" mt-2 w-[850px] h-[57px] placeholder:pl-5 px-3 py-2 border rounded-2xl "
                    placeholder="Enter Referral ID"
                  />
                </div>
              </div>
            </div>
            <div className="box-shadow  mt-5 rounded-xl p-5">
              <div className="flex items-center gap-2">
                <div>
                  <label>Frequent Flier No (Optional)</label>
                  <br />
                  <input
                    className=" mt-2 w-[300px] h-[57px] placeholder:pl-5 px-3 py-2 border rounded-2xl "
                    placeholder="Enter Number"
                  />
                </div>
                :
                <div>
                  <label></label>
                  <br />
                  <input
                    className=" mt-2 w-[300px] h-[57px] placeholder:pl-5 px-3 py-2 border rounded-2xl "
                    placeholder="Enter Number"
                  />
                </div>
              </div>
            </div>
            <div className="box-shadow  mt-5 rounded-xl p-5">
              <div>
                <div className="text-[32px] font-semibold">Login Details</div>
                <div className="text-[#4F4A3D] text-[14px]">
                  Manage your email address mobile number and password
                </div>
              </div>
              <div className="flex flex-col mt-5 gap-2">
                <div className="flex gap-2">
                  <div>
                    <label>Phone Number</label>
                    <br />
                    <input
                      className=" mt-2 w-[420px] h-[57px] placeholder:pl-5 px-3 py-2 border rounded-2xl "
                      placeholder="Enter Phone Number"
                    />
                  </div>
                  <div>
                    <label>Alternate Phone Number</label>
                    <br />
                    <input
                      className=" mt-2 w-[420px] h-[57px] placeholder:pl-5 px-3 py-2 border rounded-2xl "
                      placeholder="Enter Alternate Phone Number"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div>
                    <label>Email ID</label>
                    <br />
                    <input
                      className=" mt-2 w-[420px] h-[57px] placeholder:pl-5 px-3 py-2 border rounded-2xl "
                      placeholder="Enter Email ID"
                    />
                  </div>
                  <div>
                    <label>Password</label>
                    <br />
                    <div class="relative mt-2">
                      <input
                        class="w-[420px] h-[57px] px-3 py-2 border rounded-2xl"
                        type="password"
                      />
                      <span class="absolute text-[#B4B4B4] underline inset-y-0 right-0 pr-3 flex items-center">
                        Change Password
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-shadow  mt-5 rounded-xl p-5">
              <div>
                <div className="text-[32px] font-semibold">
                  Passport Details
                </div>
                <div className="text-[#4F4A3D] text-[14px]">
                  Manage your passport details here
                </div>
              </div>
              <div className="flex mt-5 flex-col gap-2">
                <div className="flex gap-2">
                  <div>
                    <label>Passport Number</label>
                    <br />
                    <input
                      className=" mt-2 w-[420px] h-[57px] placeholder:pl-5 px-3 py-2 border rounded-2xl "
                      placeholder="Enter Passport Number"
                    />
                  </div>
                  <div>
                    <label>Place of Issue</label>
                    <br />
                    <input
                      className=" mt-2 w-[420px] h-[57px] placeholder:pl-5 px-3 py-2 border rounded-2xl "
                      placeholder="Enter Place of Issue"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div>
                    <label>Expiry Date</label>
                    <br />
                    <input
                      className=" mt-2 w-[420px] h-[57px] placeholder:pl-5 px-3 py-2 border rounded-2xl "
                      placeholder="Enter Expiry Date"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="box-shadow  mt-5 rounded-xl p-5">
              <div>
                <div className="text-[32px] font-semibold">
                  Manage Traveller(s)
                </div>
                <div className="text-[#4F4A3D] text-[14px]">
                  Make booking process faster by giving us the necessary
                  information.
                </div>
              </div>
              <div className="flex mt-5 flex-col gap-2">
                <div className="flex gap-5 items-center border-b pb-2">
                  <img src={profile} alt="" />
                  <div className="flex flex-col">
                    <span className="font-semibold">Lorem Ipsum</span>
                    <span className="text-[#FFC10E]">(male)</span>
                  </div>
                  <div>
                    <MdOutlineEdit />
                  </div>
                </div>
                <div className="flex gap-5 items-center border-b pb-2">
                  <img src={profile} alt="" />
                  <div className="flex flex-col">
                    <span className="font-semibold">Lorem Ipsum</span>
                    <span className="text-[#FFC10E]">(female)</span>
                  </div>
                  <div>
                    <MdOutlineEdit />
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

export default Profile;
