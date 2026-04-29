import React from "react";

const FeatureBar = () => {
  const features = [
    { icon: "🏫", title: "Lab Modern", desc: "Fasilitas Standar Industri" },
    { icon: "👨‍🏫", title: "Instruktur Ahli", desc: "Praktisi Berpengalaman" },
    { icon: "📜", title: "Sertifikat BNSP", desc: "Pengakuan Kompetensi" },
  ];

  return (
    <div className="relative z-20 -mt-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-[0_15px_40px_rgba(0,0,0,0.08)] rounded-full py-6 px-10 flex flex-wrap justify-center lg:justify-between items-center gap-6 border border-slate-50">
        {features.map((f, i) => (
          <React.Fragment key={i}>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-xl group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                {f.icon}
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm leading-tight">
                  {f.title}
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5">{f.desc}</p>
              </div>
            </div>
            {i < features.length - 1 && (
              <div className="hidden lg:block w-px h-8 bg-slate-100"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default FeatureBar;
