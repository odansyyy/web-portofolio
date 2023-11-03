import React from "react";
import img from "../assets/pp2.png";
import 'animate.css';

function About () {
    return (
    <div>
        <div id="About" className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
        <img data-aos="fade-right" src={img} width={290} height={290} className="rounded border-2 p-1 border-fuchsia-500 img_glow" alt="" />
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase">About me</h1>
                <p data-aos="fade-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aliquid necessitatibus corrupti autem, harum rerum temporibus iure quas, consequatur eos reiciendis eligendi pariatur provident tempora et, cumque fugiat! Veritatis, cum!</p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default About;