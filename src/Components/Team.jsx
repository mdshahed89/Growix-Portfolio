import React from 'react'
import Team1 from "../assets/TeamImg1.png"
import Team2 from "../assets/TeamImg2.png"
import Team3 from "../assets/TeamImg3.png"
import Team4 from "../assets/TeamImg4.png"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


function Team() {
  return (
    <div className='max-w-[1300px] mx-auto my-16 px-3 '>
        <div className=" flex flex-col gap-2 items-center pt-10 ">
            <h2 className=' text-[3rem] font-light '>Our Creative Team</h2>
            <p className=" text-[#474747] text-center  ">Our team and staff is presented here, we do what we love. Who we are, what we do and our social networks, connect with us.</p>
        </div>
        <div className=' grid grid-cols-2 md:grid-cols-4 gap-3 mt-20 '>
            <div className=' relative overflow-hidden group  rounded-md'>
            <div className=' absolute top-0 left-0 w-full h-full hover:bg-black/30 transition-all z-50 duration-300 ease-in-out '></div>
            <div className=' absolute -bottom-[10rem] group-hover:bottom-0 py-3 bg-black/50 transition-bottom duration-200 ease-linear z-[100] flex w-full items-end justify-between px-[2%] '>
                <div>
                    <h3 className=' text-[#fff] font-semibold text-[1.2rem] '>Md Shahed</h3>
                    <p className=' text-[#0372BF] font-semibold text-base '>Full stack developer</p>
                </div>
                <div className=' flex items-center gap-2 text-[2.1rem] '>
                    <FaFacebookF  style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }}  className=' p-2 rounded-full bg-[#3B5998] text-[#fff] cursor-pointer '/>
                    <FaInstagram   style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }} className=' p-2 rounded-full bg-[#D33E63] text-[#fff] cursor-pointer '/>
                    <FaLinkedinIn  style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }} className=' p-2 rounded-full bg-[#015886] text-[#fff] cursor-pointer ' />
                </div>
            </div>
                <img src={Team1} alt="" className=' h-full group-hover:scale-110 transition-scale duration-300 z-30 ease-in-out w-full object-cover bg-slate-300 ' />
            </div>
            <div className=' relative overflow-hidden group  rounded-md'>
            <div className=' absolute top-0 left-0 w-full h-full hover:bg-black/30 transition-all z-50 duration-300 ease-in-out '></div>
            <div className=' absolute -bottom-[10rem] group-hover:bottom-0 py-3 bg-black/50 transition-bottom duration-200 ease-linear z-[100] flex w-full items-end justify-between px-[2%] '>
                <div>
                    <h3 className=' text-[#fff] font-semibold text-[1.2rem] '>Md Shahed</h3>
                    <p className=' text-[#0372BF] font-semibold text-base '>Full stack developer</p>
                </div>
                <div className=' flex items-center gap-2 text-[2.1rem] '>
                    <FaFacebookF  style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }}  className=' p-2 rounded-full bg-[#3B5998] text-[#fff] cursor-pointer '/>
                    <FaInstagram   style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }} className=' p-2 rounded-full bg-[#D33E63] text-[#fff] cursor-pointer '/>
                    <FaLinkedinIn  style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }} className=' p-2 rounded-full bg-[#015886] text-[#fff] cursor-pointer ' />
                </div>
            </div>
                <img src={Team2} alt="" className=' h-full group-hover:scale-110 transition-scale duration-300 z-30 ease-in-out w-full object-cover  bg-slate-300' />
            </div>


            <div className=' relative overflow-hidden group  rounded-md '>
            <div className=' absolute top-0 left-0 w-full h-full hover:bg-black/30 transition-all z-50 duration-300 ease-in-out '></div>
            <div className=' absolute -bottom-[10rem] group-hover:bottom-0 py-3 bg-black/50 transition-bottom duration-200 ease-linear z-[100] flex w-full items-end justify-between px-[2%] '>
                <div>
                    <h3 className=' text-[#fff] font-semibold text-[1.2rem] '>Md Shahed</h3>
                    <p className=' text-[#0372BF] font-semibold text-base '>Ul/Ux Designer</p>
                </div>
                <div className=' flex items-center gap-2 text-[2.1rem] '>
                    <FaFacebookF  style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }}  className=' p-2 rounded-full bg-[#3B5998] text-[#fff] cursor-pointer '/>
                    <FaInstagram   style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }} className=' p-2 rounded-full bg-[#D33E63] text-[#fff] cursor-pointer '/>
                    <FaLinkedinIn  style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }} className=' p-2 rounded-full bg-[#015886] text-[#fff]  cursor-pointer' />
                </div>
            </div>
                <img src={Team3} alt="" className=' h-full group-hover:scale-110 transition-scale duration-300 z-30 ease-in-out w-full object-cover  bg-slate-300' />
            </div>

            <div className=' relative overflow-hidden group  rounded-md '>
            <div className=' absolute top-0 left-0 w-full h-full hover:bg-black/30 transition-all z-50 duration-300 ease-in-out '></div>
            <div className=' absolute -bottom-[10rem] group-hover:bottom-0 py-3 bg-black/50 transition-bottom duration-200 ease-linear z-[100] flex w-full items-end justify-between px-[2%] '>
                <div>
                    <h3 className=' text-[#fff] font-semibold text-[1.2rem] '>Md Shahed</h3>
                    <p className=' text-[#0372BF] font-semibold text-base '>Digital Marketer</p>
                </div>
                <div className=' flex items-center gap-2 text-[2.1rem] '>
                    <FaFacebookF  style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }}  className=' p-2 rounded-full bg-[#3B5998] text-[#fff] cursor-pointer '/>
                    <FaInstagram   style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }} className=' p-2 rounded-full bg-[#D33E63] text-[#fff] cursor-pointer '/>
                    <FaLinkedinIn  style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }} className=' p-2 rounded-full bg-[#015886] text-[#fff]  cursor-pointer' />
                </div>
            </div>
                <img src={Team4} alt="" className=' h-full group-hover:scale-110 transition-scale duration-300 z-30 ease-in-out w-full object-cover  bg-slate-300' />
            </div>

            {/* <div className=' relative overflow-hidden group  rounded-md '>
            <div className=' absolute top-0 left-0 w-full h-full hover:bg-black/30 transition-all z-50 duration-300 ease-in-out '></div>
            <div className=' absolute -bottom-[10rem] group-hover:bottom-0 py-3 bg-black/50 transition-bottom duration-200 ease-linear z-[100] flex w-full items-end justify-between px-[2%] '>
                <div>
                    <h3 className=' text-[#fff] font-semibold text-[1.2rem] '>Md Shahed</h3>
                    <p className=' text-[#0372BF] text-base '>Full stack developer</p>
                </div>
                <div className=' flex items-center gap-2 text-[2.1rem] '>
                    <FaFacebookF  style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }}  className=' p-2 rounded-full bg-[#3B5998] text-[#fff] cursor-pointer '/>
                    <FaInstagram   style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }} className=' p-2 rounded-full bg-[#D33E63] text-[#fff] cursor-pointer '/>
                    <FaLinkedinIn  style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }} className=' p-2 rounded-full bg-[#015886] text-[#fff]  cursor-pointer' />
                </div>
            </div>
                <img src={Team1} alt="" className=' h-full group-hover:scale-110 transition-scale duration-300 z-30 ease-in-out w-full object-cover  bg-slate-300' />
            </div>

            <div className=' relative overflow-hidden group  rounded-md '>
            <div className=' absolute top-0 left-0 w-full h-full hover:bg-black/30 transition-all z-50 duration-300 ease-in-out '></div>
            <div className=' absolute -bottom-[10rem] group-hover:bottom-0 py-3 bg-black/50 transition-bottom duration-200 ease-linear z-[100] flex w-full items-end justify-between px-[2%] '>
                <div>
                    <h3 className=' text-[#fff] font-semibold text-[1.2rem] '>Md Shahed</h3>
                    <p className=' text-[#0372BF] text-base '>Full stack developer</p>
                </div>
                <div className=' flex items-center gap-2 text-[2.1rem] '>
                    <FaFacebookF  style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }}  className=' p-2 rounded-full bg-[#3B5998] text-[#fff] cursor-pointer '/>
                    <FaInstagram   style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }} className=' p-2 rounded-full bg-[#D33E63] text-[#fff] cursor-pointer '/>
                    <FaLinkedinIn  style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }} className=' p-2 rounded-full bg-[#015886] text-[#fff]  cursor-pointer' />
                </div>
            </div>
                <img src={Team1} alt="" className=' h-full group-hover:scale-110 transition-scale duration-300 z-30 ease-in-out w-full object-cover  bg-slate-300' />
            </div> */}


        </div>
    </div>
  )
}

export default Team