import getProducts from "../lib/getProducts";
import DisplayProducts from "@/components/shared/DisplayProducts";
import ProductSlider from "@/components/shared/ProductSlider";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-gray-100">
      
      {/* SLIDER */}
      <section className="w-full">
        <ProductSlider />
      </section>

      {/* PRODUCTS */}
      <section className="mx-auto w-full max-w-7xl px-3 py-6 sm:px-5 md:px-6 lg:px-8">
        
        {/* TITLE */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
            Latest Products
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Explore our newest collections
          </p>
        </div>

        {/* PRODUCT GRID */}
        <DisplayProducts data={products} />
      </section>
    </main>
  );
}