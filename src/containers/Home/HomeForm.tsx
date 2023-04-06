import { useProduct } from '../../hooks/useProducts';
import ProductList from '../../components/product/productList';
import { Pagination } from '@mui/material';
import Layout from '../../components/common/Layout';

export default function HomeForm() {
  const { products, maxPage, setCurrentPage } = useProduct();

  return (
    <Layout title={'상품 리스트'} size={1000}>
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
  );
}
