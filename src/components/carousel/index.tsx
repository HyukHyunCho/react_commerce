import BasicCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
  console.log(products);
  return (
    <BasicCarousel
      draggable={true}
      responsive={responsive}
      infinite={true}
      keyBoardControl={true}
    >
      {products &&
        products.map((item) => (
          <div key={item.product_id}>
            <img src={item.image} width={175} height={175} />
            <p>{item.product_name}</p>
            <p>{item.price}</p>
          </div>
        ))}
    </BasicCarousel>
  );
}
