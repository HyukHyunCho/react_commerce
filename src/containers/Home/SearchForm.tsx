import React, { useEffect } from 'react';
import Layout from '../../components/common/Layout';
import Typography from '@mui/material/Typography';
import useDebounce from '../../hooks/useDebounce';
import { useLocation, useNavigate } from 'react-router';
import { useSearch } from '../../hooks/useSearch';
import ProductList from '../../components/product/productList';

export default function SearchForm() {
  const navigate = useNavigate();
  const useParam = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useParam();
  const searchKey = query.get('q');

  const { data, refetch } = useSearch(String(searchKey));
  const debouncedSearchKey = useDebounce(String(searchKey), 500);

  useEffect(() => {
    if (debouncedSearchKey !== undefined) {
      refetch();
    } else {
      navigate('/');
    }
  }, [refetch, debouncedSearchKey]);

  return (
    <Layout title={'검색 리스트'} size={700}>
      {data && data.length > 0 ? (
        <ProductList products={data} />
      ) : (
        <Typography component="h1" variant="h5">
          {`입력하신 검색어: "${debouncedSearchKey}"와(과) 일치하는 결과가 없습니다."`}
        </Typography>
      )}
    </Layout>
  );
}
