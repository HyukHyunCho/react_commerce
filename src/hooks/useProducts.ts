import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { instance } from '../util/instance';
import { getAllProduct } from '../services/apis';

export interface IProduct {
  image: string;
  price: number;
  product_id: number;
  product_info: string;
  product_name: string;
  seller: number;
  seller_store: string;
  shipping_fee: number;
  shipping_method: string;
  stock: number;
}

export const useAllProduct = () => {
  return useQuery(['allProducts'], () => getAllProduct());
};

export const useProduct = () => {
  const queryClient = useQueryClient();
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);
  const fallBack: IProduct[] = [];

  useEffect(() => {
    if (currentPage < maxPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(['products', nextPage], () =>
        getProducts(nextPage)
      );
    }
  }, [queryClient, currentPage, maxPage]);

  const getProductsStatic = async () => {
    const { data } = await instance.get(`products/?page=2`);
    return data.results;
  };

  const getProducts = async (pageNum: number) => {
    const { data } = await instance.get(`products/?page=${pageNum}`);
    setMaxPage(Math.ceil(data.count / 15));
    return data.results;
  };

  const { data: productsStatic } = useQuery(['productsStatic'], () =>
    getProductsStatic()
  );

  const { data: products = fallBack } = useQuery(
    ['products', currentPage],
    () => getProducts(currentPage),
    {
      keepPreviousData: true,
    }
  );

  return { products, productsStatic, maxPage, currentPage, setCurrentPage };
};
