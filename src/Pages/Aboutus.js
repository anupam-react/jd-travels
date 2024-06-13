import React from "react";
import aboutbanner from "../Assets/About/aboutbanner.svg";
import aircloud from "../Assets/About/aircloud.svg";
import { IoChevronForward } from "react-icons/io5";
import roadmap from "../Assets/About/roadmap.svg";
import achivement from "../Assets/About/achivement.svg";
const Aboutus = () => {
  return (
    <div className="mt-10">
      <img src={aboutbanner} alt="" />
      <div className="flex mt-10">
        <div className="w-[587px]">
          <img src={aircloud} alt="" />
        </div>
        <div className="w-[822px] flex flex-col gap-5">
          <div className="text-[36px] font-semibold">What do we do?</div>
          <p className="text-[#4F4A3D]">
            We are JD Travels, your ultimate travel partner for epic adventures
            and unforgettable memories! We're a team of travel enthusiasts who
            are passionate about exploring new destinations and creating
            personalized travel experiences that suit your style and budget.
          </p>
          <p className="text-[#4F4A3D]">
            At JD Travels, we understand that travel is all about letting loose,
            trying new things, and making unforgettable memories. Whether you're
            looking to hike to the top of a mountain, party on the beach, or
            immerse yourself in a new culture, we've got you covered.
          </p>
          <div className="">
            <button className="w-[240px] h-[62px] bg-[#FFC10E] font-semibold text-[18px]  rounded-lg flex justify-center items-center">
              learn more <IoChevronForward />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="font-semibold flex justify-center text-[36px]">
          Our Story
        </div>
        <div className="flex justify-center">
          <div className="text-[#4F4A3D] w-[800px] text-center">
            Our team of travel experts has years of experience in the industry
            and we know how to make every trip exciting, engaging, and unique.
            We offer a wide range of travel services, from flights and
            accommodations to tours and excursions.
          </div>
        </div>
        <div className="mt-5">
          <img src={roadmap} alt="" />
        </div>
      </div>
      <div className="mt-10">
        <div className="font-semibold flex justify-center text-[36px]">
          Our Team
        </div>
        <div className="flex gap-5 justify-center items-center w-[1300px] flex-wrap">
          <div className="flex flex-col items-center">
            <div className="w-[224px] h-[263px] bg-[#DCDCDC] rounded-xl"></div>
            <div className="text-[24px] font-semibold">Team member 1</div>
            <div className="text-[18px]">Founder</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[224px] h-[263px] bg-[#DCDCDC] rounded-xl"></div>
            <div className="text-[24px] font-semibold">Team member 1</div>
            <div className="text-[18px]">Founder</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[224px] h-[263px] bg-[#DCDCDC] rounded-xl"></div>
            <div className="text-[24px] font-semibold">Team member 1</div>
            <div className="text-[18px]">Founder</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[224px] h-[263px] bg-[#DCDCDC] rounded-xl"></div>
            <div className="text-[24px] font-semibold">Team member 1</div>
            <div className="text-[18px]">Founder</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[224px] h-[263px] bg-[#DCDCDC] rounded-xl"></div>
            <div className="text-[24px] font-semibold">Team member 1</div>
            <div className="text-[18px]">Founder</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[224px] h-[263px] bg-[#DCDCDC] rounded-xl"></div>
            <div className="text-[24px] font-semibold">Team member 1</div>
            <div className="text-[18px]">Founder</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[224px] h-[263px] bg-[#DCDCDC] rounded-xl"></div>
            <div className="text-[24px] font-semibold">Team member 1</div>
            <div className="text-[18px]">Founder</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[224px] h-[263px] bg-[#DCDCDC] rounded-xl"></div>
            <div className="text-[24px] font-semibold">Team member 1</div>
            <div className="text-[18px]">Founder</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[224px] h-[263px] bg-[#DCDCDC] rounded-xl"></div>
            <div className="text-[24px] font-semibold">Team member 1</div>
            <div className="text-[18px]">Founder</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[224px] h-[263px] bg-[#DCDCDC] rounded-xl"></div>
            <div className="text-[24px] font-semibold">Team member 1</div>
            <div className="text-[18px]">Founder</div>
          </div>
        </div>
      </div>
      <div className="mt-10 pb-10">
        <div className="font-semibold flex justify-center text-[36px] gap-2">
          <img src={achivement} alt="" className="w-[66px]" /> Our achievements
        </div>
        <div className="flex gap-4 mt-5">
          <div className="w-[326px] h-[206px] rounded-xl bg-[#FEF4DA] flex flex-col justify-center items-center gap-5">
            <div className="text-[18px] font-semibold">
              Award-winning Service
            </div>
            <div className="text-center text-[16px] text-[#4F4A3D]">
              We've been recognized by leading travel industry organizations for
              our commitment to exceptional service.
            </div>
          </div>
          <div className="w-[326px] h-[206px] rounded-xl bg-[#FEF4DA] flex flex-col justify-center items-center gap-5">
            <div className="text-[18px] font-semibold">
              Expanding Our Services
            </div>
            <div className="text-center text-[16px] text-[#4F4A3D]">
              Over the years, we've continued to expand our services, adding new
              destinations, tours, and travel-related products to our portfolio.
            </div>
          </div>
          <div className="w-[326px] h-[206px] rounded-xl bg-[#FEF4DA] flex flex-col justify-center items-center gap-5">
            <div className="text-[18px] font-semibold">
              Customized Travel Plans
            </div>
            <div className="text-center text-[16px] text-[#4F4A3D]">
              We understand that every traveler is unique, and that's why we
              offer customized travel plans tailored to your specific needs and
              preferences.
            </div>
          </div>
          <div className="w-[326px] h-[206px] rounded-xl bg-[#FEF4DA] flex flex-col justify-center items-center gap-5">
            <div className="text-[18px] font-semibold">Sustainable Travel</div>
            <div className="text-center text-[16px] text-[#4F4A3D]">
              We believe in responsible and sustainable travel practices. We're
              committed to promoting sustainable tourism and protecting the
              environment in the destinations.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
