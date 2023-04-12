import { useProduct } from '../../hooks/useProducts';
import ProductList from '../../components/product/productList';
import { Pagination } from '@mui/material';
import Layout from '../../components/common/Layout';
import Banner from '../../components/banner';
import Carousel from '../../components/carousel';
import { Typography } from '@mui/material';
import Spinner from '../../components/spinner';

export default function HomeForm() {
  const { products, productsStatic, maxPage, setCurrentPage, isLoading } =
    useProduct();
  return (
    <>
      <Banner />
      <Typography variant="body2" sx={{ mt: 3, textAlign: 'center' }}>
        추천상품
      </Typography>
      {productsStatic && <Carousel products={productsStatic} />}
      <Layout title={''} size={10}>
        {isLoading && <Spinner />}
        {products && <ProductList products={products} />}
        <Pagination
          count={maxPage}
          color="standard"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            m: 1,
          }}
          onChange={(_, page) => {
            setCurrentPage(page);
          }}
        />
      </Layout>
    </>
  );
}
