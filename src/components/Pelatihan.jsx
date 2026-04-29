import React, { useState } from "react";
import assets from "../assets/assets";
import { motion, AnimatePresence } from "framer-motion";

const programData = [
  {
    title: "Web Development",
    desc: "Kuasai React JS, Tailwind, dan Node JS untuk karir Fullstack Developer.",
    img: assets.slide_1, // Gunakan assets agar aman
    cat: "Teknologi",
    durasi: "320 Jam",
  },
  {
    title: "Desain Grafis",
    desc: "Seni visual digital menggunakan Adobe Illustrator dan Photoshop.",
    img: assets.slide_2,
    cat: "Desain",
    durasi: "280 Jam",
  },
  {
    title: "Digital Marketing",
    desc: "Strategi SEO, Ads, dan konten kreatif untuk pertumbuhan bisnis.",
    img: assets.slide_3,
    cat: "Bisnis",
    durasi: "240 Jam",
  },
];

const Pelatihan = () => {
  const [activeTab, setActiveTab] = useState("Semua");
  const categories = ["Semua", "Teknologi", "Bisnis", "Desain"];

  const filteredData =
    activeTab === "Semua"
      ? programData
      : programData.filter((item) => item.cat === activeTab);

  return (
    <section
      id="pelatihan"
      className="w-full py-32 bg-slate-50 px-4 sm:px-10 lg:px-20 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-[2000px] mx-auto bg-white rounded-[5rem] p-12 lg:p-24 shadow-[0_40px_100px_rgba(0,0,0,0.03)] border border-slate-100 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-[120px] opacity-40 -mr-48 -mt-48"></div>

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-10 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-5xl lg:text-[5.5rem] font-black text-slate-900 leading-[0.9] tracking-tighter">
              Program <br />
              <span className="text-blue-600 text-outline-blue">
                Terpopuler.
              </span>
            </h2>
          </div>

          {/* TABS */}
          <div className="flex bg-slate-100 p-2 rounded-full border border-slate-200 shadow-inner">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-10 py-4 rounded-full text-xs font-black transition-all uppercase tracking-widest ${
                  activeTab === cat
                    ? "bg-blue-600 text-white shadow-xl scale-105"
                    : "text-slate-400 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* GRID WITH ANIMATION */}
        <motion.div
          layout
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 relative z-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredData.map((item) => (
              <motion.div
                layout
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col"
              >
                <div className="relative aspect-[16/10] rounded-[4rem] overflow-hidden mb-10 shadow-2xl">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                  />
                  <div className="absolute top-10 left-10 bg-white/90 backdrop-blur-md px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-blue-700 shadow-xl">
                    {item.cat}
                  </div>
                </div>

                <div className="px-6">
                  <h3 className="font-black text-3xl text-slate-900 mb-4 tracking-tight uppercase group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-lg leading-relaxed mb-12 font-medium opacity-80 italic">
                    "{item.desc}"
                  </p>

                  <div className="flex items-center justify-between pt-10 border-t-2 border-slate-50">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1 italic">
                        DURASI
                      </span>
                      <span className="text-slate-900 font-black text-xl italic tracking-tighter uppercase">
                        {item.durasi}
                      </span>
                    </div>
                    <button className="bg-slate-900 text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:shadow-2xl transition-all active:scale-90">
                      VIEW DETAIL
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Pelatihan;
