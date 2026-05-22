import getProducts from "../lib/getProducts";
import DisplayProducts from "@/components/shared/DisplayProducts";
import ProductSlider from "@/components/shared/ProductSlider";

export default async function HomePage() {
  const products = await getProducts();

  return ( <>
<div className="w-full"><ProductSlider /></div>
<div className=""><DisplayProducts data={products}></DisplayProducts> </div>
    </>
  );
}