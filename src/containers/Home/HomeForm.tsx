import React from 'react';
import { Container, CssBaseline, Box, Typography } from '@mui/material';
import { useProduct } from '../../hooks/useProducts';
import ProductList from '../../components/product/productList';
import { Pagination } from '@mui/material';

export default function HomeForm() {
  const { products, maxPage, setCurrentPage } = useProduct();

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          상품 리스트
        </Typography>
        <Box sx={{ mt: 1 }}>
          {products && <ProductList products={products} />}
        </Box>
        <Pagination
          count={maxPage}
          color="primary"
          onChange={(_, page) => {
            setCurrentPage(page);
            window.scrollTo(0, 0);
          }}
        />
      </Box>
    </Container>
  );
}
