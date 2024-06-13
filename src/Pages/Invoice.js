import React from "react";
import logo from "../Assets/logo.svg";
const Invoice = () => {
  return (
    <div className="flex justify-center pb-10">
      <div className="w-[900px] h-[900px] box-shadow p-5">
        <div className="flex justify-between">
          <div>
            <img src={logo} alt="" />{" "}
          </div>
          <div className="flex flex-col  w-[500px] justify-end items-end">
            <div className="font-semibold">JD TRAVELS</div>
            <div className="text-right">
              NO. 11, 1ST MAIN, 1ST FLOOR, HAMPINAGAR, R.P.C LAYOUT,
              VIJAYANAGAR, BANGALORE. 560-104.
            </div>
            <div>Email : travel@jdgroups.in</div>
            <div>C I N : KANTA BANSAL P A N : ABDPB5376L</div>
            <div>GSTIN : 29ABDPB5376L1ZD (KARNATAKA)</div>
          </div>
        </div>
        <div className="mt-5 text-center uppercase text-[20px] font-semibold">
            Invoice
        </div>
      </div>
    </div>
  );
};

export default Invoice;
