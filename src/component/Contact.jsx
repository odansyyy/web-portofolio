import React from "react";
import "aos/dist/aos.css";

function Contact() {
    return (
        <>
        <div id="Project" data-aos="fade-up-right" className="p-20 flex flex-col items-center justify-center ">
            <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Contact</h1>
            <section id="Contact" className="text-gray-600 body-font relative bg-slate-900">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div data-aos="fade-left" className="lg:w-2/3 md:w-1/2 bg-slate-800 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative border-1 border-fuchsia-500 border_glow">
                        <iframe
                            width="100%"
                            height="100%"
                            className="absolute inset-0"
                            frameborder="0"
                            src="https://www.google.com/maps/place/8%C2%B011'54.2%22S+112%C2%B041'32.3%22E/@-8.2098214,112.6833547,15z/data=!4m13!1m8!3m7!1s0x2dd61eddaf7a1d25:0xa261b88f1f1452f4!2sGedog+Wetan,+Kec.+Turen,+Kabupaten+Malang,+Jawa+Timur!3b1!8m2!3d-8.2102385!4d112.6943559!16s%2Fg%2F120t4mgf!3m3!8m2!3d-8.198389!4d112.692307?entry=ttu " 
                            ></iframe>
                        <div data-aos="fade-left" className="bg-gray-300 relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ALAMAT</h2>
                                <p className="mt-1">Jl.Ringin Raya Desa Gedog Wetan Kecamatan Turen Kabupaten Malang Jawa Timur 10675</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <a className="text-indigo-500 leading-relaxed">odansyaharta.email.com</a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">NO HANDPHONE</h2>
                                <p className="leading-relaxed">0822-5719-7792</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down" className="lg:w-1/3 md:w-1/2 bg-slate-800 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 border-1 border-fuchsia-500 border_glow">
                        <h2 className="font-bold text-lg mb-1 mx-2 my-2 text-white title-font">Feedback</h2>
                        <p className="leading-relaxed mb-5 mx-2 my-2 text-gray-200">Masukkan saran tentang portofolio saya, Terima kasih sudah mengunjungi web portofolio saya</p>
                        <div className="relative mb-4 my-2 mx-2">
                            <label for="name" className="leading-7 text-sm text-gray-200">Nama</label>
                            <input type="text" id="name" name="name" className="w-full bg-gray-300 shadow-md border-2 border-gray-400  rounded focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                        </div>
                        <div className="relative mb-4 my-2 mx-2">
                            <label for="email" className="leading-7 text-sm text-gray-200">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-gray-300 shadow-md border-2 border-gray-400  rounded focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                        </div>
                        <div className="relative mb-4 my-2 mx-2">
                            <label for="message" className="leading-7 text-sm text-gray-200">Message</label>
                            <textarea id="message" name="message" className="w-full bg-gray-300 shadow-md border-2 border-gray-400  rounded focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button className="my-10 mx-10 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none shadow-lg hover:bg-indigo-600 rounded text-lg">Send</button>
                        <p className="mx-5 my-5 mb-5 text-xs text-center text-gray-200 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
}
export default Contact;