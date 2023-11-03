import React from "react";
import "aos/dist/aos.css";
import img1 from "../assets/form.png";
import img2 from "../assets/form2.png";
import img3 from "../assets/login.png";
import img4 from "../assets/register.png";
import img5 from "../assets/todo.png";
import img6 from "../assets/istate.png";
import img7 from "../assets/iarray.png";

function Project () {
    return (
    <>
        <div data-aos="fade-up" id="Project" className="p-20 flex flex-col items-center justify-center">
            <h1 data-aos="fade-down" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Project</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gird-cols-1 justify-around gap-20">
                <div className="bg-gray-800 p-4 border-1 border-fuchsia-500 b_glow rounded-lg shadow-lg hover:transform hover:scale-105 transition-transform">
                    <img src={img2} alt="Proyek 1" className="text-slate-50 w-full h-48 object-cover rounded-md mb-4"></img>
                    <h2 className="text-center text-xl text-gray-50 font-semibold">Form SP-FKPPM</h2>
                    <p className="text-center text-gray-400">Membuat tampilan formulir pendaftaran anggota spfkm.</p>
                    <a href="" className="mt-4 block bg-blue-600 text-center text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Lihat Proyek</a>
                </div>

                <div className="bg-gray-800 p-4 border-1 border-fuchsia-500 b_glow rounded-lg shadow-lg hover:transform hover:scale-105 transition-transform">
                    <img src={img1} alt="Proyek 2" className="text-slate-50 w-full h-48 object-cover rounded-md mb-4"></img>
                    <h2 className="text-center text-xl text-gray-50 font-semibold">Form Perpustakaan</h2>
                    <p className="text-center text-gray-400">Tampilan formulir pendaftaran anggota perpustakaan sekolah.</p>
                    <a href="#" className="mt-4 block bg-blue-600 text-center text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Lihat Proyek</a>
                </div>

                <div className="bg-gray-800 p-4 border-1 border-fuchsia-500 b_glow rounded-lg shadow-lg hover:transform hover:scale-105 transition-transform">
                    <img src={img3} alt="Proyek 3" className="text-slate-50 w-full h-48 object-cover rounded-md mb-4"></img>
                    <h2 className="text-center text-xl text-gray-50 font-semibold">Login</h2>
                    <p className="text-center text-gray-400">Membuat tampilan Login dengan reactjs.</p>
                    <a href="#" className="mt-4 block bg-blue-600 text-center text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Lihat Proyek</a>
                </div>

                <div className="bg-gray-800 p-4 border-1 border-fuchsia-500 b_glow rounded-lg shadow-lg hover:transform hover:scale-105 transition-transform">
                    <img src={img4} alt="Proyek 4" className="text-slate-50 w-full h-48 object-cover rounded-md mb-4"></img>
                    <h2 className="text-center text-xl text-gray-50 font-semibold">Register</h2>
                    <p className="text-center text-gray-400">Membuat tampilan Register dengan reactjs.</p>
                    <a href="#" className="mt-4 block bg-blue-600 text-center text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Lihat Proyek</a>
                </div>
            
                <div className="bg-gray-800 p-4 border-1 border-fuchsia-500 b_glow rounded-lg shadow-lg hover:transform hover:scale-105 transition-transform">
                    <img src={img5} alt="Proyek 5" className="text-slate-50 w-full h-48 object-cover rounded-md mb-4"></img>
                    <h2 className="text-center text-xl text-gray-50 font-semibold">TodoList</h2>
                    <p className="text-center text-gray-400">Membuat aplikasi TodoList menggunakan State dan Handle event reactJS.</p>
                    <a href="#" className="mt-4 block bg-blue-600 text-center text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Lihat Proyek</a>
                </div>

                <div className="bg-gray-800 p-4 border-1 border-fuchsia-500 b_glow rounded-lg shadow-lg hover:transform hover:scale-105 transition-transform">
                    <img src={img6} alt="Proyek 6" className="text-slate-50 w-full h-48 object-cover rounded-md mb-4"></img>
                    <h2 className="text-center text-xl text-gray-50 font-semibold">Immutable State</h2>
                    <p className="text-center text-gray-400">Membuat salinan objek status (state) dan membuat perubahan pada salinan tersebut daripada mengubah status asli.</p>
                    <a href="#" className="mt-4 block bg-blue-600 text-center text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Lihat Proyek</a>
                </div>

                <div className="bg-gray-800 p-4 border-1 border-fuchsia-500 b_glow rounded-lg shadow-lg hover:transform hover:scale-105 transition-transform">
                    <img src={img7} alt="Proyek 7" className="text-slate-50 w-full h-48 object-cover rounded-md mb-4"></img>
                    <h2 className="text-xl text-center text-gray-50 font-semibold">Immutable Array</h2>
                    <p className="text-center text-gray-400">Immutable array adalah array yang setelah dibuat, elemennya tidak dapat diubah.</p>
                    <a href="#" className="mt-4 block bg-blue-600 text-center text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Lihat Proyek</a>
                </div>
            </div>
        </div>
    </>
    );
}
export default Project;