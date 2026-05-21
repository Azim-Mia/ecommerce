import getProducts from "../lib/getProducts";
import DisplayProducts from "@/components/shared/DisplayProducts";
import ProductSlider from "@/components/shared/ProductSlider";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <>
      {/* SLIDER */}
      <section className="w-full overflow-hidden">
        <ProductSlider />
      </section>

      {/* PRODUCTS SECTION */}
      <section className="w-full bg-gray-100 px-3 py-6 sm:px-5 md:px-8 md:py-10 lg:px-12 xl:px-16">

        {/* HEADER */}
        <div className="mb-6 md:mb-10">
          <h1 className="text-xl font-bold text-gray-800 sm:text-2xl md:text-3xl lg:text-4xl">
            Latest Products
          </h1>

          <p className="mt-1 text-xs text-gray-500 sm:text-sm md:text-base">
            Explore our newest collections
          </p>
        </div>

        {/* PRODUCTS GRID */}
        <div className="w-full">
          <DisplayProducts data={products} />
        </div>

      </section>
    </>
  );
}