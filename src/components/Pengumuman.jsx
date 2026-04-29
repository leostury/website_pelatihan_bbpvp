import React from "react";
import assets from "../assets/assets";
import { motion } from "framer-motion"; // Import motion

const dataPengumuman = [
  {
    tag: "Batch 3",
    title: "Penerimaan Peserta Short Course",
    desc: "Pengumuman hasil seleksi administrasi untuk program pelatihan singkat tahun 2026.",
    bgImg: "src/assets/slide1.jpg",
    color: "from-teal-600/90 to-teal-900/90",
  },
  {
    tag: "Penting",
    title: "Pelatihan ujian berbasis kopentensi",
    desc: "Segera lakukan daftar ulang untuk mengamankan kuota pelatihan Anda sebelum batas waktu berakhir.",
    bgImg: "src/assets/slide2.jpg",
    color: "from-blue-600/90 to-blue-900/90",
  },
  {
    tag: "Info",
    title: "Penutupan Short Course",
    desc: "Tingkatkan skill marketing Anda bersama praktisi industri berpengalaman di BBPVP Bandung.",
    bgImg: "src/assets/slide3.jpg",
    color: "from-blue-600/90 to-blue-900/90",
  },
];

const Pengumuman = () => {
  return (
    <section id="pengumuman" className="w-full py-32 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-20">
        {/* HEADER ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8"
        >
          <h2 className="text-6xl lg:text-[5.5rem] font-black text-slate-900 tracking-tighter leading-none">
            Kabar <span className="text-teal-600">Terbaru.</span>
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-full border-2 border-slate-900 font-black text-sm hover:bg-black hover:text-white transition-all uppercase tracking-widest"
          >
            LIHAT SEMUA BERITA
          </motion.button>
        </motion.div>

        {/* GRID CARDS WITH STAGGERED ANIMATION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {dataPengumuman.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer flex flex-col"
            >
              {/* CARD CONTAINER */}
              <div className="relative aspect-[16/10] rounded-[4rem] overflow-hidden mb-10 shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all duration-700 group-hover:-translate-y-4">
                {/* Image Zoom on Hover */}
                <img
                  src={item.bgImg}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-in-out"
                  alt={item.title}
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} mix-blend-multiply opacity-80 group-hover:opacity-90 transition-opacity`}
                ></div>

                {/* Content Inside Card */}
                <div className="absolute inset-0 p-10 lg:p-14 flex flex-col justify-between z-10">
                  <div>
                    <span className="bg-yellow-400 text-slate-900 text-[10px] font-black px-6 py-2.5 rounded-full uppercase tracking-widest shadow-lg">
                      {item.tag}
                    </span>
                  </div>

                  {/* Kita masukkan kembali Title agar card tidak kosong */}
                  <h4 className="font-black text-2xl lg:text-3xl text-white leading-tight tracking-tight uppercase drop-shadow-md">
                    {item.title}
                  </h4>
                </div>
              </div>

              {/* Description below card */}
              <div className="px-8">
                <p className="text-slate-500 text-lg leading-relaxed font-medium line-clamp-2 italic opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  "{item.desc}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pengumuman;
