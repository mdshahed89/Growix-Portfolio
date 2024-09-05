import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import Portfolio1 from "../assets/Portfolio1.webp";
import Portfolio2 from "../assets/Portfolio2.webp";
import Portfolio3 from "../assets/Portfolio3.webp";
import PortfolioCard from "../Components/SubComponents/PortfolioCard";

const Portfoliop = () => {
  return (
    <div>
      <div className=" h-[25rem] w-full relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-black/20 ">
        <div className=" absolute bottom-[15%] left-[10%] text-[#fff] font-semibold ">
          <h2 className=" text-[4rem] font-bold ">Portfolio</h2>
          <p className=" flex items-center gap-3 text-[2rem] ">
            Home <MdDoubleArrow /> Portfolio
          </p>
        </div>
        <img
          src="https://d1m75rqqgidzqn.cloudfront.net/wp-data/2020/07/20162255/iStock-1157887211.jpg"
          alt=""
          className="w-full h-full object-cover   "
        />
      </div>

      <div className=" max-w-[1300px] mx-auto mt-16 ">

      <div className=' flex items-center justify-end gap-4 text-[#fff] '>
            <div className=' bg-[#45a3e6] transition duration-300 ease-in-out px-8 hover:bg-[#45a3e6] py-1 rounded-md cursor-pointer '>All</div>
            <div className=' bg-[#247bb9] transition duration-300 ease-in-out px-8 hover:bg-[#45a3e6] py-1 rounded-md cursor-pointer '>Web</div>
            <div className=' bg-[#247bb9] transition duration-300 ease-in-out px-8 hover:bg-[#45a3e6] py-1 rounded-md cursor-pointer '>App</div>
        </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 mt-10 mb-20 ">
        <PortfolioCard img={Portfolio1} />
        <PortfolioCard img={Portfolio2} />
        <PortfolioCard img={Portfolio3} />
        <PortfolioCard img={Portfolio3} />
        <PortfolioCard img={Portfolio2} />
        <PortfolioCard img={Portfolio1} />
        <PortfolioCard img={Portfolio1} />
        <PortfolioCard img={Portfolio2} />
        <PortfolioCard img={Portfolio3} />
        <PortfolioCard img={Portfolio3} />
        <PortfolioCard img={Portfolio2} />
        <PortfolioCard img={Portfolio1} />
      </div>

      </div>
    </div>
  );
};

export default Portfoliop;
