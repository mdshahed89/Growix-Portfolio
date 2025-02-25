import React, { useState } from "react";
import { IoLogoDesignernews } from "react-icons/io5";
import { MdOutlineWeb } from "react-icons/md";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { RiSeoFill } from "react-icons/ri";




function Services({page}) {

    

  return (
    <div className={` max-w-[1300px] mx-auto ${page ? 'py-16': 'py-28'} px-3 `}>
      <div className=" flex flex-col items-center gap-2 ">
        <h2 className=" text-[2.5rem] text-center md:text-[3rem] font-light leading-tight ">We do awesome services for our clients</h2>
        <p className=" text-[#474747] text-center ">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-4 mt-20 md:gap-4 gap-3 lg:gap-5 ">

        <div style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }} className=" px-5 pt-10 pb-4 rounded-md  relative hover:bg-[#0372BF] hover:text-[#fff]  text-[#202020] transition duration-200 ease-in-out group ">
            <div className=" top-[-20%] absolute ">
                <IoLogoDesignernews style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }} className=" text-[4rem] rounded-full text-slate-100  bg-[#0372BF] group-hover:bg-slate-100 group-hover:text-[#0372BF] group-hover:shadow-md p-4 group-hover:translate-x-7 transform transition-transform duration-300 ease-linear "  />
            </div>
            <div className=" flex flex-col gap-5 ">
            <h3 className=" text-[1.3rem] font-medium line-clamp-1 ">Web Development</h3>
            <p className=" text-[#474747]  group-hover:text-[#e4e4e4] line-clamp-4 ">A small river named Duden flows by their place and supplies. A small river named Duden flows by their place and supplies</p>
            </div>
        </div>
        <div style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }} className=" px-5 pt-10 pb-4 rounded-md relative hover:bg-[#0372BF] hover:text-[#fff]  text-[#202020] transition duration-200 ease-in-out group ">
            <div className=" top-[-20%] absolute ">
                <RiSeoFill style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }} className=" text-[4rem] rounded-full text-slate-100  bg-[#0372BF] group-hover:bg-slate-100 group-hover:text-[#0372BF] group-hover:shadow-md p-4 group-hover:translate-x-7 transform transition-transform duration-300 ease-linear "  />
            </div>
            <div className=" flex flex-col gap-5 ">
            <h3 className=" text-[1.3rem] font-medium line-clamp-1 ">App Development</h3>
            <p className=" text-[#474747]  group-hover:text-[#e4e4e4]  line-clamp-4">A small river named Duden flows by their place and supplies. A small river named Duden flows by their place and supplies</p>
            </div>
        </div>

        <div style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }} className=" md:mt-0 mt-10 px-5 pt-10 pb-4 rounded-md relative hover:bg-[#0372BF] hover:text-[#fff]  text-[#202020] transition duration-200 ease-in-out group ">
            <div className=" top-[-20%] absolute ">
                <MdOutlineWeb style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }} className=" text-[4rem] rounded-full text-slate-100  bg-[#0372BF] group-hover:bg-slate-100 group-hover:text-[#0372BF] group-hover:shadow-md p-4 group-hover:translate-x-7 transform transition-transform duration-300 ease-linear "  />
            </div>
            <div className=" flex flex-col gap-5 ">
            <h3 className=" text-[1.3rem] font-medium line-clamp-1 ">Web Design</h3>
            <p className=" text-[#474747]  group-hover:text-[#e4e4e4]  line-clamp-4">A small river named Duden flows by their place and supplies. A small river named Duden flows by their place and supplies</p>
            </div>
        </div>

        <div style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }} className=" md:mt-0 mt-10 px-5 pt-10 pb-4 rounded-md relative hover:bg-[#0372BF] hover:text-[#fff]  text-[#202020] transition duration-200 ease-in-out group ">
            <div className=" top-[-20%] absolute ">
                <MdOutlineDeveloperMode style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }} className=" text-[4rem] rounded-full text-slate-100  bg-[#0372BF] group-hover:bg-slate-100 group-hover:text-[#0372BF] group-hover:shadow-md p-4 group-hover:translate-x-7 transform transition-transform duration-300 ease-linear "  />
            </div>
            <div className=" flex flex-col gap-5 ">
            <h3 className=" text-[1.3rem] font-medium line-clamp-1 ">Ui/Ux Design</h3>
            <p className=" text-[#474747]  group-hover:text-[#e4e4e4]  line-clamp-4">A small river named Duden flows by their place and supplies. A small river named Duden flows by their place and supplies</p>
            </div>
        </div>

        <div style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }} className=" mt-10 px-5 pt-10 pb-4 rounded-md relative hover:bg-[#0372BF] hover:text-[#fff]  text-[#202020] transition duration-200 ease-in-out group ">
            <div className=" top-[-20%] absolute ">
                <RiSeoFill style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }} className=" text-[4rem] rounded-full text-slate-100  bg-[#0372BF] group-hover:bg-slate-100 group-hover:text-[#0372BF] group-hover:shadow-md p-4 group-hover:translate-x-7 transform transition-transform duration-300 ease-linear "  />
            </div>
            <div className=" flex flex-col gap-5 ">
            <h3 className=" text-[1.3rem] font-medium line-clamp-1 ">SEO</h3>
            <p className=" text-[#474747]  group-hover:text-[#e4e4e4]  line-clamp-4">A small river named Duden flows by their place and supplies. A small river named Duden flows by their place and supplies</p>
            </div>
        </div>
        <div style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }} className=" px-5 pt-10 pb-4 mt-10 rounded-md relative hover:bg-[#0372BF] hover:text-[#fff]  text-[#202020] transition duration-200 ease-in-out group ">
            <div className=" top-[-20%] absolute ">
                <RiSeoFill style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }} className=" text-[4rem] rounded-full text-slate-100  bg-[#0372BF] group-hover:bg-slate-100 group-hover:text-[#0372BF] group-hover:shadow-md p-4 group-hover:translate-x-7 transform transition-transform duration-300 ease-linear "  />
            </div>
            <div className=" flex flex-col gap-5 ">
            <h3 className=" text-[1.3rem] font-medium line-clamp-1 ">Digital Marketing</h3>
            <p className=" text-[#474747]  group-hover:text-[#e4e4e4]  line-clamp-4">A small river named Duden flows by their place and supplies. A small river named Duden flows by their place and supplies</p>
            </div>
        </div>
        <div style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }} className=" px-5 pt-10 pb-4 mt-10 rounded-md relative hover:bg-[#0372BF] hover:text-[#fff]  text-[#202020] transition duration-200 ease-in-out group ">
            <div className=" top-[-20%] absolute ">
                <RiSeoFill style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }} className=" text-[4rem] rounded-full text-slate-100  bg-[#0372BF] group-hover:bg-slate-100 group-hover:text-[#0372BF] group-hover:shadow-md p-4 group-hover:translate-x-7 transform transition-transform duration-300 ease-linear "  />
            </div>
            <div className=" flex flex-col gap-5 ">
            <h3 className=" text-[1.3rem] font-medium line-clamp-1 ">Cybersecurity </h3>
            <p className=" text-[#474747]  group-hover:text-[#e4e4e4]  line-clamp-4">A small river named Duden flows by their place and supplies. A small river named Duden flows by their place and supplies</p>
            </div>
        </div>
        <div style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }} className=" px-5 pt-10 pb-4 mt-10 rounded-md relative hover:bg-[#0372BF] hover:text-[#fff]  text-[#202020] transition duration-200 ease-in-out group ">
            <div className=" top-[-20%] absolute ">
                <RiSeoFill style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }} className=" text-[4rem] rounded-full text-slate-100  bg-[#0372BF] group-hover:bg-slate-100 group-hover:text-[#0372BF] group-hover:shadow-md p-4 group-hover:translate-x-7 transform transition-transform duration-300 ease-linear "  />
            </div>
            <div className=" flex flex-col gap-5 ">
            <h3 className=" text-[1.3rem] font-medium line-clamp-1 ">IT Support and Manage</h3>
            <p className="text-[#474747] group-hover:text-[#e4e4e4]   line-clamp-4">A small river named Duden flows by their place and supplies. A small river named Duden flows by their place and supplies</p>
            </div>
        </div>


      </div>
    </div>
  );
}

export default Services;
