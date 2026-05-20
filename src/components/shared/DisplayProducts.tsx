'use client';

import Image from "next/image";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  brand: string;
  stock: number;
  rating: number;
  thumbnail: string;
  description: string;
};

type ProductsProps = {
  data: Product[];
};

const Products = ({ data }: ProductsProps) => {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-gray-100 via-white to-indigo-50 px-3 py-10 sm:px-5 md:px-8 lg:px-12">

      {/* HEADER */}
      <div className="mb-10 text-center md:mb-14">
        <h1 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl md:text-5xl">
          Featured Products
        </h1>

        <p className="mt-2 text-sm text-gray-500 sm:text-base md:text-lg">
          Explore premium quality products with modern style
        </p>
      </div>

      {/* GRID */}
      <div className="
        grid 
        grid-cols-1 
        gap-5 
        sm:grid-cols-2 
        md:grid-cols-2 
        lg:grid-cols-3 
        xl:grid-cols-4 
        2xl:grid-cols-5
      ">

        {data.map((product) => (
          <div
            key={product.id}
            className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >

            {/* IMAGE */}
            <div className="relative h-52 w-full overflow-hidden bg-gray-100 sm:h-56 md:h-60 lg:h-64">

              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                sizes="(max-width: 640px) 100vw, 
                       (max-width: 1024px) 50vw, 
                       (max-width: 1280px) 33vw, 
                       25vw"
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              {/* CATEGORY */}
              <span className="absolute left-2 top-2 rounded-full bg-indigo-600 px-2 py-1 text-[10px] font-semibold text-white sm:left-3 sm:top-3 sm:text-xs">
                {product.category}
              </span>

              {/* RATING */}
              <div className="absolute right-2 top-2 rounded-full bg-white/90 px-2 py-1 text-[10px] font-bold text-yellow-500 shadow sm:right-3 sm:top-3 sm:text-xs">
                ⭐ {product.rating}
              </div>

            </div>

            {/* CONTENT */}
            <div className="flex flex-1 flex-col p-4 sm:p-5">

              <p className="text-[10px] font-medium uppercase tracking-wider text-gray-400 sm:text-xs">
                {product.brand}
              </p>

              <h2 className="mt-1 line-clamp-1 text-base font-bold text-gray-800 sm:text-lg md:text-xl">
                {product.title}
              </h2>

              <p className="mt-1 line-clamp-2 text-xs text-gray-500 sm:text-sm">
                {product.description}
              </p>

              {/* BOTTOM */}
              <div className="mt-auto flex items-center justify-between pt-4">

                <div>
                  <p className="text-lg font-extrabold text-indigo-600 sm:text-xl md:text-2xl">
                    ৳ {product.price}
                  </p>

                  <p className={`text-[10px] sm:text-xs font-medium ${
                    product.stock > 0 ? "text-green-600" : "text-red-500"
                  }`}>
                    {product.stock > 0
                      ? `${product.stock} In Stock`
                      : "Out of Stock"}
                  </p>
                </div>

                <button className="rounded-lg bg-indigo-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-indigo-700 sm:px-4 sm:text-sm">
                  Buy
                </button>

              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Products;