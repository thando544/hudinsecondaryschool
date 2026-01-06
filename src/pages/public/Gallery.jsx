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
    <main className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0A1F44]">School Gallery</h1>
          <p className="mt-6 text-gray-600 text-lg">
            A glimpse into school life, academic activities, and special events
            at Hudin Secondary School.
          </p>
        </section>
        <section className="mt-20 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {images.map((src, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setCurrentIndex(index)}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#0A1F44]/20 opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </section>
      </div>
      {currentIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white hover:text-gray-300"
          >
            <X size={30} />
          </button>
          <button
            onClick={showPrev}
            className="absolute left-6 text-white hover:text-gray-300"
          >
            <ChevronLeft size={40} />
          </button>
          <div
            className="max-w-5xl w-full px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex]}
              alt="Gallery preview"
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>
          <button
            onClick={showNext}
            className="absolute right-6 text-white hover:text-gray-300"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </main>
  );
}
