import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getTrends } from '../../store/trends/trendsSlice';
import { Container, Content } from '../styled';
import Typography from '@mui/material/Typography'
import { Box, Button } from '@mui/material';
import MyPaper from '../../components/Contentss/Paper';
import { useNavigate } from 'react-router-dom';
import { setId } from '../../store/trendID/trendIDSlice';

// FIXO NO CODE ---
import { post_images } from '../../imgs/data';

const ContentPage: React.FC = () => {
  const dispacth = useAppDispatch()
  const navigate = useNavigate();
  const data  = useAppSelector((state) => state.trends.data);
  //const [url, setUrl] = useState(JSON.parse(localStorage.getItem('route') || ''));
  
  useEffect(() => {
    document.title = 'Conteúdos | Refresher';
    localStorage.setItem('route', JSON.stringify(''));
  }, []);

  useEffect(() => {
    if(!data) {
      dispacth(getTrends())
    }
  }, [data, dispacth])

 const handleViewMore = () => {
    navigate('/tendencies');
 };

 const handlePaper = (id: number) => {
    localStorage.setItem('id', JSON.stringify(id));
    dispacth(setId(id));
    navigate("/tendencies/name-content");      
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
          {data && data.map((item: any, index: number) => (
            <MyPaper key={item.id} 
                  cardClick={() => 
                  handlePaper(item.id)}  
                  title={item.post_title} 
                  background={post_images[index]}/>
          ))}
        </Box>
      </Content>
    </Container> 
  )
  };
  
export default ContentPage;