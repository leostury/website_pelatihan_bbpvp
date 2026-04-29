import React from "react";
import assets from "../assets/assets";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "cb6c4642-a344-4dc8-baf5-158273a9fd3a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const data = await response.json();
      if (data.success) {
        toast.success("Pesan terkirim! Terima kasih.");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Terjadi kesalahan sistem.");
    }
  };

  return (
    <section id="contact-us" className="w-full py-32 bg-white px-6 lg:px-10">
      <div className="max-w-[1600px] mx-auto bg-slate-50 rounded-[5rem] overflow-hidden flex flex-col lg:flex-row border border-slate-100 shadow-sm">
        {/* SISI KIRI: Info Kontak & Visual */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-2/5 bg-slate-900 p-12 lg:p-24 text-white flex flex-col justify-between"
        >
          <div>
            <h4 className="text-blue-400 font-black tracking-[0.4em] text-[10px] mb-8 uppercase">
              Hubungi Kami
            </h4>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tighter mb-10">
              Ada yang <br /> <span className="text-blue-500">Ditanyakan?</span>
            </h2>
            <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-sm">
              Tim admin kami siap membantu menjelaskan detail pelatihan dan
              proses seleksi.
            </p>
          </div>

          <div className="space-y-10 mt-16 lg:mt-0">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-2xl shadow-xl">
                <img
                  src="src/assets/location.png"
                  className="w-8 h-8 object-contain"
                ></img>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">
                  Lokasi Utama
                </p>
                <p className="text-slate-200 font-bold">
                  Jl. Gatot Subroto No.170, Bandung
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 ">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-2xl shadow-xl">
                <img
                  src="src/assets/clock.png"
                  className="w-8 h-8 object-contain"
                  alt="clock"
                />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">
                  Jam Operasional
                </p>
                <p className="text-slate-200 font-bold">
                  Senin - Jumat: 08:00 - 16:00 WIB
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SISI KANAN: Form Pengiriman */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 p-12 lg:p-24 bg-white"
        >
          <form onSubmit={onSubmit} className="space-y-10 max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black text-slate-400 uppercase ml-4 tracking-widest">
                  Nama Anda
                </label>
                <div className="relative">
                  <img
                    src={assets.person_icon}
                    className="absolute left-6 top-1/2 -translate-y-1/2 w-4 opacity-30"
                    alt=""
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Masukkan nama lengkap"
                    className="w-full pl-14 pr-8 py-5 rounded-3xl bg-slate-50 border border-transparent focus:border-blue-600 focus:bg-white transition-all outline-none font-bold text-slate-800"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black text-slate-400 uppercase ml-4 tracking-widest">
                  Email Aktif
                </label>
                <div className="relative">
                  <img
                    src={assets.email_icon}
                    className="absolute left-6 top-1/2 -translate-y-1/2 w-4 opacity-30"
                    alt=""
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="nida@example.com"
                    className="w-full pl-14 pr-8 py-5 rounded-3xl bg-slate-50 border border-transparent focus:border-blue-600 focus:bg-white transition-all outline-none font-bold text-slate-800"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-black text-slate-400 uppercase ml-4 tracking-widest">
                Pesan atau Pertanyaan
              </label>
              <textarea
                name="message"
                rows={6}
                placeholder="Bagaimana cara mendaftar batch 3?"
                className="w-full px-8 py-6 rounded-[2rem] bg-slate-50 border border-transparent focus:border-blue-600 focus:bg-white transition-all outline-none font-bold text-slate-800 resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="group w-full lg:w-max bg-slate-900 text-white px-14 py-6 rounded-full font-black text-sm uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-4"
            >
              Kirim Pesan
              <img
                src={assets.arrow_icon}
                alt=""
                className="w-4 group-hover:translate-x-2 transition-transform"
              />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
