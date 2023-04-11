import { useNavigate } from 'react-router';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Chip from '@mui/material/Chip';

interface item {
  product_id: number;
  image: string;
  price: number;
  product_name: string;
  product_info: string;
  store_name: string;
  shipping_fee: number;
  stock: number;
}

interface IitemObj {
  product: item;
}

export default function ProductItem({ product }: IitemObj) {
  const navigate = useNavigate();
  return (
    <>
      {product && (
        <Grid
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{
            m: 10,
            padding: '0.5em',
            margin: '0 auto',
            '&:hover': {
              cursor: 'pointer',
              transform: 'scale(1.02)',
              transition: 'transform 250ms ease-in',
            },
          }}
          onClick={() => navigate(`/product/${product.product_id}`)}
        >
          <Grid>
            <img
              src={product.image}
              alt={product.product_name}
              width={340}
              height={340}
              style={{
                borderRadius: '10px',
                boxShadow: '0 5px 10px -7px rgba(0, 0, 0, 1)',
              }}
            />
            <Typography variant="body2" sx={{ color: '#747474' }}>
              {product.store_name}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
              }}
            >
              {product.product_name}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: '#FF4800', fontWeight: 600 }}
            >
              {product.price.toLocaleString('ko-KR')}원
            </Typography>
            {product.shipping_fee === 0 && (
              <Chip label="무료배송" size="small" />
            )}
            {product.stock === 0 && (
              <Chip label="재고소진" size="small" color="error" />
            )}
          </Grid>
        </Grid>
      )}
    </>
  );
}
