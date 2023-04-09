import ProductItem from '../productItem';
import style from './style/index.module.css';

interface Iitem {
  product_id: number;
  image: string;
  price: number;
  product_name: string;
  product_info: string;
  store_name: string;
  shipping_fee: number;
}

interface IItemData {
  products: Iitem[];
}

export default function ProductList({ products }: IItemData) {
  return (
    <ul className={style.items}>
      {products &&
        products.map((product: Iitem) => (
          <ProductItem key={product.product_id} product={product} />
        ))}
    </ul>
  );
}
