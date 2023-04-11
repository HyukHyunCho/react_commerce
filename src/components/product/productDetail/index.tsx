import { Button, ButtonGroup, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

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
        <>
          <Grid
            container
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              m: 10,
            }}
          >
            <Grid xs={12} sm={5}>
              <img
                src={productDetailData.image}
                alt={productDetailData.image}
                style={{ width: '100%' }}
              />
            </Grid>
            <Grid xs={12} sm={7} sx={{ borderTop: '2px solid #000' }}>
              <Grid xs={12}>
                <Typography variant="body2" sx={{ mt: 2, color: '#747474' }}>
                  {productDetailData.store_name}
                </Typography>
                <Typography variant="h5" sx={{ mt: 2 }}>
                  {productDetailData.product_name}
                </Typography>
                <Typography variant="h5" sx={{ mt: 2 }}>
                  {productDetailData.price.toLocaleString('ko-KR')}원
                </Typography>
              </Grid>

              <Grid xs={12} sx={{ mt: 3, borderTop: '1px solid #D5D5D5' }}>
                <Typography variant="h6" sx={{ mt: 1 }}>
                  배송정보
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  배송비 :
                  {productDetailData.shipping_fee === 0
                    ? '무료배송'
                    : `${productDetailData.shipping_fee.toLocaleString(
                        'ko-KR'
                      )} 원`}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  배송방법 :{' '}
                  {productDetailData.shipping_method === 'PARCEL'
                    ? '택배배송'
                    : '직접배송(화물배달)'}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  배송예정 : 5일이내 출고(주말,공휴일제외)
                </Typography>
              </Grid>
              <Grid xs={12}></Grid>
              <Grid xs={12} sx={{ mt: 3, borderTop: '1px solid #D5D5D5' }}>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  재고 : {productDetailData.stock}개
                </Typography>
                <ButtonGroup
                  variant="outlined"
                  sx={{ mt: 3, border: '1px solid #000' }}
                >
                  <Button
                    sx={{ color: '#000', border: '1px solid #000' }}
                    onClick={() => onCountClick('minus')}
                  >
                    -
                  </Button>
                  <Button sx={{ color: '#000', border: '1px solid #000' }}>
                    {count}
                  </Button>
                  <Button
                    sx={{ color: '#000', border: '1px solid #000' }}
                    onClick={() => onCountClick('plus')}
                  >
                    +
                  </Button>
                </ButtonGroup>
              </Grid>
              <Grid
                xs={12}
                sx={{ display: 'flex', mt: 3, borderTop: '1px solid #D5D5D5' }}
              >
                <Typography variant="body1" sx={{ mt: 3, mr: 2 }}>
                  총 상품 금액
                </Typography>
                <Typography variant="h4" sx={{ mt: 2, color: '#FF0000' }}>
                  {(count * productDetailData.price).toLocaleString('ko-KR')}원
                </Typography>
              </Grid>
              <Grid
                xs={12}
                sx={{ display: 'flex', mt: 3, borderTop: '1px solid #D5D5D5' }}
              >
                <Grid xs={6}>
                  <Button
                    variant="contained"
                    fullWidth
                    disableElevation={true}
                    startIcon={<AddShoppingCartIcon />}
                    sx={{
                      mt: 3,
                      color: '#000',
                      border: '1px solid #d4d4d4',
                      '&:hover': {
                        backgroundColor: '#EAEAEA',
                      },
                      backgroundColor: '#fff',
                    }}
                    onClick={() => onClickAddCart()}
                  >
                    장바구니
                  </Button>{' '}
                </Grid>
                <Grid xs={6}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 3,
                      '&:hover': {
                        backgroundColor: '#4C4C4C',
                      },
                      backgroundColor: '#000',
                    }}
                    onClick={() => onClickOrder()}
                  >
                    바로구매
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              m: 10,
            }}
          >
            <Grid xs={12} sx={{ borderTop: '1px solid #D5D5D5' }}>
              <Typography variant="h6" sx={{ mt: 3 }}>
                상품 정보
              </Typography>
              <Typography variant="body2" sx={{ mt: 2 }}>
                {productDetailData.product_info}
              </Typography>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}
