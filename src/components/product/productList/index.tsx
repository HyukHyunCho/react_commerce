import ProductItem from '../productItem';
import Grid from '@mui/material/Unstable_Grid2';

interface Iitem {
  product_id: number;
  image: string;
  price: number;
  product_name: string;
  product_info: string;
  store_name: string;
  shipping_fee: number;
  stock: number;
}

interface IItemData {
  products: Iitem[];
}

export default function ProductList({ products }: IItemData) {
  return (
    <Grid
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {products &&
        products.map((product: Iitem) => (
          <ProductItem key={product.product_id} product={product} />
        ))}
    </Grid>
  );
}
