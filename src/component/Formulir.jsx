import React, { useState } from "react";

function Formulir() {
  const [nama, setNama] = useState("");
  const [tempat, setTempat] = useState("");
  const [NPM, setNPM] = useState("");
  const [TS, setTS] = useState("");
  const [telepon, setTelepon] = useState(""); // Perbaiki penamaan state
  const [email, setEmail] = useState(""); // Perbaiki penamaan state
  const [alamat, setAlamat] = useState("");
  const [kota, setKota] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [pos, setPos] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`
    Nama   : ${nama}
    Tempat : ${tempat}
    NPM    : ${NPM}
    TS     : ${TS}
    telepon: ${telepon}
    email  : ${email}
    alamat : ${alamat}
    kota   : ${kota}
    provinsi: ${provinsi}
    pos    : ${pos}
    `);
  }

  return (
    <>
      <div className="menin-h-screen p-20 bg-gradient-to-tr from-yellow-300 to-blue-500 flex items-center justify-center">
        <div className="relative">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover object-center fixed inset-0 z-0"
          >
            <source src="stars.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10">
            {/* Konten Anda akan ditampilkan di atas video */}
            <div className="container max-w-screen-lg mx-auto">
              <div>
                <h1 className="text-center font-bold text-2xl text-black-700">Formulir Pendaftaran Keanggotaan Perpustakaan</h1>
                <p className="text-black-300 mb-6 text-center">Daftar Anggota</p>
                <form onSubmit={handleSubmit}>
                  <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                      <div className="text-gray-600">
                        <p className="font-medium text-lg">Pengisian Formulir</p>
                        <p className="mb-2">Mohon untuk mengisi sesuai data pribadi anda</p>
                      </div>

                      <div className="lg:col-span-2">
                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                          <div className="md:col-span-5">
                            <label htmlFor="full_name">Nama Lengkap</label> {/* Menggunakan htmlFor untuk label */}
                            <input value={nama} onChange={(e) => setNama(e.target.value)} type="text" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="isi nama anada" />
                          </div>

                          <div className="md:col-span-2">
                            <label htmlFor="ttl">Tempat tgl Lahir</label>
                            <input value={tempat} onChange={(e) => setTempat(e.target.value)} type="text" name="ttl" id="ttl" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder='isi tempat tgl lahir anda' />
                          </div>

                          <div className="md:col-span-2">
                            <label htmlFor="npm">NPM</label>
                            <input value={NPM} onChange={(e) => setNPM(e.target.value)} type="text" name="npm" id="npm" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder='isi NPM anda' />
                          </div>

                          <div className="md:col-span-2">
                            <label htmlFor="ts">Tingkat/Semester</label>
                            <input value={TS} onChange={(e) => setTS(e.target.value)} type="text" name="ts" id="ts" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder='isi semester anda' />
                          </div>

                          <div className="md:col-span-2">
                            <label htmlFor="telepon">No. telepon</label>
                            <input value={telepon} onChange={(e) => setTelepon(e.target.value)} type="text" name="telepon" id="telepon" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder='isi no telepon anda' />
                          </div>

                          <div className="md:col-span-5">
                            <label htmlFor="email">Email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="email@gmail.com" />
                          </div>

                          <div className="md:col-span-3">
                            <label htmlFor="address">Alamat / Jalan</label>
                            <input value={alamat} onChange={(e) => setAlamat(e.target.value)} type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="isi alamat anda" />
                          </div>

                          <div className="md:col-span-2">
                            <label htmlFor="kota">Kota</label>
                            <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                              <select value={kota} onChange={(e) => setKota(e.target.value)} id="selectKota" name="selectKota" className="block w-1/1 ml-3 p-1/2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option value="option "> ------- select one -------</option>
                                <option value="option1">Malang</option>
                                <option value="option2">Surabaya</option>
                                <option value="option3">Batu</option>
                              </select>
                            </div>
                          </div>

                          <div className="md:col-span-2">
                            <label htmlFor="provinsi">Provinsi</label>
                            <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                              <select value={provinsi} onChange={(e) => setProvinsi(e.target.value)} id="selectProvinsi" name="selectProvinsi" className="block w-1/1 ml-3 p-1/2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option value="option "> ------- select one -------</option>
                                <option value="option1">Jawa Timur</option>
                                <option value="option2">Jawa Tengah</option>
                                <option value="option3">Jawa Barat</option>
                              </select>
                            </div>
                          </div>

                          <div className="md:col-span-1 mb-3">
                            <label htmlFor="pos">Kode Pos</label>
                            <input value={pos} onChange={(e) => setPos(e.target.value)} type="text" name="pos" id="pos" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="isi kode pos anda" />
                          </div>

                          <div className="md:col-span-1">
                            <label htmlFor="photo">Unggah Foto:</label>
                            <input type="file" name="photo" id="photo" accept="image/*" className="w-full p-2 border-spacing-0 bg-gray-50 border mt-1 rounded px-4 focus:outline-none focus:ring focus:border-blue-300" />
                          </div>

                          <div className="md:col-span-5 text-right">
                            <div className="inline-flex items-end">
                              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Formulir;
