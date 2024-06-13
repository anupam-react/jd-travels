import React from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import Profilesidebar from "./Profilesidebar";
const Gstdetails = () => {
  return (
    <div className="pt-10 h-[800px]">
      <div className="  w-[80%px]  pb-10 mb-10 ">
        <div className="flex  justify-center gap-5 ">
          <Profilesidebar />
          <div className="w-[70%] h-[900px] ">
            <div className=" bg-white box-shadow rounded-xl p-5">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-[24px] font-semibold ">GST Details</div>
                  <div className="text-[#4F4A3D] text-[14px]">
                    GST Details helps you save on your travel expenses
                    (Optional)
                  </div>
                </div>
                <div>
                  <button className="bg-[#EFEFEF] h-[41px] w-[130px] rounded-3xl flex justify-center items-center gap-2">
                    <MdOutlineModeEditOutline />
                    Edit details
                  </button>
                </div>
              </div>
              <div>
                <div className="bg-[#FFC10E4D] h-[33px] mt-5 flex justify-between pl-2 pr-2 items-center">
                  <div className="text-[17px]">
                    Click on Add button to add another GST number
                  </div>
                  <div className="text-[#2D9D4C] font-semibold text-[14px]">
                    +ADD NEW GST
                  </div>
                </div>
                <div className="mt-5">
                  <div className="flex gap-2">
                    <div>
                      <label>GST Number</label>
                      <br />
                      <input
                        className=" mt-2 w-[420px] h-[57px] placeholder:pl-5 px-3 py-2 border rounded-2xl "
                        placeholder="Enter GST Number"
                      />
                    </div>
                    <div>
                      <label>GST Name</label>
                      <br />
                      <input
                        className=" mt-2 w-[420px] h-[57px] placeholder:pl-5 px-3 py-2 border rounded-2xl "
                        placeholder="Enter GST Name"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <label>GST Email Id</label>
                      <br />
                      <input
                        className=" mt-2 w-[420px] h-[57px] placeholder:pl-5 px-3 py-2 border rounded-2xl "
                        placeholder="Enter GST Email Id"
                      />
                    </div>
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

export default Gstdetails;
