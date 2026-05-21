'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const images: string[] = [
  "/images/products/product_1.jpeg",
  "/images/products/product_2.jpeg",
  "/images/products/product_3.jpeg",
];

const ProductSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(nextSlide, 4500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  return (
    <div
      className="relative w-full overflow-hidden bg-black
                 h-[260px] sm:h-[320px] md:h-[420px] lg:h-[520px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >

      {/* SLIDES */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt="product"
            fill
            priority={index === 0}
            className="object-cover scale-105"
          />
        </div>
      ))}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* TEXT CONTENT (RESPONSIVE) */}
      <div className="absolute inset-0 flex items-center px-4 sm:px-8 md:px-16 lg:px-full">

        <div className="max-w-xs sm:max-w-md md:max-w-lg text-white space-y-3 sm:space-y-4 md:space-y-5">

          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Premium Shopping <br />
            <span className="text-pink-400">Experience</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/70">
            Discover high-quality products with modern design, fast delivery
            and best price guarantee.
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-3 pt-1 sm:pt-2">

            <button className="rounded-full bg-pink-500 px-4 py-2 text-xs sm:px-5 sm:py-3 sm:text-sm md:text-base hover:bg-pink-600 transition">
              Shop Now
            </button>

            <button className="rounded-full border border-white/30 px-4 py-2 text-xs sm:px-5 sm:py-3 sm:text-sm md:text-base hover:border-white transition">
              View Deals
            </button>

          </div>
        </div>
      </div>

      {/* NAV BUTTONS (responsive size) */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2
                   h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12
                   flex items-center justify-center rounded-full
                   bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2
                   h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12
                   flex items-center justify-center rounded-full
                   bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
      >
        ❯
      </button>

      {/* DOTS (responsive position) */}
      <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">

        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all ${
              index === current ? "w-6 bg-white" : "w-2 bg-white/40"
            }`}
          />
        ))}

      </div>

    </div>
  );
};

export default ProductSlider;