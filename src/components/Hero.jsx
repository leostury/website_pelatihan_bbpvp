import React, { useEffect, useState } from "react";
import assets from "../assets/assets";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion

const slides = [
  {
    title: "Tingkatkan Skill dan Siap Kerja Profesional",
    desc: "Ikuti program pelatihan kerja berbasis kompetensi untuk meningkatkan kemampuan dan daya saing Anda di dunia industri.",
    img: assets.slide_1,
  },
  {
    title: "Wujudkan Karier Impian Anda Sekarang",
    desc: "Pelatihan dirancang sesuai kebutuhan industri agar Anda siap kerja dan memiliki keterampilan yang relevan.",
    img: assets.slide_2,
  },
  {
    title: "Belajar, Berkembang, dan Siap Bersaing",
    desc: "Dapatkan pengalaman pelatihan terbaik dengan fasilitas lengkap dan instruktur profesional.",
    img: assets.slide_3,
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full pt-20 pb-20 font-sans relative">
      <div className="relative mx-auto w-[85%] lg:w-[88%] min-h-[500px] lg:h-[80vh] bg-slate-900 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
        <div className="flex-1 z-10 flex flex-col justify-center px-10 lg:pl-24 py-16 text-white relative">
          <div className="absolute inset-0 bg-slate-900/40 lg:bg-transparent -z-10"></div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ delay: 0.2 }}
                className="text-sm font-bold tracking-[0.3em] mb-4 uppercase"
              >
                Welcome To BBPVP Bandung
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-7xl font-black leading-[1.1] mb-6 drop-shadow-lg"
              >
                {slides[current].title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-white/80 text-lg lg:text-xl max-w-lg mb-10 leading-relaxed"
              >
                {slides[current].desc}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-5"
              >
                <a
                  href="#pendaftaran"
                  className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl active:scale-95 inline-block"
                >
                  Daftar Sekarang
                </a>
                <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
                  Selengkapnya
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex-1 relative min-h-[400px] lg:min-h-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={slides[current].img}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full object-cover brightness-90 lg:brightness-100"
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-transparent to-transparent hidden lg:block"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-tl-[4rem] hidden lg:block"></div>
        </div>
      </div>

      {/* FLOATING FEATURES BAR (Animated on Scroll) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="relative -mt-14 mx-auto max-w-6xl px-4 z-20"
      >
        <div className="bg-white/95 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-[2.5rem] py-8 px-10 border border-slate-100 flex flex-wrap justify-between items-center gap-8">
          {[
            { img: "computer-lab.png", t: "Lab Modern", d: "Standar Industri" },
            { img: "teacher.png", t: "Instruktur Ahli", d: "Praktisi Senior" },
            {
              img: "certificate.png",
              t: "Sertifikat BNSP",
              d: "Lisensi Kompetensi",
            },
          ].map((item, index) => (
            <React.Fragment key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-5 group cursor-default"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex-shrink-0 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
                  <img
                    src={`src/assets/${item.img}`}
                    className="w-8 h-8 object-contain group-hover:brightness-200"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="font-black text-slate-800 text-base">
                    {item.t}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium tracking-wide">
                    {item.d}
                  </p>
                </div>
              </motion.div>
              {index < 2 && (
                <div className="hidden lg:block w-px h-10 bg-slate-200"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.div>

      {/* DOT INDICATORS */}
      <div className="flex justify-center gap-3 mt-12">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              current === i ? "w-12 bg-blue-600" : "w-3 bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
