import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Gallery() {
  const images = [
    "https://res.cloudinary.com/dptomokgz/image/upload/v1767716077/8L2A5459_jmeyie.webp",
    "https://res.cloudinary.com/dptomokgz/image/upload/v1767716077/8L2A5398_cxlcxm.webp",
    "https://res.cloudinary.com/dptomokgz/image/upload/v1767716077/8L2A5364_ysg0zk.webp",
    "https://res.cloudinary.com/dptomokgz/image/upload/v1767716077/8L2A5427_uvhpqh.webp",
    "https://res.cloudinary.com/dptomokgz/image/upload/v1767716076/8L2A5518_pfbcxu.webp",
    "https://res.cloudinary.com/dptomokgz/image/upload/v1767716076/8L2A6002_elqosu.webp",
    "https://res.cloudinary.com/dptomokgz/image/upload/v1767716076/8L2A5539_xi5pzm.webp",
    "https://res.cloudinary.com/dptomokgz/image/upload/v1767716076/8L2A5563_fmptyt.webp",
    "https://res.cloudinary.com/dptomokgz/image/upload/v1767716076/8L2A5360_kjsxf7.webp",
    "https://res.cloudinary.com/dptomokgz/image/upload/v1767716076/8L2A5520_yjb5k1.webp",
    "https://res.cloudinary.com/dptomokgz/image/upload/v1767715401/20251118_132117_jfsjuo.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(null);

  const closeModal = () => setCurrentIndex(null);

  const showPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="pt-32 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0A1F44]">
            School Life Gallery
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
            Moments from academics, sports, cultural events, and daily life at
            Hudin Secondary School.
          </p>
        </section>

        {/* ASYMMETRIC GRID */}
        <section className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`
                relative overflow-hidden rounded-2xl cursor-pointer group
                shadow-md hover:shadow-xl transition
                ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}
                ${index === 3 ? "lg:row-span-2" : ""}
              `}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />

              {/* TEXT */}
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition">
                <p className="text-sm font-semibold tracking-wide">
                  View Photo
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* MODAL */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white hover:text-gray-300"
          >
            <X size={32} />
          </button>

          <button
            onClick={showPrev}
            className="absolute left-6 text-white hover:text-gray-300"
          >
            <ChevronLeft size={44} />
          </button>

          <div
            className="max-w-6xl w-full px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex]}
              alt="Gallery preview"
              className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
          </div>

          <button
            onClick={showNext}
            className="absolute right-6 text-white hover:text-gray-300"
          >
            <ChevronRight size={44} />
          </button>
        </div>
      )}
    </main>
  );
}
