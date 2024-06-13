import React, { useState } from "react";

import { MdOutlineModeEditOutline } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { TbCreditCardPay } from "react-icons/tb";
import Profilesidebar from "./Profilesidebar";
const Jdwallet = () => {
  const [addpayment, setaddpayment] = useState(false);

  return (
    <>
      {addpayment ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-5xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[600px]  p-5 bg-[white] outline-none focus:outline-none">
                <div className="flex items-center justify-between  border-blueGray-200 rounded-t">
                  <div className="flex flex-col">
                    <div className="text-2xl  font-semibold ">Add Payment</div>
                    <div>
                      Add money to your JD wallet for future purchases.{" "}
                    </div>
                  </div>
                  <span
                    onClick={() => setaddpayment(false)}
                    className="cursor-pointer flex justify-end"
                  >
                    <IoIosCloseCircle size={30} />
                  </span>
                </div> 

                <div className="flex flex-col gap-2">
                  <div>
                    <input
                      className=" mt-2 w-[500px] h-[62px] border rounded-2xl placeholder:pl-5"
                      placeholder="Enter Amount"
                    />
                  </div>

                  <div className=" flex justify-end ">
                    <button className="w-[180px] h-[47px] rounded-lg bg-[#FFC10E]">
                      Add to wallet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div className="pt-10 h-[800px]">
        <div className="  w-[80%px]  pb-10 mb-10 ">
          <div className="flex  justify-center gap-5 ">
            <Profilesidebar />
            <div className="w-[70%] h-[900px] ">
              <div className=" flex gap-2">
                <div className="w-[500px] h-[150px] flex flex-col p-5 gap-5 box-shadow rounded-xl bg-[white]">
                  <div className="text-[#4F4A3D] text-[14px] flex items-center gap-1">
                    JD wallet available balance{" "}
                    <span className=" flex items-center text-[#4F4A3D] text-[10px]">
                      {" "}
                      <IoIosInformationCircleOutline />
                      *Credit added by JD travels
                    </span>
                  </div>
                  <div>
                    <div className="text-[#219653] font-semibold text-[30px]">
                      ₹ 95,000
                    </div>
                    <div className="text-[#4F4A3D] text-[16px]">
                      of 1,00,000
                    </div>
                  </div>
                </div>
                <div className="w-[500px] h-[150px] flex flex-col p-5 gap-5 box-shadow rounded-xl bg-[white]">
                  <div className="text-[#4F4A3D] text-[14px] flex items-center gap-1">
                    used wallet balance{" "}
                    <span className=" flex items-center text-[#4F4A3D] text-[10px]">
                      {" "}
                      <IoIosInformationCircleOutline />
                      *Credit added by JD travels
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-[#D05555] font-semibold text-[30px]">
                        ₹ 5,000
                      </div>
                      <div className="text-[#4F4A3D] text-[16px]">
                        of 1,00,000
                      </div>
                    </div>
                    <div>
                      <button
                        className="bg-[#EFEFEF] h-[41px] w-[120px] rounded-3xl flex justify-center items-center gap-2"
                        onClick={() => setaddpayment(true)}
                      >
                        <TbCreditCardPay />
                        Pay Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 bg-white box-shadow rounded-xl p-5 h-[400px]">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-[24px] font-semibold ">
                      Recent activities
                    </div>
                    <div className="text-[#4F4A3D] text-[14px]">
                      Manage your recent wallet transactions here
                    </div>
                  </div>
                  <div>
                    <button className="bg-[#EFEFEF] h-[41px] w-[210px] rounded-3xl flex justify-center items-center gap-2">
                      <MdOutlineModeEditOutline />
                      Request for JD Credit
                    </button>
                  </div>
                </div>
                <table class="table-auto mt-5">
                  <thead>
                    <tr>
                      <th className="uppercase w-[200px] text-[12px]">date</th>
                      <th className="uppercase w-[250px] text-[12px]">
                        description
                      </th>
                      <th className="uppercase w-[200px] text-[12px]">
                        transaction type
                      </th>
                      <th className="uppercase w-[200px] text-[12px]">
                        amount
                      </th>
                      <th className="uppercase w-[200px] text-[12px]">
                        Balance
                      </th>
                      <th className="uppercase w-[250px] text-[12px]">
                        Booking id
                      </th>
                      <th className="uppercase w-[100px] text-[12px]">
                        Sector
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="h-[40px]">
                      <td className="text-[16px] ">27 May 2023 </td>
                      <td className="text-[16px] text-center">
                        Added to wallet
                      </td>
                      <td className="text-[#2D9D4C] text-center text-[16px]">
                        Credit
                      </td>
                      <td className="text-[16px] text-center">₹ 15,000</td>
                      <td className="text-[16px] text-center">₹ -5,000</td>
                      <td className="text-[16px] text-center">
                        123456789123584
                      </td>
                      <td className="text-[16px] text-center">DEL-BLR</td>
                    </tr>
                    <tr className="h-[40px]">
                      <td className="text-[16px] ">27 May 2023 </td>
                      <td className="text-[16px] text-center">
                        Added to wallet
                      </td>
                      <td className="text-[#D05555] text-center text-[16px]">
                        Dedit
                      </td>
                      <td className="text-[16px] text-center">₹ 15,000</td>
                      <td className="text-[16px] text-center">₹ -5,000</td>
                      <td className="text-[16px] text-center">
                        123456789123584
                      </td>
                      <td className="text-[16px] text-center">DEL-BLR</td>
                    </tr>
                    <tr className="h-[40px]">
                      <td className="text-[16px] ">27 May 2023 </td>
                      <td className="text-[16px] text-center">
                        Added to wallet
                      </td>
                      <td className="text-[#2D9D4C] text-center text-[16px]">
                        Credit
                      </td>
                      <td className="text-[16px] text-center">₹ 15,000</td>
                      <td className="text-[16px] text-center">₹ -5,000</td>
                      <td className="text-[16px] text-center">
                        123456789123584
                      </td>
                      <td className="text-[16px] text-center">DEL-BLR</td>
                    </tr>
                    <tr className="h-[40px]">
                      <td className="text-[16px] ">27 May 2023 </td>
                      <td className="text-[16px] text-center">
                        Added to wallet
                      </td>
                      <td className="text-[#D05555] text-center text-[16px]">
                        Dedit
                      </td>
                      <td className="text-[16px] text-center">₹ 15,000</td>
                      <td className="text-[16px] text-center">₹ -5,000</td>
                      <td className="text-[16px] text-center">
                        123456789123584
                      </td>
                      <td className="text-[16px] text-center">DEL-BLR</td>
                    </tr>
                    <tr className="h-[40px]">
                      <td className="text-[16px] ">27 May 2023 </td>
                      <td className="text-[16px] text-center">
                        Added to wallet
                      </td>
                      <td className="text-[#2D9D4C] text-center text-[16px]">
                        Credit
                      </td>
                      <td className="text-[16px] text-center">₹ 15,000</td>
                      <td className="text-[16px] text-center">₹ -5,000</td>
                      <td className="text-[16px] text-center">
                        123456789123584
                      </td>
                      <td className="text-[16px] text-center">DEL-BLR</td>
                    </tr>
                    <tr className="h-[40px]">
                      <td className="text-[16px] ">27 May 2023 </td>
                      <td className="text-[16px] text-center">
                        Added to wallet
                      </td>
                      <td className="text-[#D05555] text-center text-[16px]">
                        Dedit
                      </td>
                      <td className="text-[16px] text-center">₹ 15,000</td>
                      <td className="text-[16px] text-center">₹ -5,000</td>
                      <td className="text-[16px] text-center">
                        123456789123584
                      </td>
                      <td className="text-[16px] text-center">DEL-BLR</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jdwallet;
