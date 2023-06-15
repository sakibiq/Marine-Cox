import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/slide1.jpg';
import img2 from '../../assets/slide2.jpg';
import img3 from '../../assets/slide3.jpg';
import img4 from '../../assets/slide4.jpg';

const Banner = () => {
  return (
    <Carousel className='-mt-20 max-h-screen  mb-20 '>
      <div>
        <img src={img1} />
      </div>
      <div>
        <img src={img2} />
      </div>
      <div>
        <img src={img3} />
      </div>
      <div>
        <img src={img4} />
      </div>
    </Carousel>
  );
};

export default Banner;
