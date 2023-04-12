import BasicCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1100 },
    items: 7,
    slidesToSlide: 7,
  },
  tablet: {
    breakpoint: { max: 1100, min: 800 },
    items: 4,
    slidesToSlide: 4,
  },
  mobile: {
    breakpoint: { max: 800, min: 0 },
    items: 3,
    slidesToSlide: 3,
  },
};

interface Iitem {
  product_id: number;
  image: string;
  price: string;
  product_name: string;
  product_info: string;
}

interface ICarouselProps {
  products: Iitem[];
}

export default function Carousel({ products }: ICarouselProps) {
  const navigate = useNavigate();
  return (
    <BasicCarousel
      draggable={true}
      responsive={responsive}
      infinite={true}
      keyBoardControl={true}
    >
      {products &&
        products.map((item) => (
          <Grid
            key={item.product_id}
            sx={{ cursor: 'pointer' }}
            onClick={() => navigate(`/product/${item.product_id}`)}
          >
            <img
              src={item.image}
              alt={item.image}
              width={'98%'}
              height={200}
              style={{
                borderRadius: '5px',
                boxShadow: '0 5px 10px -7px rgba(0, 0, 0, 1)',
              }}
            />
            <Typography variant="body2" sx={{ textAlign: 'center' }}>
              {item.product_name}
            </Typography>
          </Grid>
        ))}
    </BasicCarousel>
  );
}
