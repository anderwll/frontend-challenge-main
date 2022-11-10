import React from 'react';
import ContentTextImg from '../components/ContentTextImg';
import { Container, Content } from './styles';
import ShareButton from '../components/ShareButton';
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import ComentInput from '../components/ComentInput';

const Conteudos = () => {
    let title1 = 'ZENNIALS - SÉRIE: DESIGN CONECTADO COM O FUTURO 3/6';
    let text1 = `A digitalização transformou o mundo e, como resultado, os consumidores estão crescendo mais rápido, 
    levando as marcas a repensar como segmentam os consumidores e como se comunicam. Os dados demográficos tradicionalmente 
    definem grupos de pessoas em um período de 15 anos através de atitudes e comportamentos semelhantes. Mas, em um período de tecnologia 
    e inovação rápida, períodos de 15 anos podem não ser mais adequados quando se resume a uma rotulagem precisa. Dessa forma, as 
    microgerações oferecem às marcas a capacidade para entender melhor as atitudes do consumidor, o que pode transformar a forma como 
    as marcas comercializam seus produtos.`;

    let title2 = 'RECAPITULANDO A HISTÓRIA';
    let text2 = `Os Millennials e a Geração Z costumam ser agrupados, apesar de serem dois cortes definidos por suas próprias perspectivas 
    culturais únicas e hábitos tecnológicos. Embora ambos os grupos sejam socialmente experientes, eles têm seus próprios relacionamentos com 
    plataformas e foram criados por membros de diferentes gerações (os Boomers criaram a Geração Y, enquanto a Geração X criou a Geração Z), 
    o que teve um impacto em moldar sua visão da vida`

    return (
      <Container>
        <ContentTextImg Title={title1} Text={text1} Img={img1} />
        <ContentTextImg SubTitle={title2} Text={text2} Img={img2}/>
        <Content>
          <ShareButton/>
          <ComentInput/>
        </Content>
      </Container>
      )
  };
  
  export default Conteudos;