import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import banner1 from '../../assets/image/banner1.jpg';
import banner2 from '../../assets/image/banner2.jpg';
import banner3 from '../../assets/image/banner3.jpg';

export default function Banner() {
  return (
    <Carousel
      autoPlay
      interval={5000}
      animation="slide"
      sx={{ justifyContent: 'center' }}
    >
      <Paper>
        <img
          src={banner1}
          width={'100%'}
          height={350}
          style={{ objectFit: 'cover' }}
        />
      </Paper>
      <Paper>
        <img
          src={banner2}
          width={'100%'}
          height={350}
          style={{ objectFit: 'cover' }}
        />
      </Paper>
      <Paper>
        <img
          src={banner3}
          width={'100%'}
          height={350}
          style={{ objectFit: 'cover' }}
        />
      </Paper>
    </Carousel>
  );
}
