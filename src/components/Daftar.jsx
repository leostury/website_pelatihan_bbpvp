import React, { useState } from "react";
import { Link } from "react-router-dom"; // Jika kamu menggunakan React Router

const Daftar = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    nik: "",
    jurusan: "",
    alasan: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pendaftaran Berhasil Terkirim!");
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-12 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto">
        {/* HEADER FORM */}
        <div className="mb-10 flex justify-between items-end">
          <div>
            <h1 className="text-3xl lg:text-4xl font-black text-slate-900">
              Formulir Pendaftaran
            </h1>
            <p className="text-slate-500 mt-2">
              Lengkapi data diri Anda untuk bergabung bersama kami.
            </p>
          </div>
          {/* Link kembali ke Home */}
          <Link
            to="/"
            className="text-blue-600 font-bold hover:underline text-sm"
          >
            {" "}
            Kembali ke Beranda
          </Link>
        </div>

        <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200 overflow-hidden flex flex-col lg:flex-row border border-slate-100">
          {/* SISI KIRI: Stepper/Status */}
          <div className="lg:w-1/3 bg-blue-700 p-10 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Dekorasi Aksen */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-8">Status Pendaftaran</h3>
              <div className="space-y-8">
                {[
                  { id: 1, label: "Data Diri" },
                  { id: 2, label: "Pilih Jurusan" },
                  { id: 3, label: "Konfirmasi" },
                ].map((s) => (
                  <div key={s.id} className="flex items-center gap-4">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs border-2 ${step >= s.id ? "bg-white text-blue-700 border-white" : "border-white/30 text-white/50"}`}
                    >
                      {s.id}
                    </div>
                    <span
                      className={`text-sm font-bold ${step >= s.id ? "text-white" : "text-white/40"}`}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20 pt-10 border-t border-white/20 text-[10px] uppercase tracking-widest opacity-60">
              BBPVP Bandung - 2026
            </div>
          </div>

          {/* SISI KANAN: Form Input */}
          <form
            onSubmit={handleSubmit}
            className="lg:w-2/3 p-10 lg:p-14 space-y-8"
          >
            {step === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-xs font-black uppercase text-slate-400 mb-2 tracking-widest">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      required
                      className="bg-slate-50 border border-slate-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm font-medium"
                      placeholder="Sesuai KTP"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs font-black uppercase text-slate-400 mb-2 tracking-widest">
                      Nomor NIK
                    </label>
                    <input
                      type="number"
                      required
                      className="bg-slate-50 border border-slate-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm font-medium"
                      placeholder="16 Digit NIK"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-black uppercase text-slate-400 mb-2 tracking-widest">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    required
                    className="bg-slate-50 border border-slate-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm font-medium"
                    placeholder="email@anda.com"
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex flex-col">
                  <label className="text-xs font-black uppercase text-slate-400 mb-2 tracking-widest">
                    Pilih Jurusan Pelatihan
                  </label>
                  <select className="bg-slate-50 border border-slate-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm font-medium">
                    <option>Web Development</option>
                    <option>Mobile App (Flutter)</option>
                    <option>Digital Marketing</option>
                    <option>Desain Grafis</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-black uppercase text-slate-400 mb-2 tracking-widest">
                    Alasan Mengikuti Pelatihan
                  </label>
                  <textarea
                    rows="4"
                    className="bg-slate-50 border border-slate-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm font-medium"
                    placeholder="Ceritakan motivasi Anda..."
                  ></textarea>
                </div>
              </div>
            )}

            {/* NAVIGASI BUTTON */}
            <div className="flex justify-between items-center pt-6 border-t border-slate-100">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="text-slate-500 font-bold hover:text-black transition text-sm"
                >
                  Kembali
                </button>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="ml-auto bg-black text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-700 transition shadow-xl active:scale-95"
                >
                  Lanjutkan
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-800 transition shadow-xl active:scale-95"
                >
                  Kirim Pendaftaran
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Daftar;
