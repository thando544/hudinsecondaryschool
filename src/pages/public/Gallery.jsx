import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Gallery() {
  const images = [
    "https://media.istockphoto.com/id/1338737959/photo/little-kids-schoolchildren-pupils-students-running-hurrying-to-the-school-building-for.jpg?s=1024x1024&w=is&k=20&c=h6FSgmubB2NYOzf83gBBH9t-f6sIrMuHXTDqvIEsFK8=",
    "https://media.istockphoto.com/id/1041987760/photo/mother-taking-kids-to-school.jpg?s=1024x1024&w=is&k=20&c=nLA6GGim3TDOt5n40hs5yN1zH5bk7RH2XstOP-66agU=",
    "https://media.istockphoto.com/id/1327261267/photo/young-mother-in-a-checked-shirt-leads-two-daughters-to-school-with-school-bags-holding-hands.jpg?s=612x612&w=0&k=20&c=HRTWrgGIyjurzslnN4f5H-dOcEI0W_pLiNNaDXncDJA=",
    "https://media.istockphoto.com/id/1173268194/photo/schoolgirls-walking-outdoors.jpg?s=612x612&w=0&k=20&c=Y71FQT6rloYOA65FxoVOEaiknC5dMUlKf7bqFwLkz0I=",
    "https://media.istockphoto.com/id/1267107150/photo/parent-and-pupils-go-to-school.jpg?s=612x612&w=0&k=20&c=ZpVsJth7Lv1iL6CSn1EWs01wq8c_es5COWXixMtk9TM=",
    "https://media.istockphoto.com/id/2205496164/photo/mother-children-and-walking-to-school-in-road-with-holding-hands-safety-and-education-support.jpg?s=612x612&w=0&k=20&c=0rTHZ8mYY5jo6MIu1TI6eY8WK52TqlgCPN3B-pnpovY=",
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
        {/* Header */}
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0A1F44]">School Gallery</h1>
          <p className="mt-6 text-gray-600 text-lg">
            A glimpse into school life, academic activities, and special events
            at Hudin Secondary School.
          </p>
        </section>

        {/* Grid */}
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

      {/* Modal Carousel */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white hover:text-gray-300"
          >
            <X size={30} />
          </button>

          {/* Previous */}
          <button
            onClick={showPrev}
            className="absolute left-6 text-white hover:text-gray-300"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image */}
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

          {/* Next */}
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
