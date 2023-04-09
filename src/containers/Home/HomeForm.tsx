import { useProduct } from '../../hooks/useProducts';
import ProductList from '../../components/product/productList';
import { Pagination } from '@mui/material';
import Layout from '../../components/common/Layout';
import Banner from '../../components/banner';
import Carousel from '../../components/carousel';

export default function HomeForm() {
  const { products, productsStatic, maxPage, setCurrentPage } = useProduct();
  return (
    <>
      <Banner />
      {productsStatic && <Carousel products={productsStatic} />}
      <Layout title={''}>
        {products && <ProductList products={products} />}
        <Pagination
          count={maxPage}
          color="primary"
          onChange={(_, page) => {
            setCurrentPage(page);
            window.scrollTo(0, 0);
          }}
        />
      </Layout>
    </>
  );
}
