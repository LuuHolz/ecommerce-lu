import { useState } from 'react';
import { DataAPI } from '../types/productsAPI.type';

const useProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<[] | DataAPI[]>([]);
  const [error, setError] = useState('');

  const getProducts = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/products');
      const data = await response.json();

      // FILTRAR SOLO 9 PRODUCTOS DE TODO LO QUE RECIBO
      const filteredProducts = data.slice(0, 9);
      setProducts(filteredProducts);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, products, error, getProducts };
};

export default useProducts;