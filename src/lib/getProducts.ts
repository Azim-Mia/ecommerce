// getProducts.ts

import products from "../store/productsData/products.json";

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  brand: string;
  stock: number;
  rating: number;
  thumbnail: string;
  description: string;
}


const getProducts = (): Product[] => {
  return products;
};

export default getProducts;