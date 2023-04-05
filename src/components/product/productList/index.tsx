import ProductItem from '../productItem';
import style from './style/index.module.css';

interface Iitem {
  product_id: number;
  image: string;
  price: string;
  product_name: string;
  product_info: string;
}

interface IItemData {
  products: Iitem[];
}

export default function ProductList({ products }: IItemData) {
  return (
    <ul className={style.items}>
      {products &&
        products.map((product: any) => (
          <ProductItem key={product.product_id} product={product} />
        ))}
    </ul>
  );
}
