import React, { useState } from "react";
import { motion } from "framer-motion";

const FormPendaftaran = () => {
  const [formData, setFormData] = useState({
    nama: "",
    tglLahir: "",
    nik: "",
    sekolah: "",
    lulusan: "",
    telp: "",
    email: "",
    dokumen: null,
    jurusan: "",
  });

  const handleFileChange = (e) => {
    setFormData({ ...formData, dokumen: e.target.files[0] });
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="pendaftaran" className="w-full py-16 bg-slate-50 px-6">
      {/* Container dikecilkan ke max-w-6xl (sekitar 1150px) agar lebih compact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto bg-white rounded-[3rem] p-8 lg:p-16 shadow-xl border border-white"
      >
        {/* HEADER: Ukuran font diturunkan */}
        <div className="mb-16 border-b border-slate-100 pb-10">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter mb-3 leading-none">
            Formulir <span className="text-blue-600">Pendaftaran.</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium">
            Lengkapi data diri untuk bergabung bersama BBPVP Bandung.
          </p>
        </div>

        <form className="space-y-16">
          {/* SECTION 1: DATA DIRI */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            <div className="lg:col-span-1">
              <h4 className="text-lg font-black text-slate-900 uppercase tracking-widest italic">
                01. Personal
              </h4>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-600 focus:bg-white transition-all outline-none font-bold text-slate-700"
              />
              <input
                type="text"
                placeholder="NIK"
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-600 focus:bg-white transition-all outline-none font-bold text-slate-700"
              />
              <div className="md:col-span-2">
                <label className="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-widest">
                  Tanggal Lahir
                </label>
                <input
                  type="date"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-600 focus:bg-white transition-all outline-none font-bold text-slate-700"
                />
              </div>
            </div>
          </motion.div>

          <hr className="border-slate-50" />

          {/* SECTION 2: KONTAK & PENDIDIKAN */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            <div className="lg:col-span-1">
              <h4 className="text-lg font-black text-slate-900 uppercase tracking-widest italic">
                02. Education
              </h4>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-600 focus:bg-white transition-all outline-none font-bold text-slate-700"
              />
              <input
                type="tel"
                placeholder="WhatsApp"
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-600 focus:bg-white transition-all outline-none font-bold text-slate-700"
              />
              <input
                type="text"
                placeholder="Asal Sekolah"
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-600 focus:bg-white transition-all outline-none font-bold text-slate-700 md:col-span-2"
              />
              <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-600 focus:bg-white transition-all outline-none font-black text-slate-800 md:col-span-2">
                <option value="">Pilih Jurusan</option>
                <option value="Web Dev">Web Development</option>
                <option value="Graphic Design">Graphic Design</option>
              </select>
            </div>
          </motion.div>

          {/* SECTION 3: DOKUMEN */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            <div className="lg:col-span-1">
              <h4 className="text-lg font-black text-slate-900 uppercase tracking-widest italic">
                03. Documents
              </h4>
            </div>
            <div className="lg:col-span-2">
              <div className="relative group border-2 border-dashed border-slate-200 rounded-2xl p-10 flex flex-col items-center justify-center hover:bg-blue-50/30 transition-all cursor-pointer">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <span className="text-slate-900 font-bold">
                  {formData.dokumen
                    ? formData.dokumen.name
                    : "Upload KTP/Ijazah"}
                </span>
              </div>
            </div>
          </motion.div>

          {/* SUBMIT BUTTON: Ukuran disesuaikan */}
          <div className="pt-6">
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xl shadow-lg transition-all uppercase tracking-widest hover:bg-blue-600"
            >
              Kirim Pendaftaran
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default FormPendaftaran;
