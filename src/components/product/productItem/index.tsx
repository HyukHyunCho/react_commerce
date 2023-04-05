import { useNavigate } from 'react-router';
import style from './style/index.module.css';

interface item {
  product_id: number;
  image: string;
  price: string;
  product_name: string;
  product_info: string;
}

interface IitemObj {
  product: item;
}

export default function ProductItem({ product }: IitemObj) {
  const navigate = useNavigate();
  return (
    <>
      {product && (
        <li
          className={style.container}
          onClick={() => navigate(`/product/${product.product_id}`)}
        >
          <div className={style.imgBox}>
            <img
              className={style.thumbnail}
              src={product.image}
              alt={product.product_name}
            />
          </div>
          <div className={style.productName}>{product.product_name}</div>
          <div className={style.productPrice}>{product.price}</div>
        </li>
      )}
    </>
  );
}
