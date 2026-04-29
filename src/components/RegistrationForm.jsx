import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telp: "",
    jurusan: "Web Development",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Selamat ${formData.nama}, pendaftaran Anda untuk jurusan ${formData.jurusan} telah kami terima!`,
    );
  };

  return (
    <section id="form-pendaftaran" className="py-24 px-6 lg:px-20 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row bg-slate-50 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
        {/* INFO KIRI */}
        <div className="lg:w-1/3 bg-blue-700 p-12 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-6 leading-tight">
              Mulai Perjalanan Karirmu
            </h2>
            <p className="text-blue-100 text-sm leading-relaxed">
              Pastikan data yang Anda masukkan benar. Tim kami akan menghubungi
              melalui WhatsApp atau Email dalam 2x24 jam setelah pendaftaran.
            </p>
          </div>

          <div className="mt-10 space-y-4 text-sm font-medium">
            <div className="flex items-center gap-3">
              <span>📍</span> Bandung, Jawa Barat
            </div>
            <div className="flex items-center gap-3">
              <span>📞</span> +62 812 3456 7890
            </div>
          </div>
        </div>

        {/* FORM KANAN */}
        <form
          onSubmit={handleSubmit}
          className="lg:w-2/3 p-12 bg-white space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-bold text-slate-700 mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                required
                className="bg-slate-50 border border-slate-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                placeholder="Masukkan nama sesuai KTP"
                onChange={(e) =>
                  setFormData({ ...formData, nama: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-bold text-slate-700 mb-2">
                Alamat Email
              </label>
              <input
                type="email"
                required
                className="bg-slate-50 border border-slate-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                placeholder="email@anda.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-bold text-slate-700 mb-2">
                Nomor WhatsApp
              </label>
              <input
                type="tel"
                required
                className="bg-slate-50 border border-slate-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                placeholder="0812xxxx"
                onChange={(e) =>
                  setFormData({ ...formData, telp: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-bold text-slate-700 mb-2">
                Jurusan Pelatihan
              </label>
              <select
                className="bg-slate-50 border border-slate-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                onChange={(e) =>
                  setFormData({ ...formData, jurusan: e.target.value })
                }
              >
                <option>Web Development</option>
                <option>Desain Grafis</option>
                <option>Teknik Komputer</option>
                <option>Bahasa Inggris</option>
              </select>
            </div>
          </div>

          <button className="w-full bg-black text-white font-black py-5 rounded-2xl shadow-xl hover:bg-blue-700 transition-all mt-4 transform active:scale-95">
            SUBMIT PENDAFTARAN
          </button>
          <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
            Data Anda aman dan terenkripsi secara otomatis
          </p>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
