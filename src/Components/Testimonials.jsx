import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import TestImg1 from "../assets/TestImg1.webp"
import TestImg2 from "../assets/TestImg2.webp"
import TestImg3 from "../assets/TestImg3.webp"

function Testimonials() {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="custom-next-arrow absolute top-1/2 right-0 transform -translate-y-1/2"
        onClick={onClick}
      >
        <MdOutlineKeyboardArrowRight  style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }} className="text-[#454545] text-[2rem] p-1 bg-[#fff] -mr-4 rounded-full cursor-pointer" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="custom-next-arrow absolute z-40 top-1/2 left-0 transform -translate-y-1/2"
        onClick={onClick}
      >
        <MdOutlineKeyboardArrowLeft  style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }} className="text-[#454545] text-[2rem] p-1 bg-[#fff] rounded-full -ml-4 cursor-pointer  " />
      </div>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className=" max-w-[1000px] mx-auto px-4 ">
      <div className=" flex flex-col gap-2 items-center ">
        <h2 className=" text-[2.5rem] text-center md:text-[3rem] font-light ">What client says about?</h2>
        <p className=" text-[#474747] text-center ">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
      </div>

      <Slider {...settings} className=" bg-[#FFFBF9] py-[5rem] rounded-md mt-14 ">
        <div className="  ">
          <h3 className=" max-w-[70%] mx-auto text-center ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ratione corrupti voluptas voluptate enim, perspiciatis ipsum eum nesciunt, autem et labore, tempora facere illo ut! Quibusdam optio totam deleniti sapiente.</h3>
          <div className=" flex items-center justify-center gap-5 mt-4 ">
            <img src={TestImg1} alt="" className=" w-[4rem] h-[4rem] object-cover rounded-full " />
            <div className=" flex flex-col  ">
              <h3 className=" text-[#0372BF] text-xl ">Md Shahed</h3>
              <span className=" text-[#454545] ">Full Stack Developer</span>
            </div>
          </div>
        </div>
        <div className="  ">
          <h3 className=" max-w-[70%] mx-auto text-center ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ratione corrupti voluptas voluptate enim, perspiciatis ipsum eum nesciunt, autem et labore, tempora facere illo ut! Quibusdam optio totam deleniti sapiente.</h3>
          <div className=" flex items-center justify-center gap-5 mt-4 ">
            <img src={TestImg2} alt="" className=" w-[4rem] h-[4rem] object-cover rounded-full " />
            <div className=" flex flex-col  ">
              <h3 className=" text-[#0372BF] text-xl ">Md Shahed</h3>
              <span className=" text-[#454545] ">Full Stack Developer</span>
            </div>
          </div>
        </div>
        <div className="  ">
          <h3 className=" max-w-[70%] mx-auto text-center ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ratione corrupti voluptas voluptate enim, perspiciatis ipsum eum nesciunt, autem et labore, tempora facere illo ut! Quibusdam optio totam deleniti sapiente.</h3>
          <div className=" flex items-center justify-center gap-5 mt-4 ">
            <img src={TestImg3} alt="" className=" w-[4rem] h-[4rem] object-cover rounded-full " />
            <div className=" flex flex-col  ">
              <h3 className=" text-[#0372BF] text-xl ">Md Shahed</h3>
              <span className=" text-[#454545] ">Full Stack Developer</span>
            </div>
          </div>
        </div>
        
      </Slider>
    </div>
  );
}

export default Testimonials;
