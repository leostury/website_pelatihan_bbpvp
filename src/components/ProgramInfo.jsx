import React from "react";
import assets from "../assets/assets";
import { motion } from "framer-motion"; // Import motion

const ProgramInfo = () => {
  const keunggulan = [
    {
      step: "01",
      title: "Kurikulum Berbasis Industri",
      desc: "Materi disusun bersama pakar industri agar relevan dengan kebutuhan pasar kerja saat ini.",
    },
    {
      step: "02",
      title: "Fasilitas Lab Standar Internasional",
      desc: "Belajar dengan perangkat dan mesin teknologi terbaru untuk pengalaman praktik yang nyata.",
    },
    {
      step: "03",
      title: "Penyaluran Kerja & Magang",
      desc: "Kami bekerja sama dengan ratusan perusahaan untuk membantu alumni mendapatkan karier impian.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 px-4 lg:px-10 overflow-hidden">
      {/* 1. Animasi Container Utama (Fade In Up) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-[2000px] mx-auto bg-white rounded-[5rem] py-24 px-8 lg:px-24 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.02)] border border-white"
      >
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* SISI KIRI: Teks (Slide In From Left) */}
          <div className="flex-1 order-2 lg:order-1">
            <motion.h4
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-blue-600 font-black tracking-[0.3em] text-xs mb-6 uppercase"
            >
              Mengapa Memilih Kami?
            </motion.h4>

            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-12"
            >
              Lebih dari Sekedar <br />
              <span className="text-slate-300">Pelatihan.</span>
            </motion.h2>

            <div className="space-y-12">
              {keunggulan.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-8 group"
                >
                  <span className="text-5xl font-black text-slate-100 group-hover:text-blue-600 transition-colors duration-500">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-2xl font-black text-slate-800 mb-3 group-hover:translate-x-3 transition-transform duration-500">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-lg leading-relaxed max-w-md font-medium opacity-80">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={() => {
                const el = document.getElementById("pelatihan");
                if (el) {
                  window.scrollTo({
                    top: el.offsetTop - 100, // biar ga ketutup navbar
                    behavior: "smooth",
                  });
                }
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-16 bg-black text-white px-12 py-5 rounded-full font-black text-lg hover:bg-blue-600 transition-all shadow-2xl uppercase tracking-widest"
            >
              Lihat Semua Jurusan
            </motion.button>
          </div>

          {/* SISI KANAN: Visual (Slide In From Right) */}
          <div className="flex-1 order-1 lg:order-2 relative w-full">
            <motion.div
              initial={{ opacity: 0, scale: 1.1, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.1)] border-[15px] border-white"
            >
              <img
                src="src/assets/course2.png"
                alt="Suasana Pelatihan"
                className="w-full h-[650px] object-cover"
              />
            </motion.div>

            {/* Floating Card: Statistik (Pop Up dengan Spring) */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -left-10 bg-blue-600 text-white p-12 rounded-[3.5rem] shadow-[0_30px_60px_rgba(37,99,235,0.3)] z-20 hidden md:block"
            >
              <div className="text-7xl font-black mb-2 tracking-tighter italic italic">
                95%
              </div>
              <div className="text-sm font-black uppercase tracking-widest leading-tight opacity-90">
                Alumni Langsung <br /> Mendapatkan Pekerjaan
              </div>
            </motion.div>

            {/* Dekorasi Aksen: Lingkaran Pulse */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-100 rounded-full blur-[120px] -z-10"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProgramInfo;
