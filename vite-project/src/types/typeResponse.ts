import type { Products } from "./typeProduct";

export type Response = {
    mostPopular: {
    sectionTitle: string;
    descriptionTitle: string;
    products: Products[];
  }
  }
  
export  type Response2= {
    bestSellers: {
      sectionTitle: string;
      descriptionTitle: string;
      products: Products[];
    }
  }
  
export  type Response3= {
    newSoon: {
      sectionTitle: string;
      descriptionTitle: string;
      products: Products[];
    }
  }