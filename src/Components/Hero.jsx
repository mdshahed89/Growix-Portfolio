import React from "react";
import HeroImg from "../assets/HeroImg.webp";
import HeroImg2 from "../assets/HeroImg2.webp";
import HeroImg3 from "../assets/HeroImg3.webp";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { baseUrl } from "./config";

function Hero() {
  // function SampleNextArrow(props) {
  //   const { onClick } = props;
  //   return (
  //     <div
  //       className="custom-next-arrow absolute top-1/2 right-0 transform -translate-y-1/2"
  //       onClick={onClick}
  //     >
  //       <MdOutlineKeyboardArrowRight
  //         style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)" }}
  //         className="text-[#454545] text-[2rem] p-1 bg-[#fff] -mr-4 rounded-full cursor-pointer"
  //       />
  //     </div>
  //   );
  // }

  // function SamplePrevArrow(props) {
  //   const { onClick } = props;
  //   return (
  //     <div
  //       className="custom-next-arrow absolute z-40 top-1/2 left-0 transform -translate-y-1/2"
  //       onClick={onClick}
  //     >
  //       <MdOutlineKeyboardArrowLeft
  //         style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)" }}
  //         className="text-[#454545] text-[2rem] p-1 bg-[#fff] rounded-full -ml-4 cursor-pointer  "
  //       />
  //     </div>
  //   );
  // }

  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2010,
    autoplaySpeed: 5000,
    // cssEase: "linear",
    arrows: false,
    waitForAnimate: false
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className=" z-40 ">
      <div className="   slider-container  ">
        <Slider {...settings} className="  ">
          <div className=" relative w-full h-[60vh] md:h-[90vh]  before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-30 before:bg-black/40 ">
            <img
              src={HeroImg}
              alt="heroimg"
              className=" w-full h-full object-cover   "
            />
            <div className=" absolute top-0 left-0 text-[#fff] z-50 w-full h-full flex flex-col gap-8 items-center justify-center ">
              <div className=" text-center flex flex-col gap-5 ">
                <h1 className=" text-5xl md:text-7xl font-bold  ">
                  Hi, we are Growix.
                </h1>
                <h4 className=" text-xl md:text-2xl ">
                  We're working towards your business goals
                </h4>
              </div>
              <div className=" bg-[#0372BF] text-[1rem]  px-8 py-2 rounded-full ">
                Find Out More
              </div>
            </div>
          </div>
          <div className=" relative w-full h-[60vh] md:h-[90vh] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-30 before:bg-black/40  ">
            <img
              src={HeroImg2}
              alt="heroimg2"
              className=" w-full h-full object-cover   "
            />
            <div className=" absolute top-0 left-0 text-[#fff] z-50 w-full h-full flex flex-col gap-8 items-center justify-center ">
              <div className=" text-center flex flex-col gap-5 ">
                <h1 className=" text-5xl md:text-7xl font-bold  ">
                  Hi, we are SHD.
                </h1>
                <h4 className=" text-xl md:text-2xl ">
                  We're working towards your business goals
                </h4>
              </div>
              <div className=" bg-[#0372BF] text-[1rem]  px-8 py-2 rounded-full ">
                Find Out More
              </div>
            </div>
          </div>
          <div className=" relative w-full h-[60vh] md:h-[90vh] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-30 before:bg-black/40  ">
            <img
              src={HeroImg3}
              alt="heroimg3"
              className=" w-full h-full object-cover   "
            />
            <div className=" absolute top-0 left-0 text-[#fff] z-50 w-full h-full flex flex-col gap-8 items-center justify-center ">
              <div className=" text-center flex flex-col gap-5 ">
                <h1 className=" text-5xl md:text-7xl font-bold  ">
                  Hi, we are SHD.
                </h1>
                <h4 className=" text-xl md:text-2xl ">
                  We're working towards your business goals
                </h4>
              </div>
              <div className=" bg-[#0372BF] text-[1rem]  px-8 py-2 rounded-full ">
                Find Out More
              </div>
            </div>
          </div>
         
        </Slider>
      </div>
    </div>
  );
}

export default Hero;
