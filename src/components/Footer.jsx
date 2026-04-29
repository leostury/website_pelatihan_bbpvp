import React from "react";
import assets from "../assets/assets";
import { motion } from "framer-motion";

const Footer = ({ theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-slate-900 pt-20 px-6 lg:px-24 border-t border-slate-100 dark:border-slate-800"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24 mb-20">
          {/* SISI KIRI: Brand & Deskripsi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 max-w-md"
          >
            <img
              src={assets.logo_blk}
              className="w-48 lg:w-56"
              alt="BBPVP Bandung Logo"
            />
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed font-medium">
              Balai Besar Pelatihan Vokasi dan Produktivitas Bandung. Membangun
              tenaga kerja kompeten, inovatif, dan siap bersaing di industri
              global.
            </p>
          </motion.div>

          {/* SISI TENGAH: Link Cepat */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-12 lg:gap-24">
            <div className="space-y-6">
              <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-xs">
                Navigasi
              </h4>
              <ul className="space-y-4 text-slate-500 dark:text-slate-400 font-bold">
                <li>
                  <a
                    href="#hero"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Beranda
                  </a>
                </li>
                <li>
                  <a
                    href="#pelatihan"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Program Pelatihan
                  </a>
                </li>
                <li>
                  <a
                    href="#pengumuman"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Kabar Terbaru
                  </a>
                </li>
                <li>
                  <a
                    href="#pendaftaran"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Daftar Sekarang
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-xs">
                Kontak
              </h4>
              <ul className="space-y-4 text-slate-500 dark:text-slate-400 font-bold">
                <li>Jl. Gatot Subroto No.170</li>
                <li>Kota Bandung, Jawa Barat</li>
                <li>(022) 7312564</li>
                <li>bbpvpbandung@kemnaker.go.id</li>
              </ul>
            </div>
          </div>

          {/* SISI KANAN: Newsletter (Style Modern) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-50 dark:bg-slate-800/50 p-10 rounded-[3rem] w-full lg:max-w-md border border-slate-100 dark:border-slate-800"
          >
            <h3 className="font-black text-2xl text-slate-900 dark:text-white tracking-tight mb-4">
              Dapatkan Info Terbaru
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 font-medium">
              Berlangganan untuk mendapatkan jadwal pendaftaran Batch terbaru
              langsung di email Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 p-4 px-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 outline-none focus:border-blue-600 transition-all font-bold text-sm"
              />
              <button className="bg-blue-600 text-white font-black px-8 py-4 rounded-2xl hover:bg-slate-900 transition-all active:scale-95 shadow-lg shadow-blue-200 dark:shadow-none uppercase tracking-widest text-xs">
                Gabung
              </button>
            </div>
          </motion.div>
        </div>

        <hr className="border-slate-100 dark:border-slate-800" />

        {/* BOTTOM FOOTER */}
        <div className="py-10 flex flex-col sm:flex-row justify-between items-center gap-6 text-sm font-bold text-slate-400">
          <p>© 2026 BBPVP Bandung - Kementerian Ketenagakerjaan RI.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-blue-600">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-600">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
