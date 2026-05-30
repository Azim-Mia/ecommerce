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
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  const allProducts: Product[] = await getProducts();

  const product = allProducts.find(
    (item) => item.productId === productId
  );

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center text-xl font-semibold">
        Product Not Found
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">

        {/* IMAGE SECTION */}
        <div className="flex items-center justify-center">
          <div className="relative h-[350px] w-full overflow-hidden rounded-3xl bg-white shadow-xl sm:h-[450px] md:h-[550px] lg:h-[600px]">

            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />

          </div>
        </div>

        {/* DETAILS SECTION */}
        <div className="flex flex-col justify-center space-y-6">

          <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
            {product.title}
          </h1>

          <p className="text-3xl font-bold text-green-600">
            ৳ {product.price}
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="rounded-full bg-gray-100 px-4 py-2 text-sm">
              Brand: {product.brand}
            </span>

            <span className="rounded-full bg-gray-100 px-4 py-2 text-sm">
              Category: {product.category}
            </span>

            <span className="rounded-full bg-gray-100 px-4 py-2 text-sm">
              Stock: {product.stock}
            </span>

            <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm">
              ⭐ {product.rating}
            </span>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold">
              Description
            </h2>

            <p className="leading-8 text-gray-600">
              {product.description}
            </p>
          </div>

          <div className="flex flex-col gap-4 pt-2 sm:flex-row">

            <button className="rounded-xl bg-black px-8 py-3 font-medium text-white transition hover:bg-gray-800">
              Add To Cart
            </button>

            <button className="rounded-xl border border-gray-300 px-8 py-3 font-medium transition hover:bg-gray-100">
              Buy Now
            </button>

          </div>

          <div className="rounded-2xl bg-gray-50 p-5 shadow-sm">
            <div className="space-y-2 text-sm text-gray-600">
              <p>✔ Fast Delivery Available</p>
              <p>✔ Secure Payment System</p>
              <p>✔ 7 Days Return Policy</p>
              <p>✔ 24/7 Customer Support</p>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
};

export default ProductDetailsPage;