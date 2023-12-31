import {useEffect} from "react";
import {AiFillGithub} from "react-icons/ai";
import { FaInstagram, } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import {FiTwitter} from "react-icons/fi";
import img from "../assets/pp.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Banner () {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quart',
            dealy: 0,
            duration: 750})
        },[])
    return (
    <>
        <div id="Home" data-aos="fade-right"className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
            <div data-aos="fade-left" className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1 className="text-[52px] font-semibold mb-8 leading-normal">Welcome To <span className="text-fuchsia-500">My Website</span></h1>
                <p>Selamat datang di website portofolio saya!</p>
                <p>Saya adalah seorang profesional kreatif dengan passion untuk seni dan desain. Melalui halaman ini, saya berharap dapat berbagi dengan Anda karya-karya terbaik saya serta sedikit wawasan tentang siapa saya dan apa yang saya lakukan.</p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                            <a href="https://github.com/odansyyy?tab=overview&from=2023-10-01&to=2023-10-31" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                            <AiFillGithub className="text-[28px]"/>
                            </a>
                            <a href="https://www.linkedin.com/" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                            <FaLinkedinIn className="text-[28px]"/>
                            </a>
                            <a href="https://twitter.com/" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                            <FiTwitter className="text-[28px]"/>
                            </a>
                            <a href="https://instagram.com/odan_syaharta?igshid=OGQ5ZDc2ODk2ZA==" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                            <FaInstagram className="text-[28px]"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <img data-aos="fade-up"src={img} width={290} height={290} className="rounded-full border-2 p-1 border-fuchsia-500 img_glow" alt="" />
        </div>
    </>
    );
}
export default Banner;