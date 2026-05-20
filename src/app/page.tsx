import getProducts from "../lib/getProducts";
import DisplayProducts from "@/components/shared/DisplayProducts";
import ProductSlider from "@/components/shared/ProductSlider";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-gray-100">
      
      {/* SLIDER FULL WIDTH */}
      <section className="w-full">
        <ProductSlider />
      </section>

      {/* PRODUCTS FULL WIDTH */}
      <section className="w-full px-3 py-6 sm:px-5 md:px-8 lg:px-12">
        
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