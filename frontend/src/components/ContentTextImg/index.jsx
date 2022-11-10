import React from 'react';

import { Container } from './styles';

const ContentTextImg = ({Title, SubTitle, Text, Img}) => {
  return (
    <Container>
      <h1>{Title}</h1>
      <h2>{SubTitle}</h2>
      <p>{Text}</p>
      <p>{Text}</p>
      <p>{Text}</p>
      <img src={Img} alt='Img'></img>
    </Container>
  )
  };
  
  export default ContentTextImg;