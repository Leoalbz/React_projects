import { createContext } from 'react';

export type CarritoContextType = {
  carritoTotal: number;
  children: any;
};

export const CarritoContext = createContext<CarritoContextType | null>(null);