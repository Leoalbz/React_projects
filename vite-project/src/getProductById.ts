import { allProducts } from './totalProducts.ts';
import type { Products } from './types/typeProduct';

export const getProductById = (id: number): Products | undefined => {
  return allProducts.find((product) => product.id === id);
};