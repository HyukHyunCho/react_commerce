import { useNavigate } from 'react-router';
import style from './style/index.module.css';

interface item {
  product_id: number;
  image: string;
  price: number;
  product_name: string;
  product_info: string;
  store_name: string;
  shipping_fee: number;
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
          <div className={style.storeName}>{product.store_name}</div>
          <div className={style.productName}>{product.product_name}</div>

          <div className={style.productPrice}>
            {product.price.toLocaleString('ko-KR')}원
          </div>
          {product.shipping_fee === 0 && (
            <div className={style.shippingFee}>무료배송</div>
          )}
        </li>
      )}
    </>
  );
}
