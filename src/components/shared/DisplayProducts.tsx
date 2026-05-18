'use client';

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
  const displayProducts = () => {
    return data.map((product) => (
      <div
        key={product.id}
        className="group overflow-hidden rounded-[30px] bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
      >
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
          />

          {/* Category */}
          <span className="absolute left-4 top-4 rounded-full bg-indigo-600 px-4 py-1 text-sm font-semibold text-white shadow-lg">
            {product.category}
          </span>

          {/* Rating */}
          <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-yellow-500 shadow">
            ⭐ {product.rating}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Brand */}
          <p className="text-sm font-medium uppercase tracking-wider text-gray-400">
            {product.brand}
          </p>

          {/* Title */}
          <h2 className="mt-2 line-clamp-1 text-2xl font-bold text-gray-800">
            {product.title}
          </h2>

          {/* Description */}
          <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
            {product.description}
          </p>

          {/* Bottom */}
          <div className="mt-6 flex items-center justify-between">
            <div>
              <p className="text-3xl font-extrabold text-indigo-600">
                ৳ {product.price}
              </p>

              <p
                className={`mt-1 text-sm font-medium ${
                  product.stock > 0
                    ? 'text-green-600'
                    : 'text-red-500'
                }`}
              >
                {product.stock > 0
                  ? `${product.stock} In Stock`
                  : 'Out of Stock'}
              </p>
            </div>

            <button className="rounded-2xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-md transition duration-300 hover:bg-indigo-700 hover:shadow-xl">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-indigo-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h1 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-5xl font-extrabold text-transparent">
            Featured Products
          </h1>

          <p className="mt-4 text-lg text-gray-500">
            Explore premium quality products with modern style
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {displayProducts()}
        </div>
      </div>
    </section>
  );
};

export default Products;