import React, { useEffect } from 'react';
import { Container } from '../styled';
import { Grid, useMediaQuery } from '@mui/material';
import MyCard from '../../components/Contentss/Tendenciess/Card';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setId } from '../../store/trendID/trendIDSlice';
import { getTrends } from '../../store/trends/trendsSlice';
import { useNavigate } from 'react-router-dom';

// FIXO NO CODE (VER PÁGINA TENDENCIES CONTENT) ---
import { post_images } from '../../imgs/data';

const TendenciesPage = () => {
    const dispacth = useAppDispatch();
    const navigate = useNavigate();
    const matches = useMediaQuery('(max-width:600px)');
    const data = useAppSelector((state) => state.trends.data);

    useEffect(() => {
        document.title = 'Tendências | Refresher';
      }, []);
    
    useEffect(() => {
        if(!data) {
          dispacth(getTrends())
        }
      }, [data, dispacth])

    const handleCard = (id: number) => {
        dispacth(setId(id));
        localStorage.setItem('id', JSON.stringify(id));
        navigate(`/tendencies/name-content`);
    };

    return (
        <Container>
            <Grid container spacing={1} sx={{width: 'calc(100vw - 4rem)', height: '100%', display: 'flex', flexDirection: 'row', p: matches ? '2rem 0' : '2rem', justifyContent: 'start', alignItems: 'start'}}>
             
                {data && data.map((item: any, index: number) => (
                    <Grid item xs={12} sm={12} md={6} lg={3} key={index}>
                        <MyCard  title={item.post_title} imgUrl={post_images[index]} cardClick={() => handleCard(item.id)}/>
                    </Grid>
                ))}

            </Grid>
        </Container>
      )
  };
  
  export default TendenciesPage;