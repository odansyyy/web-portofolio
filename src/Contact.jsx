import React from "react";
function Contact() {
    return (
        <>
            <section class="text-gray-600 body-font relative bg-amber-100/25">
                <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe
                            width="100%"
                            height="100%"
                            class="absolute inset-0"
                            frameborder="0"
                        ></iframe>
                        <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div class="lg:w-1/2 px-6">
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ALAMAT</h2>
                                <p class="mt-1">Jl.Ringin Raya Desa Gedog Wetan Kecamatan Turen Kabupaten Malang Jawa Timur 10675</p>
                            </div>
                            <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <a class="text-indigo-500 leading-relaxed">odansyaharta26@email.com</a>
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">NO HANDPHONE</h2>
                                <p class="leading-relaxed">0822-5719-7792</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 md:w-1/2 bg-gray-300 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 class="text-gray-900 text-lg mb-1 mx-2 my-2 font-medium title-font">Feedback</h2>
                        <p class="leading-relaxed mb-5 mx-2 my-2 text-gray-600">Masukkan saran tentang portofolio saya, Terima kasih sudah mengunjungi web portofolio saya</p>
                        <div class="relative mb-4 my-2 mx-2">
                            <label for="name" class="leading-7 text-sm text-gray-600">Nama</label>
                            <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                        </div>
                        <div class="relative mb-4 my-2 mx-2">
                            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                        </div>
                        <div class="relative mb-4 my-2 mx-2">
                            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button class="my-10 mx-10 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        <p class="mx-5 my-5 mb-5 text-xs text-center text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Contact;