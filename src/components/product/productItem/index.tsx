import { useNavigate } from 'react-router';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Chip from '@mui/material/Chip';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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
          onClick={() =>
            navigate(`/product/${product.product_id}`, {
              state: {
                product_id: product.product_id,
                image: product.image,
                price: product.price,
                product_name: product.product_name,
                product_info: product.product_info,
                store_name: product.store_name,
                shipping_fee: product.shipping_fee,
                stock: product.stock,
              },
            })
          }
        >
          <Grid>
            <LazyLoadImage
              effect="blur"
              src={product.image}
              alt={product.product_name}
              width={340}
              height={340}
              style={{
                borderRadius: '10px',
                boxShadow: '0 5px 10px -7px rgba(0, 0, 0, 1)',
                objectFit: 'cover',
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
              sx={{ color: '#FF4800', fontWeight: 700 }}
            >
              {product.price.toLocaleString('ko-KR')}원
            </Typography>
            {product.shipping_fee === 0 && (
              <Chip label="무료배송" size="small" />
            )}
            {product.stock < 6 && product.stock > 0 && (
              <Chip label="품절임박" size="small" color="warning" />
            )}
            {product.stock === 0 && (
              <Chip label="일시품절" size="small" color="error" />
            )}
          </Grid>
        </Grid>
      )}
    </>
  );
}
