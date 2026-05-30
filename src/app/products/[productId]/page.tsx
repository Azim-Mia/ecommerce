import Image from "next/image";
import getProducts from "@/lib/getAllcategoryProducts";

interface Product {
  productId: string;
  title: string;
  price: number;
  category: string;
  brand: string;
  stock: number;
  rating: number;
  thumbnail: string;
  description: string;
}

const ProductDetailsPage = async ({
  params,
}: {
  params: { productId: string } | Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  const allProducts: Product[] = await getProducts();

  if (!Array.isArray(allProducts) || allProducts.length === 0) {
    return (
      <div className="flex h-screen items-center justify-center text-xl font-semibold">
        Product Not Found
      </div>
    );
  }

  const product = allProducts.find(
    (item) =>
      item.productId?.toString() === productId?.toString()
  );

  if (!product) {
    return (
      <div className="flex h-screen items-center justify-center text-xl font-semibold">
        Product Not Found
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid gap-12 md:grid-cols-2">

        {/* ================= IMAGE SECTION ================= */}
        <div className="flex items-center justify-center rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 p-6 shadow-xl">
          
          <div className="relative w-full max-w-[550px] h-[420px] sm:h-[500px] md:h-[520px] overflow-hidden rounded-2xl bg-white">

            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-6 transition-transform duration-500 hover:scale-110"
              priority
            />

          </div>
        </div>

        {/* ================= DETAILS SECTION ================= */}
        <div className="flex flex-col justify-center space-y-6">

          {/* TITLE */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            {product.title}
          </h1>

          {/* PRICE */}
          <p className="text-3xl font-bold text-green-600">
            ৳ {product.price}
          </p>

          {/* BADGES */}
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="rounded-full bg-gray-100 px-3 py-1">
              Brand: {product.brand}
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1">
              Category: {product.category}
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1">
              Stock: {product.stock}
            </span>
            <span className="rounded-full bg-yellow-100 px-3 py-1">
              ⭐ {product.rating}
            </span>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-600 leading-7 text-base">
            {product.description}
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">

            <button className="w-full sm:w-auto rounded-xl bg-black px-6 py-3 text-white font-medium hover:bg-gray-800 transition">
              Add To Cart
            </button>

            <button className="w-full sm:w-auto rounded-xl border px-6 py-3 font-medium hover:bg-gray-100 transition">
              Buy Now
            </button>

          </div>

          {/* INFO BOX */}
          <div className="rounded-xl bg-gray-50 p-5 text-sm text-gray-600 space-y-1">
            <p>✔ Fast Delivery Available</p>
            <p>✔ Secure Payment System</p>
            <p>✔ 7 Days Return Policy</p>
          </div>

        </div>
      </div>
    </main>
  );
};

export default ProductDetailsPage;