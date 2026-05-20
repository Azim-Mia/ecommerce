'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const images: string[] = [
  "/images/products/product_1.jpeg",
  "/images/products/product_2.jpeg",
  "/images/products/product_3.jpeg",
];

const ProductSlider: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

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
      className="relative h-[520px] w-full overflow-hidden rounded-3xl bg-black group "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >

      {/* BACKGROUND SLIDES */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img}
             fill
            alt="product"
            priority={index === 0}
            className="object-cover scale-105"
          />
        </div>
      ))}

      {/* SOFT PREMIUM OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      {/* LEFT CONTENT (PRO HERO STYLE) */}
      <div className="hidden md:block absolute inset-0 flex items-center px-16">
        <div className="max-w-lg text-white space-y-5">

          <h1 className="text-5xl font-extrabold leading-tight">
            Premium Shopping
            <br />
            <span className="text-pink-400">Experience</span>
          </h1>

          <p className="text-white/70 text-lg">
            Discover high-quality products with modern design, fast delivery
            and best price guarantee.
          </p>

          <div className="flex gap-4 pt-2">
            <button className="px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-full transition">
              Shop Now
            </button>

            <button className="px-6 py-3 border border-white/30 hover:border-white rounded-full transition">
              View Deals
            </button>
          </div>
        </div>
      </div>

      {/* CLEAN NAV BUTTONS */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition"
      >
        ❯
      </button>

      {/* PROGRESS DOTS */}
      <div className="absolute bottom-6 left-16 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all ${
              index === current
                ? "w-6 bg-white"
                : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default ProductSlider;