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
    <section className="min-h-screen w-full bg-gradient-to-br from-gray-100 via-white to-indigo-50 px-3 py-12 sm:px-5 md:px-8 lg:px-12">

      {/* Heading */}
      <div className="mb-12 text-center">
        <h1 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
          Featured Products
        </h1>
        <p className="mt-3 text-base text-gray-500 md:text-lg">
          Explore premium quality products with modern style
        </p>
      </div>

      {/* Grid (FULL WIDTH) */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {data.map((product) => (
          <div
            key={product.id}
            className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >

            {/* IMAGE */}
            <div className="relative h-64 w-full overflow-hidden bg-gray-100">

              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Category */}
              <span className="absolute left-3 top-3 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                {product.category}
              </span>

              {/* Rating */}
              <div className="absolute right-3 top-3 rounded-full bg-white/90 px-2 py-1 text-xs font-bold text-yellow-500 shadow">
                ⭐ {product.rating}
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-5">

              <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                {product.brand}
              </p>

              <h2 className="mt-2 line-clamp-1 text-xl font-bold text-gray-800">
                {product.title}
              </h2>

              <p className="mt-2 line-clamp-2 text-sm text-gray-500">
                {product.description}
              </p>

              <div className="mt-5 flex items-center justify-between">

                <div>
                  <p className="text-2xl font-extrabold text-indigo-600">
                    ৳ {product.price}
                  </p>

                  <p
                    className={`text-xs font-medium ${
                      product.stock > 0 ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {product.stock > 0
                      ? `${product.stock} In Stock`
                      : "Out of Stock"}
                  </p>
                </div>

                <button className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700">
                  Buy Now
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