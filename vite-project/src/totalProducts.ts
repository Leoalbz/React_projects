import { response, response2, response3 } from './productosMockeados';

export const allProducts = [
  ...response.mostPopular.products,
  ...response2.bestSellers.products,
  ...response3.newSoon.products
];