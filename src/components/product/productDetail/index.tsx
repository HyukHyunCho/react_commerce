import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import style from './style/style.module.css';

interface IProduct {
  created_at: string;
  image: string;
  price: number;
  product_id: number;
  product_info: string;
  product_name: string;
  seller: number;
  shipping_fee: number;
  shipping_method: string;
  stock: number;
  store_name: string;
  updated_at: string;
}

interface IProductProps {
  productDetailData: IProduct;
  count: number;
  onCountClick: (value: string) => void;
  onClickOrder: () => void;
  onClickAddCart: () => void;
}

export default function ProductDetail({
  productDetailData,
  count,
  onCountClick,
  onClickOrder,
  onClickAddCart,
}: IProductProps) {
  return (
    <>
      {productDetailData && (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={6}>
            <img
              className={style.img}
              src={productDetailData.image}
              alt={productDetailData.image}
            />
          </Grid>
          <Grid xs={6}>
            <Typography>{productDetailData.store_name}</Typography>
            <div>{productDetailData.product_name}</div>
            <div>
              {productDetailData.shipping_method === 'PARCEL'
                ? '택배배송'
                : '직접배송(화물배달)'}
            </div>
            <div>재고 : {productDetailData.stock}</div>
            <div className={style.countContainer}>
              <button
                className={style.countBtn}
                onClick={() => onCountClick('minus')}
              >
                -
              </button>
              <div className={style.count}>{count}</div>
              <button
                className={style.countBtn}
                onClick={() => onCountClick('plus')}
              >
                +
              </button>
            </div>
            <div>총 상품 금액 : </div>
            <Button variant="contained" onClick={() => onClickOrder()}>
              바로구매
            </Button>
            <Button
              type="button"
              variant="contained"
              color="secondary"
              onClick={() => onClickAddCart()}
            >
              장바구니
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
}
