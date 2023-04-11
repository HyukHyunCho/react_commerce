import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

import nike from '../../assets/image/nike.svg';
import banner1 from '../../assets/image/backgroundimg.jpg';

export default function Banner() {
  return (
    <Carousel
      autoPlay
      interval={2000}
      animation="slide"
      sx={{ justifyContent: 'center' }}
    >
      <Paper>
        <img
          src={
            'https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1600'
          }
          width={'100%'}
          height={400}
          style={{ backgroundSize: 'contain' }}
        />
      </Paper>
      <Paper>
        <img
          src={
            'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1600'
          }
          width={'100%'}
          height={400}
          style={{ backgroundSize: 'contain' }}
        />
      </Paper>
      <Paper>
        <img
          src={
            'https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?auto=compress&cs=tinysrgb&w=1600'
          }
          width={'100%'}
          height={400}
          style={{ backgroundSize: 'contain' }}
        />
      </Paper>
    </Carousel>
  );
}
