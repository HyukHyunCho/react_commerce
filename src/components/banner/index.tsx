import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

export default function Banner() {
  return (
    <Carousel autoPlay interval={2000} animation="slide">
      <Paper>
        <img
          src="https://img.freepik.com/premium-vector/welcome-to-market-banner-horizontal-concept_96318-5120.jpg?w=1380"
          width={'100%'}
          height={300}
        />
      </Paper>
      <Paper>
        <img
          src="https://images.pexels.com/photos/9436715/pexels-photo-9436715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={'100%'}
          height={300}
        />
      </Paper>
    </Carousel>
  );
}
