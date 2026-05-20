import getProducts from "../lib/getProducts";
import DisplayProducts from "@/components/shared/DisplayProducts";
import ProductSlider from "@/components/shared/ProductSlider";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-gray-100">

      {/* SLIDER */}
      <section className="min-w-full">
        <ProductSlider />
      </section>

      {/* PRODUCTS SECTION */}
      <section className="min-w-full px-3 sm:px-5 md:px-8 lg:px-12 xl:px-16 py-6 md:py-10">

        {/* HEADER */}
        <div className="mb-6 md:mb-10">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            Latest Products
          </h1>

          <p className="mt-1 text-xs sm:text-sm md:text-base text-gray-500">
            Explore our newest collections
          </p>
        </div>

        {/* GRID WRAPPER */}
        <div className="min-w-full">
          <DisplayProducts data={products} />
        </div>

      </section>
    </main>
  );
}