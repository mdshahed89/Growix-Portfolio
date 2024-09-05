import React from 'react'
import { SiWebpack } from "react-icons/si";
import { MdWebStories } from "react-icons/md";
import AboutImg from "../assets/AboutImg.webp"

function About() {
  return (
    <div className=' flex sm:flex-row flex-col items-center gap-5 max-w-[1300px] mx-auto my-16 px-3 '>
        <div className=' flex flex-col gap-20 flex-1 sm:order-1 order-2 '>
        <div>
        <h2 className=' text-[2.5rem] mb-3 sm:text-left text-center '>About Us</h2>
        <p className=' text-[1.2rem] leading-8 sm:max-w-[35rem] sm:mx-0 mx-auto sm:text-left text-center text-[#616161] font-light '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet incidunt magnam corrupti, odit eos harum quaerat nostrum voluptatibus aspernatur eligendi accusantium cum, impedit blanditiis voluptate commodi doloribus, nemo dignissimos recusandae.</p>
        </div>

        <div className=' flex gap-6 '>
        <div className=' flex flex-col gap-4 flex-1 '>
            <SiWebpack className=' text-[2rem] text-[#363636] ' />
            <p className=' text-base text-[#616161] '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem autem ipsam recusandae eaque, corrupti temporibus. Molestiae, illo! Incidunt, quos quo!</p>
        </div>
        <div className=' flex flex-col gap-4 flex-1 '>
            <MdWebStories className=' text-[2rem] text-[#363636] '/>
            <p className=' text-base text-[#616161] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magni quos quasi itaque earum explicabo quam dicta corporis sunt cum?</p>
        </div>
        </div>
        </div>
        <div className='  flex-1 h-[80%] sm:order-2 order-1 '>
            <img src={AboutImg} alt="" className=' w-full h-full object-cover ' />
        </div>

    </div>
  )
}

export default About