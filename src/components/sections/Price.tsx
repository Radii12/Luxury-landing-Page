import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles, CheckCircle2 } from "lucide-react";
import { Language } from "../../types";
import { PRICING_TABLES, SERVICES_DATA } from "../../content/translations";
import { UI_TEXT, FLEET_DATA } from "../../content/translations";
import { url } from "inspector";
interface HeroSectionProps {
  lang: Language;
  onOpenBookingModal: (prefilledService?: string) => void;
}
export const Price: React.FC<HeroSectionProps> = ({ lang }) => {
  type FilterType = "Zurich" | "Umgebung" | "Zürich Oberland";
  type PricingArea = "winterthur" | "goldCoast" | "oberland" | "airport";

  const [selectedArea, setSelectedArea] = useState<PricingArea>("winterthur");
  const currentTable = PRICING_TABLES[selectedArea];
  const pricingAreas = [
    {
      value: "winterthur",
      label: {
        de: "Winterthur",
        en: "Winterthur",
      },
    },
    {
      value: "goldCoast",
      label: {
        de: "Goldküste",
        en: "Gold Coast",
      },
    },
    {
      value: "oberland",
      label: {
        de: "Zürich Oberland",
        en: "Zurich Oberland",
      },
    },
  ];
  const headers = currentTable.headers[lang];
  const rows = currentTable.data;
  const t = UI_TEXT.pricing;
  const [activeFilter, setActiveFilter] = useState<FilterType>("Zurich");
  const p = UI_TEXT.fleetSection;

  const filteredVehicles = FLEET_DATA.filter((v) => {
    if (activeFilter === "Zurich") return true;
    return v.category === activeFilter;
  });
  const taxiPrices = [
    {
      region: {
        de: "Winterthur",
        en: "Winterthur",
        ch: "Winterthur",
      },
      airportTaxi: 100,
      airportVan: 110,
      zurichTaxi: 120,
      zurichVan: 130,
    },
    {
      region: {
        de: "Effretikon & Kemptthal",
        en: "Effretikon & Kemptthal",
        ch: "Effretikon & Kemptthal",
      },
      airportTaxi: 80,
      airportVan: 90,
      zurichTaxi: 90,
      zurichVan: 100,
    },
    {
      region: {
        de: "Illnau & Lindau",
        en: "Illnau & Lindau",
        ch: "Illnau & Lindau",
      },
      airportTaxi: 80,
      airportVan: 90,
      zurichTaxi: 90,
      zurichVan: 100,
    },
    {
      region: {
        de: "Neftenbach",
        en: "Neftenbach",
        ch: "Neftenbach",
      },
      airportTaxi: 90,
      airportVan: 100,
      zurichTaxi: 120,
      zurichVan: 130,
    },
    {
      region: {
        de: "Pfungen",
        en: "Pfungen",
        ch: "Pfungen",
      },
      airportTaxi: 80,
      airportVan: 90,
      zurichTaxi: 90,
      zurichVan: 100,
    },
    {
      region: {
        de: "Henggart & Hettlingen",
        en: "Henggart & Hettlingen",
        ch: "Henggart & Hettlingen",
      },
      airportTaxi: 110,
      airportVan: 120,
      zurichTaxi: 120,
      zurichVan: 130,
    },
    {
      region: {
        de: "Elsau",
        en: "Elsau",
        ch: "Elsau",
      },
      airportTaxi: 110,
      airportVan: 120,
      zurichTaxi: 120,
      zurichVan: 130,
    },
    {
      region: {
        de: "Frauenfeld",
        en: "Frauenfeld",
        ch: "Frauenfeld",
      },
      airportTaxi: 180,
      airportVan: 190,
      zurichTaxi: 190,
      zurichVan: 200,
    },
  ];
  const tableHeaders = {
    de: {
      region: "Umgebung Winterthur",
      airportTaxi: "Taxi Tarif nach Flughafen",
      airportVan: "Van Tarif nach Flughafen",
      zurichTaxi: "Taxi Tarif Stadt Zürich",
      zurichVan: "Van Tarif Stadt Zürich",
    },
    deCH: {
      region: "Umgäbig Winterthur",
      airportTaxi: "Taxi-Tarif zum Flugplatz",
      airportVan: "Van-Tarif zum Flugplatz",
      zurichTaxi: "Taxi-Tarif Züri",
      zurichVan: "Van-Tarif Züri",
    },
    en: {
      region: "Winterthur Area",
      airportTaxi: "Taxi Fare to Airport",
      airportVan: "Van Fare to Airport",
      zurichTaxi: "Taxi Fare to Zurich City",
      zurichVan: "Van Fare to Zurich City",
    },
  };
  return (
    <>
      <section
        id="pricing"
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundImage:
            'url("/images/cars/d9595332-7d1f-49c9-81a8-350319b1b7b7.jpg")',
          backgroundSize: "cover",
        }}
        className="relative min-h-screen flex items-center justify-center pt-25  overflow-hidden bg-[#050505]"
      >
        {/* Background Media & Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse,rgba(201,162,39,0.18)_0%,transparent_70%)] blur-3xl pointer-events-none animate-pulse z-10" />
          <div className="absolute bottom-0 right-0  bg-[radial-gradient(ellipse,rgba(212,115,26,0.12)_0%,transparent_60%)] blur-2xl pointer-events-none z-10" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-[#050505]/50 z-10" />
          <div className="absolute inset-0 bg-[#050505]/30 pointer-events-none z-10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Top Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#F4D06F]">
                {t.badge[lang]}
              </span>
            </div>
          </motion.div>
          {/* Main Headlines */}
          <div className="text-center max-w-4xl mx-auto mb-1">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-serif-luxury italic font-bold text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-4"
            >
              <span className="block text-white">{t.titleLine1[lang]}</span>
              <span className="block gold-gradient-text not-italic font-normal">
                {t.titleLine2[lang]}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed font-light"
            >
              {t.lead1[lang]}
            </motion.p>
          </div>
          {/* Booking Form Card */}

          {/* --- Luxurious Framer-Style Bento Grid Stats --- */}

          {/* Scroll Indicator */}
        </div>

        {/* Tailwind Custom Keyframes Extension */}
        <style>{`
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .origin-\\[center_24px\\] {
          transform-origin: 50% 24px;
        }
      `}</style>
      </section>
      <div className="min-h-screen max-w-7xl mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#F4D06F]">
              {t.badge1[lang]}
            </span>
          </div>
        </motion.div>
        <div className="flex flex-col md:flex-row md:items-baseline justify-center sm:justify-between mb-16 gap-4 border-b border-white/5 pb-6">
          <h2 className="text-3xl font-serif text-white tracking-tight">
            {lang === "en"
              ? "Prices That Match Your Journey"
              : "Preise, die zu Ihrer Reise passen"}
          </h2>
          <div className="flex gap-2 justify-center items-center">
            {pricingAreas.map((area) => (
              <button
                className={`text-[9px] uppercase tracking-[0.2em] px-4 py-2 border transition-all duration-300 ${
                  selectedArea === area.value
                    ? "border-white text-white bg-white/5"
                    : "border-white/5 text-white/30 hover:border-white/20"
                }`}
                onClick={() => setSelectedArea(area.value)}
                key={area.value}
              >
                {/* onClick={() => setSelectedArea(area.value)} */}
                {area.label[lang]}
              </button>
            ))}
          </div>
        </div>
        <div className=" text-white min-h-screen p-6 md:p-12 font-sans flex flex-col items-center">
          <div className="w-full ">
            {/* Table Container */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                {/* Table Header */}
                <thead>
                  <tr className="border-b border-neutral-800 text-[#d4af37] text-sm tracking-wider">
                    <th>{tableHeaders[lang].region}</th>
                    <th className="text-right">
                      {tableHeaders[lang].airportTaxi}
                    </th>
                    <th className="text-right">
                      {tableHeaders[lang].airportVan}
                    </th>
                    <th className="text-right">
                      {tableHeaders[lang].zurichTaxi}
                    </th>
                    <th className="text-right">
                      {tableHeaders[lang].zurichVan}
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-neutral-900 text-sm md:text-base">
                  {rows.map((item) => (
                    <tr
                      key={item.region.en}
                      className="transition-colors hover:bg-neutral-900/40"
                    >
                      <td className="py-4 px-4 text-neutral-200">
                        {item.region[lang]}
                      </td>

                      <td className="py-4 px-4 text-right text-neutral-200">
                        CHF {item.airportTaxi}
                      </td>

                      <td className="py-4 px-4 text-right text-neutral-200">
                        CHF {item.airportVan}
                      </td>

                      <td className="py-4 px-4 text-right text-neutral-200">
                        CHF {item.zurichTaxi}
                      </td>

                      <td className="py-4 px-4 text-right text-neutral-200">
                        CHF {item.zurichVan}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer Note */}
          </div>
        </div>
      </div>
    </>
  );
};
