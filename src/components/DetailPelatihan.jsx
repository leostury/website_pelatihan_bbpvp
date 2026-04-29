import React from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";

const DetailPelatihan = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        {/* TOP HEADER: Judul Raksasa */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-20"
        >
          <div className="max-w-3xl">
            <span className="bg-blue-100 text-blue-600 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 inline-block">
              Teknologi Pelatihan
            </span>
            <h1 className="text-6xl lg:text-[7rem] font-black text-slate-900 tracking-tighter leading-[0.85] uppercase">
              Web <br /> Development.
            </h1>
          </div>
          <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 flex flex-col items-center min-w-[250px]">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
              Kuota Tersisa
            </p>
            <p className="text-6xl font-black text-blue-600 italic">12</p>
            <p className="text-xs font-bold text-slate-900 mt-2">
              Peserta Lagi
            </p>
          </div>
        </motion.div>

        {/* MAIN VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-full h-[600px] rounded-[5rem] overflow-hidden shadow-2xl mb-24 relative"
        >
          <img
            src={assets.slide_1}
            className="w-full h-full object-cover"
            alt="Detail"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
        </motion.div>

        {/* INFO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          {/* SISI KIRI: Deskripsi & Mentor */}
          <div className="lg:col-span-2 space-y-16">
            <div>
              <h3 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight italic">
                Tentang Pelatihan
              </h3>
              <p className="text-slate-500 text-xl font-medium leading-[1.8]">
                Program ini dirancang khusus untuk mencetak tenaga ahli di
                bidang pengembangan web modern. Siswa akan mempelajari dasar
                hingga tingkat lanjut mengenai ekosistem React JS, manajemen
                database menggunakan Node JS, hingga integrasi UI yang responsif
                dengan Tailwind CSS.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
                <h5 className="font-black text-slate-900 uppercase text-xs mb-4">
                  Metode Belajar
                </h5>
                <p className="text-slate-500 font-bold">
                  20% Teori, 80% Praktek Langsung & Project Real-world.
                </p>
              </div>
              <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
                <h5 className="font-black text-slate-900 uppercase text-xs mb-4">
                  Sertifikasi
                </h5>
                <p className="text-slate-500 font-bold">
                  Sertifikat Kompetensi BNSP & Sertifikat Pelatihan BBPVP.
                </p>
              </div>
            </div>
          </div>

          {/* SISI KANAN: Sidebar Action */}
          <div className="space-y-10">
            <div className="p-12 bg-slate-900 rounded-[4rem] text-white">
              <h4 className="text-2xl font-black mb-8 italic uppercase tracking-tighter">
                Kurikulum
              </h4>
              <ul className="space-y-6">
                {[
                  "HTML5 & Semantic Web",
                  "Advanced CSS & Tailwind",
                  "React Hooks & State Management",
                  "API Integration with Axios",
                  "Backend with Node & Express",
                ].map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 text-sm font-bold opacity-80"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-blue-600 py-6 rounded-3xl font-black uppercase tracking-widest text-xs mt-12 hover:bg-white hover:text-black transition-all">
                Daftar Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPelatihan;
