"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Briefcase, ArrowUpRight } from "lucide-react";
import { Language, Vehicle } from "../../types";
import { UI_TEXT, FLEET_DATA } from "../../content/translations";

interface FleetShowcaseProps {
  lang: Language;
  onSelectVehicle: (vehicle: Vehicle) => void;
}

type FilterType = "all" | "business" | "first" | "van";

export const FleetShowcase: React.FC<FleetShowcaseProps> = ({
  lang,
  onSelectVehicle,
}) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const t = UI_TEXT.fleetSection;

  const filteredVehicles = FLEET_DATA.filter((v) => {
    if (activeFilter === "all") return true;
    return v.category1 === activeFilter;
  });

  return (
    <section className="relative bg-[#020202] py-20 overflow-visible">
      <div className="max-w-6xl mx-auto px-6">
        {/* صف العنوان والفلتر */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-16 gap-4 border-b border-white/5 pb-6">
          <h2 className="text-3xl font-serif text-white tracking-tight">
            {t.title[lang]}
          </h2>
          <div className="flex gap-2">
            {(["all", "first", "business", "van"] as FilterType[]).map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`text-[9px] uppercase tracking-[0.2em] px-4 py-2 border transition-all duration-300 ${
                  activeFilter === f
                    ? "border-white text-white bg-white/5"
                    : "border-white/5 text-white/30 hover:border-white/20"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* الكروت المكدسة (Deck of Cards) */}
        <div className="relative pb-20">
          <AnimatePresence mode="popLayout">
            {filteredVehicles.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="sticky"
                style={{
                  top: `${80 + index * 40}px`,
                  zIndex: index + 1,
                }}
              >
                {/* كارد المركبة مع شادو علوي ذهبي هادئ وناعم */}
                <div className="bg-[#0a0a0a] border border-[#C9A227]/10 flex items-center overflow-hidden transition-all duration-300 shadow-[0_-8px_16px_rgba(201,162,39,0.12)]">
                  {/* الصورة - مع بادينج 12px (p-3) */}
                  <div className="w-[30%] h-[160px] p-3">
                    <img
                      src={car.imageJpg}
                      alt={car.name}
                      className="w-full h-full object-cover grayscale-[0.3]"
                    />
                  </div>

                  {/* البيانات - مع بادينج 12px (p-3) */}
                  <div className="w-[70%] p-3 flex flex-col justify-center">
                    {/* العنوان، التصنيف، والوصف الطويل */}
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-lg font-bold text-white tracking-wide">
                          {car.name}
                        </h3>
                        <button
                          onClick={() => onSelectVehicle(car)}
                          className="px-6 py-2 border border-white/5 hover:border-[#C9A227]/30 text-[9px] uppercase tracking-widest text-white transition-all duration-300 flex items-center gap-2"
                        >
                          {t.requestClassBtn[lang]}
                          <ArrowUpRight className="w-3 h-3" />
                        </button>
                      </div>
                      {/* الوصف: سطرين */}
                    </div>

                    {/* صف المواصفات والزر (متباعد بـ 16px عن الوصف) */}
                    <div className="mt- flex justify-between items-center">
                      <div className="flex gap-4">
                        <div className="flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-[#C9A227]/70" />
                          <span className="text-[10px] text-white/70 font-bold">
                            {car.passengers}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5 text-[#C9A227]/70" />
                          <span className="text-[10px] text-white/70 font-bold">
                            {car.luggage}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
