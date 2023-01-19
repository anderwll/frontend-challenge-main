import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Content, DivImage } from './styled';
import { Carousel } from 'react-bootstrap';

interface PostCarrouselProps {
    listImages: Array<string>
}

const PostCarrousel: React.FC<PostCarrouselProps> = ({ listImages }) => {
    return (
        <Content>
             <Carousel >
                    {listImages.map((item: string, index: number) => (
                        <Carousel.Item key={index}>
                            <DivImage >
                                <img
                                    src={item}
                                    alt={item}
                                />
                            </DivImage>
                        </Carousel.Item>
                    ))};
            </Carousel>
        </Content>
    );
};

export default PostCarrousel;