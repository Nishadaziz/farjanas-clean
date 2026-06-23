import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import saree1 from "../assets/saree1.webp";
import saree2 from "../assets/saree2.webp";
import saree3 from "../assets/saree3.webp";
import saree4 from "../assets/saree4.webp";
import saree5 from "../assets/saree5.webp";

const images = [saree1, saree2, saree3, saree4, saree5];

function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <section className="bg-gradient-to-b from-white to-[#fff5ff] px-6 py-16 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <span className="rounded-full bg-[#fce7ff] px-5 py-2 text-sm font-bold uppercase tracking-wide text-[#C218D9]">
            Farjanas
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Product Gallery
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Explore our elegant handcrafted saree collection.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 z-10 flex h-12 w-12 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#C218D9] shadow-lg transition hover:scale-110 hover:bg-[#C218D9] hover:text-white"
          >
            <ChevronLeft size={26} />
          </button>

          <div className="overflow-hidden rounded-[2rem]" ref={emblaRef}>
            <div className="flex">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="min-w-full px-3 sm:min-w-[50%] lg:min-w-[33.333%]"
                >
                  <div className="group overflow-hidden rounded-[2rem] bg-white p-3 shadow-xl">
                    <div className="overflow-hidden rounded-[1.5rem]">
                      <img
                        src={img}
                        alt={`Farjanas saree ${index + 1}`}
                        loading="lazy"
                        decoding="async"
                        fetchPriority="low"
                        className="h-[480px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[560px]"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 z-10 flex h-12 w-12 translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#C218D9] shadow-lg transition hover:scale-110 hover:bg-[#C218D9] hover:text-white"
          >
            <ChevronRight size={26} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;