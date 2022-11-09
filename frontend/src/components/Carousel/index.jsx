import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../img/img1.jpg'
import img2 from '../../img/img2.jpg'
import img3 from '../../img/img3.jpg'
import { Conteiner } from './styles';

const CarouselImg = () => {
  return (
    <Conteiner>
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    </Conteiner>
  );
}

export default CarouselImg;