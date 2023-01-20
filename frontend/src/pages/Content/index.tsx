import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getAllTendencies } from '../../store/trends/trendsSlice';
import { Container, Content } from '../styled';
import Typography from '@mui/material/Typography'
import { Box, Button } from '@mui/material';
import MyPaper from '../../components/Contentss/Paper';
import { useNavigate } from 'react-router-dom';
import { setTrendId } from '../../store/trendID/trendIDSlice';
import { setIdSelected } from '../../store/idTrendSelected/idTrendSelectedSlice';

const ContentPage: React.FC = () => {
  const dispacth = useAppDispatch()
  const navigate = useNavigate();
  const trendsRedux = useAppSelector(getAllTendencies)
  
  useEffect(() => {
    document.title = 'Conteúdos | Refresher';
  }, []);

 const handleViewMore = () => {
    navigate('/tendencies');
 };

 const handlePaper = (id: number) => {
    dispacth(setIdSelected(`${id}`));

    localStorage.setItem('id', `${id}`);
    
    const trendFounded = trendsRedux.find((value) => value.id === id)

    if(trendFounded) {
      dispacth(setTrendId(trendFounded))

      navigate(`/tendencie/${trendFounded.post_name}`); 
    }      
 };

  return (
    <Container>
      <Content>
        <Box sx={{display: 'flex'}}>
          <Typography variant="h6" color="#000">Tendências recentes</Typography>
          <Button variant="text" color="inherit" sx={{ml: 1}} onClick={handleViewMore}>
            Ver mais
          </Button>
        </Box>

        <Box sx={{display: 'flex', height: '17.5rem', width: '100%', p: '1rem 0.2rem', overflowY: 'auto'}}>
          {trendsRedux && trendsRedux.map((item: any) => (
            <MyPaper key={item.id} 
                  cardClick={() =>  handlePaper(item.id)}  
                  title={item.post_title} 
                  background={item.post_images[0]}/>
          ))}
        </Box>
      </Content>
    </Container> 
  )
  };
  
export default ContentPage;