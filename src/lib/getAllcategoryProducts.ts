// lib/getProducts.ts

import products from "../store/productsData/products.json";
import women from "../store/productsData/women.json";
import men from "../store/productsData/men.json";
import toy from "../store/productsData/toy.json";
import others from "../store/productsData/others.json";

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

/**
 * Get all products (merged database style)
 */
const getAllcategoryProducts = async (): Promise<Product[]> => {
  const allProducts: Product[] = [
    ...products,
    ...men,
    ...women,
    ...toy,
    ...others,
  ];

  return allProducts;
};

export default getAllcategoryProducts