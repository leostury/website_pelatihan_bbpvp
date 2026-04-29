import React from "react";
import { motion } from "framer-motion"; // Import motion

const AlurPendaftaran = () => {
  const langkah = [
    {
      step: "Step 1",
      title: "Pilih Program Pelatihan",
      desc: "Eksplorasi berbagai jurusan yang tersedia di BBPVP Bandung dan pilih yang paling sesuai dengan minat serta rencana kariermu.",
    },
    {
      step: "Step 2",
      title: "Isi Formulir Online",
      desc: "Klik tombol daftar dan lengkapi data diri serta unggah dokumen persyaratan (KTP/Ijazah) secara digital melalui portal resmi.",
    },
    {
      step: "Step 3",
      title: "Tahap Seleksi",
      desc: "Ikuti rangkaian tes minat bakat dan wawancara sesuai jadwal yang dikirimkan melalui email atau WhatsApp resmi kami.",
    },
    {
      step: "Step 4",
      title: "Mulai Pelatihan",
      desc: "Setelah dinyatakan lulus, kamu akan bergabung dalam kelas intensif dan memulai perjalanan transformasimu bersama instruktur ahli.",
    },
  ];

  return (
    <section
      id="alur-pendaftaran"
      className="w-full min-h-screen flex items-center bg-white py-20 lg:py-0 relative overflow-hidden"
    >
      {/* --- AKSEN VISUAL A: Background Glow --- */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"
      ></motion.div>

      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-slate-100 rounded-full blur-[150px] opacity-50 translate-x-1/3 translate-y-1/3"></div>

      {/* CONTAINER UTAMA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 w-full lg:w-[96%] mx-auto bg-slate-50 lg:min-h-[85vh] rounded-[4rem] overflow-hidden flex flex-col lg:flex-row items-stretch shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white"
      >
        {/* SISI KIRI: Judul Besar */}
        <div className="flex-1 flex flex-col justify-center p-12 lg:p-24 relative overflow-hidden bg-gradient-to-br from-slate-50 to-white">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 0.2, x: -10 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="absolute -top-10 -left-10 text-[30rem] lg:text-[40rem] font-serif leading-none select-none text-slate-200 z-0"
          >
            “
          </motion.div>

          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs mb-6"
            >
              Registration Process
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter"
            >
              User guide <br />
              <span className="text-slate-300">for first </span> <br />
              timer.
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ delay: 1, duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-12 h-2 bg-blue-600 rounded-full"
            ></motion.div>
          </div>
        </div>

        {/* SISI KANAN: Stepper List */}
        <div className="flex-1 bg-white flex items-center p-12 lg:p-24 relative">
          <div className="relative pl-12 lg:pl-16 space-y-16">
            {/* Garis Vertikal (Animasi Tumbuh ke Bawah) */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "95%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="absolute left-0 top-2 w-[4px] bg-slate-900 rounded-full origin-top"
            ></motion.div>

            {langkah.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                viewport={{ once: true }}
                className="relative group cursor-default"
              >
                {/* Dot Indikator */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    delay: 0.8 + index * 0.2,
                  }}
                  viewport={{ once: true }}
                  className="absolute -left-[54px] lg:-left-[70px] top-1.5 w-4 h-4 bg-white border-[3px] border-slate-900 rounded-full z-10 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:scale-125 transition-all duration-300 shadow-sm"
                ></motion.div>

                <div className="space-y-3 transform group-hover:translate-x-3 transition-transform duration-300">
                  <span className="text-sm font-black text-blue-600/40 uppercase tracking-widest">
                    {item.step}
                  </span>
                  <h4 className="text-2xl font-black text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-base max-w-md leading-relaxed font-medium opacity-80">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AlurPendaftaran;
