import products from "@/store/productsData/products.json";
import men from "@/store/productsData/men.json";
import women from "@/store/productsData/women.json";
import child from "@/store/productsData/child.json";
import toy from "@/store/productsData/toy.json";
import others from "@/store/productsData/others.json";

export interface Product {
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

type ProductsData = {
  products: Product[];
  men: Product[];
  women: Product[];
  child: Product[];
  toy: Product[];
  others: Product[];
};

const getProducts = (): ProductsData => {
  return {
    products,
    men,
    women,
    child,
    toy,
    others,
  };
};

export default getProducts;